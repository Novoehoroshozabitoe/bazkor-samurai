import React from "react";
import classes from './Projects.module.css';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";


const Projects = (props) => {
    return (
        <div>
            Projects
        </div>
    )
}

let AuthRedirectComponent = withAuthRedirect(Projects);

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default (withUrlDataContainerComponent)