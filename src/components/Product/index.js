import {Link} from 'react-router-dom';
import AddProductCount from '../AddProductCount';
import { useEffect, useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import './index.css'
import useProductCount,{ProductProvider, ProductContext } from '../../useProductCount';
import useAddToCart,{CartProvider, CartContext } from '../../useAddToCart';
import handleAddProduct from '../handleAddProduct';
import { useParams } from 'react-router-dom';

const Product = () => {
    let { productId } = useParams();

    let {flagItem, setFlagItem} = useState(false);
    const { productPrice, productCount, setProductPrice, setProductCount } = useProductCount();
    const { allCartItems, setAllCartItems } = useAddToCart();

    useEffect(() => {
        console.log('%c[Update] useEffect 🔁', 'color: aqua');
        let calculatedPrice = productPrice;
        setProductPrice(() => productCount * calculatedPrice);
    
        return () => console.log('%c[Cleanup] the useEffect', 'color: tomato');
      }, [productCount]);


    return(
        <div className='product'>
            <div className='product-image'>
                <img src='https://picsum.photos/200/300' />
                <div>
                    <InputNumber value={productCount} min={0} onValueChange={(e) => setProductCount(e.value)} />
                </div>
                <div className='add-product'>
                    <AddProductCount/>
                </div>
                <div className='details'>
                    <button onClick={() => handleAddProduct({idOfProduct:productId,countOfProduct:productCount,priceOfProduct:productPrice,productsList:allCartItems})}>
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