import { Product } from "./Product";
export class CategoryWithProducts{
    id?: number = 0;
    restaurantId: number = 0;
    categoryName: string = '';
    products: Product[] = [];
}