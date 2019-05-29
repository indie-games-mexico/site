import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Wrapper = styled.div`
    width: 100%;
    display: block;
    text-align: center;
    background-color: #000;
`;

const EmpyBackground = styled.div`
  width: 100%;
  height: 300px;
`


const BannerTitle = styled.h1`
    color: #fff;
    font-family: 'Rajdhani', sans-serif;
    position: absolute;
    top: 40%;
    font-size: 4em;
    @media (max-width: 800px) {
        font-size: 2em;
        left: 10%;
    }
`; 


export const Banner = ({ src, title }) => (
    <StaticQuery
            query={graphql`
            query {
              internships: file(relativePath: { eq: "banners/internships.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 1024) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
                studios: file(relativePath: { eq: "banners/studios.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth: 1024) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                story: file(relativePath: { eq: "banners/story.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1024) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  community: file(relativePath: { eq: "banners/community.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1024) {
                        ...GatsbyImageSharpFluid  
                      }
                    }
                  }
                  games: file(relativePath: { eq: "banners/games.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1024) {
                        ...GatsbyImageSharpFluid  
                      }
                    }
                  }
              }
            `}
            render={data => (
                <Wrapper>
                    <Grid style={ {backgroundColor: '#000'} }>
                        <Row>
                            <Col lg={12} style={{ position: 'relative' }}>
                                <Img fluid={data[src].childImageSharp.fluid} />
                                <BannerTitle>{title}</BannerTitle>
                            </Col>
                        </Row>
                    </Grid>
                </Wrapper>
            )}
        >

    </StaticQuery>
);

export const TitleBanner = ({title}) => (
                <Wrapper>
                    <Grid style={ {backgroundColor: '#000'} }>
                        <Row>
                            <Col lg={12} style={{ position: 'relative' }}>
                                <EmpyBackground></EmpyBackground>
                                <BannerTitle>{title}</BannerTitle>
                            </Col>
                        </Row>
                    </Grid>
                </Wrapper>
);