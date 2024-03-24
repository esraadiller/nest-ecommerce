import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductService } from "../services/product.service";

@ApiTags('products')
@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    async getTest(): Promise<string> {
        return 'test'
    }
}