import { useState, useEffect } from 'react';
import ProductViewsWithPrice from '../ProductViews';
import { Button } from 'primereact/button';
import ProductViewCount from '../ProductViewCount';

const AddProductCount = ({ price, count, ...props }) => {
    const [productCount, setProductCount] = useState(count);
    const [productPrice, setProductPrice] = useState(price);

    useEffect(() => {
        console.log('%c[Update] useEffect 🔁', 'color: aqua');
        let calculatedPrice = price;
        setProductPrice(() => productCount * calculatedPrice);
    
        return () => console.log('%c[Cleanup] the useEffect', 'color: tomato');
      }, [productCount]);


      return (
        <div>
          <div>
            Number of products: <ProductViewCount count={productCount}/>
          </div>
          Add or remove quantity of products:  
          <Button label="-" className="p-button-danger"
            onClick={() => setProductCount((count) => count - 1)}
            disabled={!(productCount - 1)}
          />
          <Button label="+" className="p-button-success"
            onClick={() => setProductCount((count) => count + 1)}
          />
          <div>
            Price: <ProductViewsWithPrice price={productPrice} />
          </div>
        </div>
      );
};

export default AddProductCount;