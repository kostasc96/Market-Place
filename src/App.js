import { Button } from 'primereact/button';
import './App.css';
import Product from './components/Product';
import { ProductProvider } from './useProductCount';

function App() {
  return (
    <div>
      <div class='empty-cart' align="right">
        <Button>
          Empty Cart
        </Button>
      </div>
      <div className='cart' align="center">
      <ProductProvider>
        <Product price={0.093} />
      </ProductProvider>
      <ProductProvider>
        <Product price={0.084} />
      </ProductProvider>
      <ProductProvider>
        <Product price={0.091} />
      </ProductProvider>
      </div>
    </div>
  );
}

export default App;
