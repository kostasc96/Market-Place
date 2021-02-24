import { Link } from 'react-router-dom'
import { ProductProvider } from '../../useProductCount';
import useAddToCart,{CartProvider, CartContext } from '../../useAddToCart';
import './index.css'
import ProductBasicInfo from '../ProductBasicInfo';
import handleEmptyCart from '../handleEmptyCart';

const AllProducts = () => {

  const { allCartItems,setAllCartItems } = useAddToCart();

  return (
    <div>
      <div className='show-cart' align="right">
        <div>
          <Link to={`/cart`}> Show Cart</Link>
        </div>
        <div>
          <button className="empty-do" disabled={allCartItems.length<1} onClick={() => handleEmptyCart({productList:allCartItems, window:window})}>
            Empty Cart
          </button>
          </div>
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