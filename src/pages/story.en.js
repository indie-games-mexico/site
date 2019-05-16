import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import { Panel } from '../components/common/panel';
import { Container } from '../components/common/container';
import { H1, JustifiedP, CenteredP, A } from '../components/common/elements';

import Layout from "../layouts/en";

const StoryPage = (props) => (
<Layout location={props.location}>
    <Container>
        <Panel>
            <H1>Story</H1>
            <Grid>
                <Row>
                    <Col lg={12}>
                        <CenteredP>
                            The ambitious idea of creating something (Indie Games Mexico) was conceived in december 2015 by Esther Lozano, Juan Ibarra and Miguel 
                            who share a background in computer science and a passion for video games. 
                            It all started as a desire to have an enthusiastic community and space in the region for video game development where people can share ideas, participate in projects and learn from each other. 
                        </CenteredP>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <CenteredP>
                            The founders started to work on a game themselves to put their names outhere and people started to gain interest in the project and the community.
                            The game Field Rivals which is now the company's flagship, received positive feedback among the community and events such as <A href="http://west.paxsite.com/" target="_blank">PaxWest</A> in Seattle WA and <A href="http://gamacon.mx/" target="_blank">Gamacon</A> in Tijuana B.C. As a result the company decided to formalize Indie Games Mexico.
                        </CenteredP>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={6}>
                            <CenteredP>
                                <b>It all started like this</b>
                            </CenteredP>
                            <StaticQuery
                                query={graphql`
                                    query {
                                        placeholderImage: file(relativePath: { eq: "paper-cards.jpg" }) {
                                        childImageSharp {
                                            fluid(maxWidth: 600) {
                                            ...GatsbyImageSharpFluid
                                            }
                                        }
                                        }
                                    }
                            `}
                            render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
                        />
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <CenteredP>
                            <b>Evolved to</b>
                        </CenteredP>  
                        <StaticQuery
                                query={graphql`
                                    query {
                                        placeholderImage: file(relativePath: { eq: "evolution.png" }) {
                                        childImageSharp {
                                            fluid(maxWidth: 600) {
                                            ...GatsbyImageSharpFluid
                                            }
                                        }
                                        }
                                    }
                            `}
                            render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
                        />
                    </Col>
                </Row>
            </Grid>
        </Panel>
        
    </Container>
</Layout>
);

export default StoryPage;
