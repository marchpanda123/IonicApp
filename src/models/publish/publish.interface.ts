import { Food } from "../food/food.interface";
import { User } from "../user/user.interface";

export interface Publish {
    p_title: string,
	p_content: string,
	p_page: string,
	p_price: string,
	p_discount: string,
	p_belongFood: Food,
	p_belongUser: User
}