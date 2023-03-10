import { Home } from "./components/Home/HomePage";
/*import { Consultas } from "./components/Consultas";
import { ConsultasOrdem } from "./components/ConsultasOrdem";
import { ConsultasIBAN } from "./components/ConsultasIBAN";
import { Transferencias } from "./components/Transferencias";*/
import { Login } from "./components/Login/LoginPage";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  /*{
    path: '/transferencias',
    element: <Transferencias />
  },
  {
    path: '/consultas',
    element: <Consultas />
  },
  {
    path: '/consultasOrdem',
    element: <ConsultasOrdem />
  },
  {
    path: '/consultasIBAN',
    element: <ConsultasIBAN />
  },*/
  {
    path: '/login',
    element: <Login />
  }
];

export default AppRoutes;