CREATE DATABASE todo_pern;

CREATE TABLE Todos (
  id UUID DEFAULT uuid_generate_v4(),
  description VARCHAR(255)
)

INSERT INTO Todos (description) VALUES ('test descripton');