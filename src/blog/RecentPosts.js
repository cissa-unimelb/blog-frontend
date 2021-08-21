import React from 'react';
import './RecentPosts.css';
import CardItem from './CardItem';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import {useState, useMemo, useEffect} from 'react';
import {Pagination} from 'antd';
import logo from './images/logo.png'; // Tell webpack this JS file uses this image
console.log(logo);




function RecentPosts({posts}){
  const [pageSize, setPageSize] = useState(6)
  const [current, setCurrent] = useState(1)
  const paginatedPosts = useMemo(() => {
    const lastIndex = current * pageSize
    const firstIndex = lastIndex - pageSize

    return posts.slice(firstIndex, lastIndex)
}, [current, pageSize, posts])

useEffect(() => {
    window.scroll({
        top: 1900,
        left: 0,
        behavior: 'smooth'
    })
}, [current, pageSize])








    return (

<div className = 'some-page-wrapper'>
 
      <Grid container sm = {12}>
      <Grid item lg = {8} md = {12}>
      <div className="cards2">
     
            <div className = "cards_container2">
       
                <div className="cards_wrapper2">
      
                    <h1 className = 'recent_post_heading'>Recent Posts</h1>

                    <Grid container xs = {12} spacing = {2} alignItems="center">

                    {paginatedPosts.map((post, index) => (

                      <Grid item xs={12} md = {6}>

                      <CardItem  src = {post.src}
                      text={post.text}
                            label= {post.label}
                            path={post.path}
                            author= {post.author}
                            authorImage = {post.authorImage}
                            timestamp = {post.timestamp}
                            />
                            </Grid>
                    ))}
                    </Grid>
                </div>
      </div>
    
    </div>
    <div className = "simple_pagination_container">

            <Pagination className = 'simple_pagination'
                simple
                showSizeChanger
                onShowSizeChange={setPageSize}
                pageSize={pageSize}
                total={posts.length}
                defaultCurrent={current}
                onChange={setCurrent}  
            /> 
     </div>
    </Grid>

      <Grid item lg = {4} md={12} >
      <div className="cards3">
     <div className = "cards_container3">
         <div className="cards_wrapper3">
            <h1 className = "about_us_heading"> About us </h1>
            <div>
              <h4 className = "about_us_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            </div>
                        
      </div>
    </div>
</div>
        </Grid>
  </Grid>
</div>
    );
}




export default RecentPosts;
