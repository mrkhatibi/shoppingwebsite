import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ProductsCard from "../modules/ProductsCard"
import styles from "./sopping.module.css"
function SoppingCart() {
  const {state , dispatch} = useContext(CartContext)
 console.log(state)
 const payHandler=()=>{
  dispatch({type : "Pay"})
 }
  return (
    <div className={styles.container}>
      {state.selectedItems.length > 0 ? <div className={styles.carts}>
        {state.selectedItems.map(item => (
          <div key={item.id} >
            <ProductsCard product={item}/>
          </div>
        ))}
      </div> : 
      <div className={styles.checkoutbox}>
        <h2>You have not selected any products.</h2>
      </div>
      }
      
      <div className={styles.checkoutbox}>
        <h3>CheckOut : </h3>
        <h3>Total : {state.total} $</h3>
        <h3>selected items : {state.ItemsCounter || "0"} Item</h3>
        <h3>status : {!state.checkOut ? "UnPaid" : "Paid"}</h3>
       <button className={styles.paybutton} onClick={payHandler} disabled={state.selectedItems.length === 0 || state.checkOut}>Pay</button>
      </div>
    </div>
  )
}

export default SoppingCart