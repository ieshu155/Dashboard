
import { auth } from "firebase";
import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";
import { ROUTES } from "./js/constants";
import Appointments from "./Views/appointments/Appointments";
import Dashboard from "./Views/dashboard/Dashboard";
import Welcome from "./welcome";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Welcome />} />
          <Route path={ROUTES.LOGIN} element={<Layout2 />} />
          {/* <Route path={ROUTES.DASHBOARD} element={AuthRoute(<Dashboard />)} />
          <Route path={ROUTES.APPOINTMENTS} element={AuthRoute(<Appointments />)} /> */}
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.APPOINTMENTS} element={<Appointments />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

const AuthRoute = chiled => <AuthenticatedRoutes>{chiled}</AuthenticatedRoutes>
function Layout() {
  const navigate = useNavigate();
  React.useEffect(() => setTimeout(() => navigate(ROUTES.DASHBOARD), 200), [])
  return (<div> <Outlet /> </div>);
}

const AuthContext = React.createContext({user: null});
const AuthProvider = ({ children }) => <AuthContext.Provider value={{user: auth().currentUser}}>{children}</AuthContext.Provider>;
const useAuth = () => React.useContext(AuthContext);
const AuthenticatedRoutes = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return children;
}

function LoginPage() {

  return (
    <div>
      <p>LOGIN PAGE HOLDER</p>

    </div>
  );
}

function Layout2() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.APPOINTMENTS}>Appointments</Link>
          </li>
          <li>
            <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
          </li>
          <li>
            <Link to={ROUTES.PRESCRIPTIONS}>Prescriptions</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}