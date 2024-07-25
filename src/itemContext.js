import { createContext,useState, useContext } from "react";
import CartModal from "./components/cartModel";

const itemContext=createContext();

 //create custom hook to import in required child component by importing usevalue 
 function useValue(){
    const value=useContext(itemContext);
    return value;
}

//create custom provider which is component and uses default provider
function CustomProvider({children}){
    
    const [total,setTotal]=useState(0);
    const [item,setItem]=useState(0);
    const[showCart ,setShowCart]=useState(false);
    const[cart,setCart]= useState([]);

//instead of keeping in itemcard keep these fun in context for better access
  const handleAdd = (prod) => {
     // setTotal(total+price);
    // setItem(item+1);
   console.log("prod",prod);
    //intially check whether the item is already present in cart array or not
   const index=cart.findIndex((item)=>item.id === prod.id);

   if(index === -1){  //in above if id not match it store -1 in index otherwise save id
    setCart([...cart,{...prod, qty:1}]);
    setTotal(total+prod.price);
   }else{
       cart[index].qty++;  //increase only the product quantity
       setCart(cart);
       setTotal(total+prod.price);
   }
   setItem(item+1);
  };

  const handleRemove=(id)=>{
    const index=cart.findIndex((item)=>item.id===id);
    if(index !== -1){
      cart[index].qty--;
      setItem(item-1);
      setTotal(total-cart[index].price);

      if(cart[index].qty == 0){
        cart.splice(index,1);
      }
    }
    setCart(cart);
  }
const handleReset =()=>{
  setTotal(0);
  setItem(0);
}
const handleClear =()=>{
  setTotal(0);
  setItem(0);
  setCart([]);
}
//logic for toggling cart to cart page
const handleToggle =()=>{
setShowCart(!showCart);
}

    return(
        <itemContext.Provider value={{item,setItem,total,setTotal,handleAdd,handleRemove,handleReset,handleToggle,cart,handleClear}}>
        {/* if showcart is true then show cartMdel otherwise show normal Ui*/}
        {showCart && <CartModal/>}  
        {children}
        </itemContext.Provider>
    )
}
export {itemContext,useValue}

export default CustomProvider;


