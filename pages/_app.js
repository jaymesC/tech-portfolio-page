import "../styles/globals.css";
import "../styles/index.css";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { data } from "../data";
import React from "react";

function MyApp() {
  const [count, setCount] = React.useState(0);

  const handleClick = function () {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>
        Exp<span className="underline">erie</span>nce
      </h1>
      <div className="content">
        <div className="names">
          <h2 onClick={handleClick}>TOMMY</h2>
          <h2 oncClick={() => setCount(count -1)}>BIGDROP</h2>
          <h2>CUKER</h2>
        </div>
          <div className="position" >
            <h4>{data[count].position}</h4>
            <span>{data[count].name}</span>
            <p>{data[count].duration}</p>
            
              <div className="write-up" >
                <ChevronDoubleRightIcon className="icon" />
                <p>{data.descriptions}</p>
              </div>
          </div>
      </div>
      <div className="button-container">
        <button>MORE INFO</button>
      </div>
    </div>
  );
}

export default MyApp;
