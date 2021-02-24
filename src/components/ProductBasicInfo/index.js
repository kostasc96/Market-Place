import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom';
import { useState } from 'react';
import AddProductCount from '../AddProductCount';
import './index.css'
import useProductCount,{ProductProvider, ProductContext } from '../../useProductCount';
import ProductViewsWithPrice from '../ProductViews';
import handleClickProduct from '../handleClickProduct';
import Product from '../Product';

const ProductBasicInfo = ({prodPrice,productId}) => {
    const {flag,setFlag} = useState(false);
    const { allCartItems, setAllCartItems } = useProductCount();

    return(
        <div className='display-product'>
            <div className='product-image'>
                <img src='https://picsum.photos/200/300' />
                <div>
                    Price: <ProductViewsWithPrice price={prodPrice} />
                </div>
            </div>
            <div>
                <Link to={`/product/${productId}`}> Go To Product Page</Link>
                {/* <button onClick={() => {handleClickProduct(productId ?? id,prodPrice)}}>
                    Go To Product Page
                </button> */}
            </div>
        </div>
    );
}

export default ProductBasicInfo;