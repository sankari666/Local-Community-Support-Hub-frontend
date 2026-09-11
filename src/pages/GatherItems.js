import React, { useState } from "react";
import { uploadedItems } from "./CombinedPage"; // Import the uploaded items

const staticResources = [
  {
    name: "books",
    image: "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
  },
  {
    name: "clothes",
    image: "https://www.shutterstock.com/image-photo/beautiful-colorful-clothes-flying-isolatedwomens-260nw-2257875171.jpg"
  },
  {
    name: "Tools",
    image: "https://media.istockphoto.com/id/1370911387/photo/work-tools-still-life.jpg?s=612x612&w=0&k=20&c=s2CRTlteoag2rkwISVlTEvZ_XQdkcRxJLhEMRuOXOko="
  },
  {
    name: "Bicycle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4EqPpkqWUS-F2AZxcnrzwoQ0oHrAg1wIbw&s"
  },
  {
    name: "Birthday Propz",
    image: "https://m.media-amazon.com/images/I/71j0dVYRuYL._AC_UF1000,1000_QL80_.jpg"
  }
];

const GatherItems = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allItems = [...uploadedItems, ...staticResources];

  const filtered = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          marginBottom: "20px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filtered.length > 0 ? (
          filtered.map((item, index) => (
            <div key={index} style={{
              width: "200px",
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center"
            }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "6px" }}
              />
              <p>{item.name}</p>
            </div>
          ))
        ) : (
          <p>No items match your search.</p>
        )}
      </div>
    </div>
  );
};

export default GatherItems;
