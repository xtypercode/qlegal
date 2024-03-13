import { RouteType } from "../../config/types";
import HomePage from "./home";

// Todas as rotas dessa categoria *WEB* são type:public

const Routes: RouteType[] = [
  {
    label: "",
    path: "/",
    element: <HomePage />, // O componente da view
    type: 'public',
  },
];

export const PublicRoutes = Routes;
