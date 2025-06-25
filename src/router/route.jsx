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
   {
    path:"*",
    element:<h1 className="flex justify-center items-center text-3xl md:text-6xl font-semibold">404</h1>
    
  }
]);
