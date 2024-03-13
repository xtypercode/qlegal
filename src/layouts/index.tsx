import "../styles/globals.css";
import { RouteType } from "../config/types";
import WebLayout from "./web";
import DashboardLayout from "./dashboard";

const Layout = ({ label, path, element, type } : RouteType) => {

  return (
    <body>
      {
        type == 'private' ? 
        (
          <DashboardLayout>
            {element}
          </DashboardLayout>
        )
        :
        (
          <WebLayout>
            {element}
          </WebLayout>
        ) 
      }
    </body>
  );
};

export default Layout;
