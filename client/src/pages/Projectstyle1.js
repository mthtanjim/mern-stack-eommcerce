import React, { useState, useEffect } from "react";
import "./ZoomOnScroll.css";
import "./ProjectList.css";

import image1 from "./image.jpg";
import image2 from "../pages/image2.jpg";
import image3 from "../pages/i3.jpg";
import image4 from "../pages/i4.jpg";
import image5 from "../pages/i5.jpg";
import image6 from "../pages/i6.jpg";
import image7 from "../pages/i7.jpg";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Project One",
      description: "This is the first project",
      images: [image1, image2, image3],
      details: ["details 1", "detail2"],
    },
    {
      id: 2,
      name: "Project Two",
      description: "This is the second project",
      images: [image6, image7, image3],
      details: ["detail1", "detail2"],
    },
    {
      id: 3,
      name: "Project Three",
      description: "This is the third project",
      images: [image5, image6, image7],
      details: ["detail1", "detail2"],
    },
    {
      id: 3,
      name: "Project Three",
      description: "This is the third project",
      images: [image5, image6, image7],
      details: ["detail1", "detail2"],
    },
    {
      id: 3,
      name: "Project Three",
      description: "This is the third project",
      images: [image5, image6, image7],
      details: ["detail1", "detail2"],
    },
  ]);

  const [isScrolling, setIsScrolling] = useState(false);
  const [transformValue, setTransformValue] = useState(1);

  const handleScroll = () => {
    setIsScrolling(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let timeoutId;
    if (isScrolling) {
      setTransformValue(0.95);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    } else {
      setTransformValue(1);
    }
    return () => clearTimeout(timeoutId);
  }, [isScrolling]);

  return (
    <div
      className="zoom-on-scroll"
      style={{ transform: `scale(${transformValue})`, padding: "10%" }}
    >
   
      <div className="project-list">
        <h2 className="heading ">this is the project details</h2>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${
              selectedProject === project.id && "expanded"
            }`}
            onClick={() => setSelectedProject(project.id)}
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="thumbnail"
            />
            <h2 className="project-title">{project.name}</h2>
            {selectedProject === project.id && (
              <div className="project-details">
                <div className="project-details-slider">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={project.name}
                      className="project-detail-image"
                    />
                  ))}
                </div>
                <div className="project-description">
                  {project.details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
