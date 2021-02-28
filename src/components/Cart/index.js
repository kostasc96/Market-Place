import {Link, Redirect} from 'react-router-dom';
import { Paper, Grid, Box } from '@material-ui/core';
import useAddToCart,{CartProvider, CartContext } from '../../useAddToCart';
import AllProducts from '../AllProducts';
import './index.css'
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
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Box className="cart-prods">
                            {allCartItems.map((element) => (
                                <CartProduct  key={element.id} cId = {element.productId} cPrice={element.totalPrice} cCount = {element.numberOfProducts}/>
                            ))                            
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} className="link-to-home">
                        <Link to={`/products`}> Go To Home Page</Link>
                    </Grid>
                </Grid>
            </div>
        );
    }
  }
  
  export default Cart;