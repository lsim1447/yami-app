import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    ICardDetails,
    getInitialCardList
} from '../components/internal/Cards';

const initialState = {
    allCards: getInitialCardList(20), 
    setAllCards: (newCards: ICardDetails[]) => console.log('testing card lists setter...'),
    cards: getInitialCardList(20),
    setCards: (newCards: ICardDetails[]) => console.log('testing card lists setter...'),
}

export const CardContext = React.createContext(initialState);
export const CardContextConsumer = CardContext.Consumer;

export const CardProvider = (props: any) => {
    const [cards, setTheCards] = useState<ICardDetails[]>([]);
    const [all_cards, setAllTheCards] = useState<ICardDetails[]>([]);

    const setCards = (newCards: ICardDetails[]) => {
        setTheCards(newCards);
    }

    const setAllCards = (newCards: ICardDetails[]) => {
        setAllTheCards(newCards);
    }
    
    useEffect(() => {
        axios.get(`http://localhost:5000/cards`)
            .then(response => {
                setTheCards(response.data);
                setAllTheCards(response.data);
            })
    }, []);
    
    return (
        <CardContext.Provider value={{ 
            allCards: all_cards,
            setAllCards: setAllCards,
            cards: cards,
            setCards: setCards
         }}>
            { props.children }
        </CardContext.Provider>
    );
}