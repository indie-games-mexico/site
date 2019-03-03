// - https://github.com/hugomn/hugomagalhaes.com

import React from "react"
import Layout from "../layouts/en";
// import Image from "../components/image";
import Hero from '../components/common/hero';
// make this a styles component
import { HighLightParagraph } from '../components/common/highlight-paragraph'

const IndexPage = (props) => (
  <Layout location={ props.location }>
    <Hero/>
    <HighLightParagraph text={` We are a group of professionals working on new ideas to create a big connection
                                with every people interested in Game Development, from programmers to artists, musicians,
                                writers, and more. So we can create more games in the future, together.`}>
    </HighLightParagraph>
  </Layout>
)

export default IndexPage
