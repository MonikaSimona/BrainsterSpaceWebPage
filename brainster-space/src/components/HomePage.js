
import CardsContainer from './CardsContainer';
import Banner from './Banner';
import SectionImgRight from './SectionImgRight';
import SingleCard from './SingleCard';
import { IoArrowForward } from 'react-icons/io5'
import { BiCalendar } from 'react-icons/bi'
import SectionImgLeft from './SectionImgLeft';
import BottomBanner from './BottomBanner';
import { Popover, OverlayTrigger } from 'react-bootstrap';

import React, { PureComponent } from 'react'
import ModalBootstrap from './ModalBootstrap';
import JoinForm from './Forms/JoinForm';
import InovationsForm from './Forms/InovationsForm';
import { NavLink, Link as NLink } from 'react-router-dom';
import { Link, Element } from 'react-scroll';


class HomePage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            title: 'Компании',
            img: 'banner_img'
        }
    }
    openModal = () => this.setState({ isOpen: true })
    closeModal = () => this.setState({ isOpen: false });
    handleSubmit = (e) => {
        e.preventDefault();
    }

    setAcademiesProps = () => {
        this.setState({
            title:"Едукација",
            img:"edukacija1"
        })
    }
    setCompaniesProps = () => {
        this.setState({
            title:"Компании",
            img:"banner_img"
        })
    }

  
    render() {
        const popover = (
            <Popover>
                <Popover.Content>
                    <strong>
                        Местата се распродадени
                        </strong>
                </Popover.Content>
            </Popover>);
        return (
            <div className="HomePage" >
                <Banner title="Центар за Учење, Кариера и Иновација" />
                <div className="main">

                    <CardsContainer title="За Нас">
                        <div className="row ">
                            <SingleCard img="edukacija1" title="Едукација" link="https://brainster.co" a={true} />
                            <SingleCard img="nastani" title="Настани" link="/nastani" />

                           
                           
                                <SingleCard img="coworking" title="Coworking" link="#coworking" />
                            
                           


                            <SingleCard img="prostor_za_nastani" title="Простор за настани" link="prostor_za_nastani" />
                            <SingleCard img="tech-kompanii" title="Партнерства со Tech компании" onClick={this.openModal} />
                            {this.state.isOpen ? <ModalBootstrap handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit} ><JoinForm /></ModalBootstrap> : null}

                            <SingleCard img="edukacija2" title="Иновации за компании" onClick={this.openModal} />
                            {this.state.isOpen ? <ModalBootstrap handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit} ><InovationsForm /></ModalBootstrap> : null}
                        </div>
                    </CardsContainer>
                    <SectionImgRight title={this.state.title} img={this.state.img} >

                        <button className="black-button mr-2 mb-md-2  mb-sm-2 mb-2 p-2" onClick={this.setAcademiesProps}>АКАДЕМИИ</button>
                        <button className="yellow-button mb-md-2 mb-sm-2 mb-2 p-2" onClick={this.setCompaniesProps}>ЗА КОМПАНИИ</button>
                    </SectionImgRight>
                    <CardsContainer title="Настани">
                        <div className="row mb-5">
                            <SingleCard img="codeworks" title="Codeworks" link="https://brainster.co" a={true} />
                            <SingleCard img="instruktori" title="Deep Dive into Marketing" link="https://blog.brainster.co/deep-dive-marketing-davor-bruketa/" a={true} />
                            <SingleCard img="hristijan" title="Deep Dive into Data Science" link="https://blog.brainster.co/deepdive_ds/" a={true} />
                        </div>
                        <div className="d-flex justify-content-end align ">

                            <NavLink to="/nastani" className="no-link"><button className="black-button px-3 py-2 mb-md-2 mb-sm-2 mb-2 d-flex  "> <BiCalendar className="mr-2  align-self-center" />КАЛЕНДАР НА НАСТАНИ</button></NavLink>
                        </div>

                        <Element id="#coworking" name="#coworking">
                            <SectionImgLeft title="Coworking" img="coworking" >
                                <OverlayTrigger trigger="click" placement="bottom"
                                    overlay={popover}>
                                    <button className="black-button mr-2 p-2 text-linetrough btn-linetrough mb-md-2 mb-sm-2 mb-2">РЕЗЕРВИРАЈ МЕСТО</button>
                                </OverlayTrigger>
                            </SectionImgLeft>
                        </Element>
                    </CardsContainer>
                    <SectionImgRight title="Простор за настани" img="prostor_za_nastani">
                    <NLink to="/prostor_za_nastani" className="no-link">
                    <button className="black-button p-2 mb-md-2 mb-sm-2 mb-2 d-flex"> <IoArrowForward className="align-self-center mt-1 mr-1" /> ВИДИ ГО ПРОСТОРОТ </button>
                    </NLink>
                       
                    </SectionImgRight>

                    <BottomBanner title="Партнери" content="Имаш идеја? Отворени сме за соработка">
                    <NLink to="/prostor_za_nastani" className="no-link">
                        <button className="black-button p-2 mt-4 " > <IoArrowForward className=" mb-1 " /> ВИДИ ГО ПРОСТОРОТ </button>
                    </NLink>
                    </BottomBanner>
                </div>

              

            </div>
        )
    }
}


export default HomePage
