import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Analytics from "./pages/analytics";

function AppRouter() {

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup />}
          ></Route>
          <Route
            path="/dashboard"
            element={<Analytics />}
          ></Route>
        </Routes>
      </Router>

    </>
  )
}

export default AppRouter