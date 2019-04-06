import React from "react";
import SEO from "../components/common/seo";
import styled from 'styled-components';
import './404.css';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  Background-color: #ccc;
`;

const NotFoundPage = (props) => (
  <Background>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Background>
);

export default NotFoundPage;
