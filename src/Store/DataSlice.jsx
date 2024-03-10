import { createSlice } from "@reduxjs/toolkit";
import ContentData from "../contentData.jsx/ContentData";

const DataSlice = createSlice({
    name : "Ecommerce",
    initialState : {
        card : [],
        directBuy:[],
        item1 : ContentData,
        TotalQuantity : 0,
        TotalPrice : 0,
        SelectTotalAmount:0,
        SelectTotalQuantity:0
    },
    reducers: {
        AddTocard : (state,action)=>{
      
       let FindIndex = state.card.findIndex((e)=>e.id === action.payload.id)
       console.log(FindIndex)
            if(FindIndex>=0){
                state.card[FindIndex].quantity +=1
            }else{
                    state.card.push(action.payload)
            }
        },

        GetCardTotal : (state,action) =>{
            
      const {totalPrice,totalQuantity} =  state.card.reduce((value1,value2)=>{
               const {Price,quantity} = value2
               const Itemtotal = Price * quantity
            
               const Quantity = quantity
               value1.totalPrice += Itemtotal
               value1.totalQuantity += Quantity

               return value1

         },{
            totalPrice:0,
            totalQuantity:0
         })
         state.TotalPrice = parseInt(totalPrice).toFixed(2);
         state.TotalQuantity = totalQuantity
          
        },
       IncreaseItemQuantity : (state,action) =>{
        state.card =   state.card.map((Increase)=>{
          if(Increase.id === action.payload){
          
            return {...Increase,quantity : Increase.quantity+1}
            
          }
          return Increase
            
        })
       },
     DecreaseItemQuantity : (state,action) =>{
          state.card =    state.card.map((decrease)=>{
                if(decrease.id === action.payload){
                    return  {
                        ...decrease , quantity : decrease.quantity-1
                    }                    
                }
                return decrease 
             })
     },
     DeleteItem : (state,action)=>{
        state.card = state.card.filter((item)=>item.id !== action.payload)
     }, 
     heartItem: (state, action) => {
        state.card = state.card.map((item) => {
          if (item.id === action.payload) {
            return { ...item, like: !item.like };
          } 
                 
          return item;
        });
      },
      Selectbuy : (state,action) =>{
                 state.directBuy.push(action.payload)
      },

      removeItem : (state,action) =>{
          state.directBuy = []
      },
      TotalAmount: (state, action) => {
     const {SelectTotalAmount,SelectTotalQuantity} =   state.directBuy.reduce((accumlater,currentValue)=>{
           const {quantity,Price} = currentValue
            const itemTotal = quantity*Price
            accumlater.SelectTotalAmount += itemTotal
            accumlater.SelectTotalQuantity += quantity
            return accumlater
       },{
        SelectTotalAmount:0,
        SelectTotalQuantity:0
       })
       state.SelectTotalAmount = parseInt(SelectTotalAmount).toFixed(2)
       state.SelectTotalQuantity = SelectTotalQuantity
    }
    ,
    SelectIncrease :(state,action)=>{
          state.directBuy = state.directBuy.map((element)=>{
             if(element.id === action.payload){
              return {...element,quantity: element.quantity+1}
             }
             return element
          })
    },
    
      SelectDecrease : (state,action) =>{
        state.directBuy = state.directBuy.map((element)=>{
          if(element.id === action.payload){
           return {...element,quantity: element.quantity-1}
          }
          return element
       })
      }      
    }
})


export default DataSlice.reducer 
export const {AddTocard,GetCardTotal,IncreaseItemQuantity, DecreaseItemQuantity,DeleteItem, heartItem,removeItem,Selectbuy,SelectIncrease,SelectDecrease,TotalAmount} = DataSlice.actions