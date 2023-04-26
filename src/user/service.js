
       import React from 'react';
       import {Link} from 'react-router-dom';
       
       const Service = () => {
         return (
           <div>
            <section className="container mt-4">
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h1 className="text-info"> 
                <i className="fa fa-tools"></i> Our Services 
              </h1>
              <p>
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg 
              </p>
            </div>
          </div>

          <div className="row mb-5 text-center">
            <div className="col-lg-4">
                <div className="p-4 border rounded">
                    <i className="fa fa-file fa-4x text-primary"></i>
                    <h3> Resume Building </h3>
                    <p>
                      sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                      sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                      sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                    </p>
                    <a href="">Read More...</a>
                </div>
            </div> 

            <div className="col-lg-4">
              <div className="p-4 border rounded">
                <i className="fa fa-mobile fa-4x text-primary"></i>
                <h3> Mobile App Development</h3>
                <p>
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                </p>
                <a href="">Read More...</a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="p-4 border rounded">
                <i className="fa fa-desktop fa-4x text-primary"></i>
                <h3> Website Development</h3>
                <p>
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                </p>
                <a href="">Read More...</a>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12 text-center">
              <h1 className="text-danger"> Any Services Required ? +91-8792462607 </h1>
            </div>
          </div>

          <div className="row mt-4 myservice">
            <div className="col-lg-3 mb-3"> 
              <p className="p-3 bg-light text-primary"> Website Re-Designing </p> 
            </div>

            <div className="col-lg-3 mb-3">
              <p className="p-3 bg-light text-primary"> Logo Designing </p>
            </div>

            <div className="col-lg-3 mb-3">
              <p className="p-3 bg-light text-primary"> Web Scrapping  </p>
            </div>

            <div className="col-lg-3 mb-3">
              <p className="p-3 bg-light text-primary"> Digital Marketing </p>
            </div>

            <div className="col-lg-3 mb-3">
              <p className="p-3 bg-light text-primary"> Content Writing </p>
            </div>

            <div className="col-lg-3 mb-3">
              <p className="p-3 bg-light text-primary"> Hire & Deploy </p>
            </div>
            
            <div className="col-lg-3 mb-3">
              <p className="p-3 bg-light text-primary"> Education </p>
            </div>

            <div className="col-lg-3 mb-3">
              <p className="p-3 bg-light text-primary"> Employment </p>
            </div>

            <div className="col-lg-3 mb-3">
              <p className="p-3 bg-light text-primary"> Digital Marketing </p>
            </div>

            <div className="col-lg-3 mb-3">
              <p className="p-3 bg-light text-primary"> Business Supprt </p>
            </div>

            <div className="col-lg-3 mb-3">
              <p className="p-3 bg-light text-primary"> Customer Care </p>
            </div>

            <div className="col-lg-3 mb-3">
              <p className="p-3 bg-light text-primary"> BPO </p>
            </div>
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
       
       export default Service
       
        