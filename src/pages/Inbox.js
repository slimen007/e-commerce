import Aos from 'aos';
import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function Inbox() {

const [allBox,setAllBox] = useState(null);

const getAllBox = ()=>{

  const db = getDatabase();
  const data = ref (db,"/Feedback");

  onValue (data ,(i)=>{
    const products = i.val();
    let finalData = Object.entries(products)
    setAllBox(finalData);
})};

useEffect(()=> {
  Aos.init({ duration:2000 });
  getAllBox();
},[]);
const db = getDatabase();
  const DeletBOX = (id) => {

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
        let BoxRef = ref(db,'Feedback/'+id);
        remove(BoxRef)
      }
    });
  }




  
  return (
    <div className="container d-flex justify-content-between flex-wrap">
    {allBox &&
      allBox.map((Inbox, index) => (
        <div
          data-aos="fade-up"
          className="card mb-3"
          style={{ width: "18rem" }}
          key={index}
        >
          <h5 className='ms-5'> N <sup>o</sup> : {index}</h5>
            {/* <img src={order[1].URL} className="card-img-top" alt="..." /> */}
          <div className="card-body">
            
            <h5 className="card-title"><span className='text-primary'>USER :</span> {Inbox[1].NAME + " " + Inbox[1].LASTNAME}</h5>
            <h5 className="card-title"><span className='text-primary'>PHONE :</span> {Inbox[1].PHONE}</h5>
            <h5 className="card-title"><span className='text-primary'>COMMENT :</span> {Inbox[1].COMMENT}</h5>
          </div>
         
        </div>

       
      ))}
 
  </div>
  )
}
