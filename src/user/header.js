import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";



const Header = () => {
  let [modalState, setModalState] = useState(false)
  let callModal = () => {
      setModalState(!modalState)
  }
  return (
    <>
     <Modal show={modalState} onHide={callModal}>
                <Modal.Header closeButton className="modal-header bg-info text-white p-3">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Send Your Message</h1>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="mb-3">
                        <label>Enter Your Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Enter Mobile No</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Enter e-Mail Id</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Enter Message</label>
                        <textarea className="form-control"></textarea>
                    </div>
                </Modal.Body>

                <Modal.Footer className="modal-footer justify-content-center">
                    <Button type="button" className="btn btn-danger">Send Request <i className="fa fa-arrow-right"></i></Button>
                </Modal.Footer>
            </Modal>
         <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark p-3">
            <div className="container-fluid">
              <Link className="navbar-brand" to="javascript:void(0)">
                <i className="fa fa-search fa-lg"></i> Firstenquiry
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item ps-4">
                    <Link className="nav-link active" to="/"><i className="fa fa-home"></i> Home</Link>
                  </li>
                  <li className="nav-item ps-4">
                    <Link className="nav-link active" to="/service"><i className="fa fa-tools"></i> Our Services</Link>
                  </li>
                  <li className="nav-item ps-4">
                    <Link className="nav-link active" to="/login"><i className="fa fa-lock"></i> Login</Link>
                  </li>
                  <li className="nav-item ps-4">
                    <Link className="nav-link active" to="/register"><i className="fa fa-user-plus"></i> Create Account</Link>
                  </li>
                  <li className="nav-item ps-4">
                    <Link className="nav-link active" to="#" data-bs-toggle="modal" data-bs-target="#contact" onClick={callModal}>
                      <i className="fa fa-headset"></i> Contact Us
                    </Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          </>
      
  
  )
}

export default Header;
