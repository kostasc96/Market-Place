import { useState, useEffect, createContext, useContext } from 'react';

const useProductCount = ({ price } = {}) => {
  const [productCount, setProductCount] = useState(1);
  const [productPrice, setProductPrice] = useState(price);

  useEffect(() => {
    console.log('%c[Update] useEffect 🔁', 'color: aqua');
    let calculatedPrice = price;
    setProductPrice(() => productCount * calculatedPrice);

    return () => console.log('%c[Cleanup] the useEffect', 'color: tomato');
  }, [productCount]);

  return [productPrice, productCount, setProductCount, setProductPrice];


// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(themes.light);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme, themes }}>
//       {children}
//     </ThemeContext.Provider>
//   );
};


export default useProductCount;