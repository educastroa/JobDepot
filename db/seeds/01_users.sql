-- Users table seeds here (Example)
ALTER TABLE users
ALTER COLUMN password
SET DEFAULT '$2a$12$g7.PYo/Qg0l7pNzodeP7QOT37uGnPZSw.asXfGDKX/h36SOnau/fO';

INSERT INTO users (first_name, email_address) VALUES ('Alice', 'alice@test.com');
INSERT INTO users (first_name, email_address) VALUES ('Kira', 'kira@test.com');


