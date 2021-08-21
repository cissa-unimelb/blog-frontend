import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


function Cards() {
    const classes = useStyles();

    return (
        <div className="cards">
            <h1>Trending</h1>
            <div className = "cards_container">
                <div className="cards_wrapper">
                    <Grid container spacing = {3} alignItems="center">
                        <Grid item sm={12} md = {6} lg = {3} >
                        <CardItem 
                            src="images/laptop.jpeg"
                            text='Industry fair 2021 - Sign up now before tickets run out'
                            label='Technology'
                            path='/'
                            author= 'CISSA'
                            authorImage = "images/laptop.jpeg"
                            timestamp = '10th April 2021'
                        />
                        </Grid>
                        <Grid item sm={12} md = {6} lg = {3}>
                        <CardItem 
                            src="images/Rectangle.png"
                            text='What are the ethical implications of AI'
                            label='Technology'
                            path='/'
                            author= 'CISSA'
                            authorImage = "images/Rectangle.png"
                            timestamp = '10th April 2021'
                        />
                        </Grid>
                        <Grid item sm={12} md = {6} lg = {3}>
                        <CardItem 
                            src="images/Rectangle.png"
                            text='What are advice for Design of algo - how to get through'
                            label='Technology'
                            path='/'
                            author= 'CISSA'
                            authorImage = "images/Rectangle.png"
                            timestamp = '10th April 2021'
                        />
                        </Grid>
                        <Grid item sm={12} md = {6} lg = {3}>
                        <CardItem 
                            src="images/Rectangle.png"
                            text= 'Tutorial on React.Js and other framework react nativ'
                            label='Technology'
                            path='/'
                            author= 'CISSA'
                            authorImage = "images/Rectangle.png"
                            timestamp = '10th April 2021'
                        />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Cards;

