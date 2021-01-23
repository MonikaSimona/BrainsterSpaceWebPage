import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Logo from './Logo'
import HomePage from './HomePage'


function Navbar() {
    return (
        <div className="Navbar ">
            <div className="container-fluid ">
                <div className="row mx-5 mt-3">
                    <div className="col-md d-flex m-3 align-items-center">
                        <NavLink className="mr-auto ml-2" to="/" >
                          <Logo width="50" height="50"/>
                           </NavLink>

                        <div className="mt-2">
                            <NavLink className="text m-4" to="/nastani">НАСТАНИ</NavLink>
                            <NavLink className="text m-4" to="/co_working">CO-WORKING</NavLink>
                            <NavLink className="text m-4" to="/akademii">АКАДЕМИИ</NavLink>
                            <NavLink className="text m-4" to="/prostor_za_nastani">ПРОСТОР ЗА НАСТАНИ</NavLink>
                            <NavLink className="text m-4" to="/partnerstva">ПАРТНЕРСТВА</NavLink></div>

                        <button className="ml-auto black-button-navbar " >+ ПРИКЛУЧИ СЕ</button> </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
