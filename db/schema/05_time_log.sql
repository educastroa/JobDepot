DROP TABLE IF EXISTS time_log CASCADE;

CREATE TABLE time_log (
  id SERIAL PRIMARY KEY NOT NULL,
  requestor INTEGER REFERENCES users(id) NOT NULL,
  shared_job_request TIMESTAMP NOT NULL
);