import React from "react";
import { useRef, useEffect } from "react";
import {
  hideScrollbar,
  compensateForScrollbar,
  showScrollbar,
} from "../scrollBarManagement";
import GraphsModalContent from "./GraphsModalContent";

const GraphsModal = ({ setOpenSavedGraphs }) => {
  const modalRef = useRef();
  const overlayRef = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (modalRef.current && overlayRef.current) {
        modalRef.current.style.opacity = "1";
        overlayRef.current.style.opacity = "0.5";
      }
    }, 1); // 1ms delay to ensure opacity transition works, opacity 0 is source and this is the destination

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    hideScrollbar();

    compensateForScrollbar(scrollbarWidth);

    return () => {
      showScrollbar();
    };
  }, []);

  return (
    <section
      ref={modalRef}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center align-middle z-[1] transition-opacity duration-300 opacity-0"
    >
      <div
        ref={overlayRef}
        className=" absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-300 "
        onClick={() => setOpenSavedGraphs(false)}
      ></div>
      <div className="fixed [background-color:] p-7 rounded-md z-[2]">
        <GraphsModalContent />
      </div>
    </section>
  );
};

export default GraphsModal;
