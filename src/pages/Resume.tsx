import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Chandigarh University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              B.Tech Computer Science
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Aug 2020 - July 2024
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Internshala</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Gurugram - Haryana, India{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• April 2024 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Full Stack Developer.
              <br />• Designingn web applications ensuring optimal performance and user experience.

            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Good knowledge of React, Node.js, Express.js.
              <br />• Experience in using Git and VSCode.
              <br />• Solid understanding of software development lifecycles
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
