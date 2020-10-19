import React from "react";
import classes from './Settings.module.css';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

const Settings = (props) => {
    return (
        <div>
            Settings
        </div>
    )

}

let AuthRedirectComponent = withAuthRedirect(Settings);

let withUrlDataContainerComponent =  withRouter(AuthRedirectComponent)

export default  (withUrlDataContainerComponent)