
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import ThunkComp from './components/ThunkComp';
import { tasksData } from './data/tasks';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThunkComp />

      </Provider>

    </div>
  );
}

export default App;
