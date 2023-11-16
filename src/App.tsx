import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Connexion from './routes/Connexion'
import Ajout from './routes/Ajout';
// import Modif from './routes/Modif';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Connexion />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  // {
  //   path: "/modif",
  //   element: <Modif />
  // },
  {
    path: "/ajout",
    element: <Ajout />
  }
]);

function App() {

  return <RouterProvider router={router} />
}

export default App
