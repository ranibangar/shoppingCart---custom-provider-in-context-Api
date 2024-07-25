import styles from "../styles/Item.module.css";
import ItemCard from "./itemCard";
import itemData from "../data/itemData";
function Items(){
    return(
        // <div className={styles.wrapper}>
        //   <ItemCard name="Apple" price={100}/>
        // </div>

        //to get cards data from itemData file 
        <div className={styles.wrapper}>
      {itemData.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
    );
    } 
    
    export default Items;