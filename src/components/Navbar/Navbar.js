import React from 'react';
import  classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profiles</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item} >
                <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/projects" activeClassName={classes.activeLink}>Projects</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>  <div className={classes.item}>
                <NavLink to="/sidebar" activeClassName={classes.activeLink}>Sidebar</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;