import React, { Component } from "react";
import Todo from "./toDo/Todo";
import "./style.css";
import toDoListData from "./todoListData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: toDoListData,
    };
    this.handletodo = this.handletodo.bind(this);
  }

  handletodo = (id) => {
    this.setState((prevtodo) => {
      const updatetodo = prevtodo.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      return {
        todos: updatetodo,
      };
    });
  };
  render() {
    const Todos = toDoListData.map((toDo) => {
      return (
        <Todo
          item={toDo.todo}
          id={toDo.id}
          key={toDo.id}
          completed={toDo.completed}
          handletodo={this.handletodo}
        />
      );
    });

    return <div className="todo-list">{Todos}</div>;
  }
}

export default App;
