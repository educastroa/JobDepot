const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const user_id = req.session.user_id;
    db.query(
      `SELECT
        sj.*,
        u.first_name as sender_first_name,
        u.last_name as sender_last_name
       FROM shared_jobs as sj
       INNER JOIN users as u
       ON sj.sender_id = u.id
       WHERE sj.receiver_id = $1;
      `,
      [user_id]
    )
      .then((data) => {
        const messages = data.rows;
        return res.status(200).send({ messages });
      })
      .catch((err) =>res.status(500).json({ error: err.message }));;
  });

  return router;
};
