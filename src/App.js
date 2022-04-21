import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./Components/Products/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
