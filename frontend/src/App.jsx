
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Predictor from "./pages/Predictor";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/predictor" element={<Predictor />} />
      <Route path="/transaction" element={<Transaction />} />
    </Routes>
  );
}

export default App;
