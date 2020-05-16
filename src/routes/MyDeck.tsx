import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button, CardDeck, Collapse, Col, Row, Table } from 'react-bootstrap';

import { ICardDetails } from '../components/internal/Cards';
import SimpleFlipCard from '../components/external/SimpleFlipCard';
import { initCards } from '../components/internal/Cards';
import { SIDE_BAR_OPTIONS_API } from '../constants';

const MyDeckContainer = styled.div `
  min-height: 850px;
  background: url(test4.jpg) no-repeat top center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

function MyDeck() {
  const [nrOfCardsToShow, setNrOfCardsToShow] = useState(80);
  const [allCards, setAllCards] = useState<ICardDetails[]>(initCards(nrOfCardsToShow));
  const [cards, setCards] = useState<ICardDetails[]>(initCards(nrOfCardsToShow));
  const [open, setOpen] = useState(false);

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
    <MyDeckContainer>
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
                    <th><p style={{top: "5px", position: "relative", textAlign: "center"}}> Card Type </p></th>
                    <th style={{textAlign: "center"}}> Number of Cards in your Deck</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    SIDE_BAR_OPTIONS_API.map(item => {
                      return (
                        <tr style={{textAlign: "center"}} key={item.eventKey} onClick={() => filterCardsByType(item.type)}>
                          <td> {item.type} </td>
                          <td> {getNrOfCardsByType(item.type)} </td>
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
    </MyDeckContainer>
  );
}

export default MyDeck;