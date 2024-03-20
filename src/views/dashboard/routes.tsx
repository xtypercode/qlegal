import DashboardPage from ".";
import { RouteType } from "../../config/types";
import CalendarPage from "./calendar";
import ContactsPage from "./contacts";
import MeetingsPage from "./meetings";

// Todas as rotas dessa categoria *WEB* são type:public

const Routes: RouteType[] = [
	{
		label: "",
		path: "/dashboard",
		element: <DashboardPage />, // O componente da view
		type: "private",
	},
	{
		label: "",
		path: "/dashboard/calendar",
		element: <CalendarPage />, // O componente da view
		type: "private",
	},
	{
		label: "",
		path: "/dashboard/meetings",
		element: <MeetingsPage />, // O componente da view
		type: "private",
	},
	{
		label: "",
		path: "/dashboard/contacts",
		element: <ContactsPage />, // O componente da view
		type: "private",
	},
];

export const PrivateRoutes = Routes;
