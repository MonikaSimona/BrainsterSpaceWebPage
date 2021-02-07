
import CardsContainer from '../cards/CardsContainer';
import Banner from '../sections/Banner';
import SectionImgRight from '../sections/SectionImgRight';
import SingleCard from '../cards/SingleCard';
import { IoArrowForward } from 'react-icons/io5'
import { BiCalendar } from 'react-icons/bi'
import SectionImgLeft from '../sections/SectionImgLeft';
import BottomBanner from '../sections/BottomBanner';
import { Popover, OverlayTrigger } from 'react-bootstrap';

import React, { PureComponent } from 'react'
import ModalBootstrap from '../modal_and_forms/ModalBootstrap';
import JoinForm from '../modal_and_forms/JoinForm';
import InovationsForm from '../modal_and_forms/InovationsForm';
import { NavLink, Link as NLink } from 'react-router-dom';
import { Link, Element } from 'react-scroll';


class HomePage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            title: 'Компании',
            img: 'banner_img',
            content: 'Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го подобрат перформансот на својата компанија.'+

            'Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени за да се адаптираат соодветно. Обуки, семинари, курсеви или team building?'+
            
            'Во Brainster Space имаме специјално обучен тим кој е подготвен да ја насочи, адаптира и сподели својата експертиза со денешните потреби на компаниите.'
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
            img:"edukacija1",
            content: 'Дали се подготвен да одговориш на потребите на иднината. Вистинските курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science.'
        })
    }
    setCompaniesProps = () => {
        this.setState({
            title:"Компании",
            img:"banner_img",
            content: 'Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го подобрат перформансот на својата компанија.'+

            'Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени за да се адаптираат соодветно. Обуки, семинари, курсеви или team building?'+
            
            'Во Brainster Space имаме специјално обучен тим кој е подготвен да ја насочи, адаптира и сподели својата експертиза со денешните потреби на компаниите.'
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
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex"  >
                        <a className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" >
                            <SingleCard img="edukacija1" title="Едукација"  />
                            </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex"  >
                            <NLink className="card-link" to="/nastani">
                            <SingleCard img="nastani" title="Настани"  />
                            </NLink>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex"  >
                            <Link to="#coworking" spy={true} smooth={true}>
                            <SingleCard img="coworking" title="Coworking"  />
                            </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex"  >
                            <NLink className="card-link" to="/prostor_za_nastani">
                            <SingleCard img="prostor_za_nastani" title="Простор за настани"  />
                            </NLink>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 "  >
                            <SingleCard img="tech-kompanii" title="Партнерства со Tech компании" onClick={this.openModal} />
                            {this.state.isOpen ? <ModalBootstrap handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit} ><JoinForm /></ModalBootstrap> : null}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 "  >
                            <SingleCard img="edukacija2" title="Иновации за компании" onClick={this.openModal} />
                            {this.state.isOpen ? <ModalBootstrap handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit} ><InovationsForm /></ModalBootstrap> : null}
                            </div>
                        </div>
                    </CardsContainer>
                    <SectionImgRight title={this.state.title} img={this.state.img} content={this.state.content} >

                        <button className="black-button mr-2 mb-md-2  mb-sm-2 mb-2 p-2" onClick={this.setAcademiesProps}>АКАДЕМИИ</button>
                        <button className="yellow-button mb-md-2 mb-sm-2 mb-2 p-2" onClick={this.setCompaniesProps}>ЗА КОМПАНИИ</button>
                    </SectionImgRight>
                    <CardsContainer title="Настани">
                        <div className="row mb-5">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex"  >
                            <a className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co">
                            <SingleCard img="codeworks" title="Codeworks"  />
                            </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex"  >
                            <a className="card-link" target="_blank" rel="noreferrer" href="https://blog.brainster.co/deep-dive-marketing-davor-bruketa/">
                            <SingleCard img="instruktori" title="Deep Dive into Marketing"  />
                            </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex"  >

                            <a className="card-link" target="_blank" rel="noreferrer" href="https://blog.brainster.co/deepdive_ds/">
                            <SingleCard img="hristijan" title="Deep Dive into Data Science"  />
                            </a>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end align ">

                            <NavLink to="/nastani" className="no-link"><button className="black-button px-3 py-2 mb-md-2 mb-sm-2 mb-2 d-flex  "> <BiCalendar className="mr-2  align-self-center" />КАЛЕНДАР НА НАСТАНИ</button></NavLink>
                        </div>

                        <Element id="#coworking" name="#coworking">
                            <SectionImgLeft title="Coworking" img="coworking"  content="Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ке одлучи секој месец со кого да ги дели своите канцеларии.">
                                <OverlayTrigger trigger="click" placement="bottom"
                                    overlay={popover}>
                                    <button className="black-button mr-2 p-2 text-linetrough btn-linetrough mb-md-2 mb-sm-2 mb-2">РЕЗЕРВИРАЈ МЕСТО</button>
                                </OverlayTrigger>
                            </SectionImgLeft>
                        </Element>
                    </CardsContainer>
                    <SectionImgRight title="Простор за настани" img="prostor_za_nastani" content="Можност за презентации, обуки, конференции, networking настани. Одбери ја просторијата која најмногу ќе одговара на твојата идеја. Го задржуваме правото да одбереме кој настан ќе се организира го нашиот Brainster Space.">
                    <NLink className="card-link" to="/prostor_za_nastani" >
                    <button className="black-button p-2 mb-md-2 mb-sm-2 mb-2 d-flex"> <IoArrowForward className="align-self-center mt-1 mr-1" /> ВИДИ ГО ПРОСТОРОТ </button>
                    </NLink>
                       
                    </SectionImgRight>

                    <BottomBanner title="Партнери" content="Имаш идеја? Отворени сме за соработка">
                    <NLink className="card-link" to="/prostor_za_nastani" >
                        <button className="black-button p-2 mt-4 " > <IoArrowForward className=" mb-1 " /> ВИДИ ГО ПРОСТОРОТ </button>
                    </NLink>
                    </BottomBanner>
                </div>
            </div>
        )
    }
}


export default HomePage
