import React, { useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { DecreaseItemQuantity, DeleteItem, GetCardTotal, IncreaseItemQuantity, heartItem } from '../Store/DataSlice';

function AddToCard() {


  const Selector = useSelector((state)=>state.AddStore)
  const dispatch = useDispatch()
 
  const {TotalQuantity,TotalPrice,card} = Selector

  useEffect(()=>{

    dispatch(GetCardTotal())
    
   },[card]) 

  return (
       <>
       <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - 2 items</h5>
          </div>
          <div className="card-body">
            {/* <!-- Single item --> */}
            <div className="row">
                {Selector.card.length>0&& Selector.card.map((Product)=>{  
              const {title,discount,Price,quantity,id,img,like} = Product
              console.log(like)
               return (
                <div className='row' key={id}>
               <div className="col-lg-3 col-md-12 mb-4 mb-lg-0" >
                {/* <!-- Image --> */}
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={img}
                    className="w-100" alt={title} />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                {/* <!-- Image --> */}
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0" >
                {/* <!-- Data --> */}
                <p><strong>{title}</strong></p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item" onClick={()=>dispatch(DeleteItem(id))}>
                  <i className="fas fa-trash"></i>
                </button>
               
                <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list" onClick={()=>dispatch( heartItem(id))} style={{background:like?"red":"blue"}} >
                  <i className="fas fa-heart" ></i>  
                </button> 

               
                {/* <!-- Data --> */}
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" >
                {/* <!-- Quantity --> */}
                <div className="d-flex mb-4" style={{maxWidth: '300px'}}>
                  <button className="btn btn-primary px-3 me-2" onClick={()=>dispatch(DecreaseItemQuantity(id))} >
                    <i className="fas fa-minus"></i>
                  </button>

                  <div className="form-outline">
                    {/* <input id="form1" min="0" name="quantity" defaultValue="1" type="number" className="form-control" /> */}
                    <label className="form-label" htmlFor="form1">Quantity - {quantity}</label> 
                  </div>

                  <button className="btn btn-primary px-3 ms-2" onClick={()=>dispatch(IncreaseItemQuantity(id))}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                {/* <!-- Quantity --> */}

                {/* <!-- Price --> */}
               
                <p className="text-start text-md-center">
                  <strong> Price- {Price}</strong>
                </p>
                {/* <!-- Price --> */}
              </div>
              </div>
              )
            
            })} 
              
            </div>
            

      



            {/* <!-- Single item --> */}

            <hr className="my-4" />

            {/* <!-- Single item --> */}
         
            {/* <!-- Single item --> */}
          </div>
        </div>

        
        {/* <div className="card mb-4">
          <div className="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div> */}
        {/* <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p><strong>We accept</strong></p>
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal acceptance mark" />
          </div>
        </div> */}
      </div>

      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                TotalQuantity
                <span>{TotalQuantity}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    {/* <p className="mb-0">(including VAT)</p> */}
                  </strong>
                </div>
                <span><strong>{TotalPrice}</strong></span>
              </li>  
            </ul>            
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
       </>
  );
}

export default AddToCard;
