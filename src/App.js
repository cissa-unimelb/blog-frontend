import React from "react";
import ReactDOM from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./login.js";
import PostEditor from "./post_edit";
import PostList from "./post_list";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/post_edit/:id" component={PostEditor} />
                    <Route path="/post_edit" component={PostEditor} />
                    <Route path="/post_list" component={PostList} />
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