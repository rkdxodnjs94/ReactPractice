import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Shipment from './pages/Shipment';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shipment" element={<Shipment />} />
    </Routes>
  );
}

export default App;
