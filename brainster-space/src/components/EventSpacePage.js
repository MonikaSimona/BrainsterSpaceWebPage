import CardsContainer from './CardsContainer'
import SectionImgRight from './SectionImgRight'
import SingleCardSpace from './SingleCardSpace'
import {IoMdPlanet} from 'react-icons/io'
import {IoFastFood} from 'react-icons/io5'
import {IoIosGlobe} from 'react-icons/io'
import {IoIosMic} from 'react-icons/io'
import {IoIosHeadset} from 'react-icons/io'
import {IoBulb} from 'react-icons/io5'
import {IoGitNetworkSharp} from 'react-icons/io5'
import {RiCameraLensFill} from 'react-icons/ri'
import {IoLogoFacebook} from 'react-icons/io'


import React, { PureComponent } from 'react'

class EventSpacePage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    

    render() {
        return (
            <div className="EventSpacePage">
            <div className="main">
                <SectionImgRight title="Простор за настани" img="prostor_za_nastani">
                   <a href="#host"><button className="black-button px-3 mb-md-2 mb-sm-2 mb-2">+ БУКИРАЈ НЕ</button></a> 
                </SectionImgRight>
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 align-self-center">
                            <h1 className="text-bold">Нашите простории</h1>
                            <p className="paragrapgh" >Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit error repellendus accusamus atque eligendi fugiat tenetur nemo sint distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br />
                                <br />
                     Vel, rerum facilis sed voluptates exercitationem sint consequatur hic impedit obcaecati explicabo.</p>

                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <CardsContainer>
                                <div className="row">
                                    <SingleCardSpace title="Brainster" img="2" />
                                    <SingleCardSpace title="Конференциска сала" img="exibition" />
                                    <SingleCardSpace title="Сала со бина" img="C32" />
                                    <SingleCardSpace title="Адаптибилна училница" img="C31" />
                                    <SingleCardSpace title="Училница" img="C21" />
                                    <SingleCardSpace title="Училница" img="C11" />
                                    <SingleCardSpace title="Хол" img="hol" />
                                    <SingleCardSpace title="Канцелариски простор" img="C14" />
                                    <SingleCardSpace title="Space Kitchen" img="KITCHEN_03" />
                                </div>
                            </CardsContainer>
                        </div>
                    </div>
                </div>

                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12 col-12 ">
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 col-sm-12 col-12  my-sm-2 my-2 mb-lg-2  ">
                                            <img className="small-image box-image" src={require(`../assets/img/6.jpg`).default} width="100%" height="100%" alt="" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 
                                        my-sm-2 my-2 ">
                                            <img className="small-image box-image" src={require(`../assets/img/4.jpg`).default} 
                                            width="100%" height="100%"
                                            alt="" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-sm-2 p-lg-0 pr-lg-3 pl-lg-1 my-2  ">
                                            <img className="small-image box-image" src={require(`../assets/img/1.jpg`).default}
                                            width="100%" height="100%"
                                             alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6  col-md-6 col-sm-12 col-12 my-sm-2 my-2  pl-lg-0 ml-lg-1   ">
                                    <img  className="small-image box-image" src={require(`../assets/img/3.jpg`).default}
                                    width="100%" height="100%"
                                     alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-12 col-12 align-self-center">
                            <h1 className="text-bold">Space Kitchen</h1>
                            <p className="paragrapgh" >Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit error repellendus accusamus atque eligendi fugiat tenetur nemo sint distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br />
                                <br />
                     Vel, rerum facilis sed voluptates exercitationem sint consequatur hic impedit obcaecati explicabo.</p>

                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col">
                        <h2 className="text-bold" style={{fontSize:'2.5rem'}}>Нудиме</h2>
                        <div>
                            <div className="black-white-div"> <IoMdPlanet className="yellow-icon"/> Простор</div>
                            <div className="black-white-div"> <IoFastFood className="yellow-icon"/> Space Kitchen</div>
                            <div className="black-white-div"> <IoIosGlobe className="yellow-icon"/>Логистика</div>
                            <div className="black-white-div"> <IoIosMic className="yellow-icon"/>Техничка Подршка</div>
                            <div className="black-white-div"> <IoIosHeadset className="yellow-icon"/>Звук</div>
                            <div className="black-white-div"> <IoBulb className="yellow-icon"/>Светло</div>
                            <div className="black-white-div"><IoGitNetworkSharp className="yellow-icon"/>Помош при Организација</div>
                            <div className="black-white-div"><RiCameraLensFill className="yellow-icon"/>Видео и Фотографија</div>
                            <div className="black-white-div"><IoLogoFacebook className="yellow-icon"/>Промоција на Социјални Мрежи</div>
                           
                        </div>
                    </div>
                </div>
                <div className="container-fluid my-5 py-5" id="host">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12  align-self-center order-lg-1 order-md-2  order-sm-2 order-xs-2 mt-sm-5"> 
                        <h2 className="text-bold" style={{fontSize:'2.5rem'}} >Еvent Host</h2>
                        <p style={{fontSize:'2.5rem'}}> Ања Макеска</p>
                        <p style={{fontSize:'2.5rem'}}>anja@brainster.co</p>
                        <p style={{fontSize:'2.5rem'}}>+389 (0)70 233 414 </p>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-12  col-12 d-flex justify-content-lg-end  justify-content-md-center order-lg-2 order-md-1 order-sm-1 order-xs-1 ">
                            <img src={require('../assets/img/anja.jpg').default} width="100%" height="100%" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        )
    }
}

export default EventSpacePage

