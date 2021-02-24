import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Button } from 'primereact/button';
import './App.css';
import AllProducts from './components/AllProducts';
import Product from './components/Product';
import { CartProvider } from './useAddToCart';
import { ProductProvider } from './useProductCount';
import ProductBasicInfo from './components/ProductBasicInfo';

function App() {
  return (
    <div>
      <Router>
        {/* We have now only one path for the /products 
        we need to also add a route for individual products eg product/:id */}
        <Switch>
          <Route path='/products'>
            {/* I would also move the cartProvider higher */}
            <AllProducts />
          </Route>
          <Route path='/product/:id'>
            {/* I would also move the cartProvider higher */}
            {/* Is the ProductProvider necessary? */}
            <ProductProvider>
              <Product/>
            </ProductProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
