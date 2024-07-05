import React, { Component } from "react";
import TodoItem from "./todoItem";
export default class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem />
        <h1>Todo-List</h1>
      </div>
    );
  }
}
