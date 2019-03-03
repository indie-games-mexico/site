import React from "react"
// import { Link } from "gatsby"

import Layout from "../layouts/en";
// import Image from "../components/image";
// import SEO from "../components/common/seo";
// import Hero from '../components/common/hero';
// import { HighLightParagraph } from '../components/common/highlight-paragraph'

const IndexPage = (props) => (
  <Layout location={ props.location }>
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </div>
  </Layout>
)

export default IndexPage


/*
<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
<Hero/>
<HighLightParagraph text={` We are a group of professionals working on new ideas to create a big connection
                            with every people interested in Game Development, from programmers to artists, musicians,
                            writers, and more. So we can create more games in the future, together.`}>
</HighLightParagraph>
*/

/*

<h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  <Image />
</div>
<Link to="/page-2/">Go to page 2</Link>

*/
