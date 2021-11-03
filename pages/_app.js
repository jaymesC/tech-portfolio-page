import "../styles/globals.css";
import "../styles/index.css";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { data } from "../data";

function MyApp() {
  return (
    <div className="container">
      <h1>
        Exp<span className="underline">erie</span>nce
      </h1>
      <div className="content">
        <div className="names">
          <h2>TOMMY</h2>
          <h2>BIGDROP</h2>
          <h2>CUKER</h2>
        </div>
        {data.map((person) => (
        <div className="position" key={person.name}>
          <h4>{person.position}</h4>
          <span>{person.name}</span>
          <p>{person.duration}</p>
          {person.descriptions.map((x, index) => (
            <div className="write-up" key={index}>
              <ChevronDoubleRightIcon className="icon" />
              <p>
               {x}
              </p>
            </div>
          ))}
        </div>

        ))}
      </div>
      <div className="button-container">
        <button>MORE INFO</button>
      </div>
    </div>
  );
}

export default MyApp;
