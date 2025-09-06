import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/layout/layout";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <CartProvider>
      <ProductsProvider>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </ProductsProvider>
    </CartProvider>
  // </React.StrictMode>
);
