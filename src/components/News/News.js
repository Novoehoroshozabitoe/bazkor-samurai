import React from "react";
import classes from './News.module.css';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

const News = (props) => {
    return (
        <div>
            News
        </div>
    )

}

let AuthRedirectComponent = withAuthRedirect(News);

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default withUrlDataContainerComponent

