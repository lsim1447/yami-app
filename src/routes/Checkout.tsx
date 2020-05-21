import React, { useContext, useState, useEffect } from 'react';
import { CardContext } from "../contexts/CardContext";
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import CartItem from '../components/external/CartItem';
import { ICardDetails } from '../components/internal/Cards';

const CustomCol = styled(Col) `
    border-left: 1px solid #D3D3D3;
    border-right: 1px solid #D3D3D3;
    min-height: 100vh;
`;

const LeftCol = styled(CustomCol) `
    background: url(checkout-left.jpg) top center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @media (max-width: 575px) {
        display: none;
    }
`;
const RightCol = styled(CustomCol) `
    background: url(checkout-right.jpg) top center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @media (max-width: 575px) {
        display: none;
    }
`;

const BagWrapper = styled.div `
    font-size: 30px;
    font-weight: 600;
    padding: 12px 0;
    text-align: center;
    width: 100%;
`;

const CheckoutButton = styled(Button)`
    background-color: black;
    float: right;
    margin-bottom: 24px;
    padding: 12px 60px;
`;

const CheckoutFooterWrapper = styled.div `
    border-top: 1px solid #D3D3D3;
    padding-top: 24px;
    width: 100%;
`;

const CoverWrapper = styled.div `
    background: url(checkout_cover_image.jpg) top center;
    margin: 0;
    padding: 12px;
    max-height: 200px;
    margin-top: 12px;
    min-height: 200px;
    width: 100%;
`;

const DescriptionWrapper = styled.div `
    border-bottom: 1px solid #D3D3D3;
    overlay: hidden;
    padding: 16px 18px;
    text-align: center;
    width: 100%;
`;

const TitleWrapper = styled.div `
    border-bottom: 1px solid #D3D3D3;
    font-size: 36px;
    font-weight: 800;
    padding-bottom: 16px 18px;
    text-align: center;
`;

const TotalPrice = styled.div `
    border-top: 1px solid #D3D3D3;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 12px;
    padding-top: 12px;
    text-align: right;
    width: 100;
`;

function Checkout() {
  const { allCards, setAllCards } = useContext(CardContext);
  const { cartItems, setCartItems } = useContext(CardContext);

  const getTotalPrice = () => {
    if (cartItems && cartItems.length) {
        return cartItems.reduce((accumulator: number, currentCard: ICardDetails) => {
            const price: number = Number((currentCard && currentCard.card_prices && currentCard.card_prices[0]) ? currentCard.card_prices[0].amazon_price : 0);
            const newAccumulator: number = Number((accumulator + price).toFixed(2));

            return newAccumulator ? newAccumulator : accumulator;
        }, 0);
    } else {
        return 0;
    }
  }

  return (
    <Row>
        <LeftCol sm={3}/>
        <CustomCol sm={6}>
            <DescriptionWrapper>
                Yu-Gi-Oh! is a Japanese manga series about gaming written and illustrated by Kazuki Takahashi.
                It was serialized in Shueisha's Weekly Shōnen Jump magazine between September 30, 1996 and March 8, 2004.
            </DescriptionWrapper>
            <TitleWrapper>
                COMPLETE YOUR CHECKOUT
            </TitleWrapper>
            <DescriptionWrapper>
                Congratulations! Your order qualifies for FREE Standard Shipping. No offer code needed.
            </DescriptionWrapper>
            <CoverWrapper />
            <BagWrapper>
                My Bag ({cartItems.length} items)
            </BagWrapper>
            {
                cartItems.map((card: ICardDetails) => {
                    return (
                        <CartItem
                            cartItem={card}
                        />
                    )
                })
            }
            <TotalPrice> TOTAL PRICE: {getTotalPrice()} $</TotalPrice>
            <CheckoutFooterWrapper>
                <CheckoutButton variant="dark"> CHECKOUT </CheckoutButton>
            </CheckoutFooterWrapper>
        </CustomCol>
        <RightCol sm={3}/>
    </Row>
  );
}

export default Checkout;