import React, { Component } from "react";
import {Link} from 'react-router-dom'
export default class One extends Component {

  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div className={this.props.active ? "page page--open" : "page page--close"}>
        <div className="page-internal">
          
          <p>this is one!</p>
          <Link to="/page3/two" className="link link--page">Click here to go to Subpage</Link>
        </div>
      </div>
    )
  }
}