import React from 'react';
import { Col, Row, Nav, Tab } from 'react-bootstrap';
import { ICard } from './../components/external/YuGiOhCard';
import CardMap from './../components/external/CardMap';
import styled from 'styled-components';
import { cards } from './../FakeApi';

export interface IListItem
{
    eventKey: string,
    text: string,
    type: string
}

const ListItem = styled.div `
  border: 3px solid #ffffff;
  background-color: #000000;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  padding-top: 36px;
  padding-bottom: 36px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
  &:hover {
    background-color: red;
    border: 3px solid red;
    color: black;
  }
`;

const NavContainer = styled.div `
  @media (min-width: 768px) {
    position: fixed;
    background-color: "#343a40"
    color: white;
  }
`;

const filterCards = (cards: ICard[], type: string) => {
  if (type === "all") return cards;
  return cards.filter(card => card.type === type);
}

function Deck() {
  let lateralBar: IListItem[] = [];
  let all_cards = cards;

  lateralBar = [
    {
      eventKey: "all_card",
      text: "All Card",
      type: "all"
    },
    {
      eventKey: "exodia_pieces",
      text: "Exodia Pieces",
      type: "exodia"
    },
    {
      eventKey: "trap_cards",
      text: "Trap Cards",
      type: "trap"
    },
    {
      eventKey: "magic_cards",
      text: "Magic Cards",
      type: "magic"
    },
    {
      eventKey: "monster_cards",
      text: "Monster Cards",
      type: "monster"
    },
    {
      eventKey: "spell_card",
      text: "Spell Cards",
      type: "spell"
    },
  ]

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row style={{backgroundImage: `url(deck_background_image_1.jpg)`}}>
        <Col style={{ minHeight: "100vh", marginTop: "50px" }} sm={2}>
          <NavContainer>
            <Nav  variant="pills" className="flex-column">
              {
                lateralBar.map(item => {
                  return(
                    <Nav.Item>
                      <Nav.Link eventKey={item.eventKey}>
                        <ListItem>
                          { item.text } 
                        </ListItem>
                      </Nav.Link>
                    </Nav.Item>
                  )
                })
              }
            </Nav>
          </NavContainer>
        </Col>
        <Col>
          <Tab.Content>
            {
              lateralBar.map(item => 
                <Tab.Pane eventKey={ item.eventKey }>
                  <CardMap cards={ filterCards(all_cards, item.type) }/>
                </Tab.Pane>
              )
            }
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Deck;