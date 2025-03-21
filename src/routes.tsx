import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import JoinUs from "./components/JoinUs";

const router = createBrowserRouter([
  {
    path: "/", // Root Route
    element: <Homepage />,
  },
  {
    path: "/joinUs", // about Page
    element: <JoinUs />,
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
