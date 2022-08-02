const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

module.exports = (db) => {
  router.post("/", (req, res) => {
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
      .then((data) => {
        res.status(200).send();
      })
      .catch((err) => console.log("error", err));
  });

  router.get("/view", (req, res) => {
    db.query(
      `
      SELECT *
      FROM resume
      ORDER BY id DESC
      LIMIT 1;

    `
    )
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => console.log("error: ", err));
  });

  return router;
};
