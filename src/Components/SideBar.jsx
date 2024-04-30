import SidebarContent from "./SidebarContent";
import "../Styles/SideBar.css";

function SideBar({ isOpen, toggleSidebar, setSavedMap }) {
  return (
    <>
      <div className={isOpen ? "sidebar --open" : "sidebar"}>
        <p
          className="sidebar-icon"
          onClick={toggleSidebar}
          style={{
            textAlign: isOpen && "right",
            paddingRight: isOpen && "1rem",
          }}
        >
          ≡
        </p>
        {!isOpen ? (
          <>
            <h1 className="header">SENJO MAPS</h1>
          </>
        ) : (
          <SidebarContent setSavedMap={setSavedMap} />
        )}
      </div>
      {isOpen && <div className="overlay" style={{ zIndex: "5" }}></div>}
    </>
  );
}

export default SideBar;
