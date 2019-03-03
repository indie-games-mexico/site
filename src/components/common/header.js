import PropTypes from "prop-types"
import React from "react"
import SelectLanguage from './SelectLanguage';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';


// impmement dynamic menus
const Header = ({langs, i18nMessages}) => {
  return (
  <header>
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
  </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header

/*
Blog links pending
<NavDropdown title="Blog" id="blog-links">
    <NavDropdown.Item href="#action/3.1">Game On</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Our Game: Field Rivals</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Characters and Attributes</NavDropdown.Item>
</NavDropdown>
*/
