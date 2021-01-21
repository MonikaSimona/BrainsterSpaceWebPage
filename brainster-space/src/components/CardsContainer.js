import React from 'react'
import SingleCard from './SingleCard'

function CardsContainer({title}) {
    return (
        <div>
            <h1 className="title">{title}</h1>
            <div className="container mb-5  ">
        
            <div className="row mb-5">
                <SingleCard img="coworking"/>
                <SingleCard/>
                <SingleCard/>
            </div>
            <div className="row">
                <SingleCard/>
                <SingleCard/>
                <SingleCard/>
            </div>
        </div>
        </div>
        
    )
}

export default CardsContainer
