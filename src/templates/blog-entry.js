import React from 'react';
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
    <Layout location={props.location}>
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
                                        projectId="n8us2tsl"
                                        dataset="production"
                                        blocks={ props.pageContext._rawBody }
                                        />
                                </Col>
                            </Row>
                        </Grid>
                    </article>
                </Panel>
            </MainPanel>
        </Container>
    </Layout>
);
    }

export default PostPage;