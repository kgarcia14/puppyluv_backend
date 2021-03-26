CREATE TABLE user_profile (
id serial PRIMARY KEY,
first_name text NOT NULL,
last_name text NOT NULL,
age integer  NOT NULL,
gender text NOT NULL,
city text NOT NULL,
zipcode integer NOT NULL,
about_us text NOT NULL,
user_img VARCHAR(200),
pet_name VARCHAR(200) NOT NULL,
pet_breed VARCHAR(200) NOT NULL,
pet_age integer NOT NULL,
pet_personality VARCHAR(200),
pet_img VARCHAR (500) 
);

DROP TABLE user_profile;