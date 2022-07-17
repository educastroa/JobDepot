DROP TABLE IF EXISTS shared_jobs CASCADE;

CREATE TABLE shared_jobs (
  id SERIAL PRIMARY KEY NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  location VARCHAR(255) NOT NULL,
  job_url TEXT NOT NULL,
  employer VARCHAR(255) NOT NULL,
  receiver_id INTEGER REFERENCES users(id),
  sender_id INTEGER REFERENCES users(id)
)
