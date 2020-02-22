import React from 'react';
import { Card } from 'react-bootstrap';

export interface ICard
{
    id: number, 
    image_url: string,
    description: string,
    title: string,
    note: string
}

const YuGiOhCard = ({ image_url, title, description, note } : ICard) => 
    <Card>
        <Card.Img variant="top" src={ image_url } />
        <Card.Body>
            <Card.Title> { title } </Card.Title>
            <Card.Text> { description } </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted"> { note } </small>
        </Card.Footer>
    </Card>

export default YuGiOhCard;