import React, { useState } from "react";

const DiscussionForum = ({ posts = [], addPost }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      addPost(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        🧑‍🤝‍🧑 <span style={{ color: "#2c3e50" }}>Discussion Forum</span>
      </h2>

      <div style={{ marginBottom: "40px" }}>
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
            }}
          >
            <strong style={{ color: "#2c3e50" }}>{post.name}</strong>
            <p style={{ margin: "5px 0" }}>{post.message}</p>
            <button
              style={{
                border: "none",
                background: "none",
                color: "#2980b9",
                cursor: "pointer",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              Reply ✉️
            </button>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginTop: "30px",
          position: "sticky",
          bottom: "20px",
          background: "#fff",
          padding: "10px",
          borderTop: "1px solid #ddd",
        }}
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#2c3e50",
            color: "white",
            padding: "10px 16px",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Send ✈️
        </button>
      </form>
    </div>
  );
};

export default DiscussionForum;