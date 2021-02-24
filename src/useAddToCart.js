import { useState, createContext, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [allCartItems,setAllCartItems] = useState([]);

  return (
      <CartContext.Provider value={{ allCartItems, setAllCartItems}}>
        {children}
      </CartContext.Provider>
  );
};


const useAddToCart = () => {
    const { allCartItems,setAllCartItems } = useContext(CartContext);
    return { allCartItems,setAllCartItems };
  };


export default useAddToCart;