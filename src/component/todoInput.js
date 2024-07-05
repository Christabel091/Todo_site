import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body mt-3">
        <form>
          <div className="input-group">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
            <input
              className="form-control text-capitalize"
              placeholder="Enter todo item"
            />
          </div>

          <div className="list-group">
            <button className="btn btn-block btn-primary">Clear list</button>
          </div>
        </form>
      </div>
    );
  }
}
