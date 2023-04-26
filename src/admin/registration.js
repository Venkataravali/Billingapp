import  { useState,useEffect } from 'react'

const Myregistration = () => {
    
 

  let[arr,updateArr] = useState([]);
  let[name,pickName] = useState("");
  let[email,pickEmail] = useState("");
  let[mobile,pickMobile] = useState("");
  let[product,pickProduct] = useState("");
  let[totalcost,pickTotalcost] = useState("");
  
  let[gstno,pickGstnumber] = useState("");
  let[day,pickDay] = useState("");
  let[month,pickMonth] = useState("");
  let[year,pickYear] = useState("");
   

   const save = ()=>{
    
    let url = "https://www.campusinterview.in/webapi/Billing/savebill"
  let registerData = {
    
 		name: name,
 		email: email,
		mobile: mobile,           
		product: product,               
		amount: totalcost,
		gst: totalcost*18/100,
		total: parseInt(totalcost)+parseInt(totalcost*18/100),
		gstno: gstno,
		day: day,
		month: month,
		year: year,
		key: localStorage.getItem("sellerid")
	};
    let postOption = {
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify(registerData)
    }
    fetch(url, postOption)
        .then(response => response.text())
        .then(data => {
            updateArr(data)
           
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
    <div>
    <h1 className="text-center text-primary mt-5">
      New Billing
    </h1>
   
     <div className="row ms-2">
     <div className="col-lg-3">
         <label>FullName<i>*</i></label>
         <input type="text" className="form-control"
         onChange={obj=>pickName(obj.target.value)}/>
     </div>
     <div className="col-lg-3">
         <label>Mobile<i>*</i></label>
         <input type="number" className="form-control"
         onChange={obj=>pickMobile(obj.target.value)}/>
     </div>
     <div className="col-lg-3">
         <label>Email<i>*</i></label>
         <input type="text" className="form-control"
         onChange={obj=>pickEmail(obj.target.value)}/>
     </div>
     <div className="col-lg-3">
         <label>Product</label>
         <select class="form-select" onChange={obj=>pickProduct(obj.target.value)}>
          {
            arr.map((el,index)=>{
                return(
                    <option tr={index}>{el.productname}</option>
                )
            })
          }
            
         </select>
     </div>
     
 </div>
 <div className="row mt-3 ms-2">
    <div className="col-lg-3">
        <label>Total Cost</label>
        <input type="text" className="form-control"
        onChange={obj=>pickTotalcost(obj.target.value)}/>
    </div>
    <div className="col-lg-3">
        <label>GST Amount</label>
       <p className="textbox">{totalcost*18/100}</p>
    </div>
    <div className="col-lg-2">
        <label>Day</label>
        <select className="form-select" onChange={obj=>pickDay(obj.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>7</option>

        </select>
    </div>
    <div className="col-lg-2">
        <label>Month</label>
        <select className="form-select" onChange={obj=>pickMonth(obj.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>7</option>

        </select>
    </div>
    <div className="col-lg-2">
        <label>Year</label>
        <select className="form-select" onChange={obj=>pickYear(obj.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>7</option>

        </select>
    </div>

 </div>
 <div className="row mt-3 ms-2">
 <div className="col-lg-3">
        <label>Total Amount</label>
        <p className="textbox">
            {totalcost = ""? 0 : parseInt(totalcost)+parseInt(totalcost*18/100)}</p>
    </div>
    <div className="col-lg-4">
        <label>GST Number</label>
        <input type="text" placeholder ="29AAECI4564N1ZY"className="form-control"  onChange={obj=>pickGstnumber(obj.target.value)} value={gstno}/>
    </div>
    </div>
    <div className="text-center mt-5">
		 <button className="btn btn-primary " onClick={save}>Submit</button>
         


         
		 </div>
         

 </div>
  )
}

export default Myregistration


// new register 

// total cost 

// enter 100 

// 18% of 100 should be calculated and display under gst amount 

// total amount (totalcost +gst )