import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { ICardDetails, DEFAULT_CARD_VALUE } from '../internal/Cards';
import CardModal from './CardModal';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const CartItemWrapper = styled.div `
    border-top: 1px solid #D3D3D3;
    padding: 24px 24px;
    padding-top: 0;
    width: 100%;
`;

const HeaderWrapper = styled.p `
    font-size: 16px;
    font-weight: bold;
    padding-top: 12px;
    text-align: center;
`;

const CenterWrapper = styled.p `
    text-align: center;
`;

const CloseIcon = styled.i `
    text-align: right;
    font-size: 36px;
    position: relative;
    right: 0px;
    width: 100%;
`

export type CartItemProps = {
    cards: ICardDetails[],
    setCards: any,
    cartItem: ICardDetails
}

const CartItem = ({ cards, setCards, cartItem } : CartItemProps) => {
    const [modalShow, setModalShow] = useState(false);

    const removeCartItem = () => {
        confirmAlert({
            title: 'Confirmation',
            message: 'Are you sure you want to delete this?',
            buttons: [
              {
                label: 'Yes, I want to delete this.',
                onClick: () => {
                    const newCards = cards.filter(c => c.name !== cartItem.name);
                    setCards(newCards);
                }
              },
              {
                label: 'No, keep it in my bag.',
                onClick: () => {
                    console.log(cartItem.name, ' stays in the bag.')
                }
              }
            ]
          });
        
    }

    return (
        <CartItemWrapper>
            <Row>
                <CloseIcon
                    onClick={() => removeCartItem()}
                >
                    &times;
                </CloseIcon>
                <Col sm={3}>
                    <img
                        width="100%"
                        height="100%"
                        className="lazyload"
                        onClick={() => setModalShow(true)}
                        src={DEFAULT_CARD_VALUE.card_images[0].image_url} 
                        data-src={(cartItem.card_images && cartItem.card_images.length) ? cartItem.card_images[0].image_url : cartItem.card_images[0].image_url} />
                </Col>
                <Col sm={3}>
                    <HeaderWrapper> {cartItem.name} </HeaderWrapper>
                    <CenterWrapper> This card is a {cartItem.type} </CenterWrapper>
                </Col>
                <Col sm={4}>
                    
                    <HeaderWrapper> ABOUT THE CARD </HeaderWrapper>
                    <CenterWrapper> {cartItem.desc} </CenterWrapper>
                </Col>
                <Col sm={2}>
                    <HeaderWrapper> PRICE </HeaderWrapper>
                    <CenterWrapper> {cartItem.card_prices[0].amazon_price} $</CenterWrapper>
                </Col>
                
            </Row>

            <CardModal
                addToDeckDisabled={true}
                card={cartItem}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </CartItemWrapper>
    );
}

export default CartItem;