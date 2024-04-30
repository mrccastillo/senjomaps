import { useState } from "react";
import "../Styles/BuildingFooter.css";

function StJosephFooter({ onToggleFooter, isFooterOpen }) {
  return (
    <>
      <div
        className="building-footer --stjoseph sjo-footer"
        // style={{ minHeight: !isFooterOpen && "2rem" }}
        style={{
          minHeight: "2rem",
          boxShadow: "3px 3px 10px #232323",
          zIndex: "9",
        }}
      >
        {isFooterOpen && (
          <>
            <div className="building-images">
              <div className="facade1"></div>
              <div className="facade2"></div>
              <div className="facade3"></div>
            </div>
            <div className="st-joseph-info">
              <div className="st-joseph-left-container">
                <div className="contacts-container --contact-head">
                  <h4>St. Joseph's College of Quezon City</h4>
                  <p>Private School</p>
                </div>
                <div className="contacts-container">
                  <p>#295 E. Rodriguez Sr. Ave, Quezon City</p>
                </div>
                <div className="contacts-container">
                  <p>7004-197 / 7004-0950</p>
                </div>
                <div className="contacts-container">
                  <a href="https://www.sjcqc.edu.ph/">
                    https://www.sjcqc.edu.ph/
                  </a>
                </div>
              </div>
              <div className="st-joseph-right-container">
                <div className="sjo-logo "></div>
                <p style={{ width: "60%" }}>
                  A Filipino educational institution, under the guidance of the
                  Franciscan Sisters of the Immaculate Conception (SFIC),
                  embraces Catholic teachings and Franciscan values. It is
                  dedicated to fostering holistic development rooted in Gospel
                  principles, empowering students to actively contribute to
                  societal change.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className="open-footer"
        style={{ bottom: !isFooterOpen ? "2rem" : "36.5rem", zIndex: "9" }}
        onClick={onToggleFooter}
      >
        {" "}
        <span class="material-symbols-outlined" id="arrow">
          {!isFooterOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </div>
    </>
  );
}

export default StJosephFooter;
