import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import ResumeBuilder from "./components/ResumeBuilder";

function App() {
  return (
    <main>
      <Header />

      <section className="sidebar">
        <Navbar />
        <img className="sidebar--centered" />
      </section>
      <div className="sidebar-searchbar">
        <Sidebar />
        <div className="searchbar">
          <Searchbar />
        </div>
        {/* <ResumeBuilder /> */}
      </div>
      <Footer />
    </main>
  );
}

export default App;
