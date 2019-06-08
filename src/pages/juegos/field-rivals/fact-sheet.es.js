import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image';
import { JustifiedP, A, H3, Ul, StrongBlock, BlockUl } from '../../../components/common/elements';
import { Banner } from '../../../components/common/banner';
import Layout from '../../../layouts/en';

const ResponsiveUL = styled(BlockUl)`
    @media(max-width: 992px) {
        text-align: center;
    }
`;



const FactSheet = (props) => (
    <Layout location={props.location}>
        <StaticQuery
            query={graphql`
                query {
                    card1: file(relativePath: { eq: "game-cards-1.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 800, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    card2: file(relativePath: { eq: "field-cards.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 800, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    card3: file(relativePath: { eq: "characters-1.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 800, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `}
      render={data => {
          console.log('Images', data);
          return (
            <>
                <Banner src="factsheet" title="Características"></Banner>
                <Grid>
                    <Row>
                        <Col lg={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <H3>Datos</H3>
                            <ResponsiveUL>
                                <li>
                                    <StrongBlock>
                                        Desarrollador
                                    </StrongBlock>
                                    Indie Games Mexico <br/>
                                    Basado en Mexico B.C
                                </li>
                                <li>
                                    <StrongBlock>
                                       Fecha de Lanzamiento
                                    </StrongBlock>
                                    Late 2019
                                </li>
                                <li>
                                    <StrongBlock>
                                        Plataformas
                                    </StrongBlock>
                                    PC
                                </li>
                                <li>
                                    <StrongBlock>
                                        Sitio Web
                                    </StrongBlock>
                                        <A href="https://indiegamesmexico.com">indiegamesmexico.com</A>
                                </li>
                                <li>
                                    <StrongBlock>
                                        Precio
                                    </StrongBlock>
                                    Por anunciar
                                </li>
                                <li>
                                    <StrongBlock>
                                    Capturas de pantalla
                                    </StrongBlock>
                                </li>
                                <li>
                                    <Img fluid={data.card1.childImageSharp.fluid} alt="Captura de pantalla"/>
                                </li>
                                <li>
                                    <Img fluid={data.card2.childImageSharp.fluid} alt="Captura de pantalla"/>
                                </li>
                                <li>
                                    <Img fluid={data.card3.childImageSharp.fluid} alt="Captura de pantalla"/>
                                </li>
                            </ResponsiveUL>
                        </Col>
                        <Col lg={9}>
                            <H3>Descripción</H3>
                            <JustifiedP>
                                Field Rivals es un videojuego de tarjetas con temáticas de futbol soccer en campos abiertos. El objetivo principal es, como el deporte, derrotar al contrincante teniendo más goles que éste creando tus propias estrategias. 
                            </JustifiedP>
                            <H3>Historia</H3>
                            <JustifiedP>
                                Cada equipo cuenta con una historia, por lo que al final para lograr el trofeo de campeonato deberás enfrentarte a tu rival antagonista.
                            </JustifiedP>
                            <H3>Características</H3>
                            <Ul>
                                <li>
                                    <JustifiedP>
                                        El juego se basa principalmente con 7 tarjetas: Shoot, Defend, Pass, Counter, Goalkeeper, Stand y Super Shoot. Todos éstos tienen ventajas y desventajas entre sí. Cada movimiento entre dos tarjetas rivales (una jugada) puede terminar con un resultado diferente, ya sea anotar un gol, detener un gol, bloquear una jugada, entre otros.
                                    </JustifiedP>
                                </li>
                                <li>
                                    <JustifiedP>
                                        Se cuenta con tarjetas tácticas, éstos se pueden usar antes o después de una jugada para agregar un resultado secundario e intentar tener la ventaja sobre tu rival.
                                    </JustifiedP>
                                </li>
                                <li>
                                    <JustifiedP>
                                        Cada equipo cuenta con características diferentes, algunos pueden ser mas ofensivos, otros pueden ser defensivos.
                                    </JustifiedP>
                                </li>
                                <li>
                                    <JustifiedP>
                                        Todos los equipos cuentan con un capitán, los cuales tienen características distintas, y cada uno tiene su propio rival antagónico.
                                    </JustifiedP>
                                </li>
                            </Ul>
                            <H3>Premios & Reconocimientos</H3>
                            <Ul>
                                <li>
                                "Mejor Juego" - GAMACON, Mayo, 2018
                                </li>
                                <li>
                                Presentación  del Trailer en el panel Latinx en PAX West Seattle Washigton 
                                </li>
                            </Ul>
                        </Col>
                    </Row>
                </Grid>
            </>)
         }
      }
    />
    </Layout>
)

export default FactSheet;