-- Legend: Replace semi-colon with @@ symbol to signify end of sql statement.--
-- Create the account table
CREATE TABLE account (
id SERIAL PRIMARY KEY,
display_name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL
);
@@

-- Create the park table
CREATE TABLE park (
id SERIAL PRIMARY KEY,
park_name VARCHAR(100) NOT NULL,
address VARCHAR(100) NOT NULL,
city VARCHAR(100) NOT NULL,
zipcode VARCHAR(10) NOT NULL,
latitude NUMERIC(10,7) NOT NULL,
longitude NUMERIC(10,7) NOT NULL
);
@@

-- Create the court table
CREATE TABLE court (
id SERIAL PRIMARY KEY,
lit_unlit boolean NOT NULL DEFAULT FALSE,
court_type VARCHAR(20),
fk_park_id BIGINT NOT NULL REFERENCES park(id)
);
@@


-- Create the checkin table
CREATE TABLE checkin (
fk_court_id BIGINT NOT NULL REFERENCES court(id),
fk_user_id BIGINT NOT NULL REFERENCES account(id),
checkin_time TIMESTAMPTZ NOT NULL,
CONSTRAINT uc_checkin UNIQUE(fk_court_id,fk_user_id,checkin_time)
);
@@


DROP TYPE IF EXISTS park_search_composite_type CASCADE;

CREATE TYPE park_search_composite_type AS 
(
id         INTEGER,
park_name  VARCHAR(100),
address    VARCHAR(100),
city       VARCHAR(100),
zipcode    VARCHAR(10),
distance   double precision,
latitude   NUMERIC(10,7),
longitude  NUMERIC(10,7)
);
@@



CREATE OR REPLACE FUNCTION calculate_distance(p_Latitude NUMERIC(10,7), p_Longitude NUMERIC(10,7), p_Proximity NUMERIC(10,7)) RETURNS SETOF park_search_composite_type
AS $$
DECLARE 
    v_Lat1 NUMERIC(10,7);
    v_Lat2 NUMERIC(10,7);
    v_Long1 NUMERIC(10,7);
    v_Long2 NUMERIC(10,7);  
BEGIN
	v_Lat1 = p_Latitude - (p_Proximity/69);
	v_Lat2 = p_Latitude + (p_Proximity/69);
	v_Long1 = p_Longitude  - (p_Proximity/abs(cos(radians(p_Latitude))*69));
	v_Long2 = p_Longitude  + (p_Proximity/abs(cos(radians(p_Latitude))*69));
   
    RETURN QUERY
        SELECT PARK.id, PARK.park_name,PARK.address,PARK.city,PARK.zipcode,         
        3956 * 2 * ASIN(SQRT(POWER(SIN((p_Latitude - PARK.latitude)*pi()/180/2),2)+COS(p_Latitude*pi()/180)*COS(PARK.latitude*pi()/180)*POWER(SIN((p_Longitude - PARK.longitude)*pi()/180/2),2)))
		AS distance, PARK.latitude, PARK.longitude 
		FROM park PARK
		--WHERE 
		--PARK.longitude between v_Long1 and v_Long2 AND PARK.latitude between v_Lat1 and v_Lat2 
        WHERE distance < p_Proximity ORDER BY distance;
END;
$$ LANGUAGE plpgsql;
@@