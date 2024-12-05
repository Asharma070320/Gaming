import React, { useState } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import Navbar from "./Navbar";
// import Navbar from './Components/Navbar/Navbar';
import Navbar from "./Components/Navbar/Navbar";
// import GamesBar from "./GamesBar";
import GamesBar from "./Components/GamesBar/GamesBar";
// import MainContent from "./MainContent";
import MainContent from "./Components/MainContent/MainContent";
// import TermsAndConditions from "./TermsAndConditions";
import TermsAndConditions from "./Components/Conditions/TermsAndConditions";
// import ResponsibleGaming from "./ResponsibleGaming";
import ResponsibleGaming from "./Components/Conditions/ResponsibleGaming";
// import Footer from "./Footer";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [selectedGame, setSelectedGame] = useState("HOME"); // For GamesBar
  const [selectedLeftItem, setSelectedLeftItem] = useState(null); // For LeftSection list

  const handleGameChange = (game) => {
    setSelectedGame(game);
    setSelectedLeftItem(null); // Reset left section selection when switching games
  };
  console.log(selectedGame);

  const handleLeftItemClick = (item) => {
    setSelectedLeftItem(item); // Update the selected left item
  };

  return (
    <Router>
      <MainLayout
        onGameChange={handleGameChange}
        onLeftItemClick={handleLeftItemClick}
        selectedGame={selectedGame}
        selectedLeftItem={selectedLeftItem}
      />
    </Router>
  );
};

const MainLayout = ({
  onGameChange,
  onLeftItemClick,
  selectedGame,
  selectedLeftItem,
}) => {
  const location = useLocation();

  const noNavbarRoutes = ["/terms-and-conditions", "/responsible-gaming"];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <GamesBar onGameChange={onGameChange} />
              <MainContent
                selectedGame={selectedGame}
                selectedLeftItem={selectedLeftItem}
                onLeftItemClick={onLeftItemClick}
              />
            </>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route
          path="/responsible-gaming"
          element={<ResponsibleGaming />}
        />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </>
  );
};

export default App;
