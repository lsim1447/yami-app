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
    const [open, setOpen] = useState(true);

    const getNrOfCardsByType = (type: string) => {
        if (!allCards) return 0;
        if (type === "All") return allCards.length;
        return allCards.filter((card: ICardDetails) => card && card.type === type).length;
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