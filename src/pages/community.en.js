import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../components/common/container';
import { JustifiedP, A, H3, Ul } from '../components/common/elements';
import { Banner } from '../components/common/banner';

import Layout from '../layouts/en';

const CommunityPage = (props) => (
    <Layout location={props.location}>
        <Banner src="community" title="Community"></Banner>
        <Container>
            <Grid>
                <Row>
                    <Col lg={12}>
                        <JustifiedP>
                            Hello if you have reach this page you are probably interested in getting involved with people in the community. We are friendly kind human beings with passion for video games and we welcome people of all skills levels.
                            If your skills or talents fit in any of the following categories feel free to reach out, we want to talk to you.
                        </JustifiedP>    
                        <div style={{ textAlign: 'left'}}>
                                <H3>Categorias</H3>   
                                <Ul>
                                    <li>Programming</li>
                                    <li>Music</li>
                                    <li>Drawing</li>
                                    <li>Writing</li>
                                    <li>Voice acting</li>
                                    <li>Or just share the passion and want to contribute somehow.</li>
                                </Ul>
                        </div>
                        <JustifiedP>
                        Sounds like you? … Interested? Shoot us an email at  <A href="mailto:community@indiegamesmexico.com">community@indiegamesmexico.com</A>
                        </JustifiedP>
                    </Col>
                </Row>
            </Grid>
        </Container>
    </Layout>
);

export default CommunityPage;