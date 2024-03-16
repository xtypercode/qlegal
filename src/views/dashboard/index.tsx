import { useEffect } from "react";
import DashboardLayout from "../../layouts/dashboard";
import SidebarLayout from "../../layouts/sidebar";
import CalendarContainer from "../../containers/calendarContainer";
import TaskContainer from "../../containers/taskContainer";
const DashboardPage = () => {
	useEffect(() => {
		document.title = "Qlegal - Dashboard";
	});

	return (
		<DashboardLayout>
			<SidebarLayout>
				<div className="container flex flex-col px-4 lg:flex-row lg:gap-8">
					<div className="w-full md:w-1/2">
						<CalendarContainer />

						<TaskContainer />
					</div>
				</div>
			</SidebarLayout>
		</DashboardLayout>
	);
};

export default DashboardPage;
