import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import NavBar from "./components/Navigation/NavBar";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectPage from "./Pages/ProjectPage";
import LoginSignUp from "./Pages/loginSignup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  let userId = 0

  const handleIsLoggedIn = () => {
    axios
      .get("/logged_in", { withCredentials: true })
      .then((response) => {
        console.log("logged_in response", response);
        if (response.data.logged_in) {
          setLoggedIn(true);
          userId = response.data.user.id
          console.log("userId defined", userId);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((error) => {
        console.log("logged_in error", error);
      });
  };

  useEffect(() => {
    handleIsLoggedIn();
  }, []);

    return (

      !loggedIn ? (
        <LoginSignUp setLoggedIn={setLoggedIn} />
      ) : (
    <Routes>
      <Route path="/" element={<NavBar setLoggedIn={setLoggedIn} />}>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/projects">
          <Route index element={<ProjectsPage />} />
          <Route path=":id" element={<ProjectPage />} />
        </Route>
      </Route>
    </Routes>  
  )
  )
}

export default App;
