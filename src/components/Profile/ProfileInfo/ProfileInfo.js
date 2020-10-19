import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/preloader";
import {NavLink} from "react-router-dom";
import mount from "../../../asseds/images/mount.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
          <div>
              <NavLink to={"/Mountain"}>
               <img src={mount} width="800" height="400"/>
              </NavLink>
           </div>

            <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large}/>
               <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
            </div>

        </div>
    )
}

export default ProfileInfo;