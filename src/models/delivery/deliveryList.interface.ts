import { User } from "../user/user.interface";

export interface DeliveryList {
    dl_name:  string,
	dl_data:  string,
	dl_belongUser: User
}