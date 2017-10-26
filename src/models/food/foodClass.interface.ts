import { Food } from "./food.interface";
import { FoodSub } from "./foodSub.interface";

export interface FoodClass {
    foodclass: Food,
    foodseller: {type:String},
    count: {type:String},
    foodsub:[FoodSub]
}