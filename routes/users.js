/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const bcrypt = require("bcryptjs");
const express = require('express');
const router  = express.Router();


module.exports = (db) => {


  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log('test',req.body);
    const queryString = `SELECT * FROM users WHERE email = $1;`;

    db.query(queryString, [email])
      .then((data) => {
        const user = data.rows[0];
        console.log(data.rows[0]);

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


        return res.status(200).send({ ...user });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });



  return router;
};

