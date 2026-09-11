import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DiscussionForum from "./pages/DiscussionForum";
import CombinedPage from "./pages/CombinedPage";
import CombinedComponent from "./pages/CombinedComponent";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import GatherItems from "./pages/GatherItems";
import LoginPage from "./pages/LoginPage"; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true); // ✅ After login, show dashboard
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const [events, setEvents] = useState([
    {
      title: "New year Community Meet and Greet",
      description: "A gathering for new and existing members...",
      date: "2025-01-01",
      time: "18:00",
    },
    {
      title: "Spring Clean-Up & Sustainability Workshop",
      description: "Join us for a cleanup and sustainability drive...",
      date: "2025-03-15",
      time: "10:00",
    },
  ]);

  const [posts, setPosts] = useState([
    { name: "Rahul Rahman", message: "Planning a neighborhood cleanup – volunteers needed!" },
    { name: "Stella", message: "Interested, Like to join @Rahul Rahman" },
    { name: "Priya", message: "How can we improve our community hub?" },
    { name: "Priya", message: "Upcoming community potluck – what will you bring?" }
  ]);

  const [requests, setRequests] = useState([]);
  const [postedItems, setPostedItems] = useState([]);

  const addPost = (message) => {
    const newPost = { name: "You", message };
    setPosts(prev => [newPost, ...prev]);
  };

  const handleCreateEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setSelectedOption("View Events");
  };

  const addRequest = (newRequest) => {
    setRequests((prev) => [...prev, newRequest]);
  };

  const addPostedItem = (item) => {
    setPostedItems(prev => [...prev, item]);
  };

  const ViewEvents = () => (
    <div style={{ padding: "20px" }}>
      {events.map((event, idx) => (
        <div key={idx} style={{ marginBottom: "30px" }}>
          <h2>✨ {event.title}</h2>
          <p><strong>Date:</strong> {event.date} <strong>Time:</strong> {event.time}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );

  const CreateEvent = ({ onCreate }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!title || !date || !time || !description) return;
      onCreate({ title, date, time, description });
      setTitle("");
      setDate("");
      setTime("");
      setDescription("");
    };

    return (
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "24px", color: "#333" }}>Create Event</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} style={inputStyle} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={inputStyle} />
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} style={inputStyle} />
          <textarea placeholder="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ ...inputStyle, height: "100px", resize: "vertical" }} />
          <button type="submit" style={buttonStyle}>Create Event</button>
        </form>
      </div>
    );
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Home": return <Home />;
      case "View Events": return <ViewEvents />;
      case "Create Event": return <CreateEvent onCreate={handleCreateEvent} />;
      case "Discussion Forum": return <DiscussionForum posts={posts} addPost={addPost} />;
      case "Post Items": return <CombinedPage addPostedItem={addPostedItem} postedItems={postedItems} />;
      case "Request Items":
        return (
          <>
            <CombinedComponent addRequest={addRequest} />
            <DiscussionForum requests={requests} />
          </>
        );
      case "Resources": return <Resources />;
      case "Gather Items": return <GatherItems />;
      default: return <Home />;
    }
  };

  const inputStyle = {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s"
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "#4caf50",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s"
  };

  const formContainerStyle = {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "30px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
    fontFamily: "Segoe UI, sans-serif"
  };

  // 🔥 If not logged in, show login page with background
  if (!isLoggedIn) {
    return (
      <div style={{
        backgroundImage: "url('/login-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <LoginPage onLogin={handleLogin} />
      </div>
    );
  }

  // 🔥 If logged in, show dashboard
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        setSelectedOption={setSelectedOption}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div style={{ flex: 1, marginLeft: sidebarOpen ? "250px" : "60px", transition: "margin-left 0.3s" }}>
        <div style={{ padding: "20px" }}>
          <h1 style={{ textAlign: "center" }}>🌐 Shared Spaces Portal</h1>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;
