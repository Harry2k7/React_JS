import "./App.css";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Message text="Развернуть новый проект с использованием create-react-app." />
      <Message text="Создать компонент Message, отображающий переданный ему props текст." />
      <Message text="Стилизовать компоненты через css (при желании можно использовать less или sass)." />
      <Message text="Дополнительное задание: Установить расширение React Devtools." />
    </div>
  );
}

export default App;
