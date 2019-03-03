// - https://github.com/hugomn/hugomagalhaes.com

import React from "react"
import Layout from "../layouts/en";
// import Image from "../components/image";
import Hero from '../components/common/hero';
// make this a styles component
import { HighLightParagraph } from '../components/common/highlight-paragraph';
import { TwoColumnSummary } from '../components/common/two-column-summary';

const IndexPage = (props) => (
  <Layout location={ props.location }>
    <Hero/>
    <HighLightParagraph text={` We are a group of professionals working on new ideas to create a big connection
                                with every people interested in Game Development, from programmers to artists, musicians,
                                writers, and more. So we can create more games in the future, together.`}>
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
              We are working on our first game Field Rivals, a trading card game with a soccer atmosphere. The mechanics consists on a "which cards beats which card" and the objective is to get more goals than your opponent.
              Here's the trailer we showed at PAX West Seattle 2018 in the Latinx in Games panel, enjoy!
        </p>
      }
      right={
        <>
          <iframe title="Field Rivals" width="100%" height="350" src="https://www.youtube.com/embed/vNMBo1LpADg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
      }
    >
    </TwoColumnSummary>
  </Layout>
)

export default IndexPage
