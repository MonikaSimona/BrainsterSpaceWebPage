import {  Modal } from 'react-bootstrap'
import React from 'react'

function ModalBootstrap({handleClose,children}) {
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
       {children}
        </Modal.Body>
        
      </Modal>
      </div>
      </>
    )
}

export default ModalBootstrap
