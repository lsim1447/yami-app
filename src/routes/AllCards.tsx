import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';
import axios from 'axios';
import { ICardDetails } from '../components/internal/Cards';
import FlipCard from '../components/external/FlipCard';
import { getRandomInt, initCards } from '../components/internal/Cards';

function AllCards() {
    const [nrOfCardsToShow, setNrOfCardsToShow] = useState(80);
    const [cards, setCards] = useState<ICardDetails[]>(initCards(nrOfCardsToShow));
    
    useEffect(() => {
        axios.get(`http://localhost:5000/cards`)
            .then(response => {
                setCards([]);
                setCards(response.data);
            })
    }, [nrOfCardsToShow]);

    return (
        <>
            <CardDeck style={{backgroundColor: "#212529"}}>
                {
                    cards.map(
                        (card: ICardDetails) => {
                            return (
                                <FlipCard 
                                    //id={card.id}
                                    isFullDescriptionVisible={false}
                                    card={card}
                                    key={card.id}
                                />
                            );
                    })
                }
            </CardDeck>
        </>
    );
}

export default AllCards;