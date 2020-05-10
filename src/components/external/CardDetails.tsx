import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';

const CardContainer = styled.div `
  @media (min-width: 768px) {
    margin-left: 40%;
    margin-right: 35%;
    max-width: 23%;
    max-height: 200px;
  }
`;

export interface ICardImages
{
  image_url: string,
  image_url_small: string
}

export interface ICardPrices
{
  amazon_price: number,
  cardmarket_price: number,
  ebay_price: number,
  tcgplayer_price: number
}

export interface ICardSets
{
  set_code: string,
  set_name: string,
  set_price: string,
  set_rarity: string
}

export interface ICardDetails
{
    archetype?: string,
    atk?: number, 
    attribute?: string,
    card_images: ICardImages[],
    card_prices: ICardPrices[],
    card_sets: ICardSets[],
    def?: number,
    desc: string,
    id: number,
    level?: number,
    name: string,
    race?: string,
    type?: string
}

type CardDetailsProps = {
  id: number;
}

const CardDetails = ({ id } : CardDetailsProps) => {
  const initialValue = {
    archetype: '',
    atk: 0, 
    attribute: '',
    card_images: [{image_url: 'https://i.pinimg.com/originals/fd/0c/1c/fd0c1c9ee889c00387dbfb300ec22a9e.jpg'}],
    card_prices: [{amazon_price: '0.75'}],
    card_sets: [],
    def: 0,
    desc: '',
    id: 0,
    level: 0,
    name: '',
    race: '',
    type: ''
  }
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
          <Card.Title> {cardDetails.name}</Card.Title>
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

export default CardDetails;