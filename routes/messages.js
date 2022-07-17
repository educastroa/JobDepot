const express = require("express");
const router = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    const user_id = req.session.user_id;
    db.query(`SELECT * FROM shared_jobs WHERE receiver_id = $1;`, [user_id])
    .then((data) => {
      const messages = data.rows;
      res.json(messages)
    })
      .catch((err) =>res.status(500).json({ error: err.message }));;
  });

  return router;
};
