DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	userpass VARCHAR(50) NOT NULL,
	is_active BOOLEAN,
	created_at TIMESTAMP,
	updated_at TIMESTAMP
);

DROP TABLE IF EXISTS members;

CREATE TABLE members (
	id SERIAL PRIMARY KEY,
	code VARCHAR(50) NOT NULL,
	memberType VARCHAR(50) NOT NULL,
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	user_id INT
);

ALTER TABLE public.members
ADD CONSTRAINT fk_users_members FOREIGN KEY(user_id) REFERENCES  users(id) ON DELETE SET NULL ON UPDATE CASCADE;