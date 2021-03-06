import React from 'react'
import {Card} from 'react-bootstrap'

function SingleCardSpace({title,img}) {
    return (
        <div  className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex mb-4  justify-content-sm-center justify-content-center">
        <Card border="light">
            <Card.Img style={{height:'230px',width:'315px'}} src={require(`../../assets/img/${img}.jpg`).default} />
            <Card.Title style={{fontWeight:'bold'}}>
                {title}
            </Card.Title>
        </Card>
        </div>
    )
}

export default SingleCardSpace
