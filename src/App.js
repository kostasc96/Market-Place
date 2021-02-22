import { Button } from 'primereact/button';
import './App.css';
import Product from './components/Product';

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
        <button>
          Empty Cart
        </button>
      </div>
      <div className='cart' align="center">
        <Product price={0.093} />
        <Product price={0.084} />
        <Product price={0.091} />
      </div>
    </div>
  );
}

export default App;
