import { useSelector, useDispatch } from "react-redux";
import React from "react";
import classes from "./ToggleTheme.module.css"

function ToggleTheme() {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();
    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    }

    return (
      <div
        className={theme === "light" ? `${classes.light}` : `${classes.dark}`}
      >
        <h1>
          Задание: Создать приложение, позволяющее пользователю переключать
          между светлой и темной темой сайта. Текущая тема:{" "}
          <span style={{ color: "Green", fontSize: "62px" }}>{theme}</span>
        </h1>
        <button
          onClick={toggleTheme}
          style={{
            fontSize: "22px",
            padding: "32px",
            borderRadius: "18px",
            backgroundColor: theme === "light" ? "red" : "blue",
          }}
        >
          {" "}
          Изменить тему на {theme === "light" ? "dark" : "light"}
        </button>
      </div>
    );
}
export default ToggleTheme;