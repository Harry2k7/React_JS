import { tasksData } from "../data/tasks";

export const fetchData = () => async dispatch => {
    dispatch({ type: 'FETCH_START' });
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: todos });

    } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message })
    }
}