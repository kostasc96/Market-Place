import {Link} from 'react-router-dom';
import AddProductCount from '../AddProductCount';
import { useEffect, useState } from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';
import { InputNumber } from 'primereact/inputnumber';
import './index.css'
import useProductCount,{ProductProvider, ProductContext } from '../../useProductCount';
import useAddToCart,{CartProvider, CartContext } from '../../useAddToCart';

import { useParams, useHistory } from 'react-router-dom';
import { products } from '../../config'

const useStyles = makeStyles((theme) => ({
    image: {
      borderRadius: '1.75rem',
      padding: '.35rem',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
  }));

const Product = () => {
    let {flagItem, setFlagItem} = useState(false);
    const { productPrice, productCount, setProductPrice, setProductCount } = useProductCount();
    const { allCartItems, setAllCartItems } = useAddToCart();
    let { id: productId } = useParams();
    let history = useHistory();
    const classes = useStyles({ cti: '#2ba6df' });

    const product = products.find( p => p.id === parseInt(productId));

    // If we don't have the product with the incoming id then we go to the products page
    if(!product){
        history.push('/products');
    }

    useEffect(() => {
        setProductPrice(product.price);
        setProductCount(1);
      }, []);


    useEffect(() => {
        console.log('%c[Update] useEffect 🔁', 'color: aqua');
        setProductPrice(productCount * product.price);
    
        return () => console.log('%c[Cleanup] the useEffect', 'color: tomato');
      }, [productCount]);


    const handleAddProduct = () =>{
        setAllCartItems(cartItems => {
            let newCart = [];
            const elementToAdd = {
                productId: productId,
                totalPrice: productPrice,
                numberOfProducts: productCount,
            };

            if(cartItems.length){
                const productIndex = cartItems.findIndex( p => p.productId === parseInt(productId))
                newCart = [...cartItems];
                if(productIndex>=0){    
                    newCart[productIndex] = elementToAdd
                }else{
                    newCart.push(elementToAdd)
                }
            }else{
                newCart.push(elementToAdd)
            }
            return newCart;
        })
    }
    return(
        <Grid className='product'>
            <Grid item xs={12} md={4} className='product-image'>
                <img className={classes.image} src='https://picsum.photos/200/300' />
                <Box m={1}>
                    <InputNumber value={productCount} min={0} onValueChange={(e) => setProductCount(e.value)} />
                </Box>
                <Box  m={1} className='add-product'>
                    <AddProductCount  {...{ productPrice, productCount, setProductPrice, setProductCount} }/>
                </Box>
                <Box  m={1} className='details'>
                    <button onClick={handleAddProduct}>
                        Add To Cart
                    </button>
                </Box>
                <Box  m={1} className='link-home'>
                    <Link to={`/products`}> Go To Product Page</Link>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Product;