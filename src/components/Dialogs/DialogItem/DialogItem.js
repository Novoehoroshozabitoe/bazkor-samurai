import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialog.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id




    return (
        <div className={classes.item}>
            {/*avatar*/}
            <img src='https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg'/>
            {props.message}

            <div className={`${classes.dialogs} ${classes.active}`}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>

        </div>
    )

}


export default DialogItem