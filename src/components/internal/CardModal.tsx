import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ICardDetails } from '../internal/Cards';
import YuGiOhCard from '../external/YuGiOhCard';
import styled from 'styled-components';

type CartModalProps = {
    card?: ICardDetails,
    show: boolean,
    onHide: any
}

function CardModal(props: CartModalProps) {
  const {
    card,
    show,
    onHide
  } = props;

  return (
    <Modal animation={true} show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title> {card ? card.name : ''} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YuGiOhCard
          isFullDescriptionVisible={true}
          card={card}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CardModal;