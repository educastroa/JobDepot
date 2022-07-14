import axios from "axios";
import React, { useState, useEffect } from "react";
import ViewResumeCard from "./ViewResumeCard";

export default function ViewResume() {
  const [resumeID, setResumeID] = useState(null);

  useEffect(() => {
    axios
      //https://jsonplaceholder.typicode.com/posts
      .get("/api/users/view")
      .then((data) => {
        setResumeID(data)
      })
      .catch((err) => {
        console.log("Error here:", err);
      });
  }, []);


  return (
    <ViewResumeCard resumeID={resumeID} />
  )
}
