import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import { Banner } from '../components/common/banner';
import { Container } from '../components/common/container';
import { H2, A, JustifiedP, ImageWrapper } from '../components/common/elements';

import Layout from "../layouts/en";

const GamesPage = (props) => (
    <Layout location={props.location}>
        <Banner src="games" title="Games"></Banner>
        <StaticQuery
                        query={graphql`
                        query {
                            fieldrivals: file(relativePath: { eq: "field-rivals.jpg" }) {
                            childImageSharp {
                                fluid(maxWidth: 500, quality: 100) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                            }
                        }
                    `}
                    render={data => (
                        <Container>
                            <Grid>
                                <Row>
                                    <Col lg={8}>
                                       <H2 style={{ textAlign: 'left', marginTop: '15px' }}>Field Rivals</H2>
                                        <JustifiedP>
                                            Strategic card based Soccer Game with interactive maps and characters. The game introduces an innovative gaming experience by giving each team and characters different sets of skills based on stage and current playing cards. Each team has their own stage, music and personality.   
                                        </JustifiedP>
                                        <ul>
                                            <li>
                                                <A href="field-rivals" style={{ float: 'left' }}>Find out more</A>
                                            </li>
                                            <li>
                                                <A href="field-rivals/fact-sheet" style={{ float: 'left' }}>Presskit</A>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col lg={4}>
                                        <a href="field-rivals">
                                            <ImageWrapper>
                                                <Img fluid={data.fieldrivals.childImageSharp.fluid} />
                                            </ImageWrapper>
                                        </a>
                                    </Col>
                                </Row>
                            </Grid>
                        </Container>
                    )}
                  />       
        
    </Layout>
)

export default GamesPage;