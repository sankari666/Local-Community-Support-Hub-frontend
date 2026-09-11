import React from 'react'; // ✅ Ensure this CSS file exists with relevant classes

function Resources() {
  return (
    <div className="page-content" style={{ padding: "20px" }}>
      <h3 className="welcome" style={{ fontSize: "22px", marginBottom: "20px" }}>
        Welcome User! Explore Community Resources below
      </h3>

        <input
        type="text"
        placeholder="Search for resources"
        className="search-bar"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          marginBottom: "20px"
        }}
      />

      <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
        <li><strong>1. Navigate to the Resources section and select "Post a Resource".</strong></li>
        <li><strong>2. Enter a clear title, description, and category.</strong></li>
        <li><strong>3. Mention whether the resource is available for borrowing.</strong></li>
        <li><strong>4. Click Submit to post your resource.</strong></li>
        <li><strong>5. Search for resources by entering keywords in the search bar.</strong></li>
  <li><strong>6. Filter results based on category, availability, or location.</strong></li>
  <li><strong>7. View details of a resource by clicking on its title.</strong></li>
  <li><strong>8. Send a message to the resource owner to request or inquire.</strong></li>
  <li><strong>9. Edit or delete your posted resources from your profile page.</strong></li>
  <li><strong>10. Attend upcoming community events listed on the Events page.</strong></li>
  <li><strong>11. RSVP to events you're interested in with a simple click.</strong></li>
  <li><strong>12. Share events with friends or invite community members.</strong></li>
  <li><strong>13. Update your profile to add skills, interests, and a profile photo.</strong></li>
  <li><strong>14. Join discussion forums to share ideas and connect with others.</strong></li>
  <li><strong>15. Report inappropriate content easily through the 'Report' button.</strong></li>
      </ul>
    </div>
  );
}

export default Resources;
