import { useState, createContext, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [id,setId] = useState(0);
    const [count,setCount] = useState(0);
    const [priceProduct,setPriceProduct] = useState(0);
    const [allCartItems,setAllCartItems] = useState([]);

  return (
      <CartContext.Provider value={{ id,setId,count,setCount,priceProduct,setPriceProduct ,allCartItems }}>
        {children}
      </CartContext.Provider>
  );
};


const useAddToCart = () => {
    const { id,setId,count,setCount,priceProduct,setPriceProduct ,allCartItems,setAllCartItems } = useContext(CartContext);
    return { id,setId,count,setCount,priceProduct,setPriceProduct ,allCartItems,setAllCartItems };
  };


export default useAddToCart;