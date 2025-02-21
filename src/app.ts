import { createProductController } from "./adapters/controller/ProductController";
import { createCustomerController } from "./adapters/controller/CustomerController";

import { ProductService } from "./core/services/ProductService";
import { CustomerService } from "./core/services/CustomerService";

import { InMemoryProductRepository } from "./adapters/respositories/InMemoryProductRepository"; 
import { InMemoryCustomerRepository } from "./adapters/respositories/InMemoryCustomerRepository"; 
import express from "express";



const app = express();

app.use(express.json());
// ✅ สร้าง Repository และ Service
const productRepository = new InMemoryProductRepository();
const productService = new ProductService(productRepository);
const customerRepository = new InMemoryCustomerRepository();
const customerService = new CustomerService(customerRepository);

// ✅ เชื่อม Express กับ Controller

app.use("/products", createProductController(productService));
app.use("/customers", createCustomerController(customerService));

app.listen(3000,'0.0.0.0', () => console.log("Server running on port 3000"));