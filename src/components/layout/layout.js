import { useContext } from "react";
import styles from "./layout.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext";

function Layout({ children }) {
  const { state } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={"/"}>
          <h2>Shopping webSite</h2>
        </Link>
        <div className={styles.shoppingcarticon}>
          <Link to={"/"}>
            <h2>React project</h2>
          </Link>
          <div className={styles.shopicon}>
            <h3>{state.ItemsCounter > 0 && state.ItemsCounter}</h3>
            <Link to={"/shoppingcart"}>
              <FaCartShopping size={"30px"} />
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.main}>{children}</div>
      <footer className={styles.footer}>
        <h2>Developed by MrKhatibi</h2>
      </footer>
    </div>
  );
}

export default Layout;
