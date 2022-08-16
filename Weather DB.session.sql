
-- @block
DROP TABLE IF EXISTS sales_records__101_t;
DROP TABLE IF EXISTS sales_records__100_t;
DROP TABLE IF EXISTS sales_records__10_t;

-- @block
DESCRIBE epa_daily_t;

-- @block
SELECT * FROM epa_daily_t WHERE Daily  like "%/2020" GROUP BY Daily ORDER BY Daily;

-- @block
SELECT Daily, avg(mean) FROM epa_daily_t WHERE Daily  like "%/2020" GROUP BY Daily ORDER BY Daily;

-- @block
SELECT
    avg(mean),
    STR_TO_DATE(Daily, '%d/%m/%Y') AS DAY,
    DATE_FORMAT(STR_TO_DATE(Daily, '%d/%m/%Y'), '%m/%Y') AS MONTH,
    DATE_FORMAT(STR_TO_DATE(Daily, '%d/%m/%Y'), '%Y') AS YEAR

FROM
    purpleair_daily_t
GROUP BY YEAR;

-- @block
SELECT avg(mean), STR_TO_DATE(Daily, '%d/%m/%Y') AS niceDate 
FROM epa_daily_t 
ORDER BY niceDate DESC 

-- @block
SELECT E.Daily, avg(E.mean), avg(P.mean)
FROM epa_daily_t AS E JOIN purpleair_daily_t AS P 
ON E.Daily = P.Daily
GROUP BY E.Daily;