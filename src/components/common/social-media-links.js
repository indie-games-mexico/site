import React from 'react';
// import PropTypes from 'PropTypes';
import styled from 'styled-components';

const Ul = styled.ul`
  position:relative;
  padding:0;
  margin:0;
  list-style-type: none;
  line-height: 3.50em;
`;

const Li = styled.li`
  display: inline-block;
`;

const LightA = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  line-height: 1em;
  &:visited {
    color: white;
  }
  &:hover {
    background-color: rgba(200, 200, 200, 0.4);
    border-radius: 5px;
    span {
      display: block;
    }
  }
`;

const LinkDescription = styled.span`
    display: none;
    position: absolute;
    color: inherit;
    background-color: rgba(255, 255, 255, 0.4);
    color: #f0f8ff;
    border-radius: 5px;
    padding: 10px;
    left: -30px;
    width: max-content;
    z-index: 100;
    bottom: -35px;
    font-size: 1em;
    min-width: 200px;
    text-align: center;
`;

const MediaLink = ({icon, link, description}) => (
  <Li>
    <LightA href={link} target="_blank"><i className={icon}></i>
      <LinkDescription>{description}</LinkDescription>
    </LightA>
  </Li>
)

export const LigthSocialMediaLinks = ({ socialMediaLinks }) => (
  <Ul>
    {socialMediaLinks.map((link, index) => <MediaLink key={index} {...link}></MediaLink>)}
  </Ul>
)



//TODO: create PropTypes
