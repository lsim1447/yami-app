import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import { CardProps, DEFAULT_CARD_VALUE, ICardDetails } from '../internal/Cards';

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
    background-color: #eee9e5;
    width: 290px;
    height: 420px;
    perspective: 1000px;
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
    background-color: #bbb;
    color: black;
`;

const FlipCardBack = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
`;

const getText = (text: string, limit: number) => {
    return (text.length > 150) ? text.substring(0, limit - 3) + '...' : text; 
}

const FlipCard = ({ id, card } : CardProps) => {
    const initialValue: ICardDetails = DEFAULT_CARD_VALUE;
    const [cardDetails, setCardDetails] = useState(initialValue);

    useEffect(() => {
        if (id) {
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
            .then(response => {
                setCardDetails(response.data.data[0]);
            })
        } else if (card) {
            setCardDetails(card);
        }
    }, []);
    

    return (
        <Card style={{minWidth: "290px", width: "25%", marginBottom: "24px"}}>
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

            <Card.Body>
                <Card.Title> {getText(cardDetails.name, 150)} </Card.Title>
                <Card.Text> {getText(cardDetails.desc, 150)} </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted"> Price on Amazon: {(cardDetails.card_prices && cardDetails.card_prices.length) ? cardDetails.card_prices[0].amazon_price : initialValue.card_prices[0].amazon_price} $ </small>
            </Card.Footer>
        </Card>
    );
}

export default FlipCard;