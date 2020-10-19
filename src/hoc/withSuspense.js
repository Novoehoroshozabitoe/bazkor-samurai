import React, {Component} from "react";
import Preloader from "../components/common/preloader";




export const withSuspense = (Component) => {
    return (props) => {
          return  <React.Suspense fallback={<Preloader/>}>
              <Component { ...props}/>
          </React.Suspense>
    };
}


