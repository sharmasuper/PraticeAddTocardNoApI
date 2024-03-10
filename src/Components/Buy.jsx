import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { AddTocard, SelectDecrease, SelectIncrease, Selectbuy, TotalAmount, removeItem } from '../Store/DataSlice';

function Buy() {

 
        

    let { take } = useParams()
    console.log("id",take)
 

  const Select = useSelector((state)=>state.AddStore)

  const  Selector = Select.directBuy
  let FindIndex =  Selector.findIndex((take)=>{
      return take
    })
//     let data = Selector[FindIndex]
       const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(Selectbuy(data))
//   }) 
   const {  SelectTotalAmount, SelectTotalQuantity} = useSelector((state)=>state.AddStore)
    
  
const {title,id,discount,Price,quantity,img} = Selector[FindIndex]

useEffect(()=>{
    dispatch(TotalAmount())
 },[quantity]) 
  
   
  return (
    <>
    <div className='container pt-5' key={id} style={{width:"400px",height:"400px"}} >
      
      <h4>{title}</h4>
      <img src={img} alt={title} />
      <h4> qunatity - {quantity}</h4><h4>Price - {Price}</h4> 
      <div className='d-flex'>
       <div>
        <button className='m-1' onClick={()=>dispatch(SelectIncrease(id))}>SelectIncrease</button>
       </div>
       <div>
        <button className='m-1' onClick={()=>dispatch(SelectDecrease(id))} disabled={quantity<=1?true:false}>SelectDecrease</button>
       </div>
       </div>
       <div className='container'>
        <h4>ToTalAmount - {SelectTotalAmount} </h4>
        <h4>Totalquantity -{SelectTotalQuantity} </h4>
       </div>
       </div>
       </>
   
  );
 
}



export default Buy;
