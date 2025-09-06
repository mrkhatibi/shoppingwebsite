import { createContext, useReducer } from "react";
import { sumProducts } from "../components/helpers/helperFunctions";

const CartContext = createContext();

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        selectedItems: [...state.selectedItems],
        checkOut: false,
        ...sumProducts(state.selectedItems),
      };
    case "Increase":
      const inindex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[inindex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "Decrease":
      const deindex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[deindex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "Remove":
      const newState = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        selectedItems: newState,
        checkOut: false,
        ...sumProducts(newState),
      };
      case "Pay" : 
      return {
        selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: true,
      }
    default:
      throw new Error("Invalid Action");
  }
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export { CartContext };
