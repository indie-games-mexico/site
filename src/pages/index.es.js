import React from "react";
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import Layout from "../layouts/es";
import Hero from '../components/common/hero';
import { Panel } from '../components/common/panel';
import { Container } from '../components/common/container';
import { H2, P, JustifiedP, A } from '../components/common/elements';

const MainPanel = styled.div`
  transform: translateY(-100px);
`;
const CenteredParagraph = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const IndexPage = (props) => (
  <Layout location={ props.location }>
      <Hero/>
      <Container>
        <MainPanel>
          <Panel>
            <H2>Comunidad de desarrolladores de juegos</H2>
            <CenteredParagraph>
              <P>
                Somos una comunidad de rápido crecimiento de personas y empresas con diversos antecedentes interesados ​​en el desarrollo de videojuegos. Damos la bienvenida a personas de todas las habilidades, como la programación, la música, el dibujo, la escritura, la interpretación por voz y más.
              </P>
            </CenteredParagraph>
            <H2>Proyecto Actual</H2>
            <Grid>
              <Row>
                <Col lg={6} md={12}>
                  <H2>Rivales de Cancha</H2>
                  <JustifiedP>
                    Estamos trabajando en nuestro primer juego llamado Rivales de Cancha (Field Rivals). Es un juego de fútbol basado en cartas con ambientes interactivos.
                    Cada carta tiene un efecto diferente según el personaje que la use y el estado actual del juego.
                    El objetivo sigue siendo anotar goles pero mediante el uso de una estrategia inteligente.
                  </JustifiedP>
                  <JustifiedP>
                    Aquí está el tráiler que mostramos en <A href="http://west.paxsite.com/" target="blank">PAX West Seattle</A> 2018 en el panel Latinx in Games, ¡disfrútelo!
                  </JustifiedP>
                </Col>
                <Col lg={6} md={12}>
                  <H2>Trailer Rivales de Cancha </H2>
                  <iframe title="Field Rivals" width="100%" height="350" src="https://www.youtube.com/embed/vNMBo1LpADg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Col>
              </Row>
              <Row>
                  <Col lg={6} md={12}>
                  <H2>Personajes del juego</H2>
                  <StaticQuery
                    query={graphql`
                      query {
                        placeholderImage: file(relativePath: { eq: "team-a.png" }) {
                          childImageSharp {
                            fluid(maxWidth: 300) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    `}
                    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
                  />
                  </Col>
                  <Col lg={6} md={12}>
                      <H2>Elige tu favorito</H2>
                      <JustifiedP>
                        Cada personaje tiene su propio estilo de juego y el rendimiento general está determinado por las habilidades y las cartas que posee el jugador.
                        Por ejemplo, si un equipo o un jugador es agresivo, puede jugar mejor teniendo cartas de "disparo ofensivo" en lugar de "defensa de escudo".
                      </JustifiedP>
                      <JustifiedP>
                        Además, cada equipo tiene sus propios uniformes, colores, escenario, tema musical y diferentes personalidades. Haz click <A href="#">aqui</A> para saber más
                      </JustifiedP>

                  </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <H2>¿Interesado?</H2>
                  <CenteredParagraph>
                  <P>
                    ¡Somos <b>Indie Games México!</b> Una empresa comprometida a crear juegos asombrosos y reunir personas con talento para trabajar en proyectos interesantes ayudando al crecimiento profesional de cada individuo.
                  </P>
                  <P>
                    ¿Interesado en unirse a esta increíble comunidad? <A href="mailto:info@indiegamesmexico.com">Contactanos.</A>
                  </P>
                  </CenteredParagraph>
                </Col>
              </Row>
            </Grid>
          </Panel>
        </MainPanel>
      </Container>
  </Layout>
);

export default IndexPage
