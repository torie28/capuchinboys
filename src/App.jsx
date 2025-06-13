import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';  
import { Helmet } from 'react-helmet';
import router from './routes';

function App() {
  return (
      <HelmetProvider>
          <Helmet>
          <title>Capuchin Boys Secondary School</title>
        </Helmet>
        <RouterProvider router={router} />
      </HelmetProvider>
  );
}

export default App;
