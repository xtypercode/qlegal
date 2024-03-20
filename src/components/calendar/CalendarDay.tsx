import React from "react";
import {
	format,
	getDay,
	isEqual,
	isSameDay,
	isSameMonth,
	isToday,
	parseISO,
} from "date-fns";
import { Event } from "../../config/models/Event";

interface CalendarDayProps {
	day: Date;
	selectedDay: Date;
	handleDayClick: (day: Date) => void;
	firstDayCurrentMonth: Date;
	events: Event[];
}

export const CalendarDay: React.FC<CalendarDayProps> = ({
	day,
	selectedDay,
	handleDayClick,
	firstDayCurrentMonth,
	events,
}) => {
	return (
		<div
			key={day.toString()}
			className={classNames(
				getDay(day) === 0 && colStartClasses[getDay(day)],
				"py-1.5"
			)}
		>
			<button
				type="button"
				onClick={() => handleDayClick(day)}
				className={classNames(
					isEqual(day, selectedDay) && "text-white",
					isToday(day) &&
						(isEqual(day, selectedDay)
							? "bg-red-500"
							: "text-red-500"),
					!isEqual(day, selectedDay) &&
						isSameMonth(day, firstDayCurrentMonth) &&
						"text-gray-900",
					!isEqual(day, selectedDay) &&
						!isToday(day) &&
						!isSameMonth(day, firstDayCurrentMonth) &&
						"text-gray-400",
					isEqual(day, selectedDay) && !isToday(day) && "bg-gray-900",
					!isEqual(day, selectedDay) && "hover:bg-gray-200",
					(isEqual(day, selectedDay) || isToday(day)) &&
						"font-semibold",
					"mx-auto block h-7 w-7 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold"
				)}
			>
				<time dateTime={format(day, "yyyy-MM-dd")}>
					{format(day, "d")}
				</time>
			</button>

			<div className="mx-auto mt-1 h-1 w-1">
				{events.some((event) =>
					isSameDay(parseISO(event.startDatetime), day)
				) && <div className="h-1 w-1 rounded-full bg-sky-500"></div>}
			</div>
		</div>
	);
};

function classNames(...classes: (string | boolean)[]) {
	return classes.filter(Boolean).join(" ");
}

const colStartClasses = [
	"",
	"col-start-2",
	"col-start-3",
	"col-start-4",
	"col-start-5",
	"col-start-6",
	"col-start-7",
];
