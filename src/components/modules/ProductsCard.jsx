import { quantityChecker, SliceTitles } from "../helpers/helperFunctions";
import { FaStar } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { CiBadgeDollar } from "react-icons/ci";
import styles from "./ProductsCard.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
function ProductsCard({
  product,
  product: { id, image, title, price, rating },
}) {
  const { state, dispatch } = useContext(CartContext);

  const quantity = quantityChecker(state.selectedItems, id);

  return (
    <div className={styles.container}>
        <img src={image} alt={title} width={"120px"} height={"100px"} />
        <h3>{SliceTitles(title)}</h3>
        <h3>
          <IoIosPricetags /> {price} <CiBadgeDollar />
        </h3>
      <div className={styles.rateandbuttons}>
        <p>
          {rating.rate} of 5<FaStar color="gold" />
        </p>
      </div>
        <Buttons quantity={quantity} product={product} dispatch={dispatch} />
            <Link key={product.id} to={`/details/${product.id}`}>
              <button className={styles.morebutton}>More</button>
            </Link>
    </div>
  );
}

export default ProductsCard;
