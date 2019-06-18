import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../components/common/container';
import { JustifiedP, NonStyleUl, Strong, A, TitleSpaceWrapper, H2 } from '../components/common/elements';
import { Banner } from '../components/common/banner';

import Layout from '../layouts/en';

const IntershipsPage = (props) => (
    <Layout location={props.location}>
        <Banner src="internships" title="Interships"></Banner>
        <Container>
                <Grid>
                    <Row>
                        <Col lg={12}>
                            <TitleSpaceWrapper>
                                    <H2 style={{ textAlign:'left' }}>Grow with us</H2>
                            </TitleSpaceWrapper>
                            <JustifiedP>
                                Indie Games Mexico gladly recruits aspiring game developers with little to no knowledge.
                                If this is you, send us your CV and your introduction letter in english and we will get back to you. We can mentor and help you grow your career in any of the following paths: 
                            </JustifiedP>
                            <NonStyleUl>
                                <li><Strong>Art</Strong></li>
                                <li>3d Modeler</li>
                                <li>3d Animator</li>
                                <li>3d Character Artist</li>
                                <li>Level Designer</li>
                            </NonStyleUl>
                            <NonStyleUl>
                                <li><Strong>AI</Strong></li>
                                <li>Web Software Engineer</li>
                                <li> AI Gameplay Software Engineer</li>
                            </NonStyleUl>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                        <JustifiedP>
                        Acceptance depends on your background and on current team position availability. We look forward to hearing from you. 
                        Please send your information to <A href="mailto:talents@indiegamesmexico.com" target="_blank">talents@indiegamesmexico.com</A>
                        And someone from our team will get back to you asap.

                        </JustifiedP>
                        </Col>
                    </Row>
                </Grid>
        </Container>
    </Layout>
);

export default IntershipsPage;