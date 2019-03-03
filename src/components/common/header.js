import PropTypes from "prop-types"
import React from "react"
import SelectLanguage from './SelectLanguage';
import { Navbar, Form, FormControl, Button, Nav, NavDropdown } from 'react-bootstrap';


// impmement dynamic menus
const Header = (props) => {


  return (
  <header>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <SelectLanguage langs={props.langs} />
      <NavDropdown title="Blog" id="blog-links">
          <NavDropdown.Item href="#action/3.1">Game On</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Our Game: Field Rivals</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Characters and Attributes</NavDropdown.Item>
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
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
