import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" bg-gradient-to-b from-gray-800 to-black  text-white"
    >
      <div className="max-w-screen-lg mx-auto  p-4  flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hi. I'm Santosh Kumar, nice to meet you. Please take a look around.
        </p>
        <br />
        <p className="text-xl ">
          I am a web designer with over 2 years of experience in working.My
          passion lies in creating captivating website designs and implementing
          through fronted development. I am passionate about building excellent
          software that improves the lives of those around me. I specialize in
          creating software for clients ranging from individuals and
          small-businesses all the way to large enterprise corporations. What
          would you do if you had a software expert available at your
          fingertips?
        </p>
      </div>
    </div>
  );
};

export default About;
