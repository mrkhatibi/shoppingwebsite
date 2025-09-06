import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductsCard from "../modules/ProductsCard";
import Loader from "../modules/Loader";
import styles from "./Products.module.css";
import Categories from "../modules/Categories";
import { Link, useSearchParams } from "react-router-dom";

function Proucts() {
  const {products} = useContext(ProductsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.get("category" || "")
  const [categoryFilter, setCategoryFilter] = useState(initialState);
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    if (categoryFilter) {
      setSearchParams({ category: categoryFilter });
      const data = products.filter((item) => item.category === categoryFilter);
      setShowData(data);
    } else {
      setShowData(products);
      setSearchParams({});
    }
  }, [categoryFilter, products]);
  if (products.length === 0) {
    return <Loader />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {showData.map((product) => (
          
          <ProductsCard key={product.id} product={product} />
         
        ))}
      </div>
      <div className={styles.categories}>
        <Categories
          setCategoryFilter={setCategoryFilter}
          categoryFilter={categoryFilter}
        />
      </div>
    </div>
  );
}

export default Proucts;
