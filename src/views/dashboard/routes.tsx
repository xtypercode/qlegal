import { RouteType } from "../../config/types";

// Todas as rotas dessa categoria *WEB* são type:public

const Routes: RouteType[] = [
  {
    label: "",
    path: "/",
    element: <></>, // O componente da view
    type: 'private',
  },
];

export const PrivateRoutes = Routes;
