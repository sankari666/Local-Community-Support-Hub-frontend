import React, { useState } from "react";

// Export a shared variable
export let uploadedItems = [];

const CombinedPage = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    description: "",
    condition: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewItem((prev) => ({ ...prev, image: files[0] }));
    } else {
      setNewItem((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.category || !newItem.description || !newItem.condition || !newItem.image) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const itemWithImageURL = { ...newItem, image: reader.result };
      setItems([itemWithImageURL, ...items]);
      uploadedItems.unshift({
        name: newItem.name,
        image: reader.result,
      }); // Add to shared uploadedItems array
      setNewItem({ name: "", category: "", description: "", condition: "", image: null });
    };
    reader.readAsDataURL(newItem.image);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "30px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "24px", color: "#2e3b4e" }}>
        🛍️ Post an Item for Sharing
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          background: "#f9f9f9",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Item Name"
          style={inputStyle}
        />
        <input
          type="text"
          name="category"
          value={newItem.category}
          onChange={handleChange}
          placeholder="Category (e.g., books, tools)"
          style={inputStyle}
        />
        <textarea
          name="description"
          value={newItem.description}
          onChange={handleChange}
          placeholder="Item Description"
          style={{ ...inputStyle, height: "90px", resize: "vertical" }}
        />
        <select
          name="condition"
          value={newItem.condition}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Condition</option>
          <option value="New">New</option>
          <option value="Good">Good</option>
          <option value="Used">Used</option>
        </select>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Post Item</button>
      </form>

      <div style={{ marginTop: "40px" }}>
        <h3 style={{ marginBottom: "20px" }}>📦 Items Available</h3>
        {items.length === 0 ? (
          <p style={{ fontStyle: "italic", color: "#777" }}>No items posted yet.</p>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                marginBottom: "20px",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.07)",
              }}
            >
              <h4 style={{ margin: 0, color: "#333" }}>{item.name}</h4>
              <p style={{ margin: "8px 0" }}><strong>Category:</strong> {item.category}</p>
              <p style={{ margin: "8px 0" }}><strong>Condition:</strong> {item.condition}</p>
              <p style={{ margin: "8px 0" }}>{item.description}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ marginTop: "10px", maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "12px 14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  outline: "none",
  transition: "border-color 0.3s",
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#1976d2",
  color: "#fff",
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.3s",
};

export default CombinedPage;
