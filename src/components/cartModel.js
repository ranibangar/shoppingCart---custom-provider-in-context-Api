import React from "react";
import styles from '../styles/cart.module.css';
import { useValue } from "../itemContext";

function CartModal() {

const {cart,total,handleClear,handleToggle}=useValue();

  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={handleToggle} >
        Close
      </div>
      <div className={styles.clearButton} onclick={handleClear}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item)=>{
          return(
            <div className={styles.cartCard} key={item.key}>
              <h1>{item.name}</h1>
              <h3>x {item.qty}</h3>
              <h3>&#x20B9; {item.qty *item.price}</h3>
            </div>
          )
        })
        }
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
