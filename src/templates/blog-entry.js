// https://n8us2tsl.api.sanity.io/v1/graphql/production/default
import React from 'react';
import { format } from 'date-fns';
import parse from 'date-fns/parse';
import esLocale from 'date-fns/locale/es';
import enLocale from 'date-fns/locale/en';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../components/common/container';
import { JustifiedP, H1, MainPanel, Strong } from '../components/common/elements';
import { Panel } from '../components/common/panel';
import Layout from '../layouts/en';
import PortableText from "@sanity/block-content-to-react"

import Img from "gatsby-image"

import enMessages from '../data/messages/en';
import esMessages from '../data/messages/es';

const locale = {
    en: {
        messages: enMessages,
        locale: enLocale,
        format: 'dddd MMMM DD - YYYY'
    },
    es: {
        messages: esMessages,
        locale: esLocale,
        format: 'DD dddd de MMMM del YYYY'
    }
}



const BannerRender = ({fluid}) => {
    if (fluid) {
        return (
            <Img fluid={fluid} />
        )
    }
    // add some styles for padding
    return (<div style={{ width: '100%', height: 60 }}></div>);
}

const formatedDate = (dateString, localeCode) => {
    const dateLocale = locale[localeCode];
    const date = parse(dateString);
    const result = format(date, dateLocale.format,  { locale: dateLocale.locale });
    return result;
}



const blogTest = (props) => {
    return (
    <Layout location={props.location}>
        <BannerRender fluid={((props.pageContext.mainImage || {}).asset || {}).fluid}></BannerRender>
        <Container>
           <MainPanel>
               <Panel>
                <article>
                        <Grid>
                            <Row>
                                <Col lg={12}>
                                    <H1>{ props.pageContext.title }</H1>
                                    <JustifiedP>
                                       <Strong>{ locale[props.pageContext.locale.code].messages.by }</Strong> { props.pageContext.author.name }
                                    </JustifiedP>
                                    <JustifiedP>
                                        <Strong>Published:</Strong> { formatedDate(props.pageContext.publishedAt, props.pageContext.locale.code) }
                                    </JustifiedP>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} style={{ textAlign:'left', fontFamily: 'Rajdhani, sans-serif' }}>
                                    <PortableText
                                        projectId="n8us2tsl"
                                        dataset="production"
                                        blocks={ props.pageContext._rawBody }
                                        />
                                </Col>
                            </Row>
                        </Grid>
                    </article>
                </Panel>
            </MainPanel>
        </Container>
    </Layout>
);
    }

export default blogTest;