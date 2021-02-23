import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Product from '../Product';
import { ProductProvider } from '../../useProductCount';
import useAddToCart,{CartProvider, CartContext } from '../../useAddToCart';
import './index.css'

const AllProducts = () => {

  const { id,setId,count,setCount,priceProduct,setPriceProduct ,allCartItems,setAllCartItems } = useAddToCart();

  return (
    <div>
      <div className='empty-cart' align="right">
        <button disabled={count<1}>
          Empty Cart
        </button>
      </div>
      <div className='cart' align="center">
      <ProductProvider>
        <Product price={0.093} />
      </ProductProvider>
      <ProductProvider>
        <Product price={0.084} />
      </ProductProvider>
      <ProductProvider>
        <Product price={0.091} />
      </ProductProvider>
      </div>
    </div>
  );
}

export default AllProducts;