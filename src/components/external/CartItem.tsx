import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { ICardDetails, DEFAULT_CARD_VALUE } from '../internal/Cards';

const CartItemWrapper = styled.div `
    border-top: 1px solid #D3D3D3;
    padding: 12px 24px;
    width: 100%;
`;

const CartItemName = styled.p `
    font-size: 16px;
    font-weight: bold;
`;

const CartItemDescription = styled.p `

`;

export type CartItemProps = {
    cartItem: ICardDetails
}

const CartItem = ({ cartItem } : CartItemProps) => {
    
    return (
        <CartItemWrapper>
            <Row>
                <Col sm={3}>
                    <img
                        width="150px"
                        height="200px"
                        className="lazyload" 
                        src={DEFAULT_CARD_VALUE.card_images[0].image_url} 
                        data-src={(cartItem.card_images && cartItem.card_images.length) ? cartItem.card_images[0].image_url : cartItem.card_images[0].image_url} />
                </Col>
                <Col sm={3}>
                    <CartItemName> {cartItem.name} </CartItemName>
                    This card is a {cartItem.type}
                </Col>
                <Col sm={5}>
                    <p><strong> ABOUT THE CARD </strong></p>
                    <CartItemDescription> {cartItem.desc} </CartItemDescription>
                </Col>
                <Col sm={1}>
                    <p><strong> PRICE </strong></p>
                    <CartItemDescription> {cartItem.card_prices[0].amazon_price} </CartItemDescription>
                </Col>
            </Row>
        </CartItemWrapper>
    );
}

export default CartItem;