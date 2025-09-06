import { useContext } from "react"
import {  useParams } from "react-router-dom"
import {ProductsContext} from "../../context/ProductsContext"
import Loader from "../modules/Loader"
import styles from "./Detal.module.css"
import Buttons from "../modules/Buttons"
import { quantityChecker } from "../helpers/helperFunctions"
import { CartContext } from "../../context/CartContext"
function DetailsPage() {
  const {id} = useParams()
  const {products} = useContext(ProductsContext)
  const {state , dispatch} = useContext(CartContext)


  const detail = products.find(item=> (item.id === +id))
    const quantity = quantityChecker(state.selectedItems, +id);

  if(!detail) return <Loader />
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h2>{detail.title}</h2>
        <p>{detail.description}</p>
        <h2>Category : {detail.category}</h2>
        <h2>Rating : {detail.rating.rate} of {detail.rating.count} people</h2>
        <h2>Price : {detail.price} $</h2>
        <Buttons quantity={quantity} product={detail} dispatch={dispatch} />
      </div>
      <img src={detail.image} alt={detail.title}/>
    </div>
  )
}

export default DetailsPage