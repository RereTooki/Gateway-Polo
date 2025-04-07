import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import JoinUs from "./components/JoinUs";
import Accomodations from "./components/Accomodations";
import AboutUs from "./components/AboutUs";

const router = createBrowserRouter([
  {
    path: "/", // Root Route
    element: <Homepage />,
  },
  {
    path: "/joinUs", // about Page
    element: <JoinUs />,
  },
  {
    path: "/aboutUs", // about Page
    element: <AboutUs />,
  },
  {
    path: "/accomodations", // about Page
    element: <Accomodations />,
  },
  // {
  //   path: "/services", // services Page
  //   element: <Page3 />,
  // },
  // {
  //   path: "/contactUs", // contact Page
  //   element: <Page4 />,
  // },
  // {
  //   path: "/contactUs/#bookings", // bookings section
  //   element: <BodyIntro4 />,
  // },
]);

export default router;
