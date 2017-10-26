import { DeliveryTime } from "./deliveryTime.interface";
import { User } from "../user/user.interface";

export interface Delivery {
    d_name: string,
	d_belongUser: User,
	d_data: DeliveryTime
}