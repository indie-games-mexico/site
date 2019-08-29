import React from 'react';
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../components/common/container';
import { JustifiedP, H1, MainPanel, Strong } from '../components/common/elements';
import { Panel } from '../components/common/panel';
import PortableText from "@sanity/block-content-to-react";
import Img from "gatsby-image"

import { locale, formatedDate } from './localized-settings';

const BannerRender = ({fluid}) => {
    if (fluid) {
        return (
            <Img fluid={fluid} />
        )
    }
    // add some styles for padding
    return (<div style={{ width: '100%', height: 60 }}></div>);
}


const PostPage = (props) => {
    const Layout = locale[props.pageContext.locale.code].layout
    return (
        <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                projectId
                dataset
              }
            }
          }
        `}
        render={data => {
            return (
            <Layout location={props.location}>
                <Helmet
                    title={ `Indie Games Mexico - ${props.pageContext.title}` }
                    meta={[
                        { name: 'description', content: props.pageContext.title },
                        { name: 'robots', content: 'index,follow' },
                        { name: 'keywords', content: props.pageContext.keywords }
                    ]}
                />
            <BannerRender fluid={((props.pageContext.mainImage || {}).asset || {}).fluid}></BannerRender>
        <Container>
           <MainPanel>
               <Panel>
                <article>
                        <Grid>
                            <Row>
                                <Col lg={12}>
                                    <H1>{ props.pageContext.title }</H1>
                                    <JustifiedP>
                                       <Strong>{ locale[props.pageContext.locale.code].messages.by }</Strong> { props.pageContext.author.name }
                                    </JustifiedP>
                                    <JustifiedP>
                                        <Strong>{ locale[props.pageContext.locale.code].messages.published }</Strong> { formatedDate(props.pageContext.publishedAt, props.pageContext.locale.code) }
                                    </JustifiedP>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} style={{ textAlign:'left', fontFamily: 'Rajdhani, sans-serif' }}>
                                    <PortableText
                                        projectId={data.site.siteMetadata.projectId}
                                        dataset={data.site.siteMetadata.dataset}
                                        blocks={ props.pageContext._rawBody }
                                        />
                                </Col>
                            </Row>
                        </Grid>
                    </article>
                </Panel>
            </MainPanel>
        </Container>
    </Layout>)

        }}>
      </StaticQuery>
);
    }

export default PostPage;