import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Predictor from "./pages/Predictor";
import Transaction from "./pages/Transaction";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/predictor" element={<Predictor />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;