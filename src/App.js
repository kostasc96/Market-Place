import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className='cart'>
      <Product price={0.093} />
      <Product price={0.084} />
      <Product price={0.091} />
    </div>
  );
}

export default App;
