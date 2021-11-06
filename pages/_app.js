import {useState, useEffect} from "react";
import "../styles/globals.css";
import "../styles/index.css";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { data } from "../data";
import Spinner from "react-svg-spinner";


function MyApp() {
  const [count, setCount] = useState(0);
  const [isloading, setIsLoading] = useState(true);
  const [isactive, setIsActive] = useState([]);


  const clickHandler = (id) => {
    setCount((count = id));
    
    // let activeState = [];
    // activeState[e.target] = true;
    // setIsActive({isactive: activeState});
    // console.log(id)
  }

  let activeStatus = {isactive}

  const bigDrop = (id) => {
    setCount((count = id));
    setIsActive(!isactive);
    console.log(id);
  }

  const cuker = (id) => {
    setCount((count = id));
    setIsActive(!isactive);
    console.log(id);
  }

  

  const loading = () => {
    setIsLoading(false);
  }

  useEffect(() =>{
    setTimeout(loading, 1000)
  },[]);

  if(isloading) {
    return (
      <div className="loading">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="container">
      <h1>
        Exp<span className="underline">erie</span>nce
      </h1>
      <div className="content">
        <div>
          <h2
            className={`names ${activeStatus[0] ? "active" : ""}`}
            onClick={() => clickHandler(data[0].id)}
          >
            TOMMY
          </h2>
          <h2
            className={`names ${activeStatus[1] ? "active" : ""}`}
            onClick={() => bigDrop(data[1].id)}
          >
            BIGDROP
          </h2>
          <h2
            className={`names ${activeStatus[2] ? "active" : ""}`}
            onClick={() => cuker(data[2].id)}
          >
            CUKER
          </h2>
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
