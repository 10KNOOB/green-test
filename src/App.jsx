import "./App.css";
import Navbar from "./components/universal/Navbar";
import Footer from "./components/universal/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Partnership from "./pages/Partnership";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Token from "./pages/Token";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/token" element={<Token />} />
          <Route path="/partner" element={<Partnership />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
        <div className="h-[80px]"></div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
