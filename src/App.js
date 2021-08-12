import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "./admin/Navbar";
import Footer from "./admin/Footer";
import Login from "./admin/pages/Login";
import PostEditor from "./admin/pages/PostEdit";
import PostList from "./admin/pages/PostList";

function App() {
  const isLoggedIn = () => {
    const googleToken = localStorage.getItem("googleToken");

    if (googleToken) {
      return true;
    }
    alert("not logged in");
    return false;
  }
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/admin/login" exact component={Login} />
          <Route
            path="/admin/edit/:id"
            render={(props) => (isLoggedIn() ? <PostEditor {...props} /> : <Redirect to="/admin/login" />)}
          />
          <Route
            path="/admin/edit"
            render={(props) => (isLoggedIn() ? <PostEditor {...props} /> : <Redirect to="/admin/login" />)}
          />
          <Route
            path="/admin"
            render={() => (isLoggedIn() ? <PostList /> : <Redirect to="/admin/login" />)}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
