/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchJob from "./components/SearchJob";
import ResumeBuilder from "./components/ResumeBuilder";
import SalarySearch from "./components/SalarySearch";
import LoginForm from "./components/Login";
import ViewResume from "./components/ViewResume";
import SavedJob from "./components/SavedJobs";
import MessageList from "./components/MessageList";
import RegisterForm from "./components/Register";
import RequireAuth from "./components/RequireAuth";
import Weather from "./components/Weather";

import { getUser } from "./api";
import { useAppContext } from "./hooks";

function App() {
  const { setUser } = useAppContext();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getUser()
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => setChecked(true));
  }, []);

  return (
    <Fragment>
      {checked && (
        <div>
          <Weather />
          <Navbar />
          <main
            className="d-flex flex-column vh-100 overflow-auto"
            style={{ flex: 1 }}
          >
            <Routes>
              <Route
                index
                element={
                  <RequireAuth>
                    <Header />

                    <SearchJob />
                  </RequireAuth>
                }
              />
              <Route
                path="resumeBuild"
                element={
                  <RequireAuth>
                    <Header />
                    <div className="scrollbar scrollbar-primary  mt-5 mx-auto">
                      <ResumeBuilder />
                    </div>
                  </RequireAuth>
                }
              />
              <Route
                path="resumeView"
                element={
                  <RequireAuth>
                    <Header />

                    <div className="scrollbar scrollbar-primary  mt-5 mx-auto">
                      <ViewResume />
                    </div>
                  </RequireAuth>
                }
              />
              <Route
                path="salary"
                element={
                  <RequireAuth>
                    <Header />

                    <div>
                      <SalarySearch />
                    </div>
                  </RequireAuth>
                }
              />
              <Route
                path="saved"
                element={
                  <RequireAuth>
                    <Header />

                    <div className="scrollbar scrollbar-primary mx-auto">
                      <SavedJob />
                    </div>
                  </RequireAuth>
                }
              />
              <Route
                path="messages"
                element={
                  <RequireAuth>
                    <Header />
                    <div className="scrollbar scrollbar-primary mx-auto">
                      <MessageList />
                    </div>
                  </RequireAuth>
                }
              />
              <Route path="login" element={<LoginForm />} />
              <Route path="register" element={<RegisterForm />} />
              <Route
                path="*"
                element={
                  <RequireAuth>
                    <SearchJob />
                  </RequireAuth>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Fragment>
  );
}

export default App;
