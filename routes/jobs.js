const express = require("express");
const router = express.Router();


module.exports = (db) => {
  router.post("/", (req, res) => {
    const { job, sender, receiver } = req.body;
    db.query(
      `
          INSERT INTO shared_jobs
          (job_title, description, image, location, job_url, employer, receiver_id, sender_id)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
        `,
      [
        job.job_title,
        job.job_description,
        job.employer_logo,
        job.job_city,
        job.job_apply_link,
        job.employer_name,
        receiver,
        sender,

      ]
    )
    .then((data) => {

      return res.status(200).send()
    })
      .catch((err) =>res.status(500).json({ error: err.message }));;
  });

  return router;
};
