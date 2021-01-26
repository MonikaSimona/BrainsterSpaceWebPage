import React from 'react'
import {Card} from 'react-bootstrap'

function SingleCardSpace({title,img}) {
    return (
        <div  className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex mb-4 justify-content-sm-center">
        <Card border="light">
            <Card.Img style={{height:'230px',width:'350px'}} src={require(`../assets/img/${img}.jpg`).default} />
            <Card.Title>
                {title}
            </Card.Title>
        </Card>
        </div>
    )
}

export default SingleCardSpace
