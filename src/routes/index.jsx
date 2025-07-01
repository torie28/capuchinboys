import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayouts';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Academics from '../pages/academics/Academics';
import Admissions from '../pages/academics/components/Admissions';
import Contact from '../pages/contact/Contact';
import NotFound from '../components/common/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
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
      {
        path: "/contact",
        element: <Contact />,
      },
      // This will catch any other routes under /
      {
        path: "*",
        element: <NotFound />
      }
    ],
  },
]);

export default router;
