import { useState, useEffect } from "react";
import "../styles/globals.css";
import "../styles/index.css";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { data } from "../data";
import Spinner from "react-svg-spinner";

function MyApp() {
  const [count, setCount] = useState(0);
  const [isloading, setIsLoading] = useState(true);
  const [isactive, setIsActive] = useState(0);

  const clickHandler = (id) => {
    setCount((count = id));
    setIsActive((isactive = id));
  };

  const loading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(loading, 1000);
  }, []);

  if (isloading) {
    return (
      <div className="loading">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container">
      <h1>
        Exp<span className="underline">erie</span>nce
      </h1>
      <div className="content">
        <div>
          {data.map((x) => (
            <h2
              key={x.id}
              className={`names ${isactive === x.id ? "active" : ""}`}
              onClick={() => clickHandler(x.id)}
            >
              {x.name}
            </h2>
          ))}
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
