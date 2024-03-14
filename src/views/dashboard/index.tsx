import { useEffect } from "react";
import DashboardLayout from "../../layouts/dashboard";
import SidebarLayout from "../../layouts/sidebar";

const DashboardPage = () => {
	useEffect(() => {
		document.title = "Qlegal - Dashboard";
	});

	return (
		<DashboardLayout>
			<SidebarLayout>
				<div>msh</div>
			</SidebarLayout>
		</DashboardLayout>
	);
};

export default DashboardPage;
