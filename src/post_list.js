import React, { Component } from 'react';
import List from './List';
import "./post_edit.css";

function Title (props) {
  return(
    <div className="editor-title">
      <div className="editor-title-text">Post List</div>
    </div>
  ) 
}

export default function PostList(props){
    return (
      <div className="editor">
        <Title title={'123'}/>
        <List/>
      </div>
    )
}
 