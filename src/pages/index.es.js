import React from "react"
import Layout from "../layouts/es";
import Hero from '../components/common/hero';
import { HighLightParagraph } from '../components/common/highlight-paragraph'
import { TwoColumnSummary } from '../components/common/two-column-summary';

const IndexPage = (props) => (
  <Layout location={ props.location }>
    <Hero/>
    <HighLightParagraph text={` Somos un grupo de profesionales que trabajan en nuevas ideas para crear una gran
                                conexión con todas las personas interesadas en el desarrollo de juegos, desde programadores
                                hasta artistas, músicos, escritores y más. Así podemos crear más juegos en el futuro, juntos.`}>
    </HighLightParagraph>
    <TwoColumnSummary
      left={<p
            style={
              {
                display:'inline-block',
                textAlign: 'justify'
              }
            }
        >

        Estamos trabajando en nuestro primer juego Field Rivals, un juego de cartas intercambiables con una atmósfera de fútbol. La mecánica consiste en un "qué cartas vence a qué carta" y el objetivo es conseguir más goles que tu oponente.
        Aquí está el tráiler que mostramos en PAX West Seattle 2018 en el panel Latinx in Games, ¡disfrútelo!
        </p>
      }
      right={
        <>
          <iframe title="Rivales de la cancha" width="100%" height="350" src="https://www.youtube.com/embed/vNMBo1LpADg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
      }
    >

    </TwoColumnSummary>
  </Layout>
)

export default IndexPage
