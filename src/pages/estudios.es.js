import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container } from '../components/common/container';
import { JustifiedP } from '../components/common/elements';
import { Banner } from '../components/common/banner';


import Layout from '../layouts/en';

const StudioPage = (props) => (
    <Layout location={props.location}>
        <Banner src="studios" title="Estudios"></Banner>
        <Container>
                <Grid>
                    <Row>
                        <Col lg={12}>
                            <JustifiedP>
                                Indie Games Studios está estratégicamente ubicado a solo unos minutos de la frontera con los EE. UU. Y muy cerca del centro de la ciudad. 
                                para que las personas de la comunidad se reúnan regularmente. La ubicación ofrece múltiples ventajas, las personas en el área en su mayor parte son Bilingües y son capaces de viajar al extranjero.
                            </JustifiedP>
                            <JustifiedP>
                                ¿Ya eres miembro? Inicio de sesión y área de miembros en algún momento en el futuro.
                            </JustifiedP>
                        </Col>
                    </Row>
                </Grid>
        </Container>
    </Layout>
);

export default StudioPage;