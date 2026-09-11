import React from "react";
import { Menu } from "lucide-react";

const Sidebar = ({ setSelectedOption, sidebarOpen, toggleSidebar }) => {
  return (
    <div
      style={{
        width: sidebarOpen ? "250px" : "60px",
        transition: "width 0.3s ease",
        height: "100vh",
        backgroundColor: "#ecf0f1",
        padding: "10px",
        boxSizing: "border-box",
        position: "fixed",
        left: 0,
        top: 0,
        overflow: "hidden",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        zIndex: 10,
      }}
    >
      <button
        onClick={toggleSidebar}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
          fontSize: "24px",
        }}
        aria-label="Toggle Sidebar"
      >
        <Menu />
      </button>

      {sidebarOpen && (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <button
            onClick={() => setSelectedOption("View Events")}
            style={buttonStyle}
          >
            📋 View Events
          </button>
          <button
            onClick={() => setSelectedOption("Create Event")}
            style={buttonStyle}
          >
            ➕ Create Event
          </button>
          <button
            onClick={() => setSelectedOption("Discussion Forum")}
            style={buttonStyle}
          >
            📋 Discussion Forum
          </button>
          <button
            onClick={() => setSelectedOption("Post Items")}
            style={buttonStyle}
          >
            ➕ Post Items
          </button>
          <button
            onClick={() => setSelectedOption("Request Items")}
            style={buttonStyle}
          >
            ➕ Request Items
          </button>
          <button
            onClick={() => setSelectedOption("Resources")}
            style={buttonStyle}
          >
            ➕ Resources
          </button>
          <button
            onClick={() => setSelectedOption("Gather Items")}
            style={buttonStyle}
          >
            ➕ Gather Items
          </button>
          <button
            onClick={() => setSelectedOption("Profile")}
            style={buttonStyle}
          >
            👤 Profile
          </button>
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  background: "none",
  border: "none",
  textAlign: "left",
  color: "#34495e",
  fontSize: "18px",
  cursor: "pointer",
  padding: "10px",
  width: "100%",
};

export default Sidebar;
