import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Panel } from '../../components/common/panel';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../../components/common/container';
import { JustifiedP, CenteredP, MainPanel, H1, H2, H3, H4, A, ImageWrapper } from '../../components/common/elements';
import Layout from '../../layouts/en';


const FieldRivalsPage = (props) => (
    <Layout location={props.location}>
        <StaticQuery
            query={graphql`
                query {
                    fieldrivals: file(relativePath: { eq: "field-rivals-wide.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 2040, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    gamecards1: file(relativePath: { eq: "game-cards-1.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1200, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    gamecards2: file(relativePath: { eq: "game-cards-2.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1200, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    characters1: file(relativePath: { eq: "characters-1.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1200, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    characters2: file(relativePath: { eq: "characters-2.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1200, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    characters3: file(relativePath: { eq: "characters-3.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1200, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `}
      render={data => <>
            <Img fluid={data.fieldrivals.childImageSharp.fluid} />
            <Container>
                <MainPanel>
                    <Panel>
                        <H1>Field Rivals</H1>
                        <Grid>
                            <Row>
                                <Col lg={12}>
                                    <H3 style={{ textAlign: 'left' }}>Summary</H3>
                                    <JustifiedP>
                                        Strategic card based Soccer Game with interactive maps and characters. The game introduces an innovative gaming experience by giving each team and characters different sets of skills based on stage and current playing cards. Each team has their own stage, music and personality.
                                        <br/> Visit <A href="fact-sheet">Fact Sheet</A>
                                    </JustifiedP>
                                    <H3 style={{ textAlign: 'left' }}>Game Play</H3>
                                    <JustifiedP>
                                    The game consists of a number of rounds and cards randomly picked or provided. Using these cards you will try to outperform your opponent by strategically combining them. You would think that to win you will always pick the strongest card but, each card has a different effect based on team, stage and character. So to truly win the game you need to know your opponents team strengths and weaknesses and have a good strategy based on what you know and the stage where the game takes place.
                                    </JustifiedP>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                <iframe title="Field Rivals" width="100%" height="315" src="https://www.youtube.com/embed/EDKgR_Ncdhs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <H3>Game Cards</H3>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <H4>Primary Cards</H4>
                                    <JustifiedP>
                                        These type of cards can also be referred as action cards. They indicate the action you intent to perform on your opponent. Some examples are shoot to score, defend, cancel your opponents move and counter attack. 
                                    </JustifiedP>
                                </Col>
                                <Col lg={6}>
                                    <H4>Secondary Cards</H4>
                                    <JustifiedP>
                                    These are a set of extra cards that will change the game dramatically depending on the player skills to combine them with the primary cards. There are two types of cards, before game cards and during game cards called BGC and DGC respectively
                                    </JustifiedP>
                                    <JustifiedP>
                                    BGC are revealed once the match starts while DGC cards can be used at the players discretion and surprise the opponent with an unexpected attack. 
                                    </JustifiedP>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} md={6} xs={12}>
                                    <ImageWrapper>
                                        <Img fluid={data.gamecards1.childImageSharp.fluid} alt="Game cards" />
                                    </ImageWrapper>
                                </Col>
                                <Col lg={6} md={6} xs={12}>
                                    <Img fluid={data.gamecards2.childImageSharp.fluid} alt="Game cards" />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>&nbsp;</Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <H2>Characters and Teams</H2>
                                    <JustifiedP>
                                        To make the game dynamic we decided to include 8 teams and a wide variety of characters with different set of skills and personalities. 
                                        These traits enhance or hinder the cards used during game play.
                                        Each Team has its own captain, logo, stage and music.
                                    </JustifiedP>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} md={4}>
                                    <ImageWrapper>
                                        <Img fluid={data.characters1.childImageSharp.fluid} alt="Game Character Selection" />
                                    </ImageWrapper>
                                </Col>
                                <Col lg={4} md={4}>
                                    <ImageWrapper>
                                        <Img fluid={data.characters2.childImageSharp.fluid} alt="Game Character Selection" />
                                    </ImageWrapper>
                                </Col>
                                <Col lg={4} md={4}>
                                    <Img fluid={data.characters3.childImageSharp.fluid} alt="Game Sample Characters" />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>&nbsp;</Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <H3>And Much More</H3>
                                    <CenteredP>
                                        Stay tuned as the game develops we will reveal more information. Don't forget to follow us on social media as we are a very active community and we are constantly revealing new information. 
                                    </CenteredP>
                                </Col>
                            </Row>
                        </Grid>
                    </Panel>
                </MainPanel>
            </Container>
        </>
        }
    />
    </Layout>
)

export default FieldRivalsPage