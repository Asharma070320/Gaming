import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import GamesBar from "./Components/GamesBar/GamesBar";
import MainContent from "./Components/MainContent/MainContent";
import TermsAndConditions from "./Components/Conditions/TermsAndConditions";
import ResponsibleGaming from "./Components/Conditions/ResponsibleGaming";
import Footer from "./Components/Footer/Footer";
import LoginContainer from "./Components/LoginContainer"; // Import the login component

const App = () => {
  const [selectedGame, setSelectedGame] = useState("HOME");
  const [selectedLeftItem, setSelectedLeftItem] = useState(null);

  const handleGameChange = (game) => {
    setSelectedGame(game);
    setSelectedLeftItem(null);
  };

  const handleLeftItemClick = (item) => {
    setSelectedLeftItem(item);
  };

  return (
    <Router>
      <Routes>
        {/* Login page route */}
        <Route path="/" element={<LoginContainer />} />

        {/* Main layout */}
        <Route
          path="/home"
          element={
            <MainLayout
              onGameChange={handleGameChange}
              onLeftItemClick={handleLeftItemClick}
              selectedGame={selectedGame}
              selectedLeftItem={selectedLeftItem}
            />
          }
        />
      </Routes>
    </Router>
  );
};

const MainLayout = ({ onGameChange, onLeftItemClick, selectedGame, selectedLeftItem }) => {
  return (
    <>
      <Navbar />
      <GamesBar onGameChange={onGameChange} />
      <MainContent
        selectedGame={selectedGame}
        selectedLeftItem={selectedLeftItem}
        onLeftItemClick={onLeftItemClick}
      />
      <Footer />
    </>
  );
};

export default App;
