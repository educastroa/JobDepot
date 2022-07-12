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
import SalarySearchBar from "./components/SalarySearchBar";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <section className="sidebar">
        <img className="sidebar--centered" />
      </section>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/search" element={<Searchbar />}></Route>
        <Route path="/resume" element={<ResumeBuilder />}></Route>
        <Route path="/salarysearch" element={<SalarySearchBar />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
