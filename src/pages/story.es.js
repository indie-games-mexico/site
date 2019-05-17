import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import { Panel } from '../components/common/panel';
import { Container } from '../components/common/container';
import { H1, H2, Strong, CenteredP, A } from '../components/common/elements';

import Layout from "../layouts/en";

const StoryPage = (props) => (
<Layout location={props.location}>
    <Container>
        <Panel>
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
                        <H1>Story</H1>
                            <Grid>
                                <Row>
                                    <Col lg={12}>
                                        <CenteredP>
                                        La ambiciosa idea de crear algo (Indie Games México) fue concebida en diciembre de 2015 por Esther Lozano, Juan Ibarra y Miguel, quienes comparten una formación en informática y una pasión por los videojuegos. Todo comenzó como un deseo de tener una comunidad y espacio entusiastas en la región para el desarrollo de videojuegos donde las personas puedan compartir ideas, participar en proyectos y aprender unos de otros.
                                        </CenteredP>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <CenteredP>
                                            Los fundadores empezaron a trabajar en un juego ellos mismos para poner sus nombres y la gente comenzó a darse cuenta y ganar interés en el proyecto. 
                                            El juego Field Rivals, que ahora es el buque insignia de la compañía, recibió comentarios positivos entre la comunidad y eventos como <A href="http://west.paxsite.com/" target="_blank">PaxWest</A> en Seattle WA y <A href="http://gamacon.mx/" target="_blank">Gamacon</A> en Tijuana B.C. Como resultado, la empresa decidió formalizar Indie Games México.
                                        </CenteredP>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12} lg={6}>
                                            <CenteredP>
                                                <Strong>Así es como todo comenzó</Strong>
                                            </CenteredP>
                                            <Img fluid={data.paperCards.childImageSharp.fluid} />
                                    </Col>
                                    <Col xs={12} md={12} lg={6}>
                                        <CenteredP>
                                            <Strong>La evolución</Strong>
                                        </CenteredP>
                                        <Img fluid={data.evolution.childImageSharp.fluid} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <CenteredP>
                                        Cuando empezamos a hacer un nombre para nosotros mismos, personas de diferentes orígenes como artistas, músicos y programadores decidieron unir fuerzas con Indie Games México.
                                        </CenteredP>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4} xs={12}>
                                        <CenteredP>
                                            <Strong>Premio Ganado</Strong>
                                        </CenteredP>
                                        <Img fluid={data.square1.childImageSharp.fluid} />
                                    </Col>
                                    <Col lg={4} xs={12}>
                                        <CenteredP>
                                            <Strong>Reconocimiento al esfuerzo</Strong>
                                        </CenteredP>
                                        <Img fluid={data.square2.childImageSharp.fluid} />
                                    </Col>
                                    <Col lg={4} xs={12}>
                                        <CenteredP>
                                            <Strong>Comunidad</Strong>
                                        </CenteredP>
                                        <Img fluid={data.square3.childImageSharp.fluid} />
                                    </Col>
                                </Row>
                                <Row><Col lg={12}>&nbsp;</Col></Row>
                                <Row>
                                    <Col lg={12}>
                                        <H2>Futuro</H2>
                                        <CenteredP>
                                            Se está haciendo un gran esfuerzo para lanzar el primer videojuego Field Rivals y al mismo tiempo promover el desarrollo de videojuegos en nuestra región.
                                        </CenteredP>
                                    </Col>
                                </Row>
                            </Grid>
                    </>}
                />
        </Panel>
        
    </Container>
</Layout>
);

export default StoryPage;
