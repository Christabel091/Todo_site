import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class TodoInput extends Component {
  render() {
    const { item, handletodo, handleSubmit } = this.props;
    return (
      <div className="card card-body mt-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
            <input
              className="form-control text-capitalize"
              placeholder="Enter todo item"
              value={item}
              onChange={handletodo}
            />
          </div>

          <div className="list-group">
            <button className="btn btn-block btn-primary">Add item</button>
          </div>
        </form>
      </div>
    );
  }
}
