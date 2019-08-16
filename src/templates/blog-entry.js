// https://n8us2tsl.api.sanity.io/v1/graphql/production/default
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../components/common/container';
import { JustifiedP, H1, MainPanel } from '../components/common/elements';
import { Panel } from '../components/common/panel';
import Layout from '../layouts/en';
import PortableText from "@sanity/block-content-to-react"
import styled from 'styled-components';
import Img from "gatsby-image"

// left here figure out how to avoid to pass project id and dataset each time

const Banner = styled.div`
    width: 100%;
    display: block;
    text-align: center;
    background-color: #000;
`;

const BannerContainer = styled.div`
    max-width: 1024px;
    height: auto;
    margin: 0 auto;
`;

const BannerRender = ({fluid}) => {
    if (fluid) {
        return (
            <Img fluid={fluid} />
        )
    }
    // add some styles for padding
    return (<div style={{ width: '100%', height: 60 }}></div>);
}



const blogTest = (props) => {
    console.log(props)
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
                                        by { props.pageContext.author.name }
                                        
                                    </JustifiedP>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} style={{ textAlign:'left', fontFamily: 'Rajdhani, sans-serif' }}>
                                    <PortableText
                                        projectId="n8us2tsl"
                                        dataset="production"
                                        blocks={props.pageContext._rawBody }
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

export default blogTest;