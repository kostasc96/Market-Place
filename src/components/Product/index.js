import AddProductCount from '../AddProductCount';
import { useState, useEffect } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import ProductViewCount from '../ProductViewCount';

const Product = ({price}) => {
    const [productPrice, setProductPrice] = useState(price);
    const [productCount, setProductCount] = useState(1);

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
                <InputNumber value={productCount} onValueChange={(e) => setProductCount(e.value)} />
                <Button value="Enter" onClick={() => setProductCount(productCount)}/>
            </div>
            <div>
                <ProductViewCount count={productCount}/>
                <AddProductCount price={productPrice} count={productCount}/>
            </div>
        </div>
    );
}

export default Product;