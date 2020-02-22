import React from 'react';
import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap';

function NavigationBar(props: any) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Yu-gi-oh </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/cards">Cards</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/my-deck">My Deck</Nav.Link>
            <Nav.Link eventKey={2} href="/history"> History </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      { props.children }
    </div>
  );
}

export default NavigationBar;
