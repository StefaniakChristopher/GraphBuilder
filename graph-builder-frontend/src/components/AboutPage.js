import React from "react";
import { BsXDiamondFill } from "react-icons/bs";

const AboutPage = () => {
  return (
    <div className="flex justify-center">
      <main className="w-[1000px] pt-10">
        {/* about graph crafter section */}
        <section className="px-4">
          <h1 className=" text-3xl [color:var(--font-secondary)] font-semibold">
            About Graph Crafter
          </h1>
          <p className="mt-8 text-xl text-white">
            Welcome to Graph Crafter! Our mission is to make data visualization
            accessible and straightforward for everyone. Whether you're a
            student, a professional, or just someone with a passion for data,
            our tools are designed to help you create stunning and informative
            graphs with ease.
          </p>
          <p className="mt-4 text-xl text-white">
            At Graph Crafter, we believe that a picture is worth a thousand
            words, and a graph is worth even more. Our platform provides a
            user-friendly interface that allows you to input your data and
            generate various types of graphs in just a few seconds. From bar
            charts to pie charts, line graphs to scatter plots, we have
            everything you need to transform your data into meaningful visuals.
          </p>
        </section>
        {/* core values */}
        <section className="px-4">
          <h1 className="mt-8 text-3xl text-white">Core Values</h1>
          <div className="flex justify-evenly mt-8 text-white text-2xl">
            <ul>
              <li className="flex items-center p-4 ">
                <span className="pr-2 [color:var(--font-secondary)]">
                  <BsXDiamondFill />
                </span>
                Accessibility
              </li>
              <li className="flex items-center p-4 ">
                <span className="pr-2 [color:var(--font-secondary)]">
                  <BsXDiamondFill />
                </span>
                Usability
              </li>
              <li className="flex items-center p-4 ">
                <span className="pr-2 [color:var(--font-secondary)]">
                  <BsXDiamondFill />
                </span>
                Reliability
              </li>
            </ul>
            <ul>
              <li className="flex items-center p-4 ">
                <span className="pr-2 [color:var(--font-secondary)]">
                  <BsXDiamondFill />
                </span>
                Flexibility
              </li>
              <li className="flex items-center p-4 ">
                <span className="pr-2 [color:var(--font-secondary)]">
                  <BsXDiamondFill />
                </span>
                Collaboration
              </li>
              <li className="flex items-center p-4 ">
                <span className="pr-2 [color:var(--font-secondary)]">
                  <BsXDiamondFill />
                </span>
                Continuous Improvement
              </li>
            </ul>
          </div>
        </section>
        {/* our journey */}
        <section className="px-4 border-l-2 text-white">
          <h1 className=" text-3xl mt-8 ">Our Journey</h1>
          <div className="p-7 m-3  rounded-lg shadow-lg bg-slate-800">
            <p>
              <span className=" font-bold">March 2023</span>: Graph Crafter is
              founded and a minimally viable product is attained
            </p>
          </div>
          <div className="p-7 m-3  rounded-lg shadow-lg bg-slate-800">
            <p>
              <span className=" font-bold">July 2023</span>: Graph Crafter is
              deployed on Kubernetes via Helm Chart
            </p>
          </div>
          <div className="p-7 m-3  rounded-lg shadow-lg bg-slate-800">
            <p>
              <span className=" font-bold">May 2024</span>: Webapp is completely
              revamped with a new, modern design
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
