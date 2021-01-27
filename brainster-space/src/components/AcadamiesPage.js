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
                        <SingleCardAcademies title="Академија за графички дизајн" img="edukacija1" color="purple" link="https://design.brainster.co/"/>
                        <SingleCardAcademies title="Академија за дигитален маркетинг" img="edukacija2" color="red" link="https://marketpreneurs.brainster.co/?utm_source=facebook%2C%20instagram&utm_medium=web&utm_campaign=dizajn%20mk"/>
                        <SingleCardAcademies title="Академија за Front-end програмирање" img="edukacija" color="green" link="https://codepreneurs.brainster.co/?utm_source=facebook%2C%20instagram&utm_medium=web&utm_campaign=marketing%20mk"
                        />
                    
                    
                        <SingleCardAcademies title="Академија за Full-stack програмирање" img="edukacija" color="green" link="https://codepreneurs.brainster.co/?utm_source=facebook%2C%20instagram&utm_medium=web&utm_campaign=marketing%20mk"/>
                        <SingleCardAcademies title="Академија за Data science" img="edukacija2" color="blue" link="https://datascience.brainster.co/?utm_source=facebook%2C%20instagram&utm_medium=web&utm_campaign=codepreneurs%20mk"/>
                        <SingleCardAcademies title="Академија за software testing" img="edukacija1" color="teal" link="https://qa.brainster.co/?utm_source=facebook%2C%20instagram&utm_medium=web&utm_campaign=codepreneurs%20mk"/>
                        </div>
                </CardsContainer>
            </div>
        </div>
    )
}

export default AcadamiesPage