import { Link } from 'react-router-dom'
import { ProductProvider } from '../../useProductCount';
import useAddToCart,{CartProvider, CartContext } from '../../useAddToCart';
import './index.css'
import ProductBasicInfo from '../ProductBasicInfo';
import handleEmptyCart from '../handleEmptyCart';
import { products } from '../../config';

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
        {/* Product provider makes little sense because of the scale on the component nesting */}  
        {products.length>0 && (
          products.map( product => (
              <ProductBasicInfo key={product.id} prodPrice={product.price} productId={product.id}/>
          ))
        )}
      </div>
    </div>
  );
}

export default AllProducts;