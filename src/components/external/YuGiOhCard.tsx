import React from 'react';
import { Card } from 'react-bootstrap';

export interface ICard
{
    id: number, 
    image_url: string,
    title: string,
    description: string,
    note: string,
    type: string
}

const YuGiOhCard = ({ image_url, title, description, note } : ICard) => 
    <Card style={{minWidth: "290px"}}>
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