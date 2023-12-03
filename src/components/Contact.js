import { getDatabase ,ref,set } from 'firebase/database';
import React, { useState } from 'react'

export default function Contact(props) {

  const {order,DB} = props;

const [user_name,setName] =useState('');
const [user_lastname,setLastName] =useState('');
const [user_email,setEmail] =useState('');
const [user_address,setAdress] =useState('');
const [user_phone,setPhone] =useState('');
const [user_comment,setComment] =useState('');



let db = getDatabase();
const handelSubmit = () => {
 // * CONTROLE SAISIE
 // * CREATION OBJET A ENVOYER
 
  let commentRef = ref(db,DB+user_phone.slice(0,4)+Math.floor(Math.random()*1000).toString()+user_email.slice(0,4))
 let data = {
  NAME : user_name,
  LASTNAME : user_lastname,
  EMAIL : user_email,
  ADRESS : user_address,
  PHONE : user_phone,
  COMMENT : user_comment,
 
  ORDER : order || 'no-order'
 }
 console.log("ALL DATA");
 console.log(data)
 // * ENVOIE D'OBJET (set)
  set(commentRef,data);
}

  return (
    <div>
   <div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="nameUser"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
    <input onChange={(e)=>setLastName(e.target.value)} type="text" className="form-control" id="lastNameUser"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="emailUser" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
    <input type="text" onChange={(e)=>setPhone(e.target.value)} className="form-control" id="PhoneUser" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Adresse</label>
    <input type="text" onChange={(e)=>setAdress(e.target.value)} className="form-control" id="adressUser" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment or message</label>
    <textarea onChange={(e)=>setComment(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
  </div>
  <button onClick={handelSubmit} type='submit' className='btn btn-success'>
    Send
  </button>
</div>

    </div>
        )
}
