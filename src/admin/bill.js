import { useState,useEffect } from "react";
import ReactPaginate from 'react-paginate';

import PdfDownlode from "./PdfDownlode";


const Mybill = () => {
  let total=0;
  let totalgst = 0;
  let grandtotal = 0;

  let[data,updateData] = useState([]);
  let[search,updateSearch] = useState("");

  const getBill = () =>{

    let input = {
      key:  localStorage.getItem("sellerid")

    };

   const requestOptions = {
        method : 'POST',
        header : {'Content-Type' : 'application/json' },
        body : JSON.stringify(input) 
    };
    fetch("https://www.campusinterview.in/webapi/Billing/getmybill", requestOptions)
    .then(response => response.json())
    .then(data =>{            
        updateData(data);
    })

   
    
    }
    useEffect(()=>{         //useEffect() will help you to get something on on-load 
      getBill();
  },[1])


  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
}

const PER_PAGE = 10;
const [currentPage, setCurrentPage] = useState(0);
const offset = currentPage * PER_PAGE;
const pageCount = Math.ceil(data.length / PER_PAGE);
data.map((data, index) => {
    total = total + parseInt(data.amount)
    totalgst = totalgst + parseInt(data.gst)
    grandtotal = grandtotal + parseInt(data.total)
})

 
  

  return (
    <div className="container">
    <div className="row">
        <div className="col-lg-5">
    <h3 className="text-primary text-center mt-4">
      Manage Bill
    </h3>
    </div>
    <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-8 mb-3 text-center">
                    <a className="btn btn-primary btn-sm text-decoration-underline fw-bold text-white mx-1">2018-2019</a>
                    <a className="btn btn-primary btn-sm text-decoration-underline fw-bold text-white mx-1">2019-2020</a>
                    <a className="btn btn-primary btn-sm text-decoration-underline fw-bold text-white mx-1">2020-2021</a>
                    <a className="btn btn-primary btn-sm text-decoration-underline fw-bold text-white mx-1">2021-2022</a>
                    <a className="btn btn-primary btn-sm text-decoration-underline fw-bold text-white mx-1">2022-2023</a>
                    <a className="btn btn-primary btn-sm text-decoration-underline fw-bold text-white mx-1">2023-2024</a>
                </div>
            </div>
  <div className="row ">
        <div className="col-lg-2">
        <tr>
            <td>Show</td>
           <td> <select className="form-select">
                <option>10</option>
                <option>9</option>
                <option>8</option>
                <option>7</option>
                <option>6</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>

            </select>
            </td>

            <td>entries</td>
        </tr>
        </div>
        <div className="col-lg-7"></div>
        <div className="col-lg-3">
        <tr className="text-right">
            <th >Search:</th>
            <td colSpan="8"><input type="text" className="form-control" onChange={obj=>updateSearch(obj.target.value)} value={search}/></td>
        </tr>
        </div>
    </div>
 <table className="table table-bordered mt-2 " cellPadding="10" width="100" height="100" >
        <thead>
        <tr className="bg-light">
            <th>#</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Product</th>
            <th>Fee</th>
            <th>GST</th>
            <th>Total</th>
            <th>Date</th>
            <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {
             data.
             filter(post => {
              if (post.email.toLowerCase().includes(search.toLowerCase()) || post.mobile.includes(search)|| post.name.includes(search)) {
                return post;
              }
            }).map((info,index)=>{
              return(
               <tr key={index}>
                <td>{index+1}</td>
                <td>{info.name}</td>
                <td>{info.mobile}</td>
                <td>{info.email}</td>
                <td>{info.product}</td>
                <td>{info.amount}</td>
                <td>{info.gst}</td>
                <td>{info.total}</td>
                <td>{info.day}-{info.month}-{info.year}</td>
               <td> 
                <PdfDownlode data={info} className={"btn btn-danger"}/>                
                </td>
                

               </tr>
              )
             })
              }
            </tbody>
     
       
           
  
    </table>
    <div className="paginate float-end">
             <ReactPaginate
             previousLabel={"Previous"}
             nextLabel={"Next"}
             breakLabel={"..."}
             pageCount={pageCount}
             onPageChange={handlePageClick}
             />
          </div>
                <div>
                
                    <center>
                        <div className="row">
                            <div className="col-sm-4">

                                <p className='text text-primary '>Total: ₹{total} </p>
                            </div>
                            <div className="col-sm-4">
                                <p className='text text-info '>Total GST: ₹{totalgst} </p>
                            </div>
                            <div className="col-sm-4">
                                <p className='text text-success '>Grand Total: ₹{grandtotal} </p>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
    </div>

  )

}

export default Mybill


// new register 

// total cost 

// enter 100 

// 18% of 100 should be calculated and display under gst amount 

// total amount (totalcost +gst )

{/* <td><button className="btn btn-white text-dark ">Previous</button></td>
<td><button className="btn btn-white text-dark ">Next</button></td> */}
