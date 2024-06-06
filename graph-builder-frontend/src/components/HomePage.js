import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <main>
        <h1>GRAPH CRAFTER</h1>
        <h3>
          <span>Visualize</span> data in <span>seconds</span>
        </h3>
        <button>
          Get Started <FaChevronRight />
        </button>
      </main>
      <section>
        <h2>Features</h2>
        <div>
          <div>
            <h3>Graph Types</h3>
            <p>Choose from a variety of graph types to visualize your data.</p>
          </div>
          <div>
            <h3>Easy to use</h3>
            <p>
              Create your own graph in seconds by filling out a simple form.
            </p>
          </div>
          <div>
            <h3>Save Graphs</h3>
            <p>Save your graphs to your account and view them later.</p>
          </div>
        </div>
      </section>
      <section>
        <h2>How to use</h2>
        <div>
          <img></img>
        </div>
        <div>
          <div>
            <h3>Step 1</h3>
            <p>Choose labels and title</p>
          </div>
          <div>
            <h3>Step 2</h3>
            <p>Choose graph type</p>
          </div>
          <div>
            <h3>Step 3</h3>
            <p>Fill out the data</p>
          </div>
          <div>
            <h3>Step 4</h3>
            <p>Create the graph</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Recent Reviews</h2>
        <div>
          <div>
            <h4>Review 1</h4>
            <div>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <p>
              "This is the best graphing tool I have ever used. It is so easy to
              use and the graphs look amazing!"
            </p>
            <p>- Jack Wellington</p>
          </div>
          <div>
            <h4>Review 2</h4>
            <div>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <p>
              "This is the best graphing tool I have ever used. It is so easy to
              use and the graphs look amazing!"
            </p>
          </div>
          <p>- Jack Wellington</p>
          <div>
            <h4>Review 3</h4>
            <div>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <p>
              "This is the best graphing tool I have ever used. It is so easy to
              use and the graphs look amazing!"
            </p>
            <p>- Jack Wellington</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
