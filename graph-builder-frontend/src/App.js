import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BuildGraph from "./components/BuildGraph";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import SavedGraphs from "./components/SavedGraphs";
import FooterResponsive from "./components/FooterResponsive";
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  const [currentGraph, setCurrentGraph] = useState({
    id: 0,
    categories: ["Category 1", "Category 2", "Category 3"],
    categoryValues: [10, 4, 23],
    title: "GRAPH TITLE",
    yAxisLabel: "Values Label",
    xAxisLabel: "Categories Label",
  });

  return (
    <Router className="h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/savedgraphs"
          element={
            <SavedGraphs
              currentGraph={currentGraph}
              setCurrentGraph={setCurrentGraph}
            />
          }
        />
        <Route
          path="/creategraph"
          element={
            <BuildGraph
              currentGraph={currentGraph}
              setCurrentGraph={setCurrentGraph}
            />
          }
        />
      </Routes>

      {isMobile ? <FooterResponsive /> : <Footer />}
    </Router>
  );
}

export default App;
