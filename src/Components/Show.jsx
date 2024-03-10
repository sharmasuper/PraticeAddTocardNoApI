import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { AddTocard, GetCardTotal, Selectbuy, removeItem } from '../Store/DataSlice';
import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Show() {
  const dispatch = useDispatch()
  const Selector = useSelector((state)=>state.AddStore)
 const {card,item1,TotalQuantity,TotalPrice} = Selector
 
 useEffect(()=>{ 
    
  
   dispatch(removeItem())

  },[dispatch])  

   console.log(TotalPrice)
   console.log("totalquantity",TotalQuantity)
   
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
          {Selector&& Selector.item1.map((item)=>{
            const {title,discount,Price,quantity,id,img} = item 
            const isInCard = Selector.card.find((e) => e.id === id)     
           const items = item     
         return (   
             
        <div className='col-md-3 m-5'  key={id}>
      <MDBCard>
      <MDBCardImage src={img} position='top' alt={title} />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
         discount - {discount} price - {Price} ,quantity - {quantity}
        </MDBCardText>
        <MDBBtn href='/' className='m-2' >Button</MDBBtn>
        <MDBBtn className='m-2' style={{background:"gray"}} onClick={()=>dispatch(Selectbuy(items))} ><NavLink to={`Buy/${id}`}>buy Now</NavLink></MDBBtn>
        { isInCard ?     <MDBBtn className='m-2'style={{background:"gray"}}>
                            <NavLink style={{color:"white"}} to="/AddToCard"> Go To card</NavLink> 
                             </MDBBtn>
          :               
          <MDBBtn className='m-2' style={{background:"orange"}} onClick={()=>dispatch(AddTocard(item))}>    
          addTocard 
       </MDBBtn> 
        }  
        
      </MDBCardBody>
    </MDBCard>
    </div>
         )
    })}                                                    
    </div>
    </div>
    </>
  );
}

export default Show;
