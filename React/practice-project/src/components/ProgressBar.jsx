/**This file contains code related to Progress Bar component */

import React, { useEffect } from "react";
import "./ProgressBar.css";
const ProgressBar = ({ progress }) => {
    const [animatedProgress, setAnimatedProgress] = React.useState(0);
    useEffect(() => {
        setTimeout(() => setAnimatedProgress(progress), 100);
    }, [progress]);
  return (
    <>
      <div className="outer">
        <div
          className="inner"
          style={{
            // width: `${progress}%`,
            transform: `translateX(${animatedProgress-100}%)`,
            color: animatedProgress < 5 ? "black" : "white",
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax={100}
          aria-valuemin={0}
        >
          {progress}%
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
