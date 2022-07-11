DROP TABLE IF EXISTS saved_jobs CASCADE;

CREATE TABLE saved_jobs (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  salary INT NOT NULL,
  description VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  remote BOOLEAN,
  user_id INTEGER REFERENCES users(id)
)
