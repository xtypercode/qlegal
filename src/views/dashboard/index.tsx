import { useEffect } from "react";
import DashboardLayout from "../../layouts/dashboard";
import SidebarLayout from "../../layouts/sidebar";
import CalendarContainer from "../../components/containers/CalendarContainer";

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
					</div>
				</div>
			</SidebarLayout>
		</DashboardLayout>
	);
};

export default DashboardPage;
