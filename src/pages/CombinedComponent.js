import React, { useState } from "react";

const CombinedComponent = ({ addRequest }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantity: "",
    neededBy: "",
    description: "",
  });

  const [submittedRequests, setSubmittedRequests] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.itemName || !formData.category || !formData.quantity || !formData.neededBy) {
      alert("Please fill in all required fields.");
      return;
    }

    // Update internal list of requests
    setSubmittedRequests([...submittedRequests, formData]);

    // Pass the message to the DiscussionForum via addRequest
    if (addRequest) {
      addRequest(`Request for ${formData.itemName} (${formData.category}): Quantity: ${formData.quantity}, Needed By: ${formData.neededBy}`);
    }

    // Reset form
    setFormData({
      itemName: "",
      category: "",
      quantity: "",
      neededBy: "",
      description: "",
    });
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2 style={{ color: "#2c3e50", textAlign: "center", marginBottom: "30px" }}>
        🙋‍♂️ Request an Item
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#f9f9f9",
          padding: "25px",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "auto",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <label>
          <strong>Item Name *</strong>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            placeholder="e.g. Hammer"
            style={inputStyle}
            required
          />
        </label>

        <label>
          <strong>Category *</strong>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={inputStyle}
            required
          >
            <option value="">Select Category</option>
            <option value="Tools">Tools</option>
            <option value="Books">Books</option>
            <option value="Groceries">Groceries</option>
            <option value="Appliances">Appliances</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          <strong>Quantity *</strong>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            style={inputStyle}
            required
          />
        </label>

        <label>
          <strong>Needed By (Date) *</strong>
          <input
            type="date"
            name="neededBy"
            value={formData.neededBy}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </label>

        <label>
          <strong>Description (optional)</strong>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Any special instructions or details?"
            style={{ ...inputStyle, resize: "vertical" }}
          ></textarea>
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#2c3e50",
            color: "white",
            padding: "10px 16px",
            fontSize: "16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Submit Request ✅
        </button>
      </form>

      {submittedRequests.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h3 style={{ color: "#2c3e50", textAlign: "center" }}>📋 Submitted Requests</h3>
          {submittedRequests.map((req, idx) => (
            <div
              key={idx}
              style={{
                background: "#eef3f7",
                margin: "15px auto",
                padding: "15px",
                borderRadius: "8px",
                maxWidth: "600px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
              }}
            >
              <p><strong>Item:</strong> {req.itemName}</p>
              <p><strong>Category:</strong> {req.category}</p>
              <p><strong>Quantity:</strong> {req.quantity}</p>
              <p><strong>Needed By:</strong> {req.neededBy}</p>
              {req.description && <p><strong>Description:</strong> {req.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  marginTop: "5px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

export default CombinedComponent;