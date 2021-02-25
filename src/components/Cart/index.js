import {Link, Redirect} from 'react-router-dom';
import useAddToCart,{CartProvider, CartContext } from '../../useAddToCart';
import AllProducts from '../AllProducts';
import CartProduct from '../CartProduct';

const Cart = () => {
    const { allCartItems, setAllCartItems } = useAddToCart();

console.log(allCartItems);
    if(allCartItems.length == 0){
        return (
            <div>
                 <Redirect to="/products"/>
            </div>
        );
    } else {
        return(
            <div className='display-cart-products'>
                {/* 
                
                ⚡️[Improvement]
                If you want to use map then you need to return something
                You can use the short () => () or () => {
                    return ()
                }
                Try to use consistent variable names/props
                */}
                
                <div>
                    {allCartItems.map((element) => (
                        <CartProduct  key={element.id} cId = {element.productId} cPrice={element.totalPrice} cCount = {element.numberOfProducts}/>
                    ))                            
                    }
                </div>
                <div>
                    <Link to={`/products`}> Go To Home Page</Link>
                </div>
            </div>
        );
    }
  }
  
  export default Cart;