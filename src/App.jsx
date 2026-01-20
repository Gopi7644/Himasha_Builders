import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Applayout/Layout.jsx";
import Home from "./Page/Home.jsx";
import Service from "./Page/Service.jsx";
import Enquiry from "./Page/Enquiry.jsx";
import ErrorPage from "./Page/ErrorPage.jsx";
import Products from "./Page/Produts.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,   // 🔥 Proper error handling
    children: [
      {
        index: true,              // "/" route
        element: <Home />,
      },
      {
        path: "service",          // "/service"
        element: <Service />,
      },
      {
        path: "products",          // "/products"
        element: <Products />,
      },
      {
        path: "enquiry",          // "/enquiry"
        element: <Enquiry />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
