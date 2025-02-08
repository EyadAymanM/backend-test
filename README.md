## Challenge 1: Build a RESTful API with Node.js, Express, Express Validator, and JWT Authentication

# Backend Developer Coding Test

A Node.js backend application built with Express.js, following a structured and modular approach for handling authentication, products, and middleware.

## 📂 Project Structure

```
backend-test/
├── node_modules/        # Installed dependencies
├── src/                 # Source code
│   ├── auth/            # Authentication module
│   │   ├── auth.controller.js  # Handles authentication logic
│   │   ├── auth.modle.js       # User MogoDB Schema
│   │   ├── auth.route.js       # Authentication routes
│   ├── middleware/      # Custom middleware
│   │   ├── authentication.js  # Middleware for User authentication
│   │   ├── authorization.js   # Middleware for User authorization
│   ├── product/         # Product module
│   │   ├── product.controller.js  # Handles Business logic for products
│   │   ├── product.model.js       # Product MogoDB Schema
│   │   ├── product.route.js       # Routes for product endpoints
│   ├── validators/          # Configuration files
│   │   ├── auth.validator.js      # express validator for Auth Data
│   │   ├── product.validator.js   # express validator for Product Data
│   ├── index.js           # Main Express application & Entry point for the server
├── .env                 # Environment variables
├── .gitignore           # Files to ignore in Git
├── package.json         # Dependencies and project metadata
├── README.md            # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or later)
- MongoDB (if using a database)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/EyadAymanM/backend-test.git
   cd backend-test
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Configuration
1. Create a `.env` file in the root directory and define the necessary environment variables:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/backend-test  # You can use Mongo Atlas for Cloud hosted Database
   JWT_SECRET=your_jwt_secret
   ```

### Running the Server
Start the development server:
```sh
npm start
```
Or use Nodemon for live reloading:
```sh
npm run dev
```

### API Endpoints
#### 🔑 Authentication
| Method | Endpoint        | Description       |
|--------|-----------------|-------------------|
| POST   | `/auth/login`   | User login        |
| POST   | `/auth/signup`  | User registration |

#### 📦 Products
| Method | Endpoint        | Description                             | Authentication |
|--------|---------------- |-----------------------------------------|----------------|
| GET    | `/products`     | Get all products                        |                |
| GET    | `/products/:id` | Get product by ID                       |                |
| POST   | `/products`     | Create a product                        | Required       |
| PUT    | `/products/:id` | Upadte the product with the provided ID | Required       |
| DELETE | `/products/:id` | Delete the product with the provided ID | Required       |

### 🛠 Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB & Mongoose** - Database and ORM
- **Express-Validator** - Middleware for validation
- **JWT (jsonwebtoken)** - Authentication
- **bcryptjs** - Hashing
- **Nodemon (devDependencies)** - Automatically restarting application when changes are detected

### 📌 Future Improvements
- Enhance error handling with centralized middleware

## 🤝 Contributing
Feel free to fork this repository and submit pull requests with improvements.


## Challenge 2: Database Query Optimizatio

### Objective
Write optimized SQL/NoSQL queries to retrieve product data efficiently.

Requirements
SQL Query: (Assuming PostgreSQL)

Write a query to fetch products with a price between $50 and $200, ordered by price (ascending), with pagination (10 products per page).
NoSQL Query: (Assuming MongoDB)

Write a query to retrieve products by category (e.g., "Electronics"), sorted by price in descending order. Limit the result to 5 products per page.
Optimization:

How would you optimize the queries for high traffic scenarios (e.g., indexing, caching)?

---
Made with ❤️ by Eyad Ayman