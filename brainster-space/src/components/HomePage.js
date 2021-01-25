
import CardsContainer from './CardsContainer';
import Banner from './Banner';
import SectionImgRight from './SectionImgRight';
import SingleCard from './SingleCard';
import {IoArrowForward} from 'react-icons/io5'
import {BiCalendar} from 'react-icons/bi'
import SectionImgLeft from './SectionImgLeft';
import BottomBanner from './BottomBanner';
import {Popover,OverlayTrigger} from  'react-bootstrap';

import React, { PureComponent } from 'react'
import ModalBootstrap from './ModalBootstrap';

class HomePage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isOpen:false,
        }
    }
    openModal = () => this.setState({isOpen:true})
    closeModal = () => this.setState({ isOpen: false });
    handleSubmit = () => {

    }
    render() {
        const popover = (
            <Popover>
                <Popover.Content>
                    <strong>
                       Местата се распродадени
                        </strong>
                </Popover.Content>
            </Popover> );
        return (
            <div className="HomePage">
             <Banner title="Центар за Учење, Кариера и Иновација"/>
            <div className="main">
           
                <CardsContainer title="За Нас">
                <div className="row ">
                    <SingleCard img="edukacija1" title="Едукација" link="https://brainster.co"/>
                    <SingleCard img="nastani" title="Настани" link="/nastani"/>
                    <SingleCard img="coworking" title="Coworking" link="/coworking"/>
               
                    <SingleCard img="prostor_za_nastani" title="Простор за настани" link="prostor_za_nastani" />
                    <SingleCard img="tech-kompanii" title="Партнерства со Tech компании"/>
                    
                    <SingleCard img="edukacija2" title="Иновации за компании" onClick={this.openModal}/>
                    {this.state.isOpen ? <ModalBootstrap handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit} /> : null}
                </div>
                </CardsContainer>
                <SectionImgRight title="Компании" img="banner_img" >
                
                    <button className="black-button mr-2 mb-md-2  mb-sm-2 mb-2 p-2">АКАДЕМИИ</button>
                    <button className="yellow-button mb-md-2 mb-sm-2 mb-2 p-2">ЗА КОМПАНИИ</button>
                </SectionImgRight>
                <CardsContainer title="Настани">
                <div className="row mb-5">
                    <SingleCard img="codeworks" title="Codeworks"/>
                    <SingleCard img="instruktori" title="Deep Dive into Marketing"/>
                    <SingleCard img="hristijan" title="Deep Dive into Data Science"/>
                </div>
                <div className="d-flex justify-content-end align ">
                <button className="black-button px-3 py-2 mb-md-2 mb-sm-2 mb-2 d-flex "> <BiCalendar className="mr-2  align-self-center"/>КАЛЕНДАР НА НАСТАНИ</button>
                </div>
                
            <SectionImgLeft title="Coworking" img="coworking" id="coworking">
            <OverlayTrigger trigger="click" placement="bottom"
            overlay={popover}>
            <button className="black-button mr-2 p-2 text-linetrough btn-linetrough mb-md-2 mb-sm-2 mb-2">РЕЗЕРВИРАЈ МЕСТО</button>
            </OverlayTrigger>
          
            </SectionImgLeft>
    
                </CardsContainer>
                <SectionImgRight title="Простор за настани" img="prostor_za_nastani">
                <button className="black-button p-2 mb-md-2 mb-sm-2 mb-2 d-flex"> <IoArrowForward className="align-self-center mt-1 mr-1"/> ВИДИ ГО ПРОСТОРОТ </button>
                </SectionImgRight>
    
                <BottomBanner title="Партнери" content="Имаш идеја? Отворени сме за соработка">
                
                <button className="black-button p-2 mt-4 "> <IoArrowForward className=" mb-1 "/> ВИДИ ГО ПРОСТОРОТ </button>
                
                </BottomBanner>
            </div>
             
            </div>
        )
    }
}


export default HomePage
