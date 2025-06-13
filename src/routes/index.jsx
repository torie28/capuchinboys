import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayouts';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Academics from '../pages/academics/Academics';
import Admissions from '../pages/academics/components/Admissions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
      {
        path: "/admissions",
        element: <Admissions />,
      },
    ],
  },
]);

export default router;
