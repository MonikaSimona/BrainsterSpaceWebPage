import React from 'react';
import CardsContainer from './CardsContainer';
import Banner from './Banner';
import SectionImgRight from './SectionImgRight';
import SingleCard from './SingleCard';
import {IoArrowForward} from 'react-icons/io5'
import {BiCalendar} from 'react-icons/bi'
import SectionImgLeft from './SectionImgLeft';
import BottomBanner from './BottomBanner';

function HomePage() {
    return (
        <div className="HomePage">
         <Banner title="Центар за Учење, Кариера и Иновација"/>
        <div className="main">
       
            <CardsContainer title="За Нас">
            <div className="row ">
                <SingleCard img="edukacija1" title="Едукација"/>
                <SingleCard img="nastani" title="Настани"/>
                <SingleCard img="coworking" title="Coworking"/>
           
                <SingleCard img="prostor_za_nastani" title="Простор за настани"/>
                <SingleCard img="tech-kompanii" title="Партнерства со Tech компании"/>
                <SingleCard img="edukacija2" title="Иновации за компании"/>
            </div>
            </CardsContainer>
            <SectionImgRight title="Компании" img="banner_img" >
            
                <button className="black-button mr-2 mb-md-2 p-2">АКАДЕМИИ</button>
                <button className="yellow-button mb-md-2 p-2">ЗА КОМПАНИИ</button>
            </SectionImgRight>
            <CardsContainer title="Настани">
            <div className="row mb-5">
                <SingleCard img="codeworks" title="Codeworks"/>
                <SingleCard img="instruktori" title="Deep Dive into Marketing"/>
                <SingleCard img="hristijan" title="Deep Dive into Data Science"/>
            </div>
            <div className="d-flex justify-content-end ">
            <button className="black-button px-3 py-2 d-flex align-items-center"> <BiCalendar className="mr-2 mb-md-2"/>КАЛЕНДАР НА НАСТАНИ</button>
            </div>
            
        <SectionImgLeft title="Coworking" img="coworking">
        <button className="black-button mr-2 p-2 text-linetrough mb-md-2">РЕЗЕРВИРАЈ МЕСТО</button>
        </SectionImgLeft>

            </CardsContainer>
            <SectionImgRight title="Простор за настани" img="prostor_za_nastani">
            <button className="black-button p-2 mb-md-2"> <IoArrowForward/> ВИДИ ГО ПРОСТОРОТ </button>
            </SectionImgRight>

            <BottomBanner title="Партнери" content="Имаш идеја? Отворени сме за соработка">
            <button className="black-button p-2 mt-4"> <IoArrowForward/> ВИДИ ГО ПРОСТОРОТ </button>
            </BottomBanner>
        </div>
         
        </div>
    )
}

export default HomePage
