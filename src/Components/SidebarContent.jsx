import { useState } from "react";

function SidebarContent({ setSavedMap }) {
  const [isRecentOpen, setIsRecentOpen] = useState(false);
  const [isSavedPlaceOpen, setIsSavedPlaceOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSjoOpen, setIsSjoOpen] = useState(true);

  const savedSearches = JSON.parse(localStorage.getItem("savedSearches")) || [];
  const savedPlaces = JSON.parse(localStorage.getItem("savedPlaces")) || [];

  // Check if any sidebar content is open
  const isSidebarContentOpen =
    isRecentOpen || isSavedPlaceOpen || isAboutOpen || isInfoOpen;

  return (
    <div className="sidebar-content">
      <div
        className="sidebar-recentsearch"
        onClick={() => {
          setIsRecentOpen(!isRecentOpen);
          setIsSavedPlaceOpen(false);
          setIsAboutOpen(false);
          setIsSjoOpen(false);
        }}
      >
        <p>RECENT SEARCHES</p>
        <span class="material-symbols-outlined" id="arrow">
          {isRecentOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </div>
      {isRecentOpen && (
        <div className="recent-search-container">
          {savedSearches && savedSearches.length > 0 ? (
            savedSearches.map((searchHistory, i) => (
              <p className="recent-searches" key={i}>
                {searchHistory.name}
              </p>
            ))
          ) : (
            <h4 style={{ textAlign: "center" }}>Search history is empty...</h4>
          )}
          {savedSearches && savedSearches.length > 0 && (
            <button
              className="clear-btn"
              onClick={() => {
                localStorage.removeItem("savedSearches");
                location.reload();
              }}
            >
              Clear
            </button>
          )}
        </div>
      )}
      <div
        className="sidebar-savedplaces"
        onClick={() => {
          setIsSavedPlaceOpen(!isSavedPlaceOpen);
          setIsAboutOpen(false);
          setIsRecentOpen(false);
          setIsSjoOpen(false);
        }}
      >
        <p>SAVED PLACES</p>{" "}
        <span class="material-symbols-outlined" id="arrow">
          {isSavedPlaceOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </div>
      {isSavedPlaceOpen && (
        <div className="savedplaces-container">
          {savedPlaces.length > 0 ? (
            savedPlaces.map((place, i) => (
              <p
                className="recent-searches"
                key={i}
                onClick={() => {
                  setSavedMap(place.id);
                }}
              >
                {place.name}
              </p>
            ))
          ) : (
            <h4 style={{ textAlign: "center" }}>Saved Places is empty...</h4>
          )}
          {savedPlaces && savedPlaces.length > 0 && (
            <button
              className="clear-btn"
              onClick={() => {
                localStorage.removeItem("savedPlaces");
                location.reload();
              }}
            >
              Clear
            </button>
          )}
        </div>
      )}
      <div
        className="sidebar-aboutinfo"
        onClick={() => {
          setIsAboutOpen(!isAboutOpen);
          setIsRecentOpen(false);
          setIsSavedPlaceOpen(false);
          setIsSjoOpen(false);
        }}
      >
        <p>ABOUT US</p>{" "}
        <span class="material-symbols-outlined" id="arrow">
          {isAboutOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </div>
      {isAboutOpen && (
        <div className="aboutinfo-container">
          <div className="senjo-logo"></div>
          <h4 style={{ width: "100%" }}>What is SenJo Maps?</h4>
          <p>
            SenJo Maps is an application used to navigate inside the school
            campus, St. Joseph’s College of Quezon City. It helps you find
            places you want to reach and guides you through specific routes
            within the school premises. It can save places and pinpoint exact
            locations.
          </p>
          <br />
          <br />
          <h4 style={{ width: "100%" }}>Who designed SenJo Maps?</h4>
          <p>
            SenJo Maps is developed by researchers aiming to create an
            innovative and convenient application for the school.
            <br />
            <br />
            Researchers are namely: <br />
            <br />
            Jhon Michael Vincent Stephen Saenz
            <br />
            Rain Kristen Temeña
            <br />
            John Rafael Gabriel
            <br />
            Theodore Sam Serrano
            <br />
            Naethan Paul Lauricio
            <br />
            Albert Biares
            <br />
            Ralph Turingan
            <br />
            Gian Carlo Sarmiento
          </p>
        </div>
      )}
      {isInfoOpen && (
        <div className="info-container">
          <div className="info-content">
            <h4 style={{ textAlign: "center", marginRight: "1rem" }}>
              How to use SenJo Maps?
            </h4>
            <br />
            <ul>
              <li>Explore inside the campus</li>
              <li>Discover possible pathways</li>
              <li>Find desired destinations</li>
              <li>Get directions from each gate</li>
              <li>Save favorite locations</li>
              <li>Access building interior information</li>
              <li>View 360 panoramas and pictures</li>
            </ul>
          </div>
        </div>
      )}
      {!isSidebarContentOpen && (
        <div
          className="sjo-logo"
          style={{ marginTop: "8rem", width: "15rem", height: "15rem" }}
        ></div>
      )}
      <div
        className="info-btn"
        onClick={() => {
          setIsInfoOpen(!isInfoOpen);
          setIsAboutOpen(false);
        }}
      ></div>
    </div>
  );
}

export default SidebarContent;
