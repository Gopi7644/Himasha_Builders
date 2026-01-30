import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Applayout/Layout.jsx";
import Home from "./Page/Home.jsx";
import Enquiry from "./Page/Enquiry.jsx";
import ErrorPage from "./Page/ErrorPage.jsx";
import ServiceDetail from "./components/ServiceDetail.jsx";
import Services from "./components/Services.jsx";

import Kitchens from "./components/Kitchen/Kitchens.jsx";
import Wardrobes from "./components/Wardrobes/Wardrobes.jsx";
import Doors from "./components/DoorWindows/Doors.jsx";
import Furnishings from "./Page/Furnishings.jsx";
import Bathware from "./components/bathware/Bathware.jsx";
import Lights from "./components/Lights/Lights.jsx";
import Ideas from "./components/DesignIdeas/Ideas.jsx";
import ModularKitchens from "./components/Kitchen/ModularKitchens.jsx";
import KitchenCalculator from "./components/Kitchen/KitchenCalculator.jsx";
import DesignIdeas from "./components/Kitchen/DesignIdeas.jsx";
import KitchenConfigurator from "./components/Kitchen/KitchenConfigurator.jsx";
import SlidingWard from "./components/Wardrobes/SlidingWard.jsx";
import WalkInWard from "./components/Wardrobes/WalkInWard.jsx";
import LuxaryClosets from "./components/Wardrobes/LuxaryClosets.jsx";
import MainDoor from "./components/DoorWindows/MainDoor.jsx";
import Windows from "./components/DoorWindows/Windows.jsx";
import BalconyDoors from "./components/DoorWindows/BalconyDoors.jsx";
import Showers from "./components/bathware/Showers.jsx";
import Sanitaryware from "./components/bathware/Sanitaryware.jsx";
import Mirrors from "./components/bathware/Mirrors.jsx";
import Chandeliers from "./components/Lights/chandeliers.jsx";
import LedPanels from "./components/Lights/LedPanels.jsx";
import DecorativeLights from "./components/Lights/DecorativeLights.jsx";
import SmallHomes from "./components/DesignIdeas/SmallHomes.jsx";
import LuxuryHomes from "./components/DesignIdeas/LuxuryHomes.jsx";
import BudgetInteriors from "./components/DesignIdeas/BudgetInteriors.jsx";
import Guides from "./components/Guides/Guides.jsx";


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
      },
      {
        path: "/kitchens/modular",          // "/kitchens/modular"
        element: <ModularKitchens />,
      },
      {
        path: "/kitchens/calculator",          // "/kitchens/calculator"
        element: <KitchenCalculator />,
      },
      {
        path: "/kitchens/ideas",          // "/kitchens/kitchenideas"
        element: <DesignIdeas />,
      },
      {
        path: "/kitchens/configurator",          // "/kitchens/configurator"
        element: <KitchenConfigurator />,
      },
      {
        path: "/wardrobes/sliding",          // "/wardrobes/sliding"
        element: <SlidingWard />,
      },
      {
        path: "/wardrobes/walkin",          // "/wardrobes/walkin"
        element: <WalkInWard />,
      },
      {
        path: "/wardrobes/luxury",          // "/wardrobes/luxury"
        element: <LuxaryClosets />,
      },
      {
        path: "/doors/main",          // "/doors/main"
        element: <MainDoor />,
      },
      {
        path: "/doors/windows",          // "/doors/windows"
        element: <Windows />,
      },
      {
        path: "/doors/balcony",          // "/doors/balcony"
        element: <BalconyDoors />,
      },
      {
        path: "/bathware/showers",          // "/bathware/showers"
        element: <Showers />,
      },
      {
        path: "/bathware/sanitaryware",          // "/bathware/sanitaryware"
        element: <Sanitaryware />,
      },
      {
        path: "/bathware/mirrors",          // "/bathware/mirrors"
        element: <Mirrors />,
      },
      {
        path: "/lights/chandeliers",          // "/lights/chandeliers"
        element: <Chandeliers />,
      },
      {
        path: "/lights/led",          // "/lights/led"
        element: <LedPanels />,
      },
      {
        path: "/lights/decorative",          // "/lights/decorative"
        element: <DecorativeLights />,
      },
      {
        path: "/ideas/small",          // "/ideas/small"
        element: <SmallHomes />,
      },
      {
        path: "/ideas/luxury",          // "/ideas/luxury"
        element: <LuxuryHomes />,
      },
      {
        path: "/ideas/budget",          // "/ideas/budget"
        element: <BudgetInteriors />,
      },
      {
        path: "guides",          // "/ideas/budget"
        element: <Guides />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
