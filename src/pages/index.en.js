import React from "react";
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { ApplicationContext } from '../context/Application';
import Layout from "../layouts/en";
import Hero from '../components/common/hero';
import { Panel } from '../components/common/panel';
import { Container } from '../components/common/container';
import { H2, P, JustifiedP, A } from '../components/common/elements';

const MainPanel = styled.div`
  transform: translateY(-100px);
  transition: all .4s ease-in;
  @media (max-width: 800px) {
    transform: translateY(-40px);
  }
`;
const CenteredParagraph = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const IndexPage = (props) => (
  <Layout location={ props.location }>
      <ApplicationContext.Consumer>
        {
          context => <Hero toggleMenuStyles={context.toggleMenuStyles}/>
        }
      </ApplicationContext.Consumer>
      <Container>
        <MainPanel>
          <Panel>
            <H2>Game Developer Community</H2>
            <CenteredParagraph>
              <P>
                We are a fast growing community of people and companies with diverse backgrounds interested in video game development. We welcome people of all skills such as but not limited to programming, music, drawing, writing, voice acting and more.
              </P>
            </CenteredParagraph>
            <H2>Current Project</H2>
            <Grid>
              <Row>
                <Col lg={6} md={12}>
                  <H2>Field Rivals</H2>
                  <JustifiedP>
                  We are working on our first game called Field Rivals. It's a Soccer card-based game with interactive atmospheres. Each card has a different effect depending on the character using it and the current state of the game.
                  The objective still remains the same score Goals but using thoughtful strategy.
                  </JustifiedP>
                  <JustifiedP>
                  Here's the trailer we showed at <A href="http://west.paxsite.com/" target="blank">PAX West Seattle</A> 2018 in the Latinx in Games panel, enjoy!
                  </JustifiedP>
                </Col>
                <Col lg={6} md={12}>
                  <H2>Field Rivals Trailer</H2>
                  <iframe title="Field Rivals" width="100%" height="350" src="https://www.youtube.com/embed/vNMBo1LpADg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Col>
              </Row>
              <Row>
                  <Col lg={6} md={12}>
                  <H2>Game Characters</H2>
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
                      <H2>Pick your Favorite</H2>
                      <JustifiedP>
                        Each character has its own playing style and overall performance is determined by the skills and cards the player owns.
                        For example, If a team or player is aggressive it may play better by drawing "shoot offense" cards instead of "shield defense".
                      </JustifiedP>
                      <JustifiedP>
                        Also, each team has their own uniforms, colors, stage, music theme and different personalities. <A href="#">Find out more</A>
                      </JustifiedP>

                  </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <H2>Interested?</H2>
                  <CenteredParagraph>
                  <P>
                    We are <b>Indie Games México!</b> A company committed to building awesome games and bringing talented people together to work on interesting projects while supporting their professional growth.
                  </P>
                  <P>
                    Interested in joining this awesome community? <A href="mailto:info@indiegamesmexico.com">Contact us.</A>
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
