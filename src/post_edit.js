import React, { Component } from 'react';
import TextEditor from './TextEditor';

function Title (props) {
  if (props.state == "edit"){
    return(
      <div>
          <h1>Edit Post</h1>
          {/* <h2>Author: {props.authorName}</h2> */}
      </div>
    ) 
  }
  else{
    return(
      <div>
        <h1>Add New Post</h1>
      </div>
    ) 
  }
}

export default function PostEditor(props){
  // var AuthorName
  // function getChildrenData(e) {
  //   console.log('我是子组件的值',e)
  //   AuthorName = e
  // }
  // console.log('我是子组件传来的值AuthorName',AuthorName)
  let Id,State
  if (props.match.params.id != undefined){
    Id = props.match.params.id
    State = "edit"
    
    return (
      <div>
        {/* <Title state={State} authorName = {AuthorName}/>
        <TextEditor id={Id} getChildrenData = {getChildrenData}/>*/}
        <Title state={State}/>
        <TextEditor id={Id}/>
      </div>
    )
  }
  else{
    State = "add"
    return (
      <div>
        <Title state={State}/>
        <TextEditor />
      </div>
    )
  }
}
 