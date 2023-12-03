import React from 'react'
import Navbar from '../components/Navbar'
import SubNav from '../components/SubNav'
import Lazy from '../components/Lazy'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import {C1, C2, C3 } from '../ressources'


export default function Home() {
  return (
    <>
    
      
{/* NavBar Component*/}
<Navbar/>
{/* carousel + subnav*/}
<div id="carouselExample" className="carousel slide carousel-navbar" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={C1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={C2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={C3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
  <div className='nav-menu'>
  <SubNav/>
  </div>
</div>


{/*carrousel*/}



{/* text description section*/}

{/* sHOP COMPONENTS*/}
<Lazy/>
{/* INfo section*/}
{/* contact compoents*/}
<h1>Contact us</h1>

<Contact DB ={"Feedback/"}/>
{/* Footer compoents*/}
<Footer/>






    </>
  )
}
