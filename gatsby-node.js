exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
            {
                allSanityPost {
                totalCount
                nodes {
                    title
                    slug
                    locale {
                        name
                        code
                    }
                    mainImage {
                        asset {
                            url
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