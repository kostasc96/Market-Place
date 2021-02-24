import Product from '../Product';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

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