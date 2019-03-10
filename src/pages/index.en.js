// - https://github.com/hugomn/hugomagalhaes.com

import React from "react";
import styled from 'styled-components';
import Layout from "../layouts/en";
import Hero from '../components/common/hero';
import { Panel } from '../components/common/panel';
import { Container } from '../components/common/container';
import { H2, P1 } from '../components/common/elements';
import { HighLightParagraph } from '../components/common/highlight-paragraph'

const MainPanel = styled.div`
  transform: translateY(-100px);
`;
const CommunityParagraph = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const IndexPage = (props) => (
  <Layout location={ props.location }>
      <Hero/>
      <Container>
        <MainPanel>
          <Panel>
            <H2>Game Developer Community</H2>
            <CommunityParagraph>
            <P1>
              We are a fast growing community of people and companies with diverse backgrounds interested in video game development. We welcome people of all skills such as but not limited to programming, music, drawing, writing, voice acting and more.
            </P1>
            </CommunityParagraph>
          </Panel>
        </MainPanel>
      </Container>
  </Layout>
);

/*
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
            <br/>
              Also, each team have their own uniforms, colors, stage, music theme and some different personalities.

            </JustiedParagraph>
        }
    >
    </TwoColumnSummary>
  </Layout>
)
*/
export default IndexPage
