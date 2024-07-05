import React, { Component } from "react";
import TodoInput from "./component/todoInput";
import TodoList from "./component/todoList";
export default class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}
