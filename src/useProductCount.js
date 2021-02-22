import { useState, useEffect, createContext, useContext } from 'react';

const variables = {price:0};


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productCount, setProductCount] = useState(1);
    const [productPrice, setProductPrice] = useState(variables.price);

  return (
    <ProductContext.Provider value={{ productPrice, productCount, setProductPrice, setProductCount }}>
      {children}
    </ProductContext.Provider>
  );
};


const useProductCount = () => {
    const { productPrice, productCount, setProductPrice, setProductCount } = useContext(ProductContext);
    return { productPrice, productCount, setProductPrice, setProductCount };
  };


export default useProductCount;