import React, { useState, useEffect } from 'react';
import { CardDeck, Col, Row, Nav, Tab } from 'react-bootstrap';
import axios from 'axios';
import { SIDE_BAR_OPTIONS_API } from '../constants';
import { ICardDetails } from '../components/internal/Cards';
import FlipCard from '../components/external/FlipCard';
import SimpleFlipCard from '../components/external/SimpleFlipCard';
import { initCards } from '../components/internal/Cards';
import { BackgroundContainer, CenterWrapper } from '../components/internal/CommonContainers';
import { SideBarMenuContainer, SideBarListContainer, SideBarListItem, BoxedItem, LogoBold, LogoTitle } from '../components/internal/SideBarComponents';

function Categories() {
  const [nrOfCardsToShow, setNrOfCardsToShow] = useState(20);
  const [cards, setCards] = useState<ICardDetails[]>([]);
  const [allCards, setAllCards] = useState<ICardDetails[]>(initCards(nrOfCardsToShow));

  const filterCardsByType = (type: string, deny?: boolean) => {
    setCards([]);
    if (type === "All") {
        setCards(allCards);
    } else {
        const filteredCards: ICardDetails[] = 
            deny ?
                allCards.filter(card => !card.type?.includes(type)) :
                allCards.filter(card => card.type?.includes(type));
        setCards(filteredCards); 
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/cards`)
        .then(response => {
            console.log('response = ', response.data)
            setCards([]);
            setCards(response.data);
            setAllCards(response.data);
        })
  }, []);

  return (
    <BackgroundContainer theme={
      {
        backgroundImage: "blue-ice-white-dragon.jpg"
      }
    }>
      <Row>
        <Col sm={3} style={{ minHeight: "100vh"}}>
          <div>
            <i className="fa fa-bars toggle_menu"></i>
            <div className="sidebar_menu">
                <i className="fa fa-times"></i>
                <CenterWrapper>
                    <BoxedItem>
                        Filter the cards by
                        <LogoBold>
                            Type
                        </LogoBold>
                    </BoxedItem>
                    <LogoTitle>
                        Be a Professional Duel Master
                    </LogoTitle>
                </CenterWrapper>

                <SideBarListContainer>
                {
                    SIDE_BAR_OPTIONS_API.map(item => {
                        return (
                            <SideBarListItem 
                                key={item.eventKey}
                                onClick={() => filterCardsByType(item.type)}
                            >
                              {item.type}
                            </SideBarListItem>
                        )
                    })
                }
                </SideBarListContainer>
            </div>
          </div>
        </Col>
        <Col sm={9}>
          <CardDeck style={{backgroundColor: "transparent"}}>
            {
              cards.map(card => {
                    return (
                      <FlipCard 
                        isFullDescriptionVisible={false}
                        card={card}
                        key={card.id}
                      />
                    );
                })
            }
          </CardDeck>
        </Col>
      </Row>
    </BackgroundContainer>
  );
}

export default Categories;