import { Outlet } from "react-router-dom";

const RouteProtector = ({ protectingFlag, children }) => {
  if (protectingFlag) {
    return <Outlet />;
  }
};

export default RouteProtector;
