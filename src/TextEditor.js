import axios from 'axios';
//CKEditor:
import React, { useState } from 'react'
import UploadAdapter from './UploadAdapter';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react';

import ReactDOM from 'react-dom'
// import Dialog from './Dialog'
// import staticize from './Staticize';
import avatar from './components/images/IMG_2744.jpg'; 

// const TextEditor = ({ onSubmit }, props) => {
const TextEditor = (props) => {
    // const {getChildrenData} = props.getChildrenData
    var authorName = ''
    console.log(props.id);
    const [body, setBody] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        // onSubmit({ body })
        console.log({body})
        let formData = new FormData(document.getElementById("form1"));
        let data = {
            'title': formData.get("title"),
            'author': formData.get("author"),
            'text': body,
            'tags': [''],
            'num_likes': 0
        }
        if(props.id != undefined){
            axios.post("http://127.0.0.1:5000/api/blog/update_blog/"+props.id, data).then(response =>{
                console.log(response)
                // props.history.push("/post_list")
                // const holder = document.createElement('div')
                // document.body.appendChild(holder)
                // ReactDOM.render(
                //     <Dialog/>,
                //     holder
                //   )
            })
        }
        else{
            axios.post("http://127.0.0.1:5000/api/blog/", data).then(response =>{
                console.log(response)
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} id="form1">
            <div className="form-title">
                <div className="title">
                    <textarea type="text" name="title" id="Title" placeholder="Add Title Here." maxLength="90"></textarea>
                </div>
                <div className="author">
                    <img className="author-avatar"  src={avatar}></img>
                    <textarea type="text" name="author" id="Author" disabled></textarea>
                    <input type="number" name="num_likes" id="Likes" style={{"display":"none"}}></input>
                    <input type="text" name="text" id="Text" style={{"display":"none"}}></input>
                    <input type="number" name="tags" id="Tags" style={{"display":"none"}}></input>
                </div>
            </div>
            <CKEditor
            editor={ ClassicEditor }
            data = ''
            onReady={ editor => {
                var data
                if(props.id != undefined){
                    axios.get("http://127.0.0.1:5000/api/blog/"+props.id).then(response => {
                        setBody(response.data.data.blog) 
                        data = response.data.data.blog.text
                        editor.setData(data);
                        document.getElementById("Title").value = response.data.data.blog.title
                        document.getElementById("Text").value = response.data.data.blog.text
                        if(response.data.data.blog.author != null){
                            authorName = response.data.data.blog.author
                        }
                        else{
                            authorName = "default author"
                        }
                        document.getElementById("Author").value = authorName
                        // props.getChildrenData(authorName)
                    })
                }
                else{
                    document.getElementById("Author").value = "default author"
                }
                editor.plugins.get('FileRepository')
                    .createUploadAdapter = (loader,authorName,titleName) => {
                        authorName = document.getElementById("Author").value
                        titleName = document.getElementById("Title").value
                        return new UploadAdapter(loader,authorName,titleName)
                    }
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
                setBody(data)
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
            />
            <button className="btn btn--primary btn--primary" type='submit'>Submit</button>
        </form>
    )
}

export default TextEditor
