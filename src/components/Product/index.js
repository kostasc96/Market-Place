import AddProductCount from '../AddProductCount';
import { useState, useEffect } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import ProductViewCount from '../ProductViewCount';
import './index.css'
import useProductCount from '../../useProductCount';

const Product = ({price}) => {

    const [productPrice, productCount, setProductCount, setProductPrice] = useProductCount(
        { price }
      );

    return(
        <div className='product-image'>
            <img src='https://picsum.photos/200/300' />
            <div>
                <InputNumber value={productCount} min={0} onValueChange={(e) => setProductCount(e.value)} />
                {/* <Button label="Add" value="Enter" disabled={productCount<0} onClick={() => setProductCount(productCount) }/> */}
            </div>
            <div>
                {/** You need to lift the state up */}
                <AddProductCount productPrice={productPrice} setProductPrice={setProductPrice} setProductCount={setProductCount} productCount={productCount}/>
            </div>
        </div>
    );
}

export default Product;