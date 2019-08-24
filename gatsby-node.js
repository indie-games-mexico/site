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
    pages.forEach(page => {
        const path = `blog/${page.locale.code}/${page.slug}`;
        createPage({
            path,
            component: require.resolve('./src/templates/blog-entry.js'),
            context:{ ...page }
        });
    });
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
    supportedLocales.forEach((locale, i) => {
        // left here the index is incorrect.
        const numPages = Math.ceil(locale.total / postsPerPage);
        const path = i === 0 ? `blog/${locale.code}/index` : `blog/${locale.code}/index/${i + 1}`;
        
        createPage({
          path,
          component: require.resolve("./src/templates/blog-list.js"),
          context: {  
              limit: postsPerPage,      
              skip: i * postsPerPage,      
              numPages,      
              currentPage: i + 1    
            }  
        });
      });
    
    /*
    const totalPosts = await graphql(`
        query {
            allSanityPost
                    (
                filter: { 
                    locale: { 
                    code: {
                            eq: "en"
                        } 
                    } 
                }
                ) 
            {
            totalCount
            }
        }
    `);
    





    const result = await graphql(`
    query blogListQuery {
        allSanityPost(sort: { fields:[_createdAt], order: DESC }) {
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
    `);

    const postsPerPage = 2;
    const enPosts = (result.data.allSanityPost.nodes || []).filter(page => page.locale.code === 'en');
    const esPosts = (result.data.allSanityPost.nodes || []).filter(page => page.locale.code === 'es');

    const totalEnPages = Math.ceil(enPosts.length / postsPerPage);
    const totalEsPages = Math.ceil(esPosts.length / postsPerPage);

    console.log('splitted arrays');
    for(let p = 0; p < totalEnPages; p++) {
        const posts = enPosts.slice(p * postsPerPage, postsPerPage);
        const path = `blog/en/index${p === 0? '' : `/${p+1}`}`;
        console.log('Created page', path);
        createPage({
            path,
            component: require.resolve('./src/templates/blog-list.js'),
            context: { posts }
        })
    }*/

    /*
        left here, implement pagination following this tutorial
        https://nickymeuleman.netlify.com/blog/gatsby-pagination
    */
   /* const path = `blog-list/en/example`;
        createPage({
            path,
            component: require.resolve('./src/templates/blog-list.js'),
            context:{ ok: true }
        });*/
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

/*
    query blogListQuery($skip: Int!, $limit: Int!) {
  allSanityPost
  		(
        skip: $skip, 
        limit: $limit, 
        sort: {fields: [_createdAt], order: DESC}
        filter: { 
          locale: { 
            code: {
          		eq: "en"
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


*/