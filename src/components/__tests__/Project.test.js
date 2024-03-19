import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";

import Project from "../Project";

jest.mock("react-intersection-observer", () => {
  return {
    useInView: () => [() => {}, true],
  };
});

jest.mock("react-modal");

describe("Project", () => {
  const projectProps = {
    technologies: "React, Redux, Node.js",
    title: "Example Project",
    image: "https://www.example.com/example.jpg",
    color: "#000000",
    id: 1,
    github: "https://github.com/example/example",
    deployed: "https://example.com",
    description: "This is an example project.",
  };

  it("renders project card with correct props", () => {
    render(<Project {...projectProps} />);
    const techElement = screen.getByText(projectProps.technologies);
    const titleElement = screen.getByText(projectProps.title);
    const imageElement = screen.getByAltText("Laptop displaying application");

    expect(techElement).toBeInTheDocument;
    expect(titleElement).toBeInTheDocument;
    expect(imageElement).toBeInTheDocument;
  });

  it("displays modal when project card is clicked and closes modal when close button is clicked", () => {
    render(<Project {...projectProps} />);
    const cardElement = screen.getByText("View Work \u2192");
    fireEvent.click(cardElement);
    const handleCloseModal = () => {};
    const onClick = () => {};
    const contentElement = () => {};
    const overlayElement = () => {};
    const parentSelector = () => {};
    const modalOptions = {
      isOpen: true,
      appElement: document.getElementById("root"),
      ariaHideApp: true,
      bodyOpenClassName: "ReactModal__Body--open",
      children: [
        <img
          alt="Close"
          className="closeMenu closeModal"
          onClick={handleCloseModal}
          src="close.svg"
        />,
        <h3 className="modalTitle">Example Project</h3>,
        <p className="projectDescription">This is an example project.</p>,
        <button className="btn" onClick={onClick}>
          Live Link
        </button>,
      ],
      closeTimeoutMS: 0,
      contentElement: contentElement,
      isOpen: false,
      onRequestClose: handleCloseModal,
      overlayElement: overlayElement,
      parentSelector: parentSelector,
      portalClassName: "ReactModalPortal",
      preventScroll: false,
      role: "dialog",
      shouldCloseOnEsc: true,
      shouldCloseOnOverlayClick: true,
      shouldFocusAfterRender: true,
      shouldReturnFocusAfterClose: true,
      style: {
        content: {
          backgroundColor: "#101010",
          bottom: "auto",
          color: "#9f9f9f",
          display: "flex",
          flexDirection: "column",
          left: "50%",
          marginRight: "-50%",
          padding: "60px",
          right: "auto",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          zIndex: "999",
        },
      },
    };
    expect(Modal).toHaveBeenCalledWith({ ...modalOptions });

    const closeButtonElement = screen.getByAltText("Close");
    fireEvent.click(closeButtonElement);

    expect(Modal).toHaveBeenCalledWith({ isOpen: false });
  });
});
