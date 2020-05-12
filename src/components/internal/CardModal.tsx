import React, { useState, useEffect } from 'react';
import { Button, Card, Carousel, Modal, Tabs, Tab } from 'react-bootstrap';
import { ICardDetails } from '../internal/Cards';
import YuGiOhCard from '../external/YuGiOhCard';
import { MAX_NUMBER_OF_SIMILAR_CARDS } from '../../constants';
import styled from 'styled-components';
import CardAPI from '../../CardAPI.json';

const PriceContainer = styled.p `
  padding-top: 12px;
  text-align: center;
  font-size: 14px;
  font-style: italic;
`;

type CartModalProps = {
    card?: ICardDetails,
    show: boolean,
    onHide: any
}

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const getSimilarCards = (card?: ICardDetails) => {
  if (!card) return [];

  const randomIndex = getRandomInt(2000);
  const localCards: ICardDetails[] = CardAPI.data.slice(randomIndex, CardAPI.data.length);
  const similarCards = [];

  for (let index = 0; index < localCards.length; index++) {
    if (localCards[index].type === card.type && localCards[index].race === card.race) {
      similarCards.push(localCards[index]);
      if (similarCards.length === MAX_NUMBER_OF_SIMILAR_CARDS) return similarCards;
    }
  }
  
  return similarCards;
}

function CardModal(props: CartModalProps) {
  const {
    card,
    show,
    onHide
  } = props;

  return (
    <Modal animation={true} show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title> {card ? card.name : ''} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Tabs defaultActiveKey="card_details" transition={false} id="noanim-tab-example">
        <Tab eventKey="card_details" title="Card Details">
          <YuGiOhCard
            isFullDescriptionVisible={true}
            card={card}
          />
        </Tab>
        <Tab eventKey="similar_cards" title="Similar Cards">
          <Carousel interval={1000}>
            {
              getSimilarCards(card).map(c => {
                return (
                  <Carousel.Item key={c.id}>
                    <img 
                      style={{maxHeight: "600px"}}
                      className="d-block w-100"
                      src={(c && c.card_images) ? c.card_images[0].image_url : ''}
                      alt="First slide"
                    />
                    <Card.Footer>
                      <PriceContainer>
                        Price on Amazon: {c.card_prices[0].amazon_price} $
                      </PriceContainer>
                    </Card.Footer>
                  </Carousel.Item>
                );
              })
            }
          </Carousel>
        </Tab>
      </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CardModal;