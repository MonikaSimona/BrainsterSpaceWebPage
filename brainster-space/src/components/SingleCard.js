import React from 'react'
import { Card } from 'react-bootstrap'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

function SingleCard({ title, content, a, img, link, onClick }) {

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex"  >
            {a === true ? (<a href={link} target="_blank" rel="noreferrer" className="card-link ">
                <Card className="mb-4 card-lift" style={{ width: '100%', height: '100%' }}>

                    <Card.Img variant="top" src={require(`../assets/img/${img}.jpg`).default} style={{ height: '350px' }} />
                    <Card.Body>
                        <Card.Title className="text-bold">{title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti.
                    </Card.Text>
                        <IoArrowForwardCircleOutline className="arrow-btn" />

                    </Card.Body>
                </Card>
            </a>) : link === "#coworking" ? (

                <LinkScroll to={link} spy={true} smooth={true} >
                    <Card className="mb-4 card-lift" >

                        <Card.Img variant="top" src={require(`../assets/img/${img}.jpg`).default} style={{ height: '350px' }} />
                        <Card.Body>
                            <Card.Title className="text-bold">{title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti.
</Card.Text>
                            <IoArrowForwardCircleOutline className="arrow-btn" />

                        </Card.Body>
                    </Card>
                </LinkScroll>

            ) : (<LinkScroll to={link} className="card-link" onClick={onClick}>
                <Card className="mb-4 card-lift" >

                    <Card.Img variant="top" src={require(`../assets/img/${img}.jpg`).default} style={{ height: '350px' }} />
                    <Card.Body>
                        <Card.Title className="text-bold">{title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti.
                    </Card.Text>
                        <IoArrowForwardCircleOutline className="arrow-btn" />

                    </Card.Body>
                </Card>
            </LinkScroll>)}

        </div>
    )
}
export default SingleCard
