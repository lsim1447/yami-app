import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import { CardProps, DEFAULT_CARD_VALUE, ICardDetails } from '../internal/Cards';

const CardContainer = styled.div `
  @media (min-width: 768px) {
    margin-left: 40%;
    margin-right: 35%;
    max-width: 23%;
    max-height: 200px;
  }
`;

const YuGiOhCard = ({ id } : CardProps) => {
  const initialValue: ICardDetails = DEFAULT_CARD_VALUE;
  const [cardDetails, setCardDetails] = useState(initialValue);

  useEffect(() => {
    axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      .then(response => {
        setCardDetails(response.data.data[0]);
      })
  }, []);

  return (
    <CardContainer>
      <Card>
        <Card.Img variant="top" src={(cardDetails.card_images && cardDetails.card_images.length) ? cardDetails.card_images[0].image_url : initialValue.card_images[0].image_url} />
        <Card.Body>
          <Card.Title> {cardDetails.name} </Card.Title>
          <Card.Text>
            {cardDetails.desc}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted text"> Price on Amazon: {(cardDetails.card_prices && cardDetails.card_prices.length) ? cardDetails.card_prices[0].amazon_price : initialValue.card_prices[0].amazon_price} $</small>
        </Card.Footer>
      </Card>
    </CardContainer>
  );
}

export default YuGiOhCard;