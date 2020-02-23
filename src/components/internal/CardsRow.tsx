import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { ICard } from './../external/YuGiOhCard';
import FlipCard from './../external/FlipCard';
import { MAX_NUMBER_OF_CARDS_IN_ONE_ROW } from './../../constants';

type CardRowProps = {
    cards: ICard[]  
}

const CardRow = ({ cards } : CardRowProps) => {
    
    for (let index = (cards.length % MAX_NUMBER_OF_CARDS_IN_ONE_ROW ? cards.length % MAX_NUMBER_OF_CARDS_IN_ONE_ROW : MAX_NUMBER_OF_CARDS_IN_ONE_ROW); index < MAX_NUMBER_OF_CARDS_IN_ONE_ROW; index++) {
        cards.push({
            id: Math.floor(Math.random() * (100000 - 0 + 1)) + 0, 
            image_url: "https://cdn11.bigcommerce.com/s-ebhaloj/images/stencil/1280x1280/products/6750/12455/KOIYGSLEEVE__99423.1567709419.jpg?c=2&imbypass=on",
            title: "No title",
            description: "No description",
            note: "No note",
            type: "Undefined"
        })
    }

    return (
        <CardDeck>
        {
            cards.map(card => 
                <FlipCard 
                    id={card.id}
                    image_url={card.image_url}
                    description={card.description}
                    title={card.title}
                    note={card.note}
                    type={card.type}
                />
            )
        }
        </CardDeck>
    );
}


export default CardRow;