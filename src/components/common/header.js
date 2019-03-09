import PropTypes from "prop-types"
import React from "react"
import SelectLanguage from './SelectLanguage';
import styled from 'styled-components';
import { LigthSocialMediaLinks } from './social-media-links';
// import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';

// left here create your own components just use bootstrap grid
// look into styled componentes

// impmement dynamic menus
const StyledHeader = styled.header`
  background-color: rgba(0, 0, 0, .8);;
  height: 60px;
  display:flex;
  justify-content:space-between;
  padding: 0 10px;
  box-shadow: 10px 10px 10px -6px rgba(240,248,255,1);
`;

const BrandWrapper = styled.div`
  display:inline-block;
  text-align:center;
`;

const BrandTitle = styled.h1`
    font-family: 'ZCOOL QingKe HuangYou', cursive;
    color: #f0f8ff;
    font-weight: 100;
    font-style: inherit;
    font-variant: small-caps;
    font-size: 2.25em;
    line-height: 1.5em;
`;

const SocialLinkWrapper = styled.div`
  display: inline-block;
`;

const styledBrand = styled.div

const Header = () => (
  <StyledHeader>
    <BrandWrapper>
      <BrandTitle>Indie Games Mexico</BrandTitle>
    </BrandWrapper>
    <SocialLinkWrapper>
      <LigthSocialMediaLinks socialLinks={[
        {
          icon: 'fab fa-facebook',
          link: '#',
          description:'Follow us on Facebook'
        },
        {
          icon: 'fab fa-twitter',
          link: '#',
          description:'Follow us on Twitter'
        },
        {
          icon: 'fab fa-instagram',
          link: '#',
          description:'Follow us on Instagram'
        }
    ]}></LigthSocialMediaLinks>
    </SocialLinkWrapper>
  </StyledHeader>
);

/*({langs, i18nMessages}) => {
  return (
  <header>

  </header>
  )
}*/

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header

/*
 latest working header
 <Navbar bg="dark" variant="dark" expand="lg">
   <Navbar.Brand href={`/${i18nMessages.locale}/`}>
       { i18nMessages.title }
   </Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="mr-auto">
   <SelectLanguage langs={langs} />
   </Nav>
   <Form inline>
     <FormControl type="text" placeholder={i18nMessages['site.search']} className="mr-sm-2" />
     <Button variant="outline-info">{i18nMessages['site.search']}</Button>
     </Form>
 </Navbar.Collapse>
 </Navbar>

*/


/*
Blog links pending
<NavDropdown title="Blog" id="blog-links">
    <NavDropdown.Item href="#action/3.1">Game On</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Our Game: Field Rivals</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Characters and Attributes</NavDropdown.Item>
</NavDropdown>
*/
