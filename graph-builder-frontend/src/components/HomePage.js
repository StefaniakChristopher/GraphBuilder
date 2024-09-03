import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
import StepsPicture from "../assets/stepsgraphcrafter.png";
import StepsPicture2 from "../assets/stepsgraphcrafter2.png";

const HomePage = () => {
  return (
    <div className="flex justify-center">
      {/* to create whitespace */}
      <div className=" w-[1800px]">
        {/* Hero section */}
        <main className="flex flex-col justify-center items-center md:h-[1000px] h-[750px] text-center">
          <h1 className=" text-6xl md:text-9xl font-extrabold [color:var(--font-primary)] mb-4">
            GRAPH CRAFTER
          </h1>
          <h3 className="md:text-5xl text-3xl [color:var(--font-secondary)] mb-10">
            <span className="[color:var(--backup-color)]">Visualize</span> data
            in{" "}
            <span className="[color:var(--backup-color)] underline">
              seconds
            </span>
          </h3>
          <Link to="/creategraph">
            <button className="flex items-center [background:var(--backup-color)] py-4 px-10 rounded-xl font-bold [color:var(--font-secondary)] hover:bg-red-400 duration-300">
              GET STARTED <FaChevronRight />
            </button>
          </Link>
        </main>
        {/* features section */}
        <section className="mb-20">
          <hr className=" h-2 mx-[100px] [color:var(--font-secondary)] mb-12"></hr>
          <div className="flex lg:justify-start justify-center ">
            <h2 className="[color:var(--font-primary)] text-6xl ml-0 lg:ml-8 underline font-bold mb-20">
              Features
            </h2>
          </div>
          <div className="flex justify-evenly lg:flex-row flex-col items-center">
            <div className=" rounded-full [background:var(--bg-secondary)] size-64 flex justify-center items-center flex-col mb-8">
              <h3 className="[color:var(--font-primary)] text-3xl font-bold mb-4">
                Graph Types
              </h3>
              <p className="text-center [color:var(--font-secondary)] font-semibold px-5">
                Choose from a variety of graph types to visualize your data.
              </p>
            </div>
            <div className=" rounded-full [background:var(--bg-secondary)] size-64 flex justify-center items-center flex-col mb-8">
              <h3 className="[color:var(--font-primary)] text-3xl font-bold mb-4">
                Easy to use
              </h3>
              <p className="text-center [color:var(--font-secondary)] font-semibold px-5">
                Create your own graph in seconds by filling out a simple form.
              </p>
            </div>
            <div className=" rounded-full [background:var(--bg-secondary)] size-64 flex justify-center items-center flex-col mb-8">
              <h3 className="[color:var(--font-primary)] text-3xl font-bold mb-4">
                Save Graphs
              </h3>
              <p className="text-center [color:var(--font-secondary)] font-semibold px-5">
                Save your graphs to your account and view them later.
              </p>
            </div>
          </div>
        </section>
        {/* How to use section */}
        <section className="mb-20 flex flex-col justify-center">
          <hr className=" h-2 mx-[100px] [color:var(--font-secondary)] mb-12"></hr>
          <div className="flex lg:justify-start justify-center">
            <h2 className="[color:var(--font-primary)] text-6xl ml-0 lg:ml-8 underline font-bold mb-20">
              How to use
            </h2>
          </div>
          <div className="flex flex-col md:justify-evenly 2xl:flex-row px-10 justify-between items-center">
            <div>
              <img
                className=" border-2 w-[1000px] lg:flex hidden rounded-xl"
                src={StepsPicture}
                alt="Steps illustration"
              />
              <img
                className=" border-2 flex lg:hidden rounded-xl"
                src={StepsPicture2}
                alt="Steps illustration"
              />
            </div>

            <div className="flex flex-row 2xl:flex-col 2xl:mt-0 mt-8 justify-betwee 2xl:justify-center">
              <div className=" 2xl:mr-0 mr-24">
                <div>
                  <h3 className="[color:var(--font-primary)] text-4xl sm:text-6xl mb-4">
                    Step 1
                  </h3>
                  <p className="[color:var(--font-secondary)] text-lg sm:text-xl mb-8">
                    Choose labels and title
                  </p>
                </div>
                <div>
                  <h3 className="[color:var(--font-primary)] text-4xl sm:text-6xl mb-4">
                    Step 2
                  </h3>
                  <p className="[color:var(--font-secondary)] text-lg sm:text-xl mb-8">
                    Choose graph type
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="[color:var(--font-primary)] text-4xl sm:text-6xl mb-4">
                    Step 3
                  </h3>
                  <p className="[color:var(--font-secondary)] text-lg sm:text-xl mb-8">
                    Fill out the data
                  </p>
                </div>
                <div>
                  <h3 className="[color:var(--font-primary)] text-4xl sm:text-6xl mb-4">
                    Step 4
                  </h3>
                  <p className="[color:var(--font-secondary)] text-xl">
                    Create the graph
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* reviews section */}
        <section className="mb-20">
          <hr className=" h-2 mx-[100px] [color:var(--font-secondary)] mb-12"></hr>
          <div className="flex justify-center lg:justify-start">
            <h2 className="[color:var(--font-primary)] text-6xl ml-0 lg:ml-8 underline font-bold mb-20">
              Recent Reviews
            </h2>
          </div>
          <div className="flex justify-evenly items-center lg:items-stretch lg:flex-row flex-col">
            <div className="w-[300px] p-4 border-2 mb-8">
              <h4 className="[color:var(--font-primary)] text-2xl font-semibold mb-1">
                OMG it so cool!
              </h4>
              <div className="flex text-yellow-500 gap-2 mb-1">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
              <p className="[color:var(--font-secondary)]">
                "This is the best graphing tool I have ever used. It is so easy
                to use and the graphs look amazing!"
              </p>
              <p className="[color:var(--font-secondary)] font-semibold">
                - Jack Wellington
              </p>
            </div>

            <div className="w-[300px] p-4 border-2 mb-8">
              <h4 className="[color:var(--font-primary)] text-2xl font-semibold mb-1">
                CHANGED my LIFE
              </h4>
              <div className="flex text-yellow-500 gap-2 mb-1">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
              <p className="[color:var(--font-secondary)]">
                "This is the best graphing tool I have ever used. It is so easy
                to use and the graphs look amazing!"
              </p>
              <p className="[color:var(--font-secondary)] font-semibold">
                - Jack Wellington
              </p>
            </div>

            <div className="w-[300px] p-4 border-2 mb-8">
              <h4 className="[color:var(--font-primary)] text-2xl font-semibold mb-1">
                LOVE it more than my FAMILY
              </h4>
              <div className="flex text-yellow-500 gap-2 mb-1">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
              <p className="[color:var(--font-secondary)]">
                "This is the best graphing tool I have ever used. It is so easy
                to use and the graphs look amazing!"
              </p>
              <p className="[color:var(--font-secondary)] font-semibold">
                - Jack Wellington
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
