import React, { useState, useEffect } from "react";
import { Event } from "../../config/types/Event";
import { showToastWithTimeout } from "../toast/utils/toast";
import ToastMessage from "../toast/ToastMessage";
import CalendarContent from "./calendarContent";

interface Props {
	events: Event[];
	setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

const Calendar: React.FC<Props> = ({ events, setEvents }) => {
	const [selectedDay, setSelectedDay] = useState<Date>(new Date());
	const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
	const [toastMessage, setToastMessage] = useState<string>("");
	const [newEvent, setNewEvent] = useState<Event | null>(null);

	useEffect(() => {
		if (toastMessage) {
			showToastWithTimeout(toastMessage, setToastMessage);
		}
	}, [toastMessage]);

	const handleEventAddition = (newEvent: Event) => {
		setNewEvent(newEvent);
		setToastMessage("Evento adicionado com sucesso.");
	};

	const handleToastClose = () => {
		setToastMessage("");
	};

	return (
		<div className="">
			<CalendarContent
				selectedDay={selectedDay}
				currentMonth={currentMonth}
				events={events}
				setSelectedDay={setSelectedDay}
				setCurrentMonth={setCurrentMonth}
				handleEventAddition={handleEventAddition}
			/>
			{toastMessage && (
				<ToastMessage
					message={toastMessage}
					onClose={handleToastClose}
				/>
			)}
		</div>
	);
};

export default Calendar;
