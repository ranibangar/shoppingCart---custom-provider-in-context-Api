import React from "react";
import styles from "../styles/nav.module.css";
import {useValue } from "../itemContext";

function Navbar() {
//   const { item, total, handleReset,handleToggle } = useContext(itemContext);
  const {item, total, handleReset,handleToggle} = useValue();
  console.log("total",parseInt(total));
  console.log("item",item);

  return (
    <>
      <div className={styles.container}>
        <h1>Total : &#x20B9; {total}</h1>
        <h1>Items : {item}</h1>
        <div className={styles.buttonsWrapper}>
        <button className={styles.button} onClick={()=>handleToggle()}>Cart</button>
          <button className={styles.button} onClick={() => handleReset()}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
