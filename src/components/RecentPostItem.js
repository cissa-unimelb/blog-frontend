import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from "@material-ui/core";

function RecentPostItem(props) {
    return (
        <div>
            <li className="cards_item2">
               
                <Link className="cards_item_link2" to={props.path}>

                    {/* one child */}
                    <div className = 'cards_item_col'>
                        <figure className = "cards_item_pic-wrap2" data-category={props.label}>
                        <img src={props.src} alt = "" className= "cards_item_img2">

                        </img>
                        </figure>
                    </div>
                
                    {/* another child */}

                    <div className = 'cards_item_col'>
                    {/* child's first child */}
        
                        <div className="cards_item_info2">
                            <p className="cards_item_text2">
                                {props.text}
                                
                            </p>
                        
                        </div>

                        {/* child's second child */}
                        <div className='cards_item_profile2'>
            
                        <Avatar className='card_avatar' alt = {props.author} src = {props.authorImage} />
                        <div className='cards_item_profile_text'>
                        <h4>{props.author}</h4>
                        <h5> {props.timestamp} </h5>
                        </div>

                        </div>


                            {/* a child's third child */}
                            <div className='cards_item_label'>
                            <div className='cards_item_profile_text'>
                            <h5> Tech, Job, Internships</h5>
                        </div>

                        </div>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default RecentPostItem;
