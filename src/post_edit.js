import React, { Component } from 'react';
import TextEditor from './TextEditor';
import "./post_edit.css";

function Title (props) {
  if (props.state == "edit"){
    return(
      <div className="editor-title">
          <div className="editor-title-text">Edit Post</div>
      </div>
    ) 
  }
  else{
    return(
      <div className="editor-title">
        <div className="editor-title-text">Add New Post</div>
      </div>
    ) 
  }
}

function BackGround (props) {
  return(
    <div className="editor-bg">
    </div>
  )
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
      <div className="editor">
        {/* <Title state={State} authorName = {AuthorName}/>
        <TextEditor id={Id} getChildrenData = {getChildrenData}/>*/}
        <Title state={State}/>
        <BackGround />
        <TextEditor id={Id}/>
      </div>
    )
  }
  else{
    State = "add"
    return (
      <div className="editor">
        <Title state={State}/>
        <BackGround />
        <TextEditor />
      </div>
    )
  }
}
 