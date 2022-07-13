/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const queryString = `SELECT * FROM users WHERE email = $1;`;
    console.log(req.body);
    db.query(queryString, [email])
      .then((data) => {
        const user = data.rows[0];

        if (!user) {
          return res
            .status(400)
            .send({ message: "Username not found in database" });
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
          return res
            .status(400)
            .send({ message: "Password does not match username" });
        }

        req.session.user_id = user.id;
        console.log("test5", user.id);
        return res.status(200).send({ ...user });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/me", (req, res) => {
    const user_id = req.session.user_id;
    const queryString = `
    SELECT *
    FROM users
    WHERE id = $1;`;

    db.query(queryString, [user_id])
      .then((data) => {
        const user = data.rows[0];

        if (!user) {
          return res
            .status(400)
            .send({ message: "Username not found in database" });
        }

        return res.json({ ...user });
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  router.post("/logout", (req, res) => {
    req.session = null;
    res.send({ message: "Logged out!" });
  });

  router.post("/resume", (req, res) => {
    const full_name = req.body.full_name;
    const contact_information = req.body.contact_information;
    const skills = req.body.skills;
    const work_experience = req.body.work_experience;
    const education = req.body.education;
    const user_id = req.body.user;

    console.log("req.body here:", req.body);

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
