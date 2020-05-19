import React, { useState, useEffect } from 'react';
import { Button, Card, Carousel, Modal, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import { ICardDetails } from '../internal/Cards';
import YuGiOhCard from './YuGiOhCard';
import { MAX_NUMBER_OF_SIMILAR_CARDS } from '../../constants';
import { getRandomInt, getInitialCardList } from '../internal/Cards';

const PriceContainer = styled.p `
  padding-top: 12px;
  text-align: center;
  font-size: 14px;
  font-style: italic;
`;

type CartModalProps = {
  addToDeckDisabled?: boolean,
  card?: ICardDetails,
  onHide: any,
  show: boolean,
}

function CardModal(props: CartModalProps) {
  const {
    addToDeckDisabled,
    card,
    onHide,
    show
  } = props;

  const [similarCards, setSimilarCards] = useState<ICardDetails[]>(getInitialCardList(MAX_NUMBER_OF_SIMILAR_CARDS));

  useEffect(() => {
    if (show) {
      axios.post(`http://localhost:5000/cards/findByTypeAndRace`, {
        "type": (card ? card.type : ''),
        "race": (card ? card.race : ''),
        "limit": MAX_NUMBER_OF_SIMILAR_CARDS
      }).then(response => {
          setSimilarCards([]);
          setSimilarCards(response.data);
      })
    }
  }, [show]);  

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
              similarCards.map(c => {
                return (
                  <Carousel.Item key={c.id}>
                    <img 
                      style={{maxHeight: "600px"}}
                      className="d-block w-100 lazyload"
                      data-src={(c && c.card_images) ? c.card_images[0].image_url : ''}
                      alt="First slide"
                    />
                    <Card.Footer>
                      <PriceContainer>
                        Price on Amazon: {(c && c.card_prices && c.card_prices[0]) ? c.card_prices[0].amazon_price : ''} $
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
        <Button
          style={{width: "100%"}} 
          disabled={addToDeckDisabled ? addToDeckDisabled : false}
          variant="dark"
        >
          {addToDeckDisabled ? 'ADDED TO YOUR DECK' : 'ADD TO MY DECK'} 
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CardModal;