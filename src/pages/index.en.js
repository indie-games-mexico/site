// - https://github.com/hugomn/hugomagalhaes.com

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layouts/en";
import Hero from '../components/common/hero';
import { HighLightParagraph } from '../components/common/highlight-paragraph';
import { TwoColumnSummary } from '../components/common/two-column-summary';
import { JustiedParagraph } from '../components/common/justified-paragraph';

const IndexPage = (props) => (
  <Layout location={ props.location }>
    <Hero/>
    <HighLightParagraph text={` We are a group of professionals working on new ideas to create a big connection
                                with every people interested in Game Development, from programmers to artists, musicians,
                                writers, and more. So we can create more games in the future, together.`}>
    </HighLightParagraph>
    <TwoColumnSummary
      left={<JustiedParagraph>
              We are working on our first game Field Rivals, a trading card game with a soccer atmosphere. The mechanics consists on a "which cards beats which card" and the objective is to get more goals than your opponent.
              Here's the trailer we showed at PAX West Seattle 2018 in the Latinx in Games panel, enjoy!
        </JustiedParagraph>
      }
      right={
        <>
          <iframe title="Field Rivals" width="100%" height="350" src="https://www.youtube.com/embed/vNMBo1LpADg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
              Each character has their own game style, which varies the set of cards and the strategy is different. For example: The Winter Wolves team is more offensive, so it's more likely to get a lot of "shoot" cards, but they have a few defensive cards.
            <p>
              Also, each team have their own uniforms, colors, stage, music theme and some different personalities.
            </p>
            </JustiedParagraph>
        }
    >
    </TwoColumnSummary>
  </Layout>
)

export default IndexPage
