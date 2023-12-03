import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Contact from '../components/Contact';

export default function Card() {
  // const location = useLocation();
  // const {data} = location.state;
  let { state } = useLocation();
  const {TITLE,PRICE,DESC,URL} =state["data"]
  return (
   <div className='d-flex justify-content-center container'>
  <div className="card">
    <img src={URL}className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{TITLE}</h5>
      <p className="card-text">{DESC}</p>
      <p className="card-text"><small className="text-body-secondary">{PRICE}DT</small></p>
      <div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">place un order</button>
      </div>
    </div>
  </div>


      <div className='card-footer'>
<Link to='/'>Retrn to homa page</Link>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Place an order for :{TITLE} </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">

        
      <Contact order ={{TITLE,PRICE}} DB ={"orders/"}/>
       
      </div>

      <h3 className='text-success'>Price : <sapn className="text-dark">{PRICE}</sapn></h3>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>

    </div>
    
  )
}
