import {  Modal } from 'react-bootstrap'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

function ModalBootstrap({handleClose,handleSubmit}) {
    return (
        <>
        <div
        className="d-flex align-items-center justify-content-center modalBootstrap"
        style={{ height: "100vh" }}
        >
        
        <Modal show={true} onHide={handleClose} >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body >
        <form onSubmit={handleSubmit}>
            <h2 style={{fontWeight:"bold"}}>Приклучи се</h2>
            <div className="form-group mt-3">
                <label htmlFor="name" >Име и Презиме (задолжително)</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Внесете Име и Презиме"
                    required />
            </div>
            <div className="form-group">
                <label htmlFor="company">Име на Компанија (незадолжително)</label>
                <input
                    type="text"
                    className="form-control"
                    id="company"
                    placeholder="Внесете име на Вашата Компанија"
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Телефонски Број (задолжително)</label>
                <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Внесете Телефонски Број"
                    required
                />
            </div>
            <div className="form-group ">
                <div className="d-flex"> 
                <label htmlFor="proposal">Предлог за Соработка (незадолжително)</label>
                    <small className="ml-auto" style={{fontSize:'12px'}}>300</small>
                    </div>

                <textarea
                    className="form-control"
                    name="proposal"
                    id="proposal"
                    cols="30" rows="7"
                    placeholder="Во 300 карактери, опишете зошто сакате да соработуваме"
                />
            </div>
            <div className="form-group d-flex mt-4">
                <button style={{ display: 'inline-block' }} className="ml-auto align-self-center no-button" onClick={handleClose}>ИСКЛУЧИ</button>
                <button className="ml-3 black-button" type="submit">
                    <IoArrowForward /> ИСПРАТИ ФОРМА
        </button>
            </div>
        </form>
        </Modal.Body>
        
      </Modal>
      </div>
      </>
    )
}

export default ModalBootstrap
