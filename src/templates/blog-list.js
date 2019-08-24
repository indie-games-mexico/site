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

const PostList = (props) => {
    console.log(props.pageContext.blogEntries);
    return (
        <Layout location={props.location}>
            <Container>
                <MainPanel>
                    Implement list here
                </MainPanel>
            </Container>
        </Layout>
    )
}

export default PostList;