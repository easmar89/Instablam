import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Gallery from "./components/Gallery";

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
