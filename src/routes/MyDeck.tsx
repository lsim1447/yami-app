import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, CardDeck, Collapse, Col, Row, Table } from 'react-bootstrap';

import { ICardDetails } from '../components/internal/Cards';
import SimpleFlipCard from '../components/external/SimpleFlipCard';
import { initCards } from '../components/internal/Cards';
import { BackgroundContainer } from '../components/internal/CommonContainers';
import { SIDE_BAR_OPTIONS_API } from '../constants';

function MyDeck() {
  const [nrOfCardsToShow, setNrOfCardsToShow] = useState(80);
  const [allCards, setAllCards] = useState<ICardDetails[]>(initCards(nrOfCardsToShow));
  const [cards, setCards] = useState<ICardDetails[]>(initCards(nrOfCardsToShow));
  const [open, setOpen] = useState(true);

  const getNrOfCardsByType = (type: string) => {
    if (!allCards) return 0;
    if (type === "All") return allCards.length;
    return allCards.filter((card: ICardDetails) => card && card.type === type).length;
  }

  const filterCardsByType = (type: string) => {
    setCards([]);
    if (type === "All") {
      setCards(allCards);
    } else {
      const filteredCards: ICardDetails[] = allCards.filter(card => card.type === type);
      setCards(filteredCards); 
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/cards`)
      .then(response => {
          setCards([]);
          setCards(response.data);
          setAllCards(response.data);
      })
  }, []);

  useEffect(() => {
    if (!open) {
      setCards([]);
      setCards(allCards);
    }
  }, [open]);

  return (
    <BackgroundContainer theme={
      {
        backgroundImage: "my-deck-background.jpg"
      }
    }>
      <Row>
        <Col sm={3}>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            size="lg"
            variant="dark">
            ☰
          </Button>
          <Collapse in={open}>
            <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th><p style={{textAlign: "center", fontSize: "22px"}}> Card Type </p></th>
                    <th style={{textAlign: "center", fontSize: "22px"}}> Cards in your Deck</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    SIDE_BAR_OPTIONS_API.map(item => {
                      return (
                        <tr  key={item.eventKey} onClick={() => filterCardsByType(item.type)}>
                          <td> {item.type} </td>
                          <td style={{textAlign: "center"}}> {getNrOfCardsByType(item.type)} </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
          </Collapse>
        </Col>
        <Col sm={7}>
          <CardDeck>
            {
              cards.map(
                (card: ICardDetails) => {
                  return (
                    <SimpleFlipCard 
                      isFullDescriptionVisible={false}
                      card={card}
                      key={card.id}
                    />
                  );
              })
            }
          </CardDeck>
        </Col>
        <Col sm={2}></Col>
      </Row>
    </BackgroundContainer>
  );
}

export default MyDeck;