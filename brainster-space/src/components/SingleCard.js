import React from 'react'
import { Card } from 'react-bootstrap'
import {IoArrowForwardCircleOutline} from 'react-icons/io5'

function SingleCard({title,content,img}) {
   
    return (
        <div className="col-md-4 d-flex"  >
            <Card >
            
        <Card.Img variant="top" src={require(`../assets/img/${img}.jpg`).default} style={{height:'350px'}}/>
                <Card.Body>
                    <Card.Title className="text-bold">{title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti.
                    </Card.Text>
                    <a href="https://facebook.com" className="arrow-btn"><IoArrowForwardCircleOutline/></a>
                    
                </Card.Body>
            </Card>
            
        </div>
    )
}
export default SingleCard
