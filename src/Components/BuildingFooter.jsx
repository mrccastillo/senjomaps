import { useState, useEffect } from "react";
import Building from "./Building";
// import PanoAben from "./Panoramas/PanoAben";
import "../Styles/BuildingFooter.css";

function BuildingFooter({
  onToggleFooter,
  isFooterOpen,
  lati,
  long,
  buildingId,
  children,
  savedMapData,
}) {
  const [tempBuildingId, setTempBuildingId] = useState(
    buildingId || savedMapData
  );

  const [saveMsg, setSaveMsg] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSaveMsg("");
  //   }, 1950);
  // }, [saveMsg]);

  useEffect(() => {
    // Update tempBuildingId whenever buildingId or savedMapData changes
    // console.log(tempBuildingId);
    setTempBuildingId(buildingId || savedMapData);
  }, [buildingId, savedMapData]);

  function handleSaveSubmit() {
    const mapData = {
      name: children,
      lat: lati,
      lng: long,
      id: buildingId,
      saved: true,
    };

    // Retrieve existing saved places from localStorage
    const existingSavedPlacesJSON = localStorage.getItem("savedPlaces");
    let savedPlaces = [];

    if (existingSavedPlacesJSON) {
      // Parse existing saved places JSON
      savedPlaces = JSON.parse(existingSavedPlacesJSON);
    }

    // Check if the new mapData already exists in savedPlaces
    const index = savedPlaces.findIndex(
      (place) =>
        place.name === mapData.name &&
        place.lat === mapData.lat &&
        place.lng === mapData.lng &&
        place.id === mapData.id
    );

    if (index === -1) {
      // Building is not saved, save it
      savedPlaces.push(mapData);

      // Convert the updated saved places to JSON
      const updatedSavedPlacesJSON = JSON.stringify(savedPlaces);

      // Store the updated saved places back to localStorage
      localStorage.setItem("savedPlaces", updatedSavedPlacesJSON);
      // setIsSaved(true);
      alert(`${children} appended to saved places successfully`);
    } else {
      // Building is already saved, unsave it
      savedPlaces.splice(index, 1);

      // Convert the updated saved places to JSON
      const updatedSavedPlacesJSON = JSON.stringify(savedPlaces);

      // Store the updated saved places back to localStorage
      localStorage.setItem("savedPlaces", updatedSavedPlacesJSON);
      // setIsSaved(false);
      alert(`${children} removed from saved places successfully`);
    }
  }

  return (
    <>
      <div
        className="building-footer"
        style={{
          minHeight: (!children || !isFooterOpen) && "2rem",
          boxShadow:
            (!children || !isFooterOpen || isFooterOpen) &&
            "3px 3px 10px #232323",
          zIndex: "9",
        }}
      >
        {" "}
        {children && (
          <div className="footer-head" style={{ position: "relative" }}>
            <h3 style={{ marginBottom: !isFooterOpen && "0" }}>{children}</h3>
            <div className="save-icon" onClick={handleSaveSubmit}></div>
          </div>
        )}
        {children && isFooterOpen && (
          <Building tempBuildingId={tempBuildingId} />
        )}
      </div>
      <div
        className="open-footer"
        style={{
          bottom: (!children || !isFooterOpen) && "5.3rem",
          zIndex: "9",
        }}
        onClick={onToggleFooter}
      >
        {" "}
        <span class="material-symbols-outlined" id="arrow">
          {!isFooterOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </div>
      {/* {saveMsg && (
        <div className="save-msg">
          <p>{saveMsg}</p>
        </div>
      )} */}
    </>
  );
}

export default BuildingFooter;
