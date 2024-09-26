
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import AddProduct from './components/AddProduct';
import ProductsList from './components/ProductsList';

const productsData = [
  { id: 1, name: "Продукт 1", description: "описание 1", price: 20 },
  { id: 2, name: "Продукт 2", description: "описание 2", price: 25 },
  { id: 3, name: "Продукт 3", description: "описание 3", price: 30 }
]

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ProductsList products={productsData} />
        <AddProduct />

      </Provider>

    </div>
  );
}

export default App;

