import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Navigation from './components/navigation/Navigation';
import Home from "./page/home/Home";
import PropertyDetails from "./page/propertydetails/PropertyDetails";
import Login from "./auth/login/Login";
import PageLayout from "./components/layout/PageLayout";
import Register from "./auth/register/Register";
import Profile from "./page/profile/Profile";

const AppContent = () => {
  const location = useLocation();

  // Hide navigation on login page
  const hideNav = location.pathname === "/login" || location.pathname === '/register';

  return (
    <>
      {!hideNav && <Navigation />}

      <Routes>
        {/* Login route outside layout to exclude Navigation */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        {/* Routes wrapped with PageLayout */}
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Route>
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
