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
        <Switch>
          <Route path='/products'>
            <AllProducts />
          </Route>
          <Route path='/product/:id'>
            <ProductProvider>
              <Product/>
            </ProductProvider>
          </Route>
          {/* <Route path='/product/cart'>
            <ProductProvider>
              <Cart/>
            </ProductProvider>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
