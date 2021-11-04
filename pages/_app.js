import {useState, useEffect} from "react";
import "../styles/globals.css";
import "../styles/index.css";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { data } from "../data";
import Spinner from "react-svg-spinner";


function MyApp() {
  const [count, setCount] = useState(0);
  const [isloading, setIsLoading] = useState(true);

  const loading = () => {
    setIsLoading(false);
  }

  useEffect(() =>{
    setTimeout(loading, 2000)
  },[]);

  if(isloading) {
    return (
      <div className="loading">
        <Spinner/>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>
        Exp<span className="underline">erie</span>nce
      </h1>
      <div className="content">
        <div className="names">
          <h2 onClick={() => setCount((count = 0))}>TOMMY</h2>
          <h2 onClick={() => setCount((count = 1))}>BIGDROP</h2>
          <h2 onClick={() => setCount((count = 2))}>CUKER</h2>
        </div>
        <div className="position">
          <h4>{data[count].position}</h4>
          <span>{data[count].name}</span>
          <p>{data[count].duration}</p>
          {data[count].descriptions.map((x, index) => (
            <div className="write-up" key={index}>
              <ChevronDoubleRightIcon className="icon" />
              <p>{x}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <button>MORE INFO</button>
      </div>
    </div>
  );
}

export default MyApp;
