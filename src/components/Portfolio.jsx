import React from "react";
import { Link } from "react-scroll";
import ExerciseDiscovery from "../assets/portfolio/ExerciseDiscoveryThumbnail.jpg";
import ComingSoon1 from "../assets/portfolio/soon.jpg";
import ComingSoon2 from "../assets/portfolio/soon.jpg";
// import ComingSoon3 from "../assets/portfolio/soon.jpg";
// import ComingSoon4 from "../assets/portfolio/soon.jpg";
// import ComingSoon5 from "../assets/portfolio/soon.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ExerciseDiscovery,
      Demo: "https://exercisediscovery.netlify.app/",
      Code: "https://github.com/chrisperez22/ExerciseDiscovery"
    },
    {
      id: 2,
      src: ComingSoon1,
      Demo: "https://www.linkedin.com/in/christopher-perez-568765253/details/projects/",
      Code: "https://www.linkedin.com/in/christopher-perez-568765253/details/projects/"
    },
    {
      id: 3,
      src: ComingSoon2,
      Demo: "https://www.linkedin.com/in/christopher-perez-568765253/details/projects/",
      Code: "https://www.linkedin.com/in/christopher-perez-568765253/details/projects/"
    }
    // {
    //   id: 4,
    //   src: ComingSoon3,
    // },
    // {
    //   id: 5,
    //   src: ComingSoon4,
    // },
    // {
    //   id: 6,
    //   src: ComingSoon5,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, Demo, Code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={Demo}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 no-underline hover:underline">
                  Demo
                </button>
                </a>
                <a href={Code}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 no-underline hover:underline">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;