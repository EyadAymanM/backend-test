//Write a query to retrieve products by category (e.g., "Electronics"),
//sorted by price in descending order. Limit the result to 5 products per page

db.products.find({category: ""}).sort({price: -1}).skip(n).limit(k);

//where n can be multiples of 5 like (0,5,10,15,....) where 

//Optimization we can create an index for price & category to make quereis filtered by price faster