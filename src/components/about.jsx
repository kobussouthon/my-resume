import React from "react";
import { TbBrandJavascript, TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";
import { SiAdobecreativecloud } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import {
  BsArrowRightSquareFill,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";
const about = () => {
  return (
    <div className=" w-full text-black bg-white text-center ">
      <div className=" max-w-[1240x] mx-auto px-4 py-16">
        <h1>My Skills</h1>
        <p className=" py-4 text-xl">Below Are a List of My Various Skills</p>

        {/*card containter */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/*card*/}
          <div className="flex flex-col border text-center font-bold rounded-2xl text-xl py-12 px-8">
            <div>
              <div className=" inline-flex p-2">
                <MdDesignServices size={40} />
              </div>
              <h3 className=" p-3">Designer</h3>
              <p className=" text-gray-600 p-3">
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
              <h3 className=" p-3">Things I enjoy designing:</h3>
              <p className="  text-gray-600 p-3">UX, UI, Web, Apps, Logos</p>
              <h3 className=" p-3">Design Tools:</h3>
              <p className="  text-gray-600 p-3">
                Affinity Designer Figma Font Awesome Pen & Paper Sketch Webflow
              </p>
            </div>
          </div>
          <div className="flex flex-col border text-center font-bold rounded-2xl text-xl py-12 px-8">
            <div>
              <div className=" inline-flex p-2">
                <BsArrowRightSquareFill size={40} />
              </div>
              <h3 className=" p-3">Frontend Developer</h3>
              <p className="  text-gray-600 p-3">
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
              <h3 className=" p-3">Things I enjoy designing:</h3>
              <p className=" text-gray-600 p-3">UX, UI, Web, Apps, Logos</p>
              <h3 className=" p-3">Design Tools:</h3>
              <p className=" text-gray-600 p-3">
                Affinity Designer Figma Font Awesome Pen & Paper Sketch Webflow
              </p>
            </div>
          </div>
          <div className="flex flex-col border text-center font-bold rounded-2xl text-xl py-12 px-8">
            <div>
              <div className=" inline-flex p-2">
                <BsFillBookmarkCheckFill size={40} />
              </div>
              <h3 className=" p-3">Marketing</h3>
              <p className="  text-gray-600 p-3">
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
              <h3 className=" p-3">Things I enjoy designing:</h3>
              <p className="  text-gray-600 p-3">UX, UI, Web, Apps, Logos</p>
              <h3 className=" p-3">Design Tools:</h3>
              <p className="  text-gray-600 p-3">
                Affinity Designer Figma Font Awesome Pen & Paper Sketch Webflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
