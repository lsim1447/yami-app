import React from 'react';
import { Col, Row, Nav, Tab } from 'react-bootstrap';
import styled from 'styled-components';
import CardMap from '../CardMap';
import { ICard } from '../YuGiOhCard';
import { cards } from '../../../FakeApi';

export interface IListItem
{
    eventKey: string,
    text: string,
    type: string
}

const hidden_sidebar = () => {
  const sideBarElement = document.getElementById("mySidebar");
  if (sideBarElement) {
    sideBarElement.style.display = "none";
  }
}

const show_sidebar = () => {
  const sideBarElement = document.getElementById("mySidebar");
  if (sideBarElement) {
    sideBarElement.style.display = "block";
  }
}

const filterCards = (cards: ICard[], type: string) => {
  if (type === "all") return cards;
  return cards.filter(card => card.type === type);
}

const ListItem = styled.div `
  border-top: 2px solid #343a40;
  border-bottom: 2px solid #343a40;
  color: #ffffff;
  font-weight: bold;
  padding-top: 12px;
  padding-bottom: 12px;
  
  &:hover {
    color: #05f29b;
    border-top: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
  }
`;

const SideBarContainer = styled.div `
  background-color: #343a40;
  display: block;
  width: 16.66%;
  min-width: 200px;
`;

const SideBarHeaderText = styled.strong `
  text-align: center;
`;

const SideBarCloseIcon = styled.div `
  float: right;
`;

const SandwichBtnContainer = styled.div `
  color: white;
  position: fixed;
`;

function History() {
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
  ];

  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row style={{backgroundImage: `url(deck_background_image_1.jpg)`}}>
          <Col sm={2} style={{ minHeight: "100vh"}}>
            <SideBarContainer className="w3-sidebar w3-bar-block w3-border-right" id="mySidebar">
              <button onClick={() => hidden_sidebar()} className="w3-bar-item w3-large">
                <SideBarHeaderText> SideBar - Menu </SideBarHeaderText>
                <SideBarCloseIcon>&times;</SideBarCloseIcon>
              </button>
              <Nav variant="pills" className="flex-column">
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
            </SideBarContainer>

            <SandwichBtnContainer>
              <button className="w3-button w3-xlarge" onClick={(e) => show_sidebar()}>☰</button>
            </SandwichBtnContainer>
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
    </div>
  );
}

export default History;