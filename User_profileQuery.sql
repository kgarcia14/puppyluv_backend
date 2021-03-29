CREATE TABLE user_profile (
id serial PRIMARY KEY,
first_name text,
last_name text,
age integer,
gender text,
city text,
zipcode integer,
about_us text,
user_img VARCHAR(200),
pet_name VARCHAR(200),
pet_breed VARCHAR(200),
pet_age integer,
pet_personality VARCHAR(200),
pet_img VARCHAR (500) 
);

DROP TABLE user_profile;