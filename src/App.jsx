import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Applayout/Layout.jsx";
import Home from "./Page/Home.jsx";
import Enquiry from "./Page/Enquiry.jsx";
import ErrorPage from "./Page/ErrorPage.jsx";
import Products from "./Page/Produts.jsx";
import ServiceDetail from "./components/ServiceDetail.jsx";
import Services from "./components/Services.jsx";

import Kitchens from "./Page/Kitchens.jsx";
import Wardrobes from "./Page/Wardrobes.jsx";
import Doors from "./Page/Doors.jsx";
import Furnishings from "./Page/Furnishings.jsx";
import Bathware from "./Page/Bathware.jsx";
import Lights from "./Page/Lights.jsx";
import Ideas from "./Page/Ideas.jsx";

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
        path: "service",          // "/services"
        element: <Services />,
      },
      {
        path: "products",          // "/products"
        element: <Products />,
      },
      {
        path: "enquiry",          // "/enquiry"
        element: <Enquiry />,
      },
      {
        path: "kitchens",          // "/kitchens"
        element: <Kitchens />,
      },
      {
        path: "wardrobes",          // "/wardrobes"
        element: <Wardrobes />,
      },
      {
        path: "doors",          // "/doors"
        element: <Doors />,
      },
      {
        path: "furnishings",          // "/furnishings"
        element: <Furnishings />,
      },
      {
        path: "bathware",          // "/bathware"
        element: <Bathware />,
      },
      {
        path: "lights",          // "/lights"
        element: <Lights />,
      },
      {
        path: "ideas",          // "/ideas"
        element: <Ideas />,
      },
      {
        path: "/service/:type",
        element: <ServiceDetail />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
