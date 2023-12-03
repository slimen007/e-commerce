import { getDatabase,ref,set } from 'firebase/database';
import React, { useState } from 'react'

export default function AddWork() {

const[Title,setTitle] = useState('');
const[Description,setDescription] = useState('');
const[Price,setPrice] = useState(30);
const[PhotoURL,setPhotoURL] = useState('');



    const saveWork = () => {
        let db = getDatabase();
        let myref = ref(db,"MyProducts/" +
        Title.slice(0.5)+Math.floor(Math.random()*100));
        if (Title!== "" && Description !== "" && PhotoURL !==""){
            set(myref,{
                TITLE : Title,
                DESC : Description,
                PRICE : Price,
                URL : PhotoURL
            })
        
        document.getElementById('myForm').reset();
        setTitle('');setDescription('');setPrice('');setPhotoURL('');
        
        }
        else {
            alert("EMPTY INPUT ...")

        }


    }
  return (
    <div className='mt-5'>
    <h1 className='text-primary'>Add new work</h1>

   <form id='myForm' className='mt-5'>
<div className="form-floating mb-3">
  <input required  autoFocus onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="title of picture" />
  <label htmlFor="floatingInput">Title</label>
</div>
<div className="form-floating mb-3">
  <input required onChange={(e)=>setDescription(e.target.value)} type="text" className="form-control" id="floatingPassword" placeholder="description" />
  <label htmlFor="floatingPassword">Description</label>
</div>
<div className="form-floating mb-3" >
  <input onChange={(e)=>setPrice(e.target.value)} type="number" className="form-control" id="floatingPassword2" placeholder="30DT" />
  <label htmlFor="floatingPassword">Price (DT) </label>
</div>
<div className="form-floating mb-3">
  <input required onChange={(e)=>setPhotoURL(e.target.value)} type="url" className="form-control" id="floatingPassword3" placeholder="url..." />
  <label htmlFor="floatingPassword">Photo URL</label>
</div>
<div className="d-grid gap-2">
<button onClick={saveWork} class="btn btn-primary" type="button">Submit work</button>

</div>
</form>

  </div>

      
 
  )
}
