import Register from "./components/pages/auth/Register";
import Content from "./components/pages/Content";
import Footer from "./components/pages/layouts/Footer";
import Header from "./components/pages/layouts/Header";
import Navbar from "./components/pages/layouts/Navbar";

// Router
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/Home";

function App() {
   return (
      <div className="App">
         {/* <h1>Hello React</h1> */}
         <Header />
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
