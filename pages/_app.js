import "../styles/globals.css";
import "../styles/index.css";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";

function MyApp() {
  return (
    <div className="container">
      <h1>
        Exp<span className="underline">erie</span>nce
      </h1>
      <div className="content">
        <div className="names">
          <h2>TOMMY</h2>
        </div>
        <div className="position">
          <h4>Full stack web developer</h4>
          <span>TOMMY</span>
          <p>December 2015 - Present</p>
          <div className="write-up">
            <ChevronDoubleRightIcon className="icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              voluptatibus debitis ipsa sunt nihil, quam non exercitationem rem?
              Et laudantium sunt odio hic?
            </p>
          </div>
          <div className="write-up">
            <ChevronDoubleRightIcon className="icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              voluptatibus debitis ipsa sunt nihil, quam non exercitationem rem?
              Et laudantium sunt odio hic?
            </p>
          </div>
          <div className="write-up">
            <ChevronDoubleRightIcon className="icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              voluptatibus debitis ipsa sunt nihil, quam non exercitationem rem?
              Et laudantium sunt odio hic?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
