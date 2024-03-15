import React, { useState } from "react";
import Calendar from "../calendar/calendarEvents";
import { events } from "../../data/events";

const CalendarContainer: React.FC = () => {
	const [eventList, setEventList] = useState(events);
	return <Calendar events={eventList} setEvents={setEventList} />;
};

export default CalendarContainer;
