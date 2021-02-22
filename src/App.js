import { Button } from 'primereact/button';
import './App.css';
import Product from './components/Product';
import { ProductProvider } from './useProductCount';

/**
 * ⚡️[Improvement]
 * It is better to have the products as a variable e.g const initialProducts = [{...},{...}] 
 * so you can decide to either imported from external file/service
 * or reset back to the original
 * 
 * You now need to calculate the the sum of products ( lift the state up!)
 * This later will help you also remove or empty the cart
 * */

function App() {
  return (
    <div>
      {/** 💣[BUG] See the console for error */}
      <div class='empty-cart' align="right">
        <Button z>
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
