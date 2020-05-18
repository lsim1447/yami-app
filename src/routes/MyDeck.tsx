import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  CardDeck, Col, Row } from 'react-bootstrap';
import '../special-styles/sidebar-left.css'

import { ICardDetails } from '../components/internal/Cards';
import SimpleFlipCard from '../components/external/SimpleFlipCard';
import { initCards } from '../components/internal/Cards';
import { BackgroundContainer, CenterWrapper } from '../components/internal/CommonContainers';
import { SideBarMenuContainer, SideBarListContainer, SideBarListItem, BoxedItem, LogoBold, LogoTitle } from '../components/internal/SideBarComponents';
import { SIDE_BAR_OPTIONS_API } from '../constants';

function MyDeck() {
    const [nrOfCardsToShow, setNrOfCardsToShow] = useState(80);
    const [allCards, setAllCards] = useState<ICardDetails[]>(initCards(nrOfCardsToShow));
    const [cards, setCards] = useState<ICardDetails[]>(initCards(nrOfCardsToShow));

    const getDeckValue = () => {
        if (cards && cards.length) {
            return cards.reduce((accumulator: number, currentCard: ICardDetails) => {
                const price: number = Number((currentCard && currentCard.card_prices && currentCard.card_prices[0]) ? currentCard.card_prices[0].amazon_price : 0);
                const newAccumulator: number = Number((accumulator + price).toFixed(2));

                return newAccumulator ? newAccumulator : accumulator;
            }, 0);
        } else {
            return 0;
        }
    }

    const getNrOfCardsByType = (type: string) => {
        if (!allCards) return 0;
        if (type === "All") return allCards.length;
        
        return allCards.filter((card: ICardDetails) => card.type?.includes(type)).length;
    }

    const filterCardsByType = (type: string) => {
        setCards([]);
        if (type === "All") {
            setCards(allCards);
        } else {
            const filteredCards: ICardDetails[] = allCards.filter(card => card.type === type);
            setCards(filteredCards); 
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/cards`)
            .then(response => {
                setCards([]);
                setCards(response.data);
                setAllCards(response.data);
            })
    }, []);

 

    return (
        <BackgroundContainer theme={
            {
                backgroundImage: "my-deck-background.jpg"
            }
        }>
            <Row>
                <Col sm={3}>
                    <div>
                        <i className="fa fa-bars toggle_menu"></i>
                        <div className="sidebar_menu">
                            <i className="fa fa-times"></i>
                            <CenterWrapper>
                                <BoxedItem>
                                    Check your 
                                    <LogoBold>
                                        Deck
                                    </LogoBold>
                                </BoxedItem>
                                <LogoTitle>
                                    Be a Professional Duel Master
                                </LogoTitle>
                            </CenterWrapper>

                            <SideBarListContainer>
                            {
                                SIDE_BAR_OPTIONS_API.map(item => {
                                    return (
                                        <SideBarListItem 
                                            onClick={() => filterCardsByType(item.type)}
                                        >
                                            {item.type} ({getNrOfCardsByType(item.type)})
                                        </SideBarListItem>
                                    )
                                })
                            }
                            </SideBarListContainer>
                        </div>
                    </div>
                </Col>
                <Col sm={7}>
                    <CardDeck>
                    {
                        cards.map((card: ICardDetails) => {
                            return (
                                <SimpleFlipCard 
                                    isFullDescriptionVisible={false}
                                    card={card}
                                    key={card.id}
                                />
                            );
                        })
                    }
                    </CardDeck>
                </Col>
                <Col sm={2}>
                    <SideBarMenuContainer>
                        <div className="sidebar_menu_right">
                            <SideBarListContainer>
                                <SideBarListItem style={{fontSize: "22px"}}>
                                    Account Balance: 29.7 $
                                </SideBarListItem>
                            </SideBarListContainer>
                            <SideBarListContainer>
                                <SideBarListItem>
                                    Your deck's value: {getDeckValue()} $
                                </SideBarListItem>
                            </SideBarListContainer>
                            <SideBarListContainer>
                                <SideBarListItem>
                                    Cards: { allCards.length }
                                </SideBarListItem>
                            </SideBarListContainer>
                            <SideBarListContainer>
                                <SideBarListItem>
                                    Monster cards: { getNrOfCardsByType('Monster') }
                                </SideBarListItem>
                            </SideBarListContainer>
                            <SideBarListContainer>
                                <SideBarListItem>
                                    Special cards: { allCards.length - getNrOfCardsByType('Monster') }
                                </SideBarListItem>
                            </SideBarListContainer>
                            <CenterWrapper>
                                <BoxedItem>
                                    Name your 
                                    <LogoBold>
                                        Beast
                                    </LogoBold>
                                </BoxedItem>
                                <LogoTitle>
                                    Let's Be Professional. Never Give Up!
                                </LogoTitle>
                            </CenterWrapper>
                        </div>
                    </SideBarMenuContainer>
                </Col>
            </Row>
        </BackgroundContainer>
    );
}

export default MyDeck;