import React, { Component } from "react";
import TodoItem from "./todoItem";
import "bootstrap/dist/css/bootstrap.min.css";

export default class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-8">
        <h2 className="text-capitalize text-center">Todo-item</h2>
        <TodoItem />

        <button className="btn  btn-sm btn-block btn-danger">
          {" "}
          Clear-list
        </button>
      </ul>
    );
  }
}
