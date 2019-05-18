import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import { Banner } from '../components/common/banner';
import { Container } from '../components/common/container';
import { H2, Strong, CenteredP, A } from '../components/common/elements';

import Layout from "../layouts/en";

const StoryPage = (props) => (
<Layout location={props.location}>
    <Banner src="story" title="story"></Banner>
    <Container>
            <StaticQuery
                query={graphql`
                                    query {
                                        square1: file(relativePath: { eq: "square-1.jpg" }) {
                                            childImageSharp {
                                                fluid(maxWidth: 800) {
                                                ...GatsbyImageSharpFluid
                                                }
                                            }
                                        }
                                        square2: file(relativePath: { eq: "square-2.jpg" }) {
                                            childImageSharp {
                                                fluid(maxWidth: 800) {
                                                ...GatsbyImageSharpFluid
                                                }
                                            }
                                        }
                                        square3: file(relativePath: { eq: "square-3.jpg" }) {
                                            childImageSharp {
                                                fluid(maxWidth: 800) {
                                                ...GatsbyImageSharpFluid
                                                }
                                            }
                                        }
                                        evolution: file(relativePath: { eq: "evolution-game.jpg" }) {
                                            childImageSharp {
                                                fluid(maxWidth: 600) {
                                                ...GatsbyImageSharpFluid
                                                }
                                            }
                                        }
                                        paperCards: file(relativePath: { eq: "legacy-cards.jpg" }) {
                                            childImageSharp {
                                                fluid(maxWidth: 600) {
                                                ...GatsbyImageSharpFluid
                                                }
                                            }
                                        }
                                    }
                            `}
                    render={data => <>
                            <Grid>
                                <Row>
                                    <Col lg={12}>
                                    <H2>Early Days</H2>
                                        <CenteredP>
                                            The ambitious idea of creating something (Indie Games Mexico) was conceived in december 2015 by Esther Lozano, Juan Ibarra and Miguel Velez
                                            who share a background in computer science and a passion for video games. 
                                            It all started as a desire to have an enthusiastic community and space in the region for video game development where people can share ideas, participate in projects and learn from each other. 
                                        </CenteredP>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <CenteredP>
                                            The founders started to work on a game themselves to put their names outhere and people started to notice and gain interest in the project.
                                            The game <strong>Field Rivals</strong> which is now the company's flagship, received positive feedback among the community and events such as <A href="http://west.paxsite.com/" target="_blank">PaxWest</A> in Seattle WA and <A href="http://gamacon.mx/" target="_blank">Gamacon</A> in Tijuana B.C. As a result the company decided to formalize Indie Games Mexico.
                                        </CenteredP>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12} lg={6}>
                                            <CenteredP>
                                                <Strong>This is how it all started</Strong>
                                            </CenteredP>
                                            <Img fluid={data.paperCards.childImageSharp.fluid} />
                                    </Col>
                                    <Col xs={12} md={12} lg={6}>
                                        <CenteredP>
                                            <Strong>And it evolved to</Strong>
                                        </CenteredP>
                                        <Img fluid={data.evolution.childImageSharp.fluid} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <CenteredP>
                                            As we started to make a name for ourselves, people from different backgrounds like artists, musicians and programmers  decided to join forces with Indie Games Mexico.
                                        </CenteredP>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4} xs={12}>
                                        <CenteredP>
                                            <Strong>Won Prize</Strong>
                                        </CenteredP>
                                        <Img fluid={data.square1.childImageSharp.fluid} />
                                    </Col>
                                    <Col lg={4} xs={12}>
                                        <CenteredP>
                                            <Strong>Acknowledgement to our effort</Strong>
                                        </CenteredP>
                                        <Img fluid={data.square2.childImageSharp.fluid} />
                                    </Col>
                                    <Col lg={4} xs={12}>
                                        <CenteredP>
                                            <Strong>Community</Strong>
                                        </CenteredP>
                                        <Img fluid={data.square3.childImageSharp.fluid} />
                                    </Col>
                                </Row>
                                <Row><Col lg={12}>&nbsp;</Col></Row>
                                <Row>
                                    <Col lg={12}>
                                        <H2>Future</H2>
                                        <CenteredP>
                                            A great effort is being done to release our first video game Field Rivals while also promoting video game development in our region.
                                        </CenteredP>
                                    </Col>
                                </Row>
                            </Grid>
                    </>}
                />    
    </Container>
</Layout>
);

export default StoryPage;
