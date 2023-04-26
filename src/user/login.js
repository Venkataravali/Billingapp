import React from 'react'
import { useState } from 'react';

const Login = () => {
  let[msg,updatemsg] = useState(""); 
  let[email,pickEmail] = useState("");
  let[password,pickPassword] = useState("");

  let goLogin = () =>{
    let formstatus = true;
    if (email == "" || password == "") {
        updatemsg("Empty Email or Password")
        formstatus = false;
    }
    if (formstatus == true) {
        let input = {
            email: email,
            password:password
        };

        const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        };
        fetch("https://www.campusinterview.in/webapi/Login/logincheck", requestOptions)
            .then(response => response.json())
            .then(responseArray => {
                if (responseArray.status == "SUCCESS") {
                    updatemsg("Success : Redirecting...");
                    console.log(responseArray)
                    localStorage.setItem("sellerid", responseArray.key);
                    localStorage.setItem("adminname", responseArray.name);
                    window.location.reload()
                    // Navigate("/adminapp")
                    alert("success create localStorage and redirect to billing dashboard");
                } else {
                    alert("invalid or not exists")
                }
            })
    }
}
  return (
    <div>
     <section className="container mt-5">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h1 className="text-info">
          <i className="fa fa-lock"></i> Login
        </h1>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">

        <div className="card border-0 shadow-lg">
          <div className="card-header"> Please Login </div>

          <div className="card-body">
            <div className="mb-3">
              <label>E-Mail Id</label>
              <input type="email" className="form-control" onChange={obj=>pickEmail(obj.target.value)}/>
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control"  onChange={obj=>pickPassword(obj.target.value)} />
            </div>
          </div>

          <div className="card-footer text-center">
            <button className="btn btn-danger" onClick={goLogin}> Login </button>
          </div>
        </div>

      </div>
      <div className="col-lg-4"></div>
    </div>
  </section>

  <div className="modal fade" id="contact" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-md">
      <div className="modal-content">

        <div className="modal-header bg-info text-white p-3">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Send Your Message</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div className="modal-body">
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
        </div>

        <div className="modal-footer justify-content-center">
          <button type="button" className="btn btn-danger">Send Request <i className="fa fa-arrow-right"></i></button>
        </div>

      </div>
    </div>
  </div>


      
    </div>
  )
}

export default Login

 
  