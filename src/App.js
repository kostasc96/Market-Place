import { Button } from 'primereact/button';
import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div>
      <div class='empty-cart' align="right">
        <Button className="p-button-danger">
          Empty Cart
        </Button>
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
