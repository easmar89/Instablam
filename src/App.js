import { Link } from "react-router-dom";
import "./App.css";
import Camera from "./components/Camera";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <section className="app">
      <Navbar />
      <h1>Instablam</h1>
      <Camera />
    </section>
  );
}
