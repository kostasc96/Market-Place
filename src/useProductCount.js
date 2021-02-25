import { useState, useEffect, createContext, useContext } from 'react';



export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productCount, setProductCount] = useState(0);
    const [productPrice, setProductPrice] = useState(0);

  return (
    <ProductContext.Provider value={{ productPrice, productCount, setProductPrice, setProductCount }}>
      {children}
    </ProductContext.Provider>
  );
};


const useProductCount = () => {
  const [productCount, setProductCount] = useState(0);
  const [productPrice, setProductPrice] = useState(0);

    return { productPrice, productCount, setProductPrice, setProductCount };
  };


export default useProductCount;