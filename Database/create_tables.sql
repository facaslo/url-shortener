DROP TABLE IF EXISTS url_maps;

CREATE TABLE url_maps(
  short_url VARCHAR(100) ,
  original_url VARCHAR(2000) PRIMARY KEY,
  map_date TIMESTAMP
);