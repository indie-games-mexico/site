import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Panel } from '../components/common/panel';
import { Container } from '../components/common/container';
import { H1, H2, Strong, CenteredP, A, JustifiedP } from '../components/common/elements';
import { Banner } from '../components/common/banner';


import Layout from '../layouts/en';

const StudioPage = (props) => (
    <Layout location={props.location}>
        <Banner src="studios" title="Studios"></Banner>
        <Container>
                <Grid>
                    <Row>
                        <Col lg={12}>
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