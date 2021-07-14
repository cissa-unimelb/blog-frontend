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
            <div>
                <p>{info.info.title}</p>
                <a href={nextHref}>edit</a>
            </div>
        );
    }
}

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arr : []
        };
      }

    changeHandle = () => {
        axios.get("http://127.0.0.1:5000/api/blog/").then(response => {
            console.log(response.data.data)
            this.setState({
                arr : response.data.data
            })
        })
    };
  render(){
    return(
        <div>
            <button onClick={this.changeHandle}>Show List Items</button>
                {
                    this.state.arr.map((item, index) =>{
                        return <ListItem key={index} info={item}/>
                    })
                }
        </div>

      )      
  } 
} 
export default List;