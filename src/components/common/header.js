import PropTypes from "prop-types"
import React from "react"
import { Navbar, Form, FormControl, Button, Nav, NavDropdown } from 'react-bootstrap';
// impmement dynamic menus
const Header = ({ siteTitle, menus }) => (
  <header>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        { siteTitle }
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <NavDropdown title="Blog" id="blog-links">
          <NavDropdown.Item href="#action/3.1">Game On</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Our Game: Field Rivals</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Characters and Attributes</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Language" id="locale-links">
          <NavDropdown.Item href="#action/3.1">English United States</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Español Mexico</NavDropdown.Item>
      </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
