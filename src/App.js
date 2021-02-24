import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import {Redirect} from 'react-router';
import { Button } from 'primereact/button';
import './App.css';
import AllProducts from './components/AllProducts';
import Product from './components/Product';
import Cart from './components/Cart';
import { CartProvider } from './useAddToCart';
import { ProductProvider } from './useProductCount';
import ProductBasicInfo from './components/ProductBasicInfo';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/products"/>} />
          <Route path='/products'>
            <AllProducts />
          </Route>
          <Route path='/product/:id'>
            <ProductProvider>
              <Product/>
            </ProductProvider>
          </Route>
          <Route path='/cart'>
            <ProductProvider>
              <Cart/>
            </ProductProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
