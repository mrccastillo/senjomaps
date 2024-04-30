import { useState, useEffect } from "react";
import Map from "./Map";
import SideBar from "./SideBar";
import Preloader from "./Preloader";
import "../Styles/Home.css";

function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [savedMapClicked, setSavedMapClick] = useState({});
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3600);
  }, []);

  function onToggleSidebar() {
    setIsSideBarOpen(!isSideBarOpen);
    setIsFooterOpen(false);
  }

  function onToggleFooter() {
    setIsFooterOpen(!isFooterOpen);
  }

  return (
    <div className="home">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <SideBar
            isOpen={isSideBarOpen}
            toggleSidebar={onToggleSidebar}
            setSavedMap={(id) => {
              setSavedMapClick(id);
            }}
          />
          <Map
            isOpen={isSideBarOpen}
            savedMapData={savedMapClicked}
            isFooterOpen={isFooterOpen}
            onToggleFooter={onToggleFooter}
          />
        </>
      )}
    </div>
  );
}

export default Home;
