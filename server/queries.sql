CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    role SMALLINT NOT NULL
);

CREATE TABLE refresh_sessions(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    refresh_token VARCHAR(400) NOT NULL,
    finger_print VARCHAR(32) NOT NULL
);

SELECT * FROM users;
SELECT * FROM refresh_sessions;