import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    ICardDetails,
    getInitialCardList
} from '../components/internal/Cards';

const initialState = {
    cards: getInitialCardList(20),
    setCards: (a: any) => {},
    allCards: getInitialCardList(20), 
    setAllCards: (a: any) => {},
    cartItems: getInitialCardList(0),
    setCartItems: (a: any) => {},
}

export const CardContext = React.createContext(initialState);
export const CardContextConsumer = CardContext.Consumer;

export const CardProvider = (props: any) => {
    const [cards, setCards] = useState<ICardDetails[]>([]);
    const [cartItems, setCartItems] = useState<ICardDetails[]>([]);
    const [all_cards, setAllCards] = useState<ICardDetails[]>([]);

    useEffect(() => {
        let id_string = localStorage.getItem('card_ids');
    
        if (id_string) {
            let cardIDs =  id_string ? id_string.split('|') : [];

            cardIDs.forEach(id => {
                axios.get(`http://localhost:5000/cards/${id}`)
                    .then(response => {
                        const newCartItems = cartItems;
                        newCartItems.push(response.data);
                        setCartItems(newCartItems);
                    })
            });
        }

        axios.get(`http://localhost:5000/cards`)
            .then(response => {
                setCards([...response.data]);
                setAllCards([...response.data]);
            })
    }, []);
    
    return (
        <CardContext.Provider value={{ 
            cards: cards,
            setCards: setCards,
            allCards: all_cards,
            setAllCards: setAllCards,
            cartItems: cartItems,
            setCartItems: setCartItems,
         }}>
            { props.children }
        </CardContext.Provider>
    );
}