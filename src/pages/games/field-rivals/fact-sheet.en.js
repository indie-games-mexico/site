import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image';
import { JustifiedP, A, H3, Ul, StrongBlock, BlockUl } from '../../../components/common/elements';
import { Banner } from '../../../components/common/banner';
import Layout from '../../../layouts/en';

const ResponsiveUL = styled(BlockUl)`
    @media(max-width: 992px) {
        text-align: center;
    }
`;



const FactSheet = (props) => (
    <Layout location={props.location}>
        <StaticQuery
            query={graphql`
                query {
                    card1: file(relativePath: { eq: "game-cards-1.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 800, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    card2: file(relativePath: { eq: "field-cards.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 800, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    card3: file(relativePath: { eq: "characters-1.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 800, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `}
      render={data => {
          console.log('Images', data);
          return (
            <>
                <Banner src="factsheet" title="Fact Sheet"></Banner>
                <Grid>
                    <Row>
                        <Col lg={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <H3>Facts</H3>
                            <ResponsiveUL>
                                <li>
                                    <StrongBlock>
                                        Developer
                                    </StrongBlock>
                                    Indie Games Mexico <br/>
                                    Based in Mexico B.C
                                </li>
                                <li>
                                    <StrongBlock>
                                        Release Date
                                    </StrongBlock>
                                    Late 2019
                                </li>
                                <li>
                                    <StrongBlock>
                                        Platforms
                                    </StrongBlock>
                                    PC
                                </li>
                                <li>
                                    <StrongBlock>
                                        WebSite
                                    </StrongBlock>
                                        <A href="https://indiegamesmexico.com">indiegamesmexico.com</A>
                                </li>
                                <li>
                                    <StrongBlock>
                                        Price
                                    </StrongBlock>
                                    TBD
                                </li>
                                <li>
                                    <StrongBlock>
                                        Screenshots
                                    </StrongBlock>
                                </li>
                                <li>
                                    <Img fluid={data.card1.childImageSharp.fluid} alt="screenshot"/>
                                </li>
                                <li>
                                    <Img fluid={data.card2.childImageSharp.fluid} alt="screenshot"/>
                                </li>
                                <li>
                                    <Img fluid={data.card3.childImageSharp.fluid} alt="screenshot"/>
                                </li>
                            </ResponsiveUL>
                        </Col>
                        <Col lg={9}>
                            <H3>Description</H3>
                            <JustifiedP>
                            Field Rivals its a soccer video game based on cards and strategy.   The objective remains the same, score goals to defeat the opponent . Not like other soccer games, winning the game requires more than soccer abilities. It requires the right strategy based on teams and dealt cards. 
                            </JustifiedP>
                            <H3>Story</H3>
                            <JustifiedP>
                            Each team has its own unique story and purpose for winning the championship. Somewhere down the road teams will face their antagonist rival.
                            </JustifiedP>
                            <H3>Features</H3>
                            <Ul>
                                <li>
                                    <JustifiedP>
                                        The game is based mainly with 7 cards: Shoot, Defend, Pass, Counter, Goalkeeper, Stand and Super Shoot. All these have advantages and disadvantages to each other. Each movement between two rival cards (one play) can end with a different result, either scoring a goal, stopping a goal, blocking a play, among others.
                                    </JustifiedP>
                                </li>
                                <li>
                                    <JustifiedP>
                                        It has tactical cards, these can be used before or after a play to add a secondary result and try to have the advantage over your opponent.
                                    </JustifiedP>
                                </li>
                                <li>
                                    <JustifiedP>
                                        Each team has different characteristics, some can be more offensive, others can be defensive.
                                    </JustifiedP>
                                </li>
                                <li>
                                    <JustifiedP>
                                        All teams have a captain, different characteristics and motives to win. Each captain has its own antagonistic rival.
                                    </JustifiedP>
                                </li>
                            </Ul>
                            <H3>Awards & Recognitions</H3>
                            <Ul>
                                <li>
                                Best Game" - GAMACON, May, 2018
                                </li>
                                <li>
                                Trailer presentation on panel Latinx in  PAX West Seattle Washington.
                                </li>
                            </Ul>
                        </Col>
                    </Row>
                </Grid>
            </>)
         }
      }
    />
    </Layout>
)

export default FactSheet;