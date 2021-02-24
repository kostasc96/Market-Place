import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Product from '../Product';
import { ProductProvider } from '../../useProductCount';
import useAddToCart,{CartProvider, CartContext } from '../../useAddToCart';
import './index.css'
import ProductBasicInfo from '../ProductBasicInfo';

const AllProducts = () => {

  const { allCartItems,setAllCartItems } = useAddToCart();

  return (
    <div>
      <div className='show-cart' align="right">
        <button disabled={allCartItems.length<1}>
          Show Cart
        </button>
        <button disabled={allCartItems.length<1}>
          Empty Cart
        </button>
      </div>
      <div className='cart' align="center">
      <ProductProvider>
        <ProductBasicInfo prodPrice={0.093} productId={1}/>
      </ProductProvider>
      <ProductProvider>
        <ProductBasicInfo prodPrice={0.084} productId={2}/>
      </ProductProvider>
      <ProductProvider>
        <ProductBasicInfo prodPrice={0.091} productId={3}/>
      </ProductProvider>
      </div>
    </div>
  );
}

export default AllProducts;