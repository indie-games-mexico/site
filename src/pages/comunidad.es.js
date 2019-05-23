import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../components/common/container';
import { JustifiedP, Ul, A, H3 } from '../components/common/elements';
import { Banner } from '../components/common/banner';

import Layout from '../layouts/es';

const CommunityPage = (props) => (
    <Layout location={props.location}>
        <Banner src="community" title="Comunidad"></Banner>
        <Container>
            <Grid>
                <Row>
                    <Col lg={12}>
                        <JustifiedP>
                            Hola, si has llegado a esta página, probablemente estás interesado en involucrarte en  la comunidad. 
                            Somos seres humanos amigables con pasión por los videojuegos y damos la bienvenida a personas de todos los niveles. Si tus habilidades o talentos encajan en alguna de las siguientes categorías, no dudes en comunicarte con nosotros, queremos conocerte.
                        </JustifiedP>
                        <div style={{ textAlign: 'left'}}>
                            <H3>Categorias</H3>   
                            <Ul>
                                <li>Programacion</li>
                                <li>Musica</li>
                                <li>Dibujo</li>
                                <li>Guiones</li>
                                <li>Actuación de voz</li>
                                <li>Simplemente compartes nuestra pasión por los videojuegos y quieres contribuir de alguna forma.</li>
                            </Ul>
                        </div>
                        <JustifiedP>
                            ¿Interesado? escribenos a <A href="mailto:community@indiegamesmexico.com">community@indiegamesmexico.com</A>
                        </JustifiedP>
                    </Col>
                </Row>
            </Grid>
        </Container>
    </Layout>
);

export default CommunityPage;