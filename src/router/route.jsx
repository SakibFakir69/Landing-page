import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homelayouts from "../layout/Homelayouts";
import Blog from "../page/Blog";

export const route = createBrowserRouter([
  {
    path: '',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Homelayouts />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);
