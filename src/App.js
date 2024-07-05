import React, { Component } from "react";
import TodoInput from "./component/todoInput";
import TodoList from "./component/todoList";
// index.js or App.js
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 max-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo-input</h3>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}
