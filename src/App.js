import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import AddDoctor from "./Pages/Dashborad/AddDoctor";
import Dashboard from "./Pages/Dashborad/Dashboard";
import ManageDoctors from "./Pages/Dashborad/ManageDoctors";
import MyAppointment from "./Pages/Dashborad/MyAppointment";
import MyHIstory from "./Pages/Dashborad/MyHIstory";
import MyReview from "./Pages/Dashborad/MyReview";
import Payment from "./Pages/Dashborad/Payment";
import Users from "./Pages/Dashborad/Users";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import Reviews from "./Pages/Reviews/Reviews";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<MyHIstory />}></Route>
          <Route path="payment/:id" element={<Payment />} />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
