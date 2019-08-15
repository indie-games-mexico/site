import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../components/common/container';
import { JustifiedP, H1 } from '../components/common/elements';
// https://n8us2tsl.api.sanity.io/v1/graphql/production/default
import Layout from '../layouts/en';
import PortableText from "@sanity/block-content-to-react"

// left here figure out how to avoid to pass project id and dataset each time

const blogTest = (props) => {
    console.log(props)
    return (
    <Layout location={props.location}>
        <Container>
            <Grid>
                <Row>
                    <Col lg={12}>
                        <H1>{ props.pageContext.title }</H1>
                        <JustifiedP>
                            by { props.pageContext.author.name }
                        </JustifiedP>

                        <PortableText
                          projectId="n8us2tsl"
                          dataset="production"
                          blocks={props.pageContext._rawBody }
                        />
                    </Col>
                </Row>
            </Grid>
        </Container>
    </Layout>
);
    }

export default blogTest;