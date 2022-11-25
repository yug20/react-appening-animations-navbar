import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { render } from 'react-dom';
import Home from "./Home";
import Subpage from "./Subpage";
import Nav from './Nav';
import Page3 from './Page3';
import './style.css';
import './menu.css';
import './pages.css';
import './nav.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  menuClicked = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {

    return (
      <Router>
        <div className="App">

          <button className={this.state.active ? "menu-button menu-button--open" : "menu-button"} onClick={this.menuClicked}>
            <span>Menu</span>
          </button>

          <Nav active={this.state.active} />

          <div className={this.state.active ? "pages-stack pages-stack--open" : "pages-stack"}>

            <div className={this.state.active ? "page page-inactive page-inactive--open" : "page page-inactive page-inactive--close"}></div>
            <div className={this.state.active ? "page page-inactive2 page-inactive2--open" : "page page-inactive2 page-inactive2--close"}></div>

            <div>
              <Route
                render={({ location }) => {
                  const { pathname } = location;
                  console.log(pathname);
                  return (
                    <TransitionGroup>
                      <CSSTransition
                        key={pathname}
                        classNames="fade"
                        timeout={{
                          enter: 450,
                          exit: 450,
                        }}
                      >
                        <Route
                          location={location}
                          render={() => (
                            <Switch>
                              <Route exact path="/" render={props => (
                                <Home
                                  {...props}
                                  active={this.state.active}
                                />
                              )} />
                              <Route exact path="/subpage" render={props => (
                                <Subpage
                                  {...props}
                                  active={this.state.active}
                                />
                              )} />
                              <Route path="/page3" render={props => (
                                <Page3
                                  {...props}
                                  active={this.state.active}
                                />
                              )} />
                            </Switch>
                          )}
                        />
                      </CSSTransition>
                    </TransitionGroup>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
