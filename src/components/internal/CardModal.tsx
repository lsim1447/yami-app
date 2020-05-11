import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ICardDetails } from '../internal/Cards';
import YuGiOhCard from '../external/YuGiOhCard';
import styled from 'styled-components';

type CartModalProps = {
    card?: ICardDetails,
    show: boolean,
    setShow: any
}

const CardModal = ({ card, show, setShow }: CartModalProps) => {
  

  return (
    <Modal show={show} onHide={() => setShow(false)}>
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
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CardModal;