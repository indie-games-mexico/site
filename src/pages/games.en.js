import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import { Banner } from '../components/common/banner';
import { Container } from '../components/common/container';
import { H2, Strong, CenteredP, A, JustifiedP } from '../components/common/elements';

import Layout from "../layouts/en";

const GamesPage = (props) => (
    <Layout location={props.location}>
        <Banner src="games" title="Games"></Banner>
        <StaticQuery
                        query={graphql`
                        query {
                            fieldrivals: file(relativePath: { eq: "field-rivals.jpg" }) {
                            childImageSharp {
                                fluid(maxWidth: 500) {
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
                                    <Col lg={4}>
                                        <a href="#">
                                            <Img fluid={data.fieldrivals.childImageSharp.fluid} />
                                        </a>
                                    </Col>
                                    <Col lg={8}>
                                       <H2 style={{ textAlign: 'left' }}>Field Rivals</H2>
                                        <JustifiedP>
                                        Strategic card based Soccer Game with interactive maps and characters 
                                        </JustifiedP>
                                        <A href="#">More Info</A>
                                    </Col>
                                </Row>
                            </Grid>
                        </Container>
                    )}
                  />       
        
    </Layout>
)

export default GamesPage;