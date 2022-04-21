import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsTable from "./Components/Products/ProductsTable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
