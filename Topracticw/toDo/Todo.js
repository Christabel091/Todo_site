import React from "react";

const Todo = (props) => {
  let styles;
  if (props.completed) {
    styles = {
      color: "green",
    };
  } else {
    styles = {
      color: "red",
    };
  }
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => {
          props.handletodo(props.id);
        }}
      />
      <p style={styles}>{props.item}</p>
    </div>
  );
};

export default Todo;
