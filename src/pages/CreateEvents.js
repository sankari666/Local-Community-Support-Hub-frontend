import { CreateEvents } from '@testing-library/dom';
import './CreateEvent.css';

return (
  <div className="event-form-container">
    <h2>Create Event</h2>
    <input
      type="text"
      placeholder="Title"
      value={eventText}
      onChange={(e) => setEventText(e.target.value)}
      className="form-input"
    />
    <input
      type="date"
      value={eventDate}
      onChange={(e) => setEventDate(e.target.value)}
      className="form-input"
    />
    <input
      type="time"
      value={eventTime}
      onChange={(e) => setEventTime(e.target.value)}
      className="form-input"
    />
    <textarea
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="form-textarea"
    />
    <button className="form-button" onClick={handleAddEvent}>
      Create
    </button>
  </div>
);
export default CreateEvents;