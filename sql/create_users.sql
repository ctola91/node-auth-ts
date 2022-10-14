DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	userpass VARCHAR(50) NOT NULL,
	is_active BOOLEAN,
	created_at TIMESTAMP,
	updated_at TIMESTAMP
)