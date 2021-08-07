import React from "react";
import ReactDOM from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LoginPage from "./login.js";
import PostEditor from "./post_edit";
import PostList from "./post_list";

function App() {
  function isLoggedIn() {
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
          <Route path="/" exact component={Home} />
          <Route
            path="/post_edit/:id"
            render={() => (isLoggedIn() ? <PostEditor /> : <Redirect to="/" />)}
          />
          <Route
            path="/post_edit"
            render={() => (isLoggedIn() ? <PostEditor /> : <Redirect to="/" />)}
          />
          <Route
            path="/post_list"
            render={() => (isLoggedIn() ? <PostList /> : <Redirect to="/" />)}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Switch>
//         <Route path="/login" component={LoginPage} />
//       </Switch>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export default App;
