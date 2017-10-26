import { User } from "../user/user.interface";
import { FoodSubTag } from "./foodSubTag.interface";
import { FoodTag } from "./foodTag.interface";
import { SellerFoodTag } from "./sellerFoodTag.interface";

export interface Food {
    f_name: string,
	f_title: string,
	f_page: string,
	f_price:  number,
	f_discount: string,
	f_count:  number,
	f_subtag: FoodSubTag,
	f_status: {
		provide: true,
        stop: false 
    }
	,
	f_belongFoodTag: FoodTag,
	f_belongSellerFoodTag: SellerFoodTag,
	f_belongUser: User
}