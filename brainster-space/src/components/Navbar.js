import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Container from './FormModal/Container'


function Navbar() {
    const buttonText = " + ПРИКЛУЧИ СЕ ";
    const onSubmit = (event) =>{
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
    return (
        <div className="Navbar ">
            <div className="container-fluid ">
                <div className="row mx-5 mt-3">
                    <div className="col-md d-flex m-3 align-items-center">
                        <NavLink className="mr-auto ml-2" to="/" >
                          <Logo width="50" height="50"/>
                           </NavLink>

                        <div className="mt-2">
                            <NavLink className="text text-bold m-4 card-line" to="/nastani">НАСТАНИ</NavLink>
                            <NavLink className="text text-bold m-4 card-line" to="/co_working">CO-WORKING</NavLink>
                            <NavLink className="text text-bold m-4 card-line" to="/akademii">АКАДЕМИИ</NavLink>
                            <NavLink className="text text-bold m-4 card-line" to="/prostor_za_nastani">ПРОСТОР ЗА НАСТАНИ</NavLink>
                            <NavLink className="text text-bold m-4 card-line" to="/partnerstva">ПАРТНЕРСТВА</NavLink></div>

                            <Container triggerText={buttonText} onSubmit={onSubmit} margin="ml-lg-auto" /> </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
