import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");

const skills = [
  { name: "JavaScript (ES6+)", logo: JsLogo },
  { name: "Next.js", logo: NextLogo },
  { name: "React", logo: ReactLogo },
  { name: "TypeScript", logo: TypescriptLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "Redux", logo: ReduxLogo },
  { name: "Python", logo: PythonLogo },
  { name: "Firebase", logo: FirebaseLogo },
  { name: "Nodejs", logo: NodeJSLogo },
  { name: "SQL", logo: SqlLogo },
  { name: "MongoDB", logo: MongoDBLogo },
  { name: "Docker", logo: DockerLogo },
];

const About = () => {
  return (
    <div
      id="About"
      className="flex mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
          Experience in web development using HTML, CSS, JavaScript. I have knowledge of popular frameworks React and experience
          with REST APIs.
          </code>
          <br />
          <br />
          <code>Here are a few technologies I am familiar with :</code>
          <List list={skills} />
        </div>
      </div>
    </div>
  );
};

export default About;
