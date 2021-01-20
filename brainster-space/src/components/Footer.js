import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { ImLinkedin } from 'react-icons/im'
import Logo from './Logo'
function Footer() {
    return (
        <div className="Footer">
            <div className="row mx-5 my-5 py-3">
                <div className="col-md-3 mb-5 mt-3 ">
                    <span className="boldText mb-2  ">Корисни Линкови</span>
                    <ul>
                        <li>Контакт</li>
                        <li>Отворени Позиции</li>
                        <li>Галерија</li>
                        <li>Календар</li>
                    </ul></div>


                <div className="col-md-3 mb-5 mt-3"><span className="boldText mb-3">Социјални Мрежи</span>
                    <div className="d-flex ">

                        <FaFacebook className="icon facebook" />
                        <ImLinkedin className="icon linkedin" />
                        <FiInstagram className="icon instagram" />
                    </div>

                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center mb-5 ">
                    <Logo className="logo mb-5 " width="80" height="80"/>
                </div>
            </div>
            <div className="bottom-section">
                <p>COPYRIGHT&copy;BrainsterSpace. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
