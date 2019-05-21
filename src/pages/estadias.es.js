import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../components/common/container';
import { JustifiedP, NonStyleUl, Strong, A } from '../components/common/elements';
import { Banner } from '../components/common/banner';

import Layout from '../layouts/es';

const IntershipsPage = (props) => (
    <Layout location={props.location}>
        <Banner src="internships" title="Interships"></Banner>
        <Container>
                <Grid>
                    <Row>
                        <Col lg={12}>
                            <JustifiedP>
                                Indie Games México recluta gustosamente aspirantes para el desarrollo de video juegos con poca o nula experiencia.
                                Si este eres tu? envianos CV actualizado y una carta de presentación en inglés y nos pondremos en contacto lo antes posible. Podemos ayudarte a hacer una carrera en cualquiera de los siguientes caminos: 
                            </JustifiedP>
                            <NonStyleUl>
                                <li><Strong>Diseño</Strong></li>
                                <li>3d Modeler</li>
                                <li>3d Animator</li>
                                <li>3d Character Artist</li>
                                <li>Level Designer</li>
                            </NonStyleUl>
                            <NonStyleUl>
                                <li><Strong>Programación</Strong></li>
                                <li>Web Software Engineer</li>
                                <li> AI Gameplay Software Engineer</li>
                            </NonStyleUl>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                        <JustifiedP>
                        La aceptación depende de la disponibilidad actual de posiciones en los equipos y que tan bien puedes encajar en uno de ellos de acuerdo a tu perfil. 
                        Esperamos con interés escuchar de ti. Envía CV y una carta de presentación en inglés a <A href="mailto:talents@indiegamesmexico.com" target="_blank">talents@indiegamesmexico.com</A> y alguien de nuestro equipo se comunicará contigo lo antes posible.

                        </JustifiedP>
                        </Col>
                    </Row>
                </Grid>
        </Container>
    </Layout>
);

export default IntershipsPage;