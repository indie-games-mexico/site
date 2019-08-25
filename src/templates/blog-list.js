import React from 'react';
import Helmet from 'react-helmet'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../components/common/container';
import { MainPanel, H2, A, JustifiedP, Strong, GLink } from '../components/common/elements';
import { Banner } from '../components/common/banner';
import { Panel } from '../components/common/panel';
//import Layout from '../layouts/en';

import { locale, formatedDate } from './localized-settings';

const newsRows = (blogEntries, localeCode) => 
    blogEntries.map(post => (
        <Row key={post.slug}>
            <Col lg={12}>
                <H2><A href={post.slug}>{ post.title }</A></H2>
                <JustifiedP>
                    <Strong>{ locale[localeCode].messages.by }</Strong> { post.author.name }, { formatedDate(post.publishedAt, post.locale.code) }
                </JustifiedP>
                <JustifiedP>
                    { post.summary }
                </JustifiedP>
                <div style={{ textAlign: 'right' }}>
                    <A href={post.slug}>{ locale[localeCode].messages.readmore }</A>
                </div>
                <hr/>
            </Col>
        </Row>
));


const PostList = (props) => {
    console.log('posts', props.pageContext.blogEntries);
    const blogEntries = newsRows(props.pageContext.blogEntries, props.pageContext.locale.code);
    
    const { currentPage, numPages, url } = props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString();
    const localeCode = props.pageContext.locale.code;
    const Layout = locale[localeCode].layout
    return (
        <Layout location={props.location}>
            <Helmet
              title={ `Indie Games Mexico - ${props.pageContext.locale.title}` }
              meta={[
                { name: 'description', content: props.pageContext.locale.title },
                { name: 'robots', content: 'noindex,follow' }
              ]}
            />
            <Banner src="news" title={props.pageContext.locale.title}></Banner>
            <Container>
                <MainPanel>
                    <Panel>
                        <div  style={{ textAlign: 'left' }}>
                            <Grid>
                                { blogEntries }
                            </Grid>
                        </div>
                        {!isFirst && (
                            <GLink to={ `${url}${prevPage}` } rel="prev">
                            ← { locale[localeCode].messages.prev }
                            </GLink>
                        )}
                        {!isLast && (
                            <GLink to={`${url}${nextPage}`} rel="next">
                            { locale[localeCode].messages.next } →
                            </GLink>
                        )}
                    </Panel>
                </MainPanel>
            </Container>
        </Layout>
    )
}

export default PostList;