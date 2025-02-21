import { Router, Request, Response } from "express";
import { ProductService } from "../../core/services/ProductService";


export function createProductController(productService:ProductService) {
    const router = Router();

    router.post("/products", (req: Request, res: Response) => {
        productService.addProduct(req.body.name, req.body.quantity);
        res.status(201).send({ message: "Product added", name: req.body.name, quantity: req.body.quantity });
    });

    router.get("/products", (_req: Request, res: Response) => {
        res.status(200).send(productService.getAllProducts());
    });

    router.get(`/products/:id`, (_req: Request, res: Response) => {
        console.log(_req.params.id)
        res.status(200).send(productService.getOrderById(Number(_req.params.id)));
    });

    return router;

}