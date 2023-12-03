import Aos from 'aos';
import { getDatabase,onValue,ref,remove } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function Ordes() {

const [allOrders,setAllOrders] = useState(null);

const getAllOrder = () =>{

  //* GET ALL ORDERS

  const db = getDatabase();

  const data = ref(db,"/orders");

  onValue(data,(i)=>{
  const products = i.val();
  let finalData = Object.entries(products);
  setAllOrders(finalData);
  
});
};
useEffect(()=> {
  Aos.init({ duration:2000 });
  getAllOrder();
},[]

);
const db = getDatabase();
  const DeletOrder = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        let orderRef = ref(db,'Orders/'+id);
        remove(orderRef)
      }
    });
  }





  return (
    <div className="container d-flex justify-content-between flex-wrap">
    {allOrders &&
      allOrders.map((order, index) => (
        <div
          data-aos="fade-up"
          className="card mb-3"
          style={{ width: "18rem" }}
          key={index}
        >
          <h5 className='ms-5'> N <sup>o</sup> : {index}</h5>
            {/* <img src={order[1].URL} className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title"><span className='text-primary'>TITLE :</span> {order[1]['ORDER'].TITLE}</h5>
            <h5 className="card-title"><span className='text-primary'>PRICE :</span> {order[1]['ORDER'].PRICE}</h5>
            <h5 className="card-title"><span className='text-primary'>USER :</span> {order[1].NAME + " " + order[1].LASTNAME}</h5>
            <h5 className="card-title"><span className='text-primary'>PHONE :</span> {order[1].PHONE}</h5>
          </div>
         
        </div>
      ))}
  </div>
  )
}


