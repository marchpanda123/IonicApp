import { Food } from "./food.interface";
import { FoodSub } from "./foodSub.interface";

export interface HFood {
    foodclass: Food,
    foodseller: string,
    count: string,
    foodsub:[FoodSub]
}