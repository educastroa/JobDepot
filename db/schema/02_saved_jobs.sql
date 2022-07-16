DROP TABLE IF EXISTS saved_jobs CASCADE;

CREATE TABLE saved_jobs (
  id SERIAL PRIMARY KEY NOT NULL,
  employer_name VARCHAR(255) NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  job_posted_at_datetime_utc TIMESTAMP,
  job_apply_link VARCHAR(255) NOT NULL,
  job_description VARCHAR(10000) NOT NULL,
  unique_job_id VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id)
)
