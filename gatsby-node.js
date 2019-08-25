const localeKeys = require('./src/data/languages');
const createPostPages = async (graphql, actions) => {
    const { createPage } = actions;

    const result = await graphql(`
            {
                allSanityPost {
                totalCount
                nodes {
                    title
                    slug
                    publishedAt
                    locale {
                        name
                        code
                    }
                    mainImage {
                        asset {
                            fluid(maxWidth: 1024) {
                                base64
                                aspectRatio
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                                sizes
                              }
                        }
                    }
                    author {
                        name
                    }
                    _rawBody
                    
                }
                }
            }
    `);

    if (result.errors) {
        throw result.errors
    }

    const pages = result.data.allSanityPost.nodes || [];
    const template = require.resolve('./src/templates/blog-entry.js');
    pages.forEach(page => {
        // can probably memoize to make it faster.
        const urlProps = localeKeys.langs.find(l => l.locale === page.locale.code);
        const path = `${page.locale.code}/${urlProps.dynamicUrl.url}/${page.slug}`;
        createPage({
            path,
            component: template,
            context: { 
                ...page 
            }
        });
    });
}

const queryPostsListPerPage = async (graphql, skip, limit, locale) => {
    const result = await graphql(`
    query blogListQuery($skip: Int!, $limit: Int!, $locale: String!) {
        allSanityPost
                (
              skip: $skip, 
              limit: $limit, 
              sort: {fields: [_createdAt], order: DESC}
              filter: { 
                locale: { 
                  code: {
                        eq: $locale
                  } 
                } 
              }
            ) 
        {
          totalCount
          nodes {
            locale {
              name
              code
            }
            title
            slug
            publishedAt
            author {
              name
            }
          }
        }
      }
    `, { skip, limit, locale });

    return result;
}

const createBlogList = async(graphql, actions) => {
    const { createPage } = actions;
    let locales = await graphql(`
        query {
            allSanityLocale
            {
                totalCount
                nodes {
                    code
                }
            }
        }
    `);

    locales = locales.data.allSanityLocale.nodes; 

    const supportedLocales = [];
    for(let locale of locales) {
        let result = await graphql(`
                query {
                    allSanityPost
                            (
                        filter: { 
                            locale: { 
                            code: {
                                    eq: "${locale.code}"
                                } 
                            } 
                        }
                        ) 
                    {
                    totalCount
                    }
                }
            `);
        supportedLocales.push({
            code: locale.code,
            total: result.data.allSanityPost.totalCount
        })
    }

    const postsPerPage = 2;
    supportedLocales.forEach(async (locale) => {
        // left here the index is incorrect.
        const { total, code } = locale;
        const urlProps = localeKeys.langs.find(l => l.locale === code);
        const totalPages = Math.ceil(total / postsPerPage);
        const path = `${code}/${urlProps.dynamicUrl.url}/`;

        for (let pageNum = 0; pageNum < totalPages; pageNum++) {
            const skip = pageNum * postsPerPage;
            const blogEntries = await queryPostsListPerPage(graphql, skip, postsPerPage, code);
            createPage({
                path: `${path}${pageNum+1}`,
                component: require.resolve('./src/templates/blog-list.js'),
                context: { 
                    blogEntries: blogEntries.data.allSanityPost.nodes,
                    locale: {
                        code: urlProps.locale,
                        title: urlProps.dynamicUrl.title
                    },
                    currentPage: pageNum+1,
                    numPages: totalPages,
                    url: `${path}`
                }
            });
        }
      });
    
   
}

exports.createPages = async ({ graphql, actions }) => {
    await createPostPages(graphql, actions);
    await createBlogList(graphql, actions);
}


/*
    TODO: 
        - Make the graphql private and only connect using tokens and re generate id's 
          https://n8us2tsl.api.sanity.io/v1/graphql/production/default
        
*/

