import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UlDesktop = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Li = styled.li`
  display: inline-block;
  line-height: 75px;
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  &:visited {
    text-decoration: none;
  }
`;

export const MainMenu = ({ i18nMessages, mainMenuLinks }) => {

  const links = mainMenuLinks.map(option => <Li key={option.langKey}><A href="#">{ i18nMessages[option.langKey] }</A></Li>);

  return (
    <UlDesktop>
      {links}
    </UlDesktop>
  )
};

MainMenu.propTypes = {
  i18nMessages: PropTypes.object,
  mainMenuLinks: PropTypes.array
}
