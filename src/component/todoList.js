import React, { Component } from "react";
import TodoItem from "./todoItem";
import "bootstrap/dist/css/bootstrap.min.css";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete } = this.props;
    return (
      <>
        <h3 className="text-capitalize text-center">Todo-item</h3>
        <br></br>
        <ul className="list-group my-8">
          {items.map((item) => {
            return (
              <TodoItem
                handleDelete={() => handleDelete(item.id)}
                key={item.id}
                title={item.item}
              />
            );
          })}
          <br></br>
          <br></br>
          <button
            className="btn  btn-sm btn-block btn-danger"
            onClick={clearList}
          >
            Clear-list
          </button>
        </ul>
      </>
    );
  }
}
