import {Link} from 'react-router-dom';
import AddProductCount from '../AddProductCount';
import { useEffect, useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import './index.css'
import useProductCount,{ProductProvider, ProductContext } from '../../useProductCount';
import useAddToCart,{CartProvider, CartContext } from '../../useAddToCart';

import { useParams, useHistory } from 'react-router-dom';
import { products } from '../../config'

const Product = () => {
    let {flagItem, setFlagItem} = useState(false);
    const { productPrice, productCount, setProductPrice, setProductCount } = useProductCount();
    const { allCartItems, setAllCartItems } = useAddToCart();
    let { id: productId } = useParams();
    let history = useHistory();

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
        <div className='product'>
            <div className='product-image'>
                <img src='https://picsum.photos/200/300' />
                <div>
                    <InputNumber value={productCount} min={0} onValueChange={(e) => setProductCount(e.value)} />
                </div>
                <div className='add-product'>
                    <AddProductCount  {...{ productPrice, productCount, setProductPrice, setProductCount} }/>
                </div>
                <div className='details'>
                    <button onClick={handleAddProduct}>
                        Add To Cart
                    </button>
                </div>
                <div className='link-home'>
                    <Link to={`/products`}> Go To Product Page</Link>
                </div>
            </div>
        </div>
    );
}

export default Product;