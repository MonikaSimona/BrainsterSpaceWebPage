import React from 'react'
import SingleCard from './SingleCard'

function CardsContainer({title,children}) {
    return (
        <div>
            <h1 className="title">{title}</h1>
            <div className="container-fluid  mb-5  ">
        
          {children}
        </div>
        </div>
        
    )
}

export default CardsContainer
