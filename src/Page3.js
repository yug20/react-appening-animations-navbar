import React, { Component } from "react";
import One from './One';
import Two from './Two';
import { Switch, Route, Redirect, Link } from 'react-router-dom'


export default class Subpage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.active ? "page page--open" : "page page--close"}>
        <div className="page-internal">
          
          <h1>Page 3</h1>
          <p>Hello from Page3!</p>


          <br />
          <br />




        </div>
      </div>
    )
  }
}