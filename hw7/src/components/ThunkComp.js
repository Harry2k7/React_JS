import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/actions";


function ThunkComp() {
    const todos = useSelector(
        state => state.todosList.todos
    )
    // console.log(todos);

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(fetchData())
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Загрузить данные</button>
            <h2>Список задач</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <h2>Сделать: {todo.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ThunkComp;
