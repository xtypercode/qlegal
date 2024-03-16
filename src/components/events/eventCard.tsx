import React from "react";
import { Event } from "../../config/models/Event";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Button, Card, CustomFlowbiteTheme } from "flowbite-react";

interface EventCardProps {
	event: Event;
}

const formatDate = (date: string) => {
	return format(new Date(date), "dd-MM-yyyy", {
		locale: pt,
	});
};

const truncateText = (text: string, maxLength: number) => {
	return text.length > maxLength
		? text.substring(0, maxLength) + "..."
		: text;
};

const customCardTheme: CustomFlowbiteTheme["card"] = {
	root: {
		base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
		children: "flex h-full flex-col justify-center gap-1 p-6 w-full",
	},
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
	const startDate = formatDate(event.startDatetime);
	const endDate = formatDate(event.endDatetime);
	const locationOrLink = truncateText(event.locationOrLink, 28);

	return (
		<Card key={event.id} theme={customCardTheme}>
			<h3 className="text-lg font-bold">{event.title}</h3>

			<span className="md:hidden">
				<a href={event.locationOrLink}>{locationOrLink}</a>
			</span>

			<span className="hidden md:block">
				<a href={event.locationOrLink}>{event.locationOrLink}</a>
			</span>

			<p className="flex items-center gap-1">
				<span>{startDate}</span>|<span>{endDate}</span>
			</p>

			<p className="my-1 line-clamp-3 overflow-hidden text-ellipsis text-sm">
				{event.description}
			</p>

			<Button className="w-36 bg-gray-500">
				<span>Mais detalhes</span>
				<IoArrowForwardOutline />
			</Button>
		</Card>
	);
};

export default EventCard;
