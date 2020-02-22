import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

export interface ICard
{
    id: number, 
    image_url: string,
    description: string,
    title: string,
    note: string
}

type CardRowProps = {
    cards: ICard[]
}

const CardRow = ({ cards } : CardRowProps) =>
    <CardDeck>
      {
        cards.map(card => {
          return (
            <Card>
              <Card.Img variant="top" src={ card.image_url } />
              <Card.Body>
                <Card.Title> { card.title } </Card.Title>
                <Card.Text> { card.description } </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"> { card.note } </small>
              </Card.Footer>
            </Card>
          );
        })
      }
    </CardDeck>


export default CardRow;