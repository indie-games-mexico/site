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
    const result = await graphql(`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allSanityPost(skip: $skip, limit: $limit, sort: { fields:[_createdAt], order: DESC }) {
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

    /*
        left here, implement pagination following this tutorial
        https://nickymeuleman.netlify.com/blog/gatsby-pagination
    */
    const path = `blog-list/en/example`;
        createPage({
            path,
            component: require.resolve('./src/templates/blog-list.js'),
            context:{ ok: true }
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

/*
    Sanity posts query
    query blogListQuery($skip: Int!, $limit: Int!) {
    allSanityPost(skip: $skip, limit: $limit, sort: { fields:[_createdAt], order: DESC }) {
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