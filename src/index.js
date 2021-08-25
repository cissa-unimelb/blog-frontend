import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./blog/pages/Home";

import Login from "./admin/pages/Login";
import PostEditor from "./admin/pages/PostEdit";
import PostList from "./admin/pages/PostList";
import Navbar from "./blog/Navbar"

function isLoggedIn() {
  const googleToken = localStorage.getItem("googleToken");

  if (googleToken) {
    return true;
  }
  alert("not logged in");
  return false;
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navbar />
      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/admin/login" exact component={Login} />
        <Route
          path="/admin/edit/:id"
          render={(props) => (isLoggedIn() ? <PostEditor {...props} /> : <Redirect to="/admin/login" />)}
        />
        <Route
          exact
          path="/admin/edit"
          render={(props) => (isLoggedIn() ? <PostEditor {...props} /> : <Redirect to="/admin/login" />)}
        />
        <Route
          exact
          path="/admin"
          render={() => (isLoggedIn() ? <PostList /> : <Redirect to="/admin/login" />)}
        />
        <Route path="/:val" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);