import { useEffect } from "react";
import socket from "./socket";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
// import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";

import DashboardLayout from "./layout/DashboardLayout";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import ForgotPassword from "./pages/ForgotPassword";

function App() {



  useEffect(() => {
  console.log("App Loaded");

  socket.on("connect", () => {
    console.log("Socket Connected");
    console.log(socket.id);
  });



  //   messgae backend 

  socket.on("welcome",(message)=>{
    console.log("hi from backend",message);
  })
}, []);

  return (

    <>
     <Routes>

        <Route path="/" element={<Login />}/>
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}

        <Route path="/signup"element={<Signup />} />

         <Route path="/dashboard"element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

 <Route index element={<Dashboard />}/>
 <Route   path="products"element={<Products />}/>
 <Route   path="cart" element={<CartPage />}/>

 </Route>
  {/* <Route  path="/profile"element={<Profile />} /> */}

      </Routes>




      <ToastContainer />

    </>

  );

}

export default App;