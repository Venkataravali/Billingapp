
       import React from 'react'

       import { useState } from 'react';
      
      
       
       const Myregister = () => {
        let[fname,pickFname] = useState("");
        let[lname,pickLname] = useState("");
        let[email,pickEmail] = useState("");
        let[password,pickPassword] = useState("");
        let[confirmpassword,pickconfirmPassword] = useState("")
        let[mobile,pickMobile] = useState("");
        let[address,pickAddress] = useState("");

        const Register = ()=>{
          let input = {
            fname:fname, 
            lname:lname,
            email:email, 
            password:password, 
            mobile:mobile, 
            address:address
        };
        const requestOptions = {
          method : 'POST',
          header : {'Content-Type' : 'application/json' },
          body : JSON.stringify(input) 
        };
        fetch("https://www.campusinterview.in/webapi/billing/register", requestOptions)
        .then(response => response.text())
        .then(data =>{            
          alert(data);
        })
        }
        

         return (
           <div>
            <section className="container mt-5">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h1 className="text-info"> 
                        <i className="fa fa-user-plus"></i> Create New Account 
                      </h1>
                  </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">

                  <div className="card border-0 shadow-lg">
                    <div className="card-header text-danger text-center"> Enter Your Details </div>

                    <div className="card-body"> 
                        <div className="row mb-3">
                            <div className="col-lg-6">
                                <label>First Name</label>
                                <input type="text" className="form-control" onChange={obj=>pickFname(obj.target.value)}/>
                            </div>
                            <div className="col-lg-6">
                                <label>Last Name</label>
                                <input type="text" className="form-control" onChange={obj=>pickLname(obj.target.value)}/>
                            </div>
                        </div> 

                        <div className="row mb-3">
                          <div className="col-lg-6">
                              <label>e-Mail id</label>
                              <input type="email" className="form-control" onChange={obj=>pickEmail(obj.target.value)}/>
                          </div>
                          <div className="col-lg-6">
                              <label>Mobile No</label>
                              <input type="number" className="form-control" onChange={obj=>pickMobile(obj.target.value)}/>
                          </div>
                        </div> 

                        <div className="row mb-3">
                          <div className="col-lg-6">
                              <label>Password</label>
                              <input type="password" className="form-control" onChange={obj=>pickPassword(obj.target.value)}/>
                          </div>
                          <div className="col-lg-6">
                              <label>Confirm Password</label>
                              <input type="password" className="form-control" onChange={obj=>pickconfirmPassword(obj.target.value)}/>
                          </div>
                        </div>
                         
                        <div className="row">
                            <div className="col-lg-12">
                                <label>Full Address</label>
                                <textarea className="form-control" onChange={obj=>pickAddress(obj.target.value)}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer text-center">
                      <button className="btn btn-danger"onClick={Register}> Register </button>
                    </div>
                  </div>

                </div>
                <div className="col-lg-3"></div>
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
                  <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                  <label>Enter Mobile No</label>
                  <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                  <label>Enter e-Mail Id</label>
                  <input type="text" className="form-control"/>
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
       
       export default Myregister
       
        