import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import Projects from "../components/Projects";

export const ProjectsPage = (props) => {
  const [projects, setProjects] = useState([] || "");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Projects
        projects={projects}
      />
    </div>
  );
};

export default ProjectsPage