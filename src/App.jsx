import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
