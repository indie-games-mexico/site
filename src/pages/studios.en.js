import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../components/common/container';
import { JustifiedP, H2, TitleSpaceWrapper } from '../components/common/elements';
import { Banner } from '../components/common/banner';


import Layout from '../layouts/en';

const StudioPage = (props) => (
    <Layout location={props.location}>
        <Banner src="studios" title="Studios"></Banner>
        <Container>
                <Grid>
                    <Row>
                        <Col lg={12}>
                            <TitleSpaceWrapper>
                                <H2 style={{ textAlign:'left' }}>Our Creative Space</H2>
                            </TitleSpaceWrapper>
                            <JustifiedP>
                                Indie Games Studios is strategically located just a few minutes from the border with U.S and very close to downtown making it easy 
                                for people in the community to meet regularly.  The location provides multiple advantages, people in the area for the most part are 
                                bilingual and are able to travel abroad. 
                            </JustifiedP>
                            <JustifiedP>
                                Are you already a member?
                                Login and members area coming sometime in the future.
                            </JustifiedP>
                        </Col>
                    </Row>
                </Grid>
        </Container>
    </Layout>
);

export default StudioPage;