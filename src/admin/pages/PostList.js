import React, { Component } from 'react';
import List from '../List';
import Navbar from '../Navbar';
import Footer from '../Footer';
function Title (props) {
  return(
    <div>
      <h1>Post List</h1>
    </div>
  ) 
}

export default function PostList(props){
    return (
      <div>
        <Navbar/>
        <Title title={'123'}/>
        <List/>
        <Footer/>
      </div>
    )
}
 