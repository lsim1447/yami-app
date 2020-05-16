import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import { CardProps, DEFAULT_CARD_VALUE, ICardDetails } from '../internal/Cards';
import CardModal from './CardModal';
import { FlipCardInner, FlipCardContainer, FlipCardFront, FlipCardBack } from '../internal/FlipComponents';

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