import React from 'react';
import CardsContainer from './CardsContainer';
import Banner from './Banner';
import SectionImgRight from './SectionImgRight';
import SingleCard from './SingleCard';
import {IoArrowForward} from 'react-icons/io5'

function HomePage() {
    return (
        <div className="HomePage">
         <Banner title="Центар за Учење, Кариера и Иновација"/>
        <div className="main">
       
            <CardsContainer title="За Нас">
            <div className="row mb-5">
                <SingleCard img="edukacija1" title="Едукација"/>
                <SingleCard img="nastani" title="Настани"/>
                <SingleCard img="coworking" title="Coworking"/>
            </div>
            <div className="row">
                <SingleCard img="prostor_za_nastani" title="Простор за настани"/>
                <SingleCard img="tech-kompanii" title="Партнерства со Tech компании"/>
                <SingleCard img="edukacija2" title="Иновации за компании"/>
            </div>
            </CardsContainer>
            <SectionImgRight title="Компании" img="banner_img" >
            
                <button className="black-button mr-2 p-3">АКАДЕМИИ</button>
                <button className="yellow-button p-3">ЗА КОМПАНИИ</button>
            </SectionImgRight>
            <CardsContainer title="Настани">
            <div className="row mb-5">
                <SingleCard img="codeworks" title="Codeworks"/>
                <SingleCard img="instruktori" title="Deep Dive into Marketing"/>
                <SingleCard img="hristijan" title="Deep Dive into Data Science"/>
            </div>
            </CardsContainer>
            <SectionImgRight title="Простор за настани" img="prostor_za_nastani">
            <button className="black-button p-3"> <IoArrowForward/> ВИДИ ГО ПРОСТОРОТ </button>
            </SectionImgRight>
        </div>
         
        </div>
    )
}

export default HomePage
