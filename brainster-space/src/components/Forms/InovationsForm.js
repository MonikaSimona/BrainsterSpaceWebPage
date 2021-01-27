import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

function InovationsForm({handleClose,handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
        <h2 style={{fontWeight:"bold"}}>Внесете податоци</h2>
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
            <label htmlFor="email">Email (задолжително)</label>
            <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Внесете Email"
                required
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
            <label htmlFor="proposal">Потреби на компанијата (незадолжително)</label>
                
                </div>

            <textarea
                className="form-control"
                name="proposal"
                id="proposal"
                cols="30" rows="6"
                
            />
        </div>
        <div className="form-group d-flex mt-4">
            <button style={{ display: 'inline-block' }} className="ml-auto align-self-center no-button" onClick={handleClose}>ИСКЛУЧИ</button>
            <button className="ml-3 black-button" type="submit">
                <IoArrowForward /> ИСПРАТИ ФОРМА
    </button>
        </div>
    </form>
    )
}

export default InovationsForm
