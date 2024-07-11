import React, { Component } from "react";
import TodoInput from "./component/todoInput";
import TodoList from "./component/todoList";
// index.js or App.js
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      item: this.state.item,
    };

    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      id: this.state.id + 1,
      item: "",
      editItem: false,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  handleDelete = (id) => {
    const sortedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: sortedItems,
    });
  };
  handleedit = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItem,
      item: selectedItem.item,
      editItem: true,
      id: id,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 max-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo-input</h3>
            <TodoInput
              item={this.state.item}
              handletodo={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleedit={this.handleedit}
            />
          </div>
        </div>
      </div>
    );
  }
}
