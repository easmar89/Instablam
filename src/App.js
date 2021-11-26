import "./App.css";
import Camera from "./components/Camera";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <section className="app">
      <h1>Instablam</h1>
      <Navbar />
      <Camera />
    </section>
  );
}
