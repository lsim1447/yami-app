import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import { CardProps, DEFAULT_CARD_VALUE, ICardDetails } from '../internal/Cards';
import CardModal from './CardModal';

const FlipCardInner = styled.div `
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const FlipCardContainer = styled.div `
    background-color: transparent;
    perspective: 1000px;
    width: 290px;
    height: 420px;

    @media (max-width: 420px) {
        width: 100%;
        max-height: 600px;
        height: 600px;
    }

    &:hover {
        ${FlipCardInner} {
            transform: rotateY(180deg);
        }
    }
`;

const FlipCardFront = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: black;
`;

const FlipCardBack = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: white;
    transform: rotateY(180deg);
`;

const SimpleCardContainer = styled.div `
    @media (max-width: 420px) {
        width: 100%;
        max-height: 600px;
        height: 600px;
        margin: 0 !important;
    }
`;

const SimpleFlipCard = ({ id, isFullDescriptionVisible, card } : CardProps) => {
    const initialValue: ICardDetails = DEFAULT_CARD_VALUE;
    const [cardDetails, setCardDetails] = useState(initialValue);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        if (id) {
            console.log('Make a get call by ID.')
        } else if (card) {
            setCardDetails(card);
        }
    }, []);
    
    return (
        <SimpleCardContainer>
            <Card style={{minWidth: "230px", margin: "24px", backgroundColor: "transparent", border: "none"}} onClick={() => setModalShow(true)}>
                <FlipCardContainer>
                    <FlipCardInner>
                        <FlipCardFront>
                            <Card.Img variant="top" src={(cardDetails.card_images && cardDetails.card_images.length) ? cardDetails.card_images[0].image_url : initialValue.card_images[0].image_url} />
                        </FlipCardFront>
                        <FlipCardBack>
                            <Card.Img variant="top" src="https://cdn11.bigcommerce.com/s-ebhaloj/images/stencil/1280x1280/products/6750/12455/KOIYGSLEEVE__99423.1567709419.jpg?c=2&imbypass=on" />
                        </FlipCardBack>
                    </FlipCardInner>
                </FlipCardContainer>
            </Card>
            <CardModal
                card={card}
                onHide={() => setModalShow(false)}
                show={modalShow}
                addToDeckDisabled={true}
            />
        </SimpleCardContainer>
    );
}

export default SimpleFlipCard;