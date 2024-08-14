import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
import StepsPicture from "../assets/stepsgraphcrafter.png";

const HomePage = () => {
  return (
    <div className="flex justify-center">
      {/* to create whitespace */}
      <div className=" w-[1800px]">
        {/* Hero section */}
        <main className="flex flex-col justify-center items-center h-[1000px]">
          <h1 className=" text-9xl font-extrabold [color:var(--font-primary)] mb-4">
            GRAPH CRAFTER
          </h1>
          <h3 className="text-5xl [color:var(--font-secondary)] mb-10">
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
          <h2 className="[color:var(--font-primary)] text-6xl ml-8 underline font-bold mb-20">
            Features
          </h2>
          <div className="flex justify-evenly">
            <div className=" rounded-full [background:var(--bg-secondary)] size-64 flex justify-center items-center flex-col">
              <h3 className="[color:var(--font-primary)] text-3xl font-bold mb-4">
                Graph Types
              </h3>
              <p className="text-center [color:var(--font-secondary)] font-semibold px-5">
                Choose from a variety of graph types to visualize your data.
              </p>
            </div>
            <div className=" rounded-full [background:var(--bg-secondary)] size-64 flex justify-center items-center flex-col">
              <h3 className="[color:var(--font-primary)] text-3xl font-bold mb-4">
                Easy to use
              </h3>
              <p className="text-center [color:var(--font-secondary)] font-semibold px-5">
                Create your own graph in seconds by filling out a simple form.
              </p>
            </div>
            <div className=" rounded-full [background:var(--bg-secondary)] size-64 flex justify-center items-center flex-col">
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
        <section className="mb-20">
          <hr className=" h-2 mx-[100px] [color:var(--font-secondary)] mb-12"></hr>
          <h2 className="[color:var(--font-primary)] text-6xl ml-8 underline font-bold mb-20">
            How to use
          </h2>
          <div className="flex px-10 justify-evenly">
            <div>
              <img
                className=" border-2 w-[1000px]"
                src={StepsPicture}
                alt="Steps illustration"
              />
            </div>
            <div className="flex flex-col  justify-center">
              <div>
                <h3 className="[color:var(--font-primary)] text-6xl mb-4">
                  Step 1
                </h3>
                <p className="[color:var(--font-secondary)] text-xl mb-8">
                  Choose labels and title
                </p>
              </div>
              <div>
                <h3 className="[color:var(--font-primary)] text-6xl mb-4">
                  Step 2
                </h3>
                <p className="[color:var(--font-secondary)] text-xl mb-8">
                  Choose graph type
                </p>
              </div>
              <div>
                <h3 className="[color:var(--font-primary)] text-6xl mb-4">
                  Step 3
                </h3>
                <p className="[color:var(--font-secondary)] text-xl mb-8">
                  Fill out the data
                </p>
              </div>
              <div>
                <h3 className="[color:var(--font-primary)] text-6xl mb-4">
                  Step 4
                </h3>
                <p className="[color:var(--font-secondary)] text-xl">
                  Create the graph
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* reviews section */}
        <section className="mb-20">
          <hr className=" h-2 mx-[100px] [color:var(--font-secondary)] mb-12"></hr>
          <h2 className="[color:var(--font-primary)] text-6xl ml-8 underline font-bold mb-20">
            Recent Reviews
          </h2>
          <div className="flex justify-evenly">
            <div className="w-[300px] p-4 border-2">
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

            <div className="w-[300px] p-4 border-2">
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

            <div className="w-[300px] p-4 border-2">
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
