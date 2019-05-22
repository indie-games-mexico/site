import React from "react"
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Layout from "../layouts/es";
import SEO from "../components/common/seo"
import { JustifiedP, H2} from '../components/common/elements';

const LayoutWrapper = styled.div`
  background-color: #000;
`;

const ContentWrapper = styled.div`
	color: #fff;
	padding:200px 0 0 0;
	font-size: 2em;
`;

const NotFoundPage = (props) => (
  <LayoutWrapper>
	<Layout location={ props.location }>
		<SEO title="404: No encontrado" />
		<ContentWrapper>
		<Grid>
			<Row>
				<Col md={12}>
					<JustifiedP>Pareces perdido, Intenta acceder alguno de los links del menu principal</JustifiedP>
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<H2 style={{ fontSize: '5em' }}>404</H2>
				</Col>
			</Row>
		</Grid>
		</ContentWrapper>
	</Layout>
  </LayoutWrapper>
)

export default NotFoundPage
