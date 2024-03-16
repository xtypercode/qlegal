import EventCard from "../../../components/events/eventCard";
import CalendarContainer from "../../../containers/calendarContainer";
import { events } from "../../../data/events";
import SidebarLayout from "../../../layouts/sidebar";

const CalendarPage = () => {
	return (
		<SidebarLayout>
			<main className="container flex justify-between h-full flex-col lg:gap-8 lg:flex-row px-4">
				<section className="w-full">
					<h2 className="mb-4 text-2xl font-bold">Calendário</h2>

					<CalendarContainer />
				</section>

				<div className="hidden h-svh w-0.5 self-stretch bg-black lg:inline-block"></div>

				<section className="w-full mt-4 lg:mt-0 lg:pr-4">
					<h2 className="mb-4 text-2xl font-bold">Eventos</h2>

					<div className="flex flex-col gap-4">
						{events.map((event) => (
							<EventCard key={event.id} event={event} />
						))}
					</div>
				</section>
			</main>
		</SidebarLayout>
	);
};

export default CalendarPage;
