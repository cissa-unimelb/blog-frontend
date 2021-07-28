import axios from 'axios';
//Froala:
// import 'froala-editor/js/froala_editor.pkgd.min.js';
// import 'froala-editor/css/froala_style.min.css';
// import 'froala-editor/css/froala_editor.pkgd.min.css';
// import FroalaEditor from 'react-froala-wysiwyg';
// import FroalaEditorComponent from 'react-froala-wysiwyg';
// class Editor extends React.Component {
//     constructor () {
//       super();
//       this.handleModelChange = this.handleModelChange.bind(this);
//       this.state = {
//         model: '<img className="fr-fir" src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100" alt="Old Clock" width="100"/><h1>Click and edit</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis diam in odio iaculis blandit. Nunc eu mauris sit amet purus viverra gravida ut a dui. Vivamus nec rutrum augue, pharetra faucibus purus. Maecenas non orci sagittis, vehicula lorem et, dignissim nunc. Suspendisse suscipit, diam non varius facilisis, enim libero tincidunt magna, sit amet iaculis eros libero sit amet eros. Vestibulum a rhoncus felis. Nam lacus nulla, consequat ac lacus sit amet, accumsan pellentesque risus. Aenean viverra mi at urna mattis fermentum. Curabitur porta metus in tortor elementum, in semper nulla ullamcorper. Vestibulum mattis tempor tortor quis gravida. In rhoncus risus nibh. Nullam condimentum dapibus massa vel fringilla. Sed hendrerit sed est quis facilisis. Ut sit amet nibh sem. Pellentesque imperdiet mollis libero.</p><p><a href="http://google.com" title="Aenean sed hendrerit">Aenean sed hendrerit</a> velit. Nullam eu mi dolor. Maecenas et erat risus. Nulla ac auctor diam, non aliquet ante. Fusce ullamcorper, ipsum id tempor lacinia, sem tellus malesuada libero, quis ornare sem massa in orci. Sed dictum dictum tristique. Proin eros turpis, ultricies eu sapien eget, ornare rutrum ipsum. Pellentesque eros nisl, ornare nec ipsum sed, aliquet sollicitudin erat. Nulla tincidunt porta vehicula.</p><p>Nullam laoreet imperdiet orci ac euismod. Curabitur vel lectus nisi. Phasellus accumsan aliquet augue, eu rutrum tellus iaculis in. Nunc viverra ultrices mollis. Curabitur malesuada nunc massa, ut imperdiet arcu lobortis sed. Cras ac arcu mauris. Maecenas id lectus nisl. Donec consectetur scelerisque quam at ultricies. Nam quis magna iaculis, condimentum metus ut, elementum metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus id tempus nisi.</p>'
//       };
//     }
  
//     handleModelChange = (model) => {
//       console.log(model); // 这个model得到的直接就是html
  
//       this.setState({
//         model: model
//       });
//     }
//     render () {
//       return <FroalaEditor
//         tag='textarea'
//         config={{
//             placeholderText: 'Edit Your Content Here!',
//             charCounterCount: true
//             }}
//         model={this.state.model}
//         onModelChange={this.handleModelChange}
//       />
//     }
//   }

//CKEditor:
import React, { useState } from 'react'
import UploadAdapter from './UploadAdapter';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react';

import ReactDOM from 'react-dom'
// import Dialog from './Dialog'
// import staticize from './Staticize';


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
            Title: <input type="text" name="title" id="Title"></input>
            <input type="text" name="text" id="Text" style={{"display":"none"}}></input>
            Author: <input type="text" name="author" id="Author"></input>
            <input type="number" name="num_likes" id="Likes" style={{"display":"none"}}></input>
            <input type="number" name="tags" id="Tags" style={{"display":"none"}}></input>
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
            <button type='submit'>Submit</button>
        </form>
    )
}

export default TextEditor
