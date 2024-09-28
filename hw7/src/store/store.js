import { configureStore } from "@reduxjs/toolkit";
import { middleware } from "../middleware/middleware";
import { thunk } from "redux-thunk";
import todosSlice from "../reducers/todoSlice";


export const store = configureStore({
    reducer: {
        todosList: todosSlice
    }, middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware, thunk)
})
