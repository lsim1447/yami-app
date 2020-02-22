import React from 'react';
import CardRow from './../internal/CardsRow';
import { ICard } from './../external/YuGiOhCard';
import { MAX_NUMBER_OF_CARDS_IN_ONE_ROW } from './../../constants';

type CardMapProps = {
    cards: ICard[]
}

const CardMap = ({ cards } : CardMapProps) => {
    let cardMap: Array<Array<ICard>> = [];
    let tempArray: Array<ICard> = [];

    cards.forEach((card, index) => {
        const counter = index + 1;
        
        tempArray.push(card);
        if (counter % MAX_NUMBER_OF_CARDS_IN_ONE_ROW === 0 || index === cards.length - 1){
            cardMap.push([...tempArray]);
            tempArray.length = 0;
        }
    });

    console.log(cardMap)

    return (
        <div>
        {
            cardMap.map(cardRow => {
                return (
                    <CardRow cards={ cardRow } />
                );
            })
        }
        </div>
    )
}

export default CardMap;