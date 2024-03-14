import DashboardPage from ".";
import { RouteType } from "../../config/types";

// Todas as rotas dessa categoria *WEB* são type:public

const Routes: RouteType[] = [
	{
		label: "",
		path: "/dashboard",
		element: <DashboardPage />, // O componente da view
		type: "private",
	},
];

export const PrivateRoutes = Routes;
