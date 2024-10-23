import { Sidebar } from "./components/Sidebar";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import { Header } from "./pages/Header";
import Home from "./pages/Home";
import { Project } from "./pages/Project";
import Resume from "./pages/Resume";
import { Skills } from "./pages/Skills";
import "./index.css";
function App() {
  return (
    <div className="w-[100%] flex h-[100vh]">
      <Sidebar />
      <div
        className="lg:w-[80%] w-full bg-black   text-white overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <Home />
        <About />
        <Project />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
