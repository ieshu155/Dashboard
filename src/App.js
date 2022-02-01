
import { auth } from "firebase";
import * as React from "react";
import {
  Routes,
  Route,
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
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.DASHBOARD} element={AuthRoute(<Dashboard />)} />
          <Route path={ROUTES.APPOINTMENTS} element={AuthRoute(<Appointments />)} />
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

