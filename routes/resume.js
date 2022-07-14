const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //api/resume
  router.get("/view", (req, res) => {
    db.query(
      `
      SELECT *
      FROM resume;
    `
    )
      .then((res) => {
        console.log("res rows here: ", res.rows);
        // res.send(res.rows);
      })
      .catch((err) => console.log("error: ", err));
    res.send(error);
  });

  router.post("/resume", (req, res) => {
    const full_name = req.body.full_name;
    const contact_information = req.body.contact_information;
    const skills = req.body.skills;
    const work_experience = req.body.work_experience;
    const education = req.body.education;
    const user_id = req.body.user;

    db.query(
      `
          INSERT INTO resume
          (full_name, contact_information, skills, work_experience, education, user_id)
          VALUES ($1, $2, $3, $4, $5, $6);
        `,
      [
        full_name,
        contact_information,
        skills,
        work_experience,
        education,
        user_id,
      ]
    )
      .then((res) => {
        res.send(200);
      })
      .catch((err) => console.log("error", err));
  });

  return router;
};
