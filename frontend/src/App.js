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
import AppContextProvider from './context';


function App() {
  return (

    <AppContextProvider>
      <main>
        <Header />

        <section className="sidebar">
          <Navbar />
          <img className="sidebar--centered" />
        </section>
        <div className="sidebar-searchbar">
          <Sidebar />
          <section className="w-100 p-4 d-flex justify-content-center pb-4">
          <LoginForm/>
          </section>
          {/* <div className="searchbar">
            <Searchbar />
          </div> */}
          {/* <ResumeBuilder />
          <div className="salary-searchbar">
            <SalarySearchBar />
          </div> */}
        </div>
        <Footer />
      </main>
    </AppContextProvider>
  );
}

export default App;
