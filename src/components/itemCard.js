import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemContext";

function ItemCard({id, name,price }) {

  //if we destructure the total and setTotal 
  // const {item,setItem,total,setTotal}=useContext(itemContext);
  // const {item,setItem,total,setTotal}=useValue();
  const{handleAdd,handleRemove}=useValue();
    
  // move these functins to itemcontext 
  // const handleAdd = () => {
  //   setTotal(total+price);
  //   setItem(item+1);
  // };

  // const handleRemove = () => {
  //   if(total<=0){
  //     return
  //   }
  //   setTotal((prevState)=>prevState-price);
  //   setItem(item-1)
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({id,name,price})}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
