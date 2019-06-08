import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from './brand-logo';

const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;
  height: 160px;
  font-family: 'Rajdhani',sans-serif;
`;

const TopFooter = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
`;

const SocialLinksWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  width: 100px;
  display:flex;
  justify-content: center;
  margin-right: 20px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const CopyRight = styled.div`
  background-color: #000;
  min-height: 40px;
  text-align: center;
  line-height: 2.3em;
  @media (max-width: 800px) {
    line-height: unset;
    padding: 10px 50px;
  }
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const Li = styled.li`
  display:inline-block;
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

const MediaLink = ({icon, link, description, langKey, i18nMessages, themeHoveStyle}) => {
  return (
    <Li>
      <LightA href={link} target="_blank"><i className={icon}></i></LightA>
    </Li>
  )
}

export const Footer = ({ i18nMessages, socialMediaLinks, themeHoveStyle }) => {
    const Links = socialMediaLinks.map((link, index) => <MediaLink key={index} {...link} i18nMessages={i18nMessages} themeHoveStyle={themeHoveStyle}></MediaLink>);
    Links.push(<Li key="legal"><LightA href="#">Legal</LightA></Li>)
    return(<>
        <StyledFooter>
          <TopFooter>
            <SocialLinksWrapper>
              <Ul>{ Links }</Ul>
            </SocialLinksWrapper>
            <LogoWrapper>
              <BrandLogo/>
            </LogoWrapper>
          </TopFooter>
          <CopyRight>{ i18nMessages['footer.trademark'] }</CopyRight>
        </StyledFooter>
      </>
    );
}
