import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <header className="App-header">
        <strong>Job search.com</strong>
      </header>

      <section className="sidebar">
        <Navbar />
        <img className="sidebar--centered" />
      </section>
      <Sidebar />
      <Users />
      <footer>&copy; Copyright 2022 </footer>
    </main>
  );
}

export default App;
