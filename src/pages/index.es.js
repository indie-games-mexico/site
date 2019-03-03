import React from "react"
import Layout from "../layouts/es";
import Hero from '../components/common/hero';
import { HighLightParagraph } from '../components/common/highlight-paragraph'

const IndexPage = (props) => (
  <Layout location={ props.location }>
  <Hero/>
  <HighLightParagraph text={` Somos un grupo de profesionales que trabajan en nuevas ideas para crear una gran
                              conexión con todas las personas interesadas en el desarrollo de juegos, desde programadores
                              hasta artistas, músicos, escritores y más. Así podemos crear más juegos en el futuro, juntos.`}>
  </HighLightParagraph>
  </Layout>
)

export default IndexPage
