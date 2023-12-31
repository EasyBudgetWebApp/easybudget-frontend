import "./App.css";
import Landing from "./pages/Landing.js";
import TransactionsSharedLayout from "./pages/TransactionsSharedLayout/TransactionsSharedLayout.js";
import AddTransaction from "./pages/TransactionsSharedLayout/AddTransaction.js";
import Transactions from "./pages/TransactionsSharedLayout/Transactions.js";
import RouteProtector from "./components/RouteProtector.js";
import Login from "./pages/Login.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error.js";
import Register from "./pages/Register.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteProtector protectingFlag={true} />,
    children: [
      {
        element: <TransactionsSharedLayout />,
        children: [
          {
            element: <Transactions />,
            index: true,
          },
          {
            element: <AddTransaction />,
            path: "/add-transaction",
          },
        ],
      },
    ],
  },
  {
    path: "/landing-page",
    element: <Landing />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />,
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
