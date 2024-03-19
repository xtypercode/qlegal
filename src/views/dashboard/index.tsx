import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/dashboard";
import SidebarLayout from "../../layouts/sidebar";
import CalendarContainer from "../../containers/calendarContainer";
import TaskContainer from "../../containers/taskContainer";
import { Button } from "flowbite-react";
import { isAfter } from "date-fns";
import { Event } from "../../config/models/Event";
import { events } from "../../data/events";
import NotificationCard from "../../components/notification-card/NotificationCard";

const DashboardPage = () => {
	useEffect(() => {
		document.title = "Qlegal - Dashboard";
	});

	const [upcomingEvent, setUpcomingEvent] = useState<Event | null>(null);

	useEffect(() => {
		const checkUpcomingEvent = (events: Event[]) => {
			const now = new Date();
			const upcoming = events.find((event) => {
				const oneDayBeforeEvent = new Date(event.startDatetime);
				oneDayBeforeEvent.setDate(oneDayBeforeEvent.getDate() - 1);
				return isAfter(oneDayBeforeEvent, now);
			});
			setUpcomingEvent(upcoming || null);
		};

		checkUpcomingEvent(events);
	});

	return (
		<DashboardLayout>
			<SidebarLayout>
				<div className="container flex flex-col px-4 lg:flex-row lg:gap-8">
					<div className="w-full lg:w-1/2">
						<CalendarContainer />

						<TaskContainer />
					</div>

					<div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pr-4 ">
						<div className="mb-4 flex w-full items-center justify-between">
							<h2 className="text-xl font-bold">Notificações</h2>

							<Button
								size="sm"
								className="bg-transparent text-yellow-500 enabled:hover:bg-transparent enabled:hover:text-yellow-400"
							>
								Ver todas
							</Button>
						</div>

						{upcomingEvent && (
							<NotificationCard
								title={"upcomingEvent.title"}
								date={"upcomingEvent.startDatetime"}
							/>
						)}

						<NotificationCard
							title={"Meu novo evento favorito para hoje"}
							date={"04/04/2024 | 08/04/2024"}
						/>
					</div>
				</div>
			</SidebarLayout>
		</DashboardLayout>
	);
};

export default DashboardPage;
