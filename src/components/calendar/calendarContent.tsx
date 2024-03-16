import React, { useEffect, useState } from "react";
import {
	format,
	startOfMonth,
	eachDayOfInterval,
	endOfMonth,
	startOfWeek,
	isAfter,
} from "date-fns";
import { DayHeader } from "./dayHeader";
import pt from "date-fns/locale/pt";
import NewEventDialog from "./newEventDialog";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { CalendarDay } from "./CalendarDay";
import { Event } from "../../config/models/Event";
import { Button } from "flowbite-react";

interface Props {
	selectedDay: Date;
	currentMonth: Date;
	events: Event[];
	setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
	setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
	handleEventAddition: (newEvent: Event) => void;
}

const BUTTON_STYLES =
	"text-sm text-gray-900 bg-white font-semibold enabled:hover:bg-gray-100";
const DAYS_OF_WEEK = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const CalendarContent: React.FC<Props> = ({
	selectedDay,
	currentMonth,
	events,
	setSelectedDay,
	setCurrentMonth,
	handleEventAddition,
}) => {
	const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

	useEffect(() => {
		const now = new Date();
		const upcoming = events.filter((event) => {
			const oneDayBeforeEvent = new Date(event.startDatetime);
			oneDayBeforeEvent.setDate(oneDayBeforeEvent.getDate() - 1);
			return isAfter(oneDayBeforeEvent, now);
		});
		setUpcomingEvents(upcoming);
	}, [events]);

	const startDayOfMonth = startOfWeek(startOfMonth(currentMonth));
	const endDayOfMonth = endOfMonth(currentMonth);
	const days = eachDayOfInterval({
		start: startDayOfMonth,
		end: endDayOfMonth,
	});

	const handleDayClick = (day: Date) => setSelectedDay(day);

	const previousMonth = () =>
		setCurrentMonth(
			(prevMonth) =>
				new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1)
		);
	const nextMonth = () =>
		setCurrentMonth(
			(prevMonth) =>
				new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1)
		);

	function capitalizeFirstLetter(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	const formattedMonth = capitalizeFirstLetter(
		format(currentMonth, "MMMM yyyy", { locale: pt })
	);

	return (
		<div className="w-full inline-block max-h-96 rounded-lg bg-white p-3 shadow-lg dark:bg-gray-700 md:max-h-full md:p-4">
			<div className="mb-2 flex items-center justify-between">
				<Button className={BUTTON_STYLES} onClick={previousMonth}>
					<IoArrowBackOutline />
				</Button>
				<h2 className="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold">
					{formattedMonth}
				</h2>
				<Button className={BUTTON_STYLES} onClick={nextMonth}>
					<IoArrowForwardOutline />
				</Button>
				<NewEventDialog
					onAddEvent={handleEventAddition}
					selectedDay={selectedDay}
				/>
			</div>
			<div className="mb-1 grid grid-cols-7">
				{DAYS_OF_WEEK.map((day: string, index: number) => (
					<DayHeader key={index} day={day} />
				))}
			</div>
			<div className="grid w-full grid-cols-7">
				{days.map((day: Date) => (
					<CalendarDay
						key={day.toString()}
						day={day}
						selectedDay={selectedDay}
						handleDayClick={handleDayClick}
						firstDayCurrentMonth={startOfMonth(currentMonth)}
						events={events}
					/>
				))}
			</div>
		</div>
	);
};

export default CalendarContent;
