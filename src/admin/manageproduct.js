import React from 'react'
import {useState,useEffect} from 'react';



const Manageproduct = () => {

  let[arr,updateArr] = useState([]);

  let[pname,pickPname] = useState("");
  let[price,pickPrice] = useState("");
  let[qty,pickQty] = useState("");

  const saveproduct = () =>{
    let input = {
      key: localStorage.getItem("sellerid"),
      productname:pname,
      price: price,
      qty: qty
    };
    const requestOptions = {
      method : 'POST',
      header : {'Content-Type' : 'application/json' },
      body : JSON.stringify(input) 
    };
    fetch("https://www.campusinterview.in/webapi/Billing/saveproduct", requestOptions)
    .then(response => response.text())
    .then(message =>{            
      alert(message);
      allproduct();
    })
  }

  const allproduct = () =>{
    let input = {
      key: localStorage.getItem("sellerid")
    };
    const requestOptions = {
      method : 'POST',
      header : {'Content-Type' : 'application/json' },
      body : JSON.stringify(input) 
    };
    fetch("https://www.campusinterview.in/webapi/Billing/allproduct", requestOptions)
    .then(response => response.json())
    .then(data =>{   
      console.log(data) ;     
      updateArr(data);
    });
  };
  

  useEffect(()=>{         
   allproduct();
},[1]);

 
  return (
   <section>
    <div className="row m-4">
      <div className="col-lg-2">
        <label>Product Name</label>
        <input type="text" className="form-control" onChange={obj=>pickPname(obj.target.value)} value={pname}/>
      </div>
      <div className="col-lg-2">
        <label>Price</label>
        <input type="text" className="form-control" onChange={obj=>pickPrice(obj.target.value)} value={price}/>
      </div>
      <div className="col-lg-2">
        <label>Quantity</label>
        <input type="text" className="form-control"onChange={obj=>pickQty(obj.target.value)} value={qty}/>
      </div>
      
      <div className="col-lg-1 mt-4 text-center">
        <button onClick={saveproduct} className="btn btn-info  ">Save</button>
        </div>
      

    </div>
    <table className="table table-bordered  w-25 h-25 ms-5"  >
      <thead className="bg-light">
        <tr>
          <th>#PID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {
          arr.map((el,index)=>{
            return(
              <tr key={index}>
                <td>{el.pid}</td>
                <td>{el. productname}</td>
                <td>{el.price}</td>
                <td>{el.qty}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>

   </section>
  )
}


export default  Manageproduct;
