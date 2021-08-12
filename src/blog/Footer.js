import React from 'react'
import {Button} from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';
import Grid from '@material-ui/core/Grid';


function Footer() {
    return (
        <div className='footer-container'>
        <div className = 'footer-content-wrapper'>
            <Grid container spacing = {3}>
            <Grid item xs = {6}>
            <div className = 'footer-subscription'>
                <p className = 'footer-subscription-text'>
                    Subscribe to our newsletter for weekly challenges and updates
                </p>


                <div className = 'input-areas'>
                    <form>
                        <input type='email' name = 'email' placeholder='Enter email...' className = 'footer-input' />

                        <Button className = 'btn' buttonStyle='btn--primary'>Subscribe</Button>
                    </form>
                </div>
            </div>

            </Grid>

            <Grid item xs = {6}>

                <div className = 'footer-link-wrapper'>
                    <div className= 'footer-link-items'>
                        <Link to='/'>News</Link>
                        <Link to='/'>Industry Talks</Link>
                        <Link to='/'>Development</Link>
                        <Link to='/'>Machine Learning</Link>
                        <Link to='/'>Subject FAQ</Link>
                    </div>
                </div>
            </Grid>
            </Grid>
            </div>
       
         
            <section class='social-media'>
                <hr />
                <div class='social-media-wrap'>
         
                
                <div class='social-icons'>
                    <Link
                    class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <i class='fab fa-facebook-f' />
                    </Link>
                    <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i class='fab fa-instagram' />
                    </Link>
                    <Link
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i class='fab fa-youtube' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i class='fab fa-twitter' />
                    </Link>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
