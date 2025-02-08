--Write a query to fetch products with a price between $50 and $200,
--ordered by price (ascending), with pagination (10 products per page)

SELECT * FROM products 
WHERE price BETWEEN 50 and 200 
ORDER BY price ASC LIMIT 10 OFFSET n --where n can be multiples of 10 (0,10,20,30,40,....)


--as for Optimization we can create an index for price to make quereis filtered by price faster
--& for caching after reasearch we can use redise to store frequently queried data