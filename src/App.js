// import * as React from "react";
// import { Routes, Route, Outlet, Link, Redirect } from "react-router-dom";
// import AppNavigator from "./AppNavigator";
// // import { Redirect, } from "react-router";
// import { useAuthState } from "./configs/firebase";
// import Appointments from "./Views/appointments/Appointments";
// import Dashboard from "./Views/dashboard/Dashboard";
// import { Login } from "./Views/login_test";
// import Prescriptions from "./Views/perscriptions/Prescriptions";

// export default function App() {
//   return (

//       <Routes>
//         <Route path="/" element={<AppNavigator />}>
//           <Route index element={<Dashboard />} />
//           <Route path="appointments" element={<Appointments />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="prescriptions" element={<Prescriptions />} />
//           <Route path="login" element={<Login />} />

//           <Route path="*" element={<NoMatch />} />
//         </Route>
 
        
//       </Routes>

//   );
// }


import { Typography } from "@material-ui/core";
import { auth } from "firebase";
import * as React from "react";
// import { auth, signin, signout } from "firebase";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";
import { getUser, signin, signout } from "./configs/firebase";
import Appointments from "./Views/appointments/Appointments";
import Dashboard from "./Views/dashboard/Dashboard";
import Welcome from "./welcome";
// import { fakeAuthProvider } from "./auth";

export default function App() {
  // const a = auth
  return (
    <AuthProvider>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <AuthenticatedRoutes>
                          <Route path="appointments" element={<Appointments />} />
                          <Route path="dashboard" element={<Dashboard />} />
                          {/* <Route path="prescriptions" element={<Prescr />} /> */}
                <ProtectedPage />
              </AuthenticatedRoutes>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  const navigate = useNavigate();
  React.useEffect(() => setTimeout(() => navigate("/appointments"), 200), [])
  return (<div> <Outlet /> </div>);
}


const AuthContext = React.createContext({user: null});
const AuthProvider = ({ children }) => <AuthContext.Provider value={{user: auth().currentUser}}>{children}</AuthContext.Provider>;
const useAuth = () => React.useContext(AuthContext);



const AuthenticatedRoutes = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}