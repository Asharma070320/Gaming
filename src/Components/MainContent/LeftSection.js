import React, { useState } from "react";
import "./LeftSection.css";
import {
  allSportsList,
  esoccerList,
  cricketSubList,
  footballList,
  tennisList,
  tabletenniesList,
  esoccer,
  basketballList,
  volleyballList,
  snookerList,
  iceHockeyList,
  eGamesList,
  futsalList,
  handballList,
  kabaddiList,
  golfList,
  rugbyLeagueList,
  boxingList,
  beachVolleyballList,
  mmaList,
  motoGPList,
  chessList,
  cyclingList,
  motorbikesList,
  athleticsList,
  basketball3x3List,
  sumoList,
  virtualSportsList,
  motorSportsList,
  baseballList,
  rugbyUnionList,
  dartsList,
  americanFootballList,
  soccerList,
  esportsList,
  boatRacingList,
} from "./TouranamentData";


const LeftSection = () => {
    
    const[racingSports,setRacingSports] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    RacingSports: true,
    Others: true,
    AllSports: true,
    Football: false, // Football section will be inside AllSports
  });

  const [expandedItems, setExpandedItems] = useState({});

  const racingSportsList = ["Horse Racing", "Greyhound Racing"];
  const othersList = [
    "Our Casino",
    "Our Virtual",
    "Live Casino",
    "Slot Game",
    "Fantasy Game",
  ];

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleExpand = (item) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <div className="leftSection_container">
      {/* Racing Sports Section */}
      <div
        className="racing_sports"
        onClick={() => toggleSection("RacingSports")}
      >
        <p>Racing Sports</p>
        <i
          className={`ri-arrow-${
            expandedSections.RacingSports ? "up" : "down"
          }-s-line down_arrow`}
        ></i>
      </div>
      <div
        className={`show_list ${expandedSections ? "show_list_visible" : ""}`}
      >
        {/* <ul className="list_items">
          <li className="shift">Horse Racing</li>
          <div className="line"></div>
          <li className="shift">Greyhound Racing</li>
        </ul> */}
        {expandedSections.RacingSports && (
          <ul className="list_items">
            {racingSportsList.map((item) => (
              <li className="shift" key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Others Section */}
      <div className="racing_sports" onClick={() => toggleSection("Others")}>
        <p>Others</p>
        <i
          className={`ri-arrow-${
            expandedSections.Others ? "up" : "down"
          }-s-line down_arrow`}
        ></i>
      </div>
      <div
        className={`show_list ${expandedSections ? "show_list_visible" : ""}`}
      >
        {/* <ul className="list_items">
          <li className="shift">Our Casino</li>
          <div className="line"></div>
          <li className="shift">Our Virtual</li>
          <div className="line"></div>
          <li className="shift">Live Casino</li>
          <div className="line"></div>
          <li className="shift">Slot Game</li>
          <div className="line"></div>
          <li className="shift">Fantasy Game</li>
        </ul> */}
        {expandedSections.Others && (
          <ul className="list_items">
            {othersList.map((item) => (
              <li className="shift" key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* All Sports Section */}
      <div className="racing_sports" onClick={() => toggleSection("AllSports")}>
        <p>All Sports</p>
        <i
          className={`ri-arrow-${
            expandedSections.AllSports ? "up" : "down"
          }-s-line down_arrow`}
        ></i>
      </div>

      <div
        className={`show_list ${expandedSections ? "show_list_visible" : ""}`}
      >
        {expandedSections.AllSports && (
          <ul className="list_items">
            {allSportsList.map((item) => (
              <li className="set_things" key={item}>
                <div
                  onClick={() => toggleExpand(item)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <i
                    style={{ paddingLeft: "0.6rem" }}
                    className={
                      expandedItems[item]
                        ? "ri-checkbox-indeterminate-line cancel_box"
                        : "ri-add-box-line add_box"
                    }
                  ></i>
                  <span>{item}</span>
                </div>

                {/* Politics Sublist */}
                {expandedItems[item] && item === "Politics" && (
                  <ul
                    style={{
                      paddingLeft: "20px",
                      listStyle: "none",
                      borderTop: "1px solid rgb(158, 158, 158)",
                    }}
                  >
                    <li>Assembly Election 2024</li>
                  </ul>
                )}

                {/* Cricket Sublist */}
                {expandedItems[item] && item === "Cricket" && (
                  <ul>
                    {Object.keys(cricketSubList).map((subItem) => (
                      <li key={subItem}>
                        <div
                          className="set_sublists"
                          onClick={() => toggleExpand(subItem)}
                        >
                          <i
                            className={
                              expandedItems[subItem]
                                ? "ri-checkbox-indeterminate-line cancel_box"
                                : "ri-add-box-line add_box"
                            }
                          ></i>
                          <span>{subItem}</span>
                        </div>
                        {/* Sublist Items */}
                        {expandedItems[subItem] && (
                          <ul>
                            {cricketSubList[subItem].map((match) => (
                              <li className="set_inside_sublists" key={match}>
                                {match}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Football Section */}
                {expandedItems[item] && item === "Football" && (
                  <ul>
                    {footballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Tennis Section */}
                {expandedItems[item] && item === "Tennis" && (
                  <ul>
                    {tennisList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
                {/* Table Tennies */}
                {expandedItems[item] && item === "Table Tennis" && (
                  <ul>
                    {tabletenniesList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
                {/* Esoccer */}
                {expandedItems[item] && item === "Esoccer" && (
                  <ul>
                    {esoccerList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Basketball */}
                {expandedItems[item] && item === "Basketball" && (
                  <ul>
                    {basketballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Volleyball */}
                {expandedItems[item] && item === "Volleyball" && (
                  <ul>
                    {volleyballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Snooker */}
                {expandedItems[item] && item === "Snooker" && (
                  <ul>
                    {snookerList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Ice Hockey */}
                {expandedItems[item] && item === "Ice Hockey" && (
                  <ul>
                    {iceHockeyList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* E Games */}
                {expandedItems[item] && item === "E Games" && (
                  <ul>
                    {eGamesList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Futsal */}
                {expandedItems[item] && item === "Futsal" && (
                  <ul>
                    {futsalList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
                
                {/* Handball */}
                {expandedItems[item] && item === "Handball" && (
                  <ul>
                    {handballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Kabaddi */}
                {expandedItems[item] && item === "Kabaddi" && (
                  <ul>
                    {kabaddiList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Golf */}
                {expandedItems[item] && item === "Golf" && (
                  <ul>
                    {golfList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Rugby League */}
                {expandedItems[item] && item === "Rugby League" && (
                  <ul>
                    {rugbyLeagueList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Boxing */}
                {expandedItems[item] && item === "Boxing" && (
                  <ul>
                    {boxingList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Beach Volleyball */}
                {expandedItems[item] && item === "Beach Volleyball" && (
                  <ul>
                    {beachVolleyballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Mixed Martial Arts */}
                {expandedItems[item] && item === "Mixed Martial Arts" && (
                  <ul>
                    {mmaList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* MotoGP */}
                {expandedItems[item] && item === "MotoGP" && (
                  <ul>
                    {motoGPList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Chess */}
                {expandedItems[item] && item === "Chess" && (
                  <ul>
                    {chessList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Cycling */}
                {expandedItems[item] && item === "Cycling" && (
                  <ul>
                    {cyclingList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Motorbikes */}
                {expandedItems[item] && item === "Motorbikes" && (
                  <ul>
                    {motorbikesList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Athletics */}
                {expandedItems[item] && item === "Athletics" && (
                  <ul>
                    {athleticsList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Basketball 3X3 */}
                {expandedItems[item] && item === "Basketball 3X3" && (
                  <ul>
                    {basketball3x3List.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Sumo */}
                {expandedItems[item] && item === "Sumo" && (
                  <ul>
                    {sumoList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Virtual sports */}
                {expandedItems[item] && item === "Virtual sports" && (
                  <ul>
                    {virtualSportsList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Motor Sports */}
                {expandedItems[item] && item === "Motor Sports" && (
                  <ul>
                    {motorSportsList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Baseball */}
                {expandedItems[item] && item === "Baseball" && (
                  <ul>
                    {baseballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Rugby Union */}
                {expandedItems[item] && item === "Rugby Union" && (
                  <ul>
                    {rugbyUnionList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Darts */}
                {expandedItems[item] && item === "Darts" && (
                  <ul>
                    {dartsList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* American Football */}
                {expandedItems[item] && item === "American Football" && (
                  <ul>
                    {americanFootballList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Soccer */}
                {expandedItems[item] && item === "Soccer" && (
                  <ul>
                    {soccerList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Esports */}
                {expandedItems[item] && item === "Esports" && (
                  <ul>
                    {esportsList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Boat Racing */}
                {expandedItems[item] && item === "Boat Racing" && (
                  <ul>
                    {boatRacingList.map((league, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="set_sublists"
                            onClick={() => toggleExpand(league.name)}
                          >
                            <i
                              className={
                                expandedItems[league.name]
                                  ? "ri-checkbox-indeterminate-line cancel_box"
                                  : "ri-add-box-line add_box"
                              }
                              style={{ marginRight: "10px" }}
                            ></i>
                            <span>{league.name}</span>
                          </div>
                          {expandedItems[league.name] && (
                            <ul>
                              {league.matches.map((match, idx) => (
                                <li className="set_inside_sublists" key={idx}>
                                  {match}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LeftSection;
