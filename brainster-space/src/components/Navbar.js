
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Container from './FormModal/Container'

import React, { PureComponent } from 'react'
import ModalBootstrap from './ModalBootstrap'

class Navbar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    openModal = () => this.setState({isOpen:true})
    closeModal = () => this.setState({ isOpen: false });
    handleSubmit = () => {

    }

    render() {
        return (
            <div className="Navbar ">
                <div className="container-fluid ">
                    <div className="row mx-5 mt-3">
                        <div className="col-md d-flex m-3 align-items-center">
                            <NavLink className="mr-auto ml-2" to="/" >
                                <Logo width="50" height="50" />
                            </NavLink>

                            <div className="mt-2">
                                <NavLink className="text text-bold m-4 card-line" to="/nastani">НАСТАНИ</NavLink>
                                <NavLink className="text text-bold m-4 card-line" to="/co_working">CO-WORKING</NavLink>
                                <NavLink className="text text-bold m-4 card-line" to="/akademii">АКАДЕМИИ</NavLink>
                                <NavLink className="text text-bold m-4 card-line" to="/prostor_za_nastani">ПРОСТОР ЗА НАСТАНИ</NavLink>
                                <NavLink className="text text-bold m-4 card-line" to="/partnerstva">ПАРТНЕРСТВА</NavLink></div>
                                <button className="black-button-navbar ml-lg-auto"  onClick={this.openModal}> + ПРИКЛУЧИ СЕ</button>
                                {this.state.isOpen ? <ModalBootstrap handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit} /> : null}

                            {/* <Container triggerText={buttonText} onSubmit={onSubmit} margin="ml-lg-auto" /> </div> */}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}



export default Navbar
