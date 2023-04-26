import React from 'react'
import {useState,useEffect} from 'react';
import Swal from 'sweetalert';

const Edit = () => {
  let[options,updateOptions] = useState([]);
    let[name,pickname] = useState("");
        let[email,pickEmail] = useState("");
        let[password,pickPassword] = useState("");
        let[confirmpassword,pickconfirmPassword] = useState("")
        let[mobile,pickMobile] = useState("");
        let[address,pickAddress] = useState("");
        let[city,pickCity] = useState("");
        let[contactperson,pickCperson] = useState("");
        let[phone,pickPhone] = useState("");
        let[website,pickWebsite] = useState("");
        let[profile,pickProfile] = useState("");
        let[businesstype,pickBusinessType] = useState("");
      

        const getProfile = () =>{
          

          let input = {
            key:  localStorage.getItem("sellerid")
      
          };
      
         const requestOptions = {
              method : 'POST',
              header : {'Content-Type' : 'application/json' },
              body : JSON.stringify(input) 
          };
          fetch("https://www.campusinterview.in/webapi/Billing/editprofile", requestOptions)
          .then(response => response.json())
          .then(data =>{            
            pickname(data.company);
            pickEmail(data.email);
            pickMobile(data.mobile);
            pickPassword(data.password);
            pickconfirmPassword(data.confirmpassword);
            pickAddress(data.address);
            pickCity(data.city);
            pickCperson(data.contactperson);
            pickPhone(data.phone);
            pickWebsite(data.website);
            pickProfile(data.profile)
            pickBusinessType(data.businesstype)
              console.log(data);
          })


          
           
      
         
          
          }
          const updateprofile = () =>{
            let input = {
                key:localStorage.getItem("sellerid"), 
                company:name, 
                email:email,
                mobile:mobile, 
                city:city, 
                address :address, 
                contactperson:contactperson,
                phone:phone,
                website:website,
                profile:profile,
                businesstype:businesstype,
                password:password
            };
            const requestOptions = {
              method : 'POST',
              header : {'Content-Type' : 'application/json' },
              body : JSON.stringify(input) 
            };
            fetch("https://www.campusinterview.in/webapi/billing/updateprofile", requestOptions)
            .then(response => response.text())
            .then(data =>{            
              alert(data);
            })
          }
          const showAlert = () => {
            Swal({
              title: 'Updated successfully',
             
              icon: 'success',
              button: 'OK'
            });
          };
          const allservice = () =>{
            let input = {
              key:localStorage.getItem("sellerid"),
            };
            const requestOptions = {
              method : 'POST',
              header : {'Content-Type' : 'application/json' },
              body : JSON.stringify(input) 
            };
            fetch("https://www.campusinterview.in/webapi/Billing/allservice", requestOptions)
            .then(response => response.json())
            .then(data =>{            
              updateOptions(data)
            })
            
            }
          
          useEffect(()=>{         //useEffect() will help you to get something on on-load 
            getProfile();
            allservice();
        },[1])
      
        
  return (
    <div>
         <section className="container mt-5">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h1 className="text-info"> 
                        <i className="fa fa-edit"></i> Edit Account
                      </h1>
                  </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">

                  <div className="card border-0 shadow-lg">
                    <div className="card-header "> Enter Your Details </div>

                    <div className="card-body"> 
                        <div className="row mb-3">
                            <div className="col-lg-6">
                                <label>Company Name</label>
                                <input type="text" className="form-control" onChange={obj=>pickname(obj.target.value)}
                                value={name}/>
                            </div>
                            <div className="col-lg-6">
                             <label>Phone</label>
                              <input type="text" className="form-control" onChange={obj=>pickPhone(obj.target.value)}
                              value={phone}
                              />
                          </div>
                            
                        </div> 

                        <div className="row mb-3">
                          <div className="col-lg-6">
                              <label>e-Mail id</label>
                              <input type="email" className="form-control" onChange={obj=>pickEmail(obj.target.value)}
                              value={email}/>
                          </div>
                          <div className="col-lg-6">
                              <label>Mobile No</label>
                              <input type="number" className="form-control" onChange={obj=>pickMobile(obj.target.value)}
                              value={mobile}/>
                          </div>
                        </div> 

                        <div className="row mb-3">
                          <div className="col-lg-6">
                              <label>Password</label>
                              <input type="password" className="form-control" onChange={obj=>pickPassword(obj.target.value)}
                              value={password}/>
                          </div>
                          <div className="col-lg-6">
                              <label>Confirm Password</label>
                              <input type="password" className="form-control" onChange={obj=>pickconfirmPassword(obj.target.value)}
                              value={confirmpassword}/>
                          </div>
                          <div className="col-lg-6">
                              <label>City</label>
                              <input type="text" className="form-control" onChange={obj=>pickCity(obj.target.value)}
                              value={city}/>
                          </div>
                          <div className="col-lg-6">
                              <label>Contact Person</label>
                              <input type="text" className="form-control" onChange={obj=>pickCperson(obj.target.value)}
                              value={contactperson}
                              />
                          </div>
                          
                          <div className="col-lg-6">
                              <label>Website</label>
                              <input type="text" className="form-control" onChange={obj=>pickWebsite(obj.target.value)}
                              value={website}
                              />
                          </div>
                          <div className="col-lg-6">
                              <label>Profile</label>
                              <input type="text" className="form-control" onChange={obj=>pickProfile(obj.target.value)}
                              value={profile}
                              />
                          </div>
                          <div className="col-lg-6">
                              <label>Business Type</label>
                              <select className="form-select" onChange={obj=>pickBusinessType(obj.target.value)}
                              value={businesstype}>
                                {
                                  options.map((el,index)=>{
                                    return(
                                      <option key={index}>{el.servicename}</option>
                                     
                                    )
                                  })
                                }
                                
                              </select>
                              
                          </div>
                        </div>
                         
                        <div className="row">
                            <div className="col-lg-12">
                                <label>Full Address</label>
                                <textarea className="form-control" onChange={obj=>pickAddress(obj.target.value)}
                                value={address}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer text-center">
                      <button className="btn btn-danger m-2"onClick={updateprofile}> Edit </button>
                      <button className="btn btn-info text-white" onClick={showAlert}>Show Alert</button>
                    </div>
                  </div>

                </div>
                <div className="col-lg-3"></div>
              </div>
          </section>

      
    </div>
  )
}

export default Edit;

//name,company(fname,lname),contact person mobile(display not be editable),home,email,password ,city
//company profile should be editable ,address should be editable ,business type,mobile


//"https://www.campusinterview.in/webapi/Billing/savebill"
