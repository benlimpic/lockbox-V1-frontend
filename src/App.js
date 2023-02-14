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
  const [user, setUser] = useState("");

  const handleIsLoggedIn = () => {
    axios
      .get("/logged_in", { withCredentials: true })
      .then((response) => {
        console.log("logged_in response", response);
        if (response.data.logged_in) {
          setUser(response.data.user.id)
          setLoggedIn(true);
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
  }, [setUser]);

    return (

      !loggedIn ? (
        <LoginSignUp setLoggedIn={setLoggedIn} />
      ) : (
    <Routes>
      <Route path="/" element={<NavBar setLoggedIn={setLoggedIn} />}>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create user={user}/>} />
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
