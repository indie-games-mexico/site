// this has to use the image component provided gatsby because it optimies for the screen
import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "brand-hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 5100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);

export default () => (
  <Image />
);

/*
<Parallax
          bgImage="https://s3.amazonaws.com/assets.indiegames/hero.png"
          bgImageAlt="Gaming company"
          strength={200}
          >
           <div style={{ height: '400px' }} />
</Parallax>

*/
