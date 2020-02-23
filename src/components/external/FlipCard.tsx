import React from 'react';
import { Card } from 'react-bootstrap';
import { ICard } from './YuGiOhCard';
import styled from 'styled-components';

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

const FlipCard = ({ id, image_url, title, description, note } : ICard) => 
    <Card style={{minWidth: "290px"}}>
        <FlipCardContainer>
            <FlipCardInner>
                <FlipCardFront>
                    <Card.Img variant="top" src={ image_url } />
                </FlipCardFront>
                <FlipCardBack>
                    <Card.Img variant="top" src="https://cdn11.bigcommerce.com/s-ebhaloj/images/stencil/1280x1280/products/6750/12455/KOIYGSLEEVE__99423.1567709419.jpg?c=2&imbypass=on" />
                </FlipCardBack>
            </FlipCardInner>
        </FlipCardContainer>

        <Card.Body>
            <Card.Title> { title } </Card.Title>
            <Card.Text> { description } </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted"> { note } </small>
        </Card.Footer>
    </Card>

export default FlipCard;