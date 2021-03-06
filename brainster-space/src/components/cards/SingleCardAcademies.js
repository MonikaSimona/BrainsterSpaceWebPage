import React from 'react'
import { Card } from 'react-bootstrap'
import {BsPerson} from 'react-icons/bs'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {FiClock} from 'react-icons/fi'
import {FaHandshake} from 'react-icons/fa'
 
function SingleCardAcademies({title,img,content,color,link}) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <a href={link} target="_blank" rel="noreferrer">
        <Card className="text-white d-flex mb-3 card-lift scale ">
                <Card.Img className=""  style={{height:'400px'}} src={require(`../../assets/img/${img}.jpg`).default} alt="Card image" />
                <Card.ImgOverlay className={`img-overlay  ${color}`}>
                    <Card.Title className="text-bold marg " style={{fontSize:'2.5rem'}}>{title}</Card.Title>
                    
                    <Card.Text >
                        <ul className="text-bold  " style={{fontSize:'1rem',fontWeight:'lighter'}}>
                            <li > <BsPerson className="mb-1 mr-1 iconSize"/>Слободни места: 4</li>
                            <li> <FaRegCalendarAlt className="mb-1 mr-1 iconSize"/> Уписи до: 26.08.2019</li>
                            <li> <FiClock className="mb-1 mr-1 iconSize"/>Стани дизајнер за 7 месеци</li>
                            <li><FaHandshake className="mb-1 mr-1 iconSize"/>Партнери за вработување: 5</li>
                        </ul>
                </Card.Text>
                    
                </Card.ImgOverlay>
            </Card>
        </a>
            
        </div>

    )
}

export default SingleCardAcademies
