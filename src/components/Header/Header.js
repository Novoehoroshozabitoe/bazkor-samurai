import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5XTzK1G6vqmNRc-gwyc-0GxvMAE5_zuuOew&usqp=CAU'/></div>

            <div className={classes.loginBlock}>
                { props.isAuth
                    ?  <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
               : <NavLink to={'/login'}>Login</NavLink> }
            </div>



        </header>
    )
}

export default Header;