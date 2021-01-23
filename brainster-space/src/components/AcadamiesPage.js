import React from 'react'
import CardsContainer from './CardsContainer'
import SectionImgRight from './SectionImgRight'
import SingleCardAcademies from './SingleCardAcademies'

function AcadamiesPage() {
    return (
        <div className="Academies">
            <div className="main">
                <SectionImgRight title="Академии" img="codeworks">

                </SectionImgRight>
                <CardsContainer>
                    <div className="row">
                        <SingleCardAcademies title="Академија за графички дизајн" img="edukacija1" color="purple"/>
                        <SingleCardAcademies title="Академија за дигитален маркетинг" img="edukacija2" color="red"/>
                        <SingleCardAcademies title="Академија за Front-end програмирање" img="edukacija" color="green"
                        />
                    
                    
                        <SingleCardAcademies title="Академија за Full-stack програмирање" img="edukacija" color="green"/>
                        <SingleCardAcademies title="Академија за Data science" img="edukacija2" color="blue"/>
                        <SingleCardAcademies title="Академија за software testing" img="edukacija1" color="teal"/>
                        </div>
                </CardsContainer>
            </div>
        </div>
    )
}

export default AcadamiesPage