import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function Files() {

  const [products, setProducts] = useState(null);
  const [currentProduct,setCurrentProduct] = useState(null); // * CURRENT PRODUCT SELECTD

  //* NEW DATA OF PRODUCT
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [price , setPrice] = useState('');
  const [URL , setURL] = useState('');

  //* GET ALL PRODUCTS
  const getProducts = () => {
    
    const db = getDatabase();
    const data = ref(db, "/MyProducts");
    onValue(data, (i) => {
      const products = i.val();
      let finalData = Object.entries(products);
      setProducts(finalData);
    });
  };

  const db = getDatabase();
  //* DELETE PRODUCT
  const DeleteProduct = (id) => {

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
        let orderRef = ref(db,'MyProducts/'+id);
        remove(orderRef)
      }
    });
  }

  //* EDIT PRODUCT
  const updateProduct = (e) => {
    e.preventDefault();
    // console.log(currentProduct[0])
   let pr = ref(db,"/MyProducts/"+currentProduct[0]) ;
   console.log(title,desc,price,URL);
   let data = {
    TITLE : title.length === 0 ? currentProduct[1].TITLE : title   ,
    DESC : desc.length === 0 ? currentProduct[1].DESC : desc  ,
    PRICE : price.length === 0 ? currentProduct[1].PRICE : price,
    URL : URL.length === 0 ? currentProduct[1].URL : URL
   }
  update(pr,data)
  .then(()=>{
    Swal.fire('Update success','product changed','success')
  })
  .catch((err)=>{
    console.log(err)
  })
  setTitle('');
  setDesc('');
  setPrice('');
  setURL('');
  }



  useEffect(() => {
    getProducts();
  }, []);

  
  return (
    <div>
      <table class="table table-striped">
      <thead>
    <tr>
      <th scope="col">Num</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Picture</th>
      <th scope="col">Edit</th>
      <th scope="col">Delet</th>
    </tr>
  </thead>
  <tbody>
    {
      products && products.map((produit,index)=> (
        <tr key={index}>
          <td>{index}</td>
          <td>{produit[1].TITLE}</td>
          <td>{produit[1].DESC}</td>
          <td>{produit[1].PRICE}</td>
          <td>
            <a href={produit[1].URL} target='_blank'><p>{produit[1].URL.slice(0,10)} ... </p></a>
            <img width={"70px"} src={produit[1].URL} />
            </td>
          <td><button onClick={()=>setCurrentProduct(produit)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#EditModal" data-bs-whatever="@mdo">Edit</button>
</td>
          <td><button onClick={()=>DeleteProduct(produit[0])} className='btn btn-danger'>X</button></td>
        </tr>
      ))
    }

  </tbody>
</table>

<div className="modal fade" id="EditModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit for : {currentProduct && currentProduct[1].TITLE}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Title:</label>
            <input onChange={(e)=>setTitle(e.target.value)} placeholder={ currentProduct && currentProduct[1].TITLE} type="text" className="form-control" id="ProductTitle" />
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Description:</label>
            <textarea onChange={(e)=>setDesc(e.target.value)}  placeholder={ currentProduct && currentProduct[1].DESC} className="form-control" id="DescTitle" defaultValue={""} />
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Price:</label>
            <input onChange={(e)=>setPrice(e.target.value)} placeholder={ currentProduct && currentProduct[1].PRICE} type="number" className="form-control" id="PriceProduct" />
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Photo URL:</label>
            <input onChange={(e)=>setURL(e.target.value)} placeholder={ currentProduct && currentProduct[1].URL.slice(0,20)} type="text" className="form-control" id="PriceProduct" />
           
          </div>
          <button className='btn btn-success' onClick={(e)=>updateProduct(e)}>Update product</button>
        </form>
      </div>
      
    </div>
  </div>
</div>

    </div>
  )
}
