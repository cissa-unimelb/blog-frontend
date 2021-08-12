import React, { Component } from 'react';
import List from '../List';
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
        <Title title={'123'}/>
        <List/>
      </div>
    )
}
 