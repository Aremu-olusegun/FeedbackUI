import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import FeedbackForm from "./components/FeedbackForm";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import About from "./components/About";
import Post from "./components/Post";
import FeedbackContext, { FeedbackProvider } from "./context/FeedbackContext";

function App() {


  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedbackList/>
                </>
              }
            ></Route>
            <Route path="/About" element={<About/>}/>
            <Route path="/Post" element={<Post/>}/>
          </Routes>
        </div>
      </BrowserRouter>

    </FeedbackProvider>
  );
}

export default App;
