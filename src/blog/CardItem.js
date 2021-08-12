
import {Avatar} from "@material-ui/core";


import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards_item'>
        <div className='cards_item_container'>
          <Link to={props.path}>
          <figure className='cards_item_pic-wrap' data-category={props.label}>
            <img
              className='cards_item_img'
              alt=''
              src={props.src}
            />
          </figure>
          </Link>
  


          <div className='cards_item_info'>
          <Link to={props.path} style={{ textDecoration: 'none' }}>

            <div className='cards_item_text'>

            <p>{props.text}</p>


            </div>
            </Link>
            </div>
        
            
            {/* profile info section with two children */}
            <div className='cards_item_profile'>
           
            <Avatar className='card_avatar' alt = {props.author} src = {props.authorImage} />
            <div className='cards_item_profile_text'>
            <h4>{props.author}</h4>
            <h5> {props.timestamp} </h5>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;


