import React from "react";

import "./Loader.css";
import { useSelector } from "react-redux";

function Loader({ bg = "rgba(0, 0, 0, 0.4)" }) {
  const data = useSelector(({ dashboard }) => dashboard); 

  if(data?.isLoading)
    {
      return (
        <div className="loader" style={{ backgroundColor: bg }}>
          <div
            id="loading-indicator"
            style={{ width: "60px", height: "60px" }}
            role="progressbar"
            className={
              "MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate"
            }
          >
            <svg viewBox="22 22 44 44" className="MuiCircularProgress-svg">
              <circle
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                stroke-width="3.6"
                className={
                  "MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate"
                }
              ></circle>
            </svg>
          </div>
        </div>
      );
    }
    return null;
  
}

export default Loader;
