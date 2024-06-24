import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Sobre from '../pages/Sobre';
import Atendimento from '../pages/Atendimento';
import Livros from '../pages/Livros';
import Cursos from '../pages/Instagram';
import Contato from '../pages/Contato';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/sobre',
    element: <Sobre />,
  },
  {
    path: '/atendimento',
    element: <Atendimento />,
  },
  {
    path: '/livros',
    element: <Livros />,
  },
  {
    path: '/instagram',
    element: <Cursos />,
  },
  {
    path: '/contato',
    element: <Contato />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
