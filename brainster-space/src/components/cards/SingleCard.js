import React from 'react'
import { Card } from 'react-bootstrap'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

function SingleCard({ title, content, a, img, link, onClick }) {

    return (
        <Card className="mb-4 card-lift" onClick={onClick} >

            <Card.Img variant="top" src={require(`../../assets/img/${img}.jpg`).default} style={{ height: '350px' }} />
            <Card.Body>
                <Card.Title className="text-bold">{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti.
                </Card.Text>
                <IoArrowForwardCircleOutline className="arrow-btn" />

            </Card.Body>
        </Card>



    )
}
export default SingleCard
