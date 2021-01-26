import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { ImLinkedin } from 'react-icons/im'
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Logo from './Logo'
function Footer() {
    const popover = (
        <Popover>
            <Popover.Content>
                <strong>
                    Емаил:
                    <br />
                    anja@brainster.co
                    <br /> <br />
                    Телефон:
                    <br />
                    070 233 414
                    </strong>
            </Popover.Content>
        </Popover>
    )
    return (
        <div className="Footer footer absolute-bottom">
            <div className="row mx-5 my-5 py-3">
                <div className="col-lg-3 col-md-4 col-sm-12  col-xs-12 order-lg-1 order-md-1 order-sm-2 order-xs-2 mb-5 mt-3 ">
                    <span className="text-bold mb-2  ">Корисни Линкови</span>
                    <ul>

                        <OverlayTrigger
                            trigger="hover"
                            placement="top"
                            overlay={popover}>
                            <li style={{ display: 'inline-block' }}>
                                Контакт
                            </li>
                        </OverlayTrigger>
                        <li>Отворени Позиции</li>
                        <a href="https://medium.com/wearelaika/brainster-space-the-" target="_blank" rel="noreferrer"className="text">      <li>Галерија</li>
                        </a>
                        <li>Календар</li>
                    </ul></div>



                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 order-lg-2 order-md-2 order-sm-3 order-xs-3 mb-5 mt-3"><span className="text-bold mb-3">Социјални Мрежи</span>
                    <div className="d-flex ">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/brainster.co"><FaFacebook className="icon facebook" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/school/brainster-co/"><ImLinkedin className="icon linkedin" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/brainsterco/"><FiInstagram className="icon instagram" /></a>



                    </div>

                </div>
                <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12 order-lg-3 order-md-3 order-sm-1 order-1 d-flex justify-content-lg-end justify-content-md-end
                justify-content-sm-start
                justify-content-xs-start
                align-items-center mb-5 ">
                    <Logo className="logo mb-5 " width="80" height="80" />
                </div>
            </div>
            <div className="bottom-section">
                <p>COPYRIGHT&copy;BrainsterSpace. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
