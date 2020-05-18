import React, { useState, useEffect } from 'react';
import { CardDeck, Col, Row, Nav, Tab } from 'react-bootstrap';
import axios from 'axios';
import { SIDE_BAR_OPTIONS_API } from '../constants';
import { ICardDetails } from '../components/internal/Cards';
import FlipCard from '../components/external/FlipCard';
import { initCards } from '../components/internal/Cards';
import { BackgroundContainer } from '../components/internal/CommonContainers';
import { IListItem, ListItem, SandwichBtnContainer, SideBarCloseIcon, SideBarContainer, SideBarHeaderText, hidden_sidebar, show_sidebar} from '../components/internal/SideBarComponents';

const filterCards = (cards: ICardDetails[], type: string) => {
  if (type === 'All') {
    return cards;
  } else {
    return cards.filter(card => card.type === type);
  }
}

function Categories() {
  const [nrOfCardsToShow, setNrOfCardsToShow] = useState(200);
  const [cards, setCards] = useState<ICardDetails[]>([]);
  const lateralBar: IListItem[] = SIDE_BAR_OPTIONS_API;

  const filerCardsByType = (type: string) => {
    console.log('TYPE = ', type);
  }

  useEffect(() => {
    setCards(initCards(nrOfCardsToShow));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:5000/cards`)
        .then(response => {
            setCards([]);
            setCards(response.data);
        })
    }, [nrOfCardsToShow]);  

  return (
    <BackgroundContainer theme={
      {
        backgroundImage: "blue-ice-white-dragon.jpg"
      }
    }>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row  >
          <Col sm={2} style={{ minHeight: "100vh"}}>
            <SideBarContainer className="w3-sidebar w3-bar-block w3-border-right" id="mySidebar">
              <button onClick={() => hidden_sidebar()} className="w3-bar-item w3-large">
                <SideBarHeaderText> SideBar - Menu </SideBarHeaderText>
                <SideBarCloseIcon>&times;</SideBarCloseIcon>
              </button>
              <Nav variant="pills" className="flex-column">
              {
                lateralBar.map(item => {
                  return (
                    <Nav.Item key={item.eventKey}>
                      <Nav.Link eventKey={item.eventKey} onSelect={() => filerCardsByType(item.type)}>
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
                <Tab.Pane eventKey={item.eventKey} key={item.eventKey}>
                  <CardDeck style={{backgroundColor: "#212529"}} key={item.type}>
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
    </BackgroundContainer>
  );
}

export default Categories;