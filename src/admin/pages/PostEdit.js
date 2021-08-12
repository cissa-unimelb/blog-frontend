import React, { Component } from 'react';
import TextEditor from '../TextEditor';
import "./PostEdit.css";

function Title (props) {
  if (props.edit){
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

export default function PostEditor(props) {
  if (props.match && props.match.params.id){
    return (
      <div className="editor">
        {/* <Title state={State} authorName = {AuthorName}/>
        <TextEditor id={Id} getChildrenData = {getChildrenData}/>*/}
        <Title edit/>
        <BackGround />
        <TextEditor id={props.match.params.id}/>
      </div>
    )
  }
  else{
    return (
      <div className="editor">
        <Title/>
        <BackGround />
        <TextEditor />
      </div>
    )
  }
}
 