import Product from '../Product';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

/**
 * 
 * We don't write components with lowercase
 * 
 */
const handleClickProduct = ({idOfProduct,priceOfProduct}) => {
    return (<>
        <Router>
            <Route exact path='/products/:productId'>
                <Product price={priceOfProduct} prodId={idOfProduct}/>
            </Route>
        </Router>
        </>);
}

export default handleClickProduct;