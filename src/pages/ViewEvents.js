// src/pages/ViewEvents.js
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

function ViewEvents({ events }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="mt-6 space-y-6">
        {filteredEvents.map((event, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-bold mb-1">✨ {event.title}:</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewEvents;
