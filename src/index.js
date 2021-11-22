import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Photos from "./components/Photos";

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/photos" element={<Photos />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
