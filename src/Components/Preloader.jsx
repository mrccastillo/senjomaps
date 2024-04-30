import "../Styles/Preloader.css";

function Preloader() {
  return (
    <div className="preloader" style={{ animation: "none" }}>
      <div className="loading-container">
        <div className="senjo-logo --bounce"></div>
        <h3 style={{ textAlign: "center" }}>SENJO MAPS</h3>
      </div>
    </div>
  );
}

export default Preloader;
