import React from 'react';
import './RecentPosts.css';
import RecentPostItem  from './RecentPostItem';
import Grid from '@material-ui/core/Grid';
import ImageGrid from './ImageGrid';
import { Button } from './Button';
import { Link } from 'react-router-dom';
function RecentPosts(){
    return (

<div className = 'some-page-wrapper'>
 
      <Grid container>
      <Grid item lg = {7} md = {12}>
      <div className="cards2">
     
            <div className = "cards_container2">
       
                <div className="cards_wrapper2">

                    <ul className = "cards_item2">

                    <h1 className = 'recent_post_heading'>Recent Posts</h1>
           



                        <RecentPostItem 
                            src="images/laptop.jpeg"
                            text='Industry fair 2021 - Sign up now before tickets run out'
                            label='Technology'
                            path='/'
                            author= 'CISSA'
                            authorImage = "images/laptop.jpeg"
                            timestamp = '10th April 2021'
                        />
                        <RecentPostItem  
                            src="images/Rectangle.png"
                            text='What are the ethical implications of AI'
                            label='Technology'
                            path='/'
                        />
                        <RecentPostItem  
                            src="images/Rectangle.png"
                            text='What are advice for Design of algo - how to get through'
                            label='Technology'
                            path='/'
                        />
                        <RecentPostItem  
                            src="images/Rectangle.png"
                            text= 'Tutorial on React.Js and other framework react nativ'
                            label='Technology'
                            path='/'
                        />

                    </ul>
                </div>
      </div>
    </div>
    </Grid>






      <Grid item lg = {5} md={12}>
      <div className="cards3">
     
 
     <div className = "cards_container3">
         <div className="cards_wrapper3">

             <ul className = "cards_item2">
           
             

             
            {/* a social media section with two children */}

             <section class='social-media2'>
             <div className = 'follow_us_text'>Follow us:</div>
            <div class='social-media-wrap2'>

      
     
          <div class='social-icons2'>
            <Link
              class='social-icon-link2 facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link2 instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link2 youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link2 twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link2 twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
      
      <hr className = 'grey_line'/>


             <ImageGrid />

             </ul>
         </div>
</div>
</div>
        </Grid>
  </Grid>
</div>
    );
}

export default RecentPosts;
