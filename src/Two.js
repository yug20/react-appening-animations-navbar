import React, { Component } from "react";

export default class Two extends Component {

  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div className={this.props.active ? "page page--open" : "page page--close"}>
        <div className="page-internal">
          
          <p>this is two!</p>
        </div>
      </div>
    )
  }
}