export const middleware = store => next => action => {
    console.log('Действие: ', action);
    console.log('Состояние до: ', store.getState());
    const result = next(action);
    setTimeout(() => (console.log('Состояние после', store.getState())), 1000)
    return result;
};