import AddProductCount from '../AddProductCount';
import { useEffect } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import './index.css'
import useProductCount,{ProductProvider, ProductContext } from '../../useProductCount';
import useAddToCart,{CartProvider, CartContext } from '../../useAddToCart';

const Product = ({price,prodId}) => {

    const { productPrice, productCount, setProductPrice, setProductCount } = useProductCount();
    const { id,setId,count,setCount,priceProduct,setPriceProduct ,allCartItems,setAllCartItems } = useAddToCart();

    useEffect(() => {
        console.log('%c[Update] useEffect 🔁', 'color: aqua');
        let calculatedPrice = price;
        setProductPrice(() => productCount * calculatedPrice);
    
        return () => console.log('%c[Cleanup] the useEffect', 'color: tomato');
      }, [productCount]);

    
      useEffect(() => {
        console.log('%c[Update] useEffect 🔁', 'color: aqua');
        console.log('In add to cart');
        
        let obj = {productId:id, numberOfProducts:count, totalPrice:priceProduct};
        allCartItems.push(obj); 
        console.log(allCartItems.length);
    
        return () => console.log('%c[Cleanup] the useEffect', 'color: tomato');
      }, [setId,setCount,setPriceProduct]);


    return(
        <div className='product-image'>
            <img src='https://picsum.photos/200/300' />
            <div>
                <InputNumber value={productCount} min={0} onValueChange={(e) => setProductCount(e.value)} />
                {/* <Button label="Add" value="Enter" disabled={productCount<0} onClick={() => setProductCount(productCount) }/> */}
            </div>
            <div className='add-product'>
                {/** You need to lift the state up */}
                <AddProductCount/>
            </div>
            <div>
                <button
                onClick={() => setId((id) =>0), setCount((count) =>productCount), setPriceProduct((priceProduct) =>productPrice)}
                disabled={productCount < 1}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default Product;