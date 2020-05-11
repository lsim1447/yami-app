import React, { useState, useEffect } from 'react';
import { CardDeck, Col, Row, Nav, Tab } from 'react-bootstrap';
import styled from 'styled-components';
import CardAPI from '../CardAPI.json';
import { SIDE_BAR_OPTIONS_API } from '../constants';
import { ICardDetails } from '../components/internal/Cards';
import FlipCard from '../components/external/FlipCard';

export interface IListItem
{
  eventKey: string,
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

const filterCards = (cards: ICardDetails[], type: string) => {
  if (type === 'All') {
    return cards;
  } else {
    return cards.filter(card => card.type === type);
  }
}

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
}

function History() {
  const [cards, setCards] = useState<ICardDetails[]>([]);
  const [nrOfCardsToShow, setNrOfCardsToShow] = useState(102);
  const lateralBar: IListItem[] = SIDE_BAR_OPTIONS_API;

  useEffect(() => {
    const randomIndex = getRandomInt(9000);
    setCards(CardAPI.data.slice(randomIndex, randomIndex + nrOfCardsToShow));
  }, [nrOfCardsToShow]);  

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
                          { item.type } 
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
                <Tab.Pane eventKey={item.eventKey}>
                  <CardDeck style={{backgroundColor: "#212529"}}>
                    {
                      filterCards(cards, item.type).map(
                        card => {
                            return (
                                <FlipCard 
                                    card={card}
                                    isFullDescriptionVisible={false}
                                    key={card.id}
                                />
                            );
                        })
                    }
                  </CardDeck>
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