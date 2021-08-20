import React, {Component} from 'react';
import axios from 'axios';

class ListItem extends React.Component {
    constructor(props){
        super(props); // props用于父子组件传值，如果没有值可以不
    }
    render () {
        let info = this.props;
        let nextHref = '/post_edit/'+ info.info._id.$oid
        return (
            <div className="list-item">
                <p className="item-title">{info.info.title}</p>
                <div>
                    <button className="btn btn-edit" onClick={()=>{window.location.href=nextHref}}>edit</button>
                    <button className="btn btn-edit" onClick={()=>{window.location.href=nextHref}}>delete</button>
                </div>
            </div>
        );
    }
}

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arr : [],
            loading: "Loading Post List..."
        };
        this.changeHandle();
      }

    changeHandle = () => {
        axios.get("http://127.0.0.1:5000/api/blog/").then(response => {
            console.log(response.data.data)
            this.setState({
                arr : response.data.data,
                loading: ""
            })
        })
    };
  render(){
    return(
        <div id="list1">
            <div className="default-results">{this.state.loading}</div>
            {/* <button onClick={this.changeHandle}>Show List Items</button> */}
            {
                this.state.arr.map((item, index) =>{
                    return <ListItem key={index} info={item}/>
                })
            }
            <div className="list-navi">
                1  2  3  ...  99
            </div>
        </div>
      )      
  } 
} 
export default List;