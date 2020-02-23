import React from 'react';
import { Col, Row, Nav, Tab } from 'react-bootstrap';

function Deck() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav style={{backgroundColor: "#343a40", color: "white"}} variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="one" style={{color: "white", textAlign: "center", fontWeight: "bold", borderTop: "3px solid white"}}>Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="two" style={{color: "white", textAlign: "center", fontWeight: "bold", borderTop: "3px solid white"}}>Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three" style={{color: "white", textAlign: "center", fontWeight: "bold", borderTop: "3px solid white"}}>Tab 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four" style={{color: "white", textAlign: "center", fontWeight: "bold", borderTop: "3px solid white"}}>Tab 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="five" style={{color: "white", textAlign: "center", fontWeight: "bold", borderTop: "3px solid white"}}>Tab 5</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="six" style={{color: "white", textAlign: "center", fontWeight: "bold", borderTop: "3px solid white"}}>Tab 6</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="seven" style={{color: "white", textAlign: "center", fontWeight: "bold", borderTop: "3px solid white"}}>Tab 7</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eight" style={{color: "white", textAlign: "center", fontWeight: "bold", borderTop: "3px solid white"}}>Tab 8</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              PINA
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              FASZ
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Deck;