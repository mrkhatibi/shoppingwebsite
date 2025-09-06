import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductsContext = createContext();


function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
export { ProductsContext };
