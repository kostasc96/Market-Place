import AddProductCount from '../AddProductCount';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import ProductViewCount from '../ProductViewCount';
import './index.css'
import useProductCount,{ProductProvider, ProductContext } from '../../useProductCount';

const Product = ({price}) => {

    const { productPrice, productCount, setProductPrice, setProductCount } = useProductCount();

    useEffect(() => {
        console.log('%c[Update] useEffect 🔁', 'color: aqua');
        let calculatedPrice = price;
        setProductPrice(() => productCount * calculatedPrice);
    
        return () => console.log('%c[Cleanup] the useEffect', 'color: tomato');
      }, [productCount]);

    return(
        <div className='product-image'>
            <img src='https://picsum.photos/200/300' />
            <div>
                <InputNumber value={productCount} min={0} onValueChange={(e) => setProductCount(e.value)} />
                {/* <Button label="Add" value="Enter" disabled={productCount<0} onClick={() => setProductCount(productCount) }/> */}
            </div>
            <div class='add-product'>
                {/** You need to lift the state up */}
                <AddProductCount/>
            </div>
        </div>
    );
}

export default Product;