import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Panel } from '../../components/common/panel';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../../components/common/container';
import { JustifiedP, CenteredP, MainPanel, H1, H2, H3, H4, A, ImageWrapper } from '../../components/common/elements';
import Layout from '../../layouts/es';


const FieldRivalsPage = (props) => (
    <Layout location={props.location}>
        <StaticQuery
            query={graphql`
                query {
                    fieldrivals: file(relativePath: { eq: "field-rivals-wide.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 2040) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    gamecards1: file(relativePath: { eq: "game-cards-1.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    gamecards2: file(relativePath: { eq: "game-cards-2.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    characters1: file(relativePath: { eq: "characters-1.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    characters2: file(relativePath: { eq: "characters-2.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    characters3: file(relativePath: { eq: "characters-3.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `}
      render={data => <>
            <Img fluid={data.fieldrivals.childImageSharp.fluid} />
            <Container>
                <MainPanel>
                    <Panel>
                        <H1>Field Rivals</H1>
                        <Grid>
                            <Row>
                                <Col lg={12}>
                                    <H3 style={{ textAlign: 'left' }}>Resumen</H3>
                                    <JustifiedP>
                                        Juego de fútbol basado en tarjetas estratégicas con mapas y personajes interactivos. El juego presenta una experiencia de juego innovadora al otorgar a cada equipo y personajes diferentes conjuntos de habilidades basadas en el escenario y las cartas actuales. Cada equipo tiene su propio escenario, música y personalidad.
                                        <br/> Vista las <A href="fact-sheet">Características (Fact Sheet)</A>
                                    </JustifiedP>
                                    <H3 style={{ textAlign: 'left' }}>Modo de Juego</H3>
                                    <JustifiedP>
                                        El juego consiste en una serie de rondas y cartas elegidas al azar o proporcionadas. Usando estas cartas, intentarás superar a tu oponente al combinarlas estratégicamente. Pensarías que para ganar siempre elegirás la carta más fuerte, pero cada carta tiene un efecto diferente en función del equipo, el escenario y el personaje. Así que para ganar realmente el juego, debes conocer las fortalezas y debilidades del equipo de tus oponentes y tener una buena estrategia basada en lo que sabes y la etapa en la que se desarrolla el juego.
                                    </JustifiedP>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                <iframe title="Field Rivals" width="100%" height="315" src="https://www.youtube.com/embed/EDKgR_Ncdhs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <H3>Tipos de tarjetas del juego</H3>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <H4>Tarjetas Primarias</H4>
                                    <JustifiedP>
                                        Este tipo de tarjetas también pueden ser referidas como tarjetas de acción. Indican la acción que intentas realizar sobre tu oponente. Algunos ejemplos son disparar para anotar, defender, cancelar el movimiento de tus oponentes y contraatacar.
                                    </JustifiedP>
                                </Col>
                                <Col lg={6}>
                                    <H4>Tarjetas Secundarias</H4>
                                    <JustifiedP>
                                        Estos son un conjunto de tarjetas adicionales que cambiarán el juego dramáticamente dependiendo de las habilidades del jugador para combinarlas con las cartas principales. Hay dos tipos de tarjetas; pre-juego y durante-juego llamadas BGC y DGC respectivamente por su abreviación en inglés before game card y during game card. 
                                    </JustifiedP>
                                    <JustifiedP>
                                        Los BGC se revelan una vez que comienza el partido, mientras que las cartas DGC pueden usarse a discreción de los jugadores y sorprender al oponente con un ataque inesperado.
                                    </JustifiedP>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} md={6} xs={12}>
                                    <ImageWrapper>
                                        <Img fluid={data.gamecards1.childImageSharp.fluid} alt="Game cards" />
                                    </ImageWrapper>
                                </Col>
                                <Col lg={6} md={6} xs={12}>
                                    <Img fluid={data.gamecards2.childImageSharp.fluid} alt="Game cards" />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>&nbsp;</Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <H2>Personajes y Equipos</H2>
                                    <JustifiedP>
                                        Para hacer el juego más dinámico, decidimos incluir 8 equipos con personajes de habilidades diferentes y cada uno tiene su propia personalidad. Estas características influyen en el efecto de las tarjetas utilizadas por el jugador. Cada equipo tiene su propio capitán, logotipo, escenario y música.
                                    </JustifiedP>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} md={4}>
                                    <ImageWrapper>
                                        <Img fluid={data.characters1.childImageSharp.fluid} alt="Game Character Selection" />
                                    </ImageWrapper>
                                </Col>
                                <Col lg={4} md={4}>
                                    <ImageWrapper>
                                        <Img fluid={data.characters2.childImageSharp.fluid} alt="Game Character Selection" />
                                    </ImageWrapper>
                                </Col>
                                <Col lg={4} md={4}>
                                    <Img fluid={data.characters3.childImageSharp.fluid} alt="Game Sample Characters" />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>&nbsp;</Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <H3>Hay mucho mas</H3>
                                    <CenteredP>
                                        Visitanos con frecuencia para conocer lo último en el desarrollo del juego y no olvides seguirnos en las redes sociales.
                                    </CenteredP>
                                </Col>
                            </Row>
                        </Grid>
                    </Panel>
                </MainPanel>
            </Container>
        </>
        }
    />
    </Layout>
)

export default FieldRivalsPage