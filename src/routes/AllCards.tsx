import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';
import FlipCard from '../components/external/FlipCard';
import { ICardDetails } from '../components/internal/Cards';
import CardAPI from './../CardAPI.json';

function AllCards() {
    const [cards, setCards] = useState<ICardDetails[]>([]);
    const [nrOfCardsToShow, setNrOfCardsToShow] = useState(102);
    const localCards: ICardDetails[] = CardAPI.data.slice(0, nrOfCardsToShow);
    
    /*
    useEffect(() => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes`)
            .then(response => {
                console.log(response.data.data);
                setCards(response.data.data.slice(0, nrOfCardsToShow));
            })
    }, [nrOfCardsToShow]);
    */

    return (
        <CardDeck style={{backgroundColor: "#212529"}}>
            {
                localCards.map(
                    card => {
                        return (
                            <FlipCard 
                                //id={card.id}
                                card={card}
                                key={card.id}
                            />
                        );
                })
            }
        </CardDeck>
    );
}

export default AllCards;