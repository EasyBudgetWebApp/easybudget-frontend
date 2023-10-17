import "./App.css";
import Landing from "./pages/Landing.js";
import Login from "./pages/Login.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
