import { NavLink } from 'react-router-dom'
import Logo from './Logo'

import React, { PureComponent } from 'react'
import ModalBootstrap from './ModalBootstrap'
import JoinForm from './Forms/JoinForm'
import { Link } from 'react-scroll'


class Navbar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            fromOutside: false,
            checked:false,
           
        }
    }

    openModal = () => this.setState({ isOpen: true })
    closeModal = () => this.setState({ isOpen: false });
    handleSubmit = (e) => {
        e.preventDefault();
    }
    fromOutsite = () => {
        this.setState({ fromOutside: true })
    }
    fromHome = () => {
        this.setState({ fromOutside: false })
    }

    unCheck = () =>  {
        this.setState({
            checked:false
        })
    }
    check = () => {
        this.setState({
            checked:!this.state.checked
        })
    }
   

    render() {
      
        return (
            <div className="Navbar ">
            <div className="container-fluid ">
                <div className="row  mt-lg-3 mt-md-3 mt-sm-0 mt-0">
                    <div className="col-md d-flex m-3 align-items-center">
                    <NavLink className=" mr-auto ml-2 logoIcon" to="/" onClick={() => {this.fromHome();this.unCheck()}} >
                                <Logo width="50" height="50" />
                            </NavLink>
                            <label for="hamburger" className="mt-2 mb-2" id="label" onClick={this.check} >&#9776;</label>
                                <input type="checkbox" id="hamburger"  checked={this.state.checked} />

                        <div className=" mt-2 navitems">
                            <NavLink className="text text-bold m-4 card-line navlink" to="/nastani" onClick={() => {this.fromOutsite();this.unCheck()}}>НАСТАНИ</NavLink>

                            {this.state.fromOutside
                                ? (<NavLink className="text text-bold m-4 card-line navlink" to="/#coworking" onClick={() => {this.fromHome()}}>CO_WORKING</NavLink>)
                                : (<Link to="#coworking" smooth={true} spy={true} className="text text-bold m-4 card-line navlink" style={{ cursor: 'pointer' }} onClick={this.unCheck} >CO_WORKING </Link>)}

                            <NavLink className="text text-bold m-4 card-line navlink" to="/akademii" onClick={() => {this.fromOutsite();this.unCheck()}}>АКАДЕМИИ</NavLink>
                            <NavLink className="text text-bold m-4 card-line navlink" to="/prostor_za_nastani" onClick={() => {this.fromOutsite();this.unCheck()}}>ПРОСТОР ЗА НАСТАНИ</NavLink>
                            <p className="text text-bold m-4 card-line navlink" style={{cursor:'pointer'}} onClick={() => {this.openModal()}}>ПАРТНЕРСТВА</p>
                            {this.state.isOpen ? <ModalBootstrap handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit} > <JoinForm /></ModalBootstrap> : null}
                            <button className="yellow-button nav-button " onClick={this.openModal}> + ПРИКЛУЧИ СЕ</button>
                        {this.state.isOpen ? <ModalBootstrap handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit} > <JoinForm /></ModalBootstrap> : null}
                            </div>       
                        
                        
                        <button className="black-button-navbar ml-lg-auto main-button" onClick={this.openModal}> + ПРИКЛУЧИ СЕ</button>
                        {this.state.isOpen ? <ModalBootstrap handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit} > <JoinForm /></ModalBootstrap> : null}

                        
                    </div>
                </div>

            </div>

        </div>
        )
    }
}



export default Navbar
