import React from 'react';
import { ICard } from '../components/external/YuGiOhCard';
import CardMap from '../components/external/CardMap';
import { cards } from '../FakeApi';

function Cards() {
  const all_cards: ICard[] = cards;
 
  return (
    <CardMap cards={ all_cards }/>
  );
}

export default Cards;