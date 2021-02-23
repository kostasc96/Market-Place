import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Button } from 'primereact/button';
import './App.css';
import AllProducts from './components/AllProducts';
import Product from './components/Product';
import { CartProvider } from './useAddToCart';
import { ProductProvider } from './useProductCount';

function App() {
  return (
    <div>
      <Router>
        <Route path='/products'>
          <CartProvider>
            <AllProducts/>
          </CartProvider>
        </Route>
      </Router>
    </div>
  );
}

export default App;
