import { PublicRoutes } from "../views/web/routes"
import { PrivateRoutes } from "../views/dashboard/routes"

export const AllRoutes = [...PublicRoutes, ...PrivateRoutes]