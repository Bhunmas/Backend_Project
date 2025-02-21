import { Product } from "../entites/product";
import { IProductRepository } from "../ports/IProductResponsitory";

export class ProductService{
    constructor(private productResponsitory:IProductRepository){

    }

    addProduct(name:string,quantity:number):void{
        const product = new Product(name,quantity);
        console.log(product);
        this.productResponsitory.add(product);
    }
    
    getAllProducts(): Product[] {
        return this.productResponsitory.getAll();
    }
    getOrderById(id:number):Product{
        return this.productResponsitory.getOrderById(id);
    }
}