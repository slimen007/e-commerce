import React, { useEffect, useState } from 'react'
import "aos/dist/aos.css";
import Aos from 'aos';
import auth from '../utils/firebaseConfig';
import { getDatabase, ref, onValue } from "firebase/database";
import { Link } from 'react-router-dom';


export default function Lazy() {

  const [cards,setCards] = useState(null);

  const getCards = () => {
    let authApp = auth;
    const db = getDatabase();
    const data = ref(db,'/MyProducts');
    onValue(data, (i) => {
      const products = i.val();
      let finalData = Object.entries(products);

      setCards(finalData);

    });
    // console.log(cards);
  }
    useEffect(()=>{
      Aos.init({duration : 2000});
      getCards();
    },[]);

    return(
      <div className='container d-flex justify-content-between flex-wrap'>
        {
          cards && 
          cards.map((produit,index) =>(
            <div 
            data-aos="fade-up"
            className="card mb-3"
            style={{ width: '18rem' }}
            key={index}
           >
           <img src={produit[1].URL} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{produit[1].TITLE}</h5>
                <p className="card-text">{produit[1].DESC}</p>
                <p>{produit[1].PRICE} DT</p>
                </div>
                <Link className="btn btn-success" to="/card"  state={{ data : produit[1] }} >
                 Order now
                </Link> 
                  
                
            </div>
          ))
        }
      </div>
    )
}