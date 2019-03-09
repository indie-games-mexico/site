import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/es";
import Hero from '../components/common/hero';

import { HighLightParagraph } from '../components/common/highlight-paragraph'
import { TwoColumnSummary } from '../components/common/two-column-summary';
import { JustiedParagraph } from '../components/common/justified-paragraph';

const IndexPage = (props) => (
  <Layout location={ props.location }>
    <Hero/>
    <HighLightParagraph text={` Somos un grupo de profesionales que trabajan en nuevas ideas para crear una gran
                                conexión con todas las personas interesadas en el desarrollo de juegos, desde programadores
                                hasta artistas, músicos, escritores y más. Así podemos crear más juegos en el futuro, juntos.`}>
    </HighLightParagraph>
    <TwoColumnSummary
      left={<JustiedParagraph>

        Estamos trabajando en nuestro primer juego Field Rivals, un juego de cartas intercambiables con una atmósfera de fútbol. La mecánica consiste en un "qué cartas vence a qué carta" y el objetivo es conseguir más goles que tu oponente.
        Aquí está el tráiler que mostramos en PAX West Seattle 2018 en el panel Latinx in Games, ¡disfrútelo!
        </JustiedParagraph>
      }
      right={
        <>
          <iframe title="Rivales de la cancha" width="100%" height="350" src="https://www.youtube.com/embed/vNMBo1LpADg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
      }
    >

    </TwoColumnSummary>
    <TwoColumnSummary
        left={
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
        }

        right={
          <JustiedParagraph>

            Cada personaje tiene su propio estilo de juego, que varía el juego de cartas y la estrategia es diferente. Por ejemplo: el equipo de Winter Wolves es más ofensivo, así que es más probable que obtenga muchas cartas de "lanzamiento", pero tienen algunas cartas defensivas.
            <br/>
              Además, cada equipo tiene sus propios uniformes, colores, escenario, tema musical y algunas personalidades diferentes.
            
            </JustiedParagraph>
        }
    >
    </TwoColumnSummary>
  </Layout>
)

export default IndexPage
