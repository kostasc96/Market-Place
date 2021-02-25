import { useEffect } from 'react';
import ProductViewsWithPrice from '../ProductViews';
import { Button } from 'primereact/button';
import useProductCount, { ProductContext } from '../../useProductCount';

const AddProductCount = ({productPrice, productCount, setProductPrice, setProductCount}) => {

    useEffect(() => {
        console.log('%c[Update] useEffect 🔁', 'color: aqua');
        let calculatedPrice = productPrice;
        setProductPrice(() => productCount * calculatedPrice);
    
        return () => console.log('%c[Cleanup] the useEffect', 'color: tomato');
      }, [productCount]);


      return (
        <div>
          Add or remove quantity of products:  
          <Button label="-" className="p-button-danger"
            onClick={() => setProductCount((count) => count - 1)}
            disabled={productCount < 1}
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