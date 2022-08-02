const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /************************/
  /***** Shared Jobs  *****/
  /************************/
  /**
   * description: shares a job with a different user (receiver)
   */
  router.post("/shared", (req, res) => {
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
        return res.status(200).send();
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  /**
   * description: saves a job to the user's saved jobs
   */
  router.post("/saved", (req, res) => {
    const {
      employer_name,
      job_title,
      job_posted_at_datetime_utc,
      job_apply_link,
      job_description,
      unique_job_id,
      user,
      image
    } = req.body;

    db.query(
      `
          INSERT INTO saved_jobs
          (employer_name,
            job_title,
            job_posted_at_datetime_utc,
            job_apply_link,
            job_description,unique_job_id,
            user_id,
            image)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
        `,
      [
        employer_name,
        job_title,
        job_posted_at_datetime_utc,
        job_apply_link,
        job_description,
        unique_job_id,
        user,
        image
      ]
    )
    .then((data) => {
      return res.status(200).send();
    })
      .catch((err) => console.log("error", err));
  });

  /**
   * description: deletes a job from the user's saved jobs
   */
  router.post("/saved/delete/:jobid", (req, res) => {
    const jobid = req.params.jobid;
    db.query(
      `
          DELETE FROM saved_jobs
          WHERE id = $1;
        `,
      [jobid]
    )
    .then((data) => {
      return res.status(200).send();
    })
      .catch((err) => console.log("error", err));
  });

  router.post("/delete/:unique_job_id", (req, res) => {
    const unique_job_id = req.params.unique_job_id;
    db.query(
      `
          DELETE FROM saved_jobs
          WHERE unique_job_id = $1;
        `,
      [unique_job_id]
    )
      .then(() => {
        return res.status(200).send();
      })
      .catch((err) => console.log("error", err));
  });


  router.get("/saved", (req, res) => {
    const user_id = req.session.user_id;
    db.query(
      `
      SELECT *
      FROM saved_jobs
      WHERE user_id = $1
    `, [user_id]
    )
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => console.log("error: ", err));
  });

  return router;
};
