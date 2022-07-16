const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

module.exports = (db) => {
  router.post("/saved", (req, res) => {
    console.log("blooper res", res);
    const employer_name = req.body.employer_name;
    const job_title = req.body.job_title;
    const job_posted_at_datetime_utc = req.body.job_posted_at_datetime_utc;
    const job_apply_link = req.body.job_apply_link;
    const job_description = req.body.job_description;
    const unique_job_id = req.body.unique_job_id;
    const user_id = req.body.user;

    console.log("blooper req:", req.body);

    db.query(
      `
          INSERT INTO saved_jobs
          (employer_name,
            job_title,
            job_posted_at_datetime_utc,
            job_apply_link,
            job_description,unique_job_id,
            user_id)
          VALUES ($1, $2, $3, $4, $5, $6, $7);
        `,
      [
        employer_name,
        job_title,
        job_posted_at_datetime_utc,
        job_apply_link,
        job_description,
        unique_job_id,
        user_id,
      ]
    )
      .then((res) => {
        res.send(200);
      })
      .catch((err) => console.log("error", err));
  });

  router.post("/saved/delete/:jobid", (req, res) => {
    console.log("delete req params ploop:", req.params.jobid);
    const jobid = req.params.jobid;
    db.query(
      `
          DELETE FROM saved_jobs
          WHERE id = $1;
        `,
      [jobid]
    )
      .then(() => {
        console.log("delete complete");
      })
      .catch((err) => console.log("error", err));
  });

  router.post("/delete/:unique_job_id", (req, res) => {
    console.log("delete req params plinky:", req.params.unique_job_id);
    const unique_job_id = req.params.unique_job_id;
    db.query(
      `
          DELETE FROM saved_jobs
          WHERE unique_job_id = $1;
        `,
      [unique_job_id]
    )
      .then(() => {
        console.log("delete moo");
      })
      .catch((err) => console.log("error", err));
  });

  router.get("/saved", (req, res) => {
    db.query(
      `
      SELECT *
      FROM saved_jobs
    `
    )
      .then((data) => {
        console.log("result rows here3: ", data.rows);
        res.send(data.rows);
      })
      .catch((err) => console.log("error: ", err));
  });

  return router;
};
