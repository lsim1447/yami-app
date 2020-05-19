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
    const [cards, setCards] = useState<ICardDetails[]>([]);

    const setAllCards = (newCards: ICardDetails[]) => {
        setCards(newCards);
    }
    
    useEffect(() => {
        axios.get(`http://localhost:5000/cards`)
            .then(response => {
                setCards(response.data);
            })
    }, []);
    
    return (
        <CardContext.Provider value={{ 
            ...initialState,
            allCards: cards,
            setAllCards: setAllCards
         }}>
            { props.children }
        </CardContext.Provider>
    );
}