import React from 'react';
import { Card } from 'react-bootstrap';
import YuGiOhCard, { ICard } from './YuGiOhCard';
import UnknownCard from './UnknownCard';
import styled from 'styled-components';
import "./FlipCard.css";

const FlipCardContainer = styled.div `
    background-color: transparent;
    width: auto;
    height: auto;
    perspective: 1000px;
    &:hover {
        transform: rotateY(180deg);
    }
`;

const FlipCardInner = styled.div `
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transform: rotateY(180deg);
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

const FlipCard = ({ id, image_url, title, description, note } : ICard) => 
    <Card>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card.Img variant="top" src={ image_url } />
                </div>
                <div className="flip-card-back">
                    <Card.Img variant="top" src="https://cdn11.bigcommerce.com/s-ebhaloj/images/stencil/1280x1280/products/6750/12455/KOIYGSLEEVE__99423.1567709419.jpg?c=2&imbypass=on" />
                </div>
            </div>
        </div>

        <Card.Body>
            <Card.Title> { title } </Card.Title>
            <Card.Text> { description } </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted"> { note } </small>
        </Card.Footer>
    </Card>

export default FlipCard;