import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            {/*avatar*/}
            <img src='https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg'/>
            {props.message}
            <div>
                <span>like</span>{props.like}
            </div>
        </div>
    )
}

export default Post;