import { HFood } from "../food/hFoodClass.interface";
import { DeliveryList } from "../delivery/deliveryList.interface";
import { User } from "../user/user.interface";

export interface HistoryOrder {
    h_name: {type: String},
	h_tag: {type:String},
	h_intro: {type:String},
	h_place: {type:String},
	h_foodclass: [HFood],
	h_delivery: DeliveryList,
	h_metro: {type:String},
	h_metroinfo: {type:String},
	h_messageinfo: {type:String},
	h_tel: {type:String},
	h_orderId: {type:String},
	h_price: {type:String},
	h_count: {type:String},
	h_seller:{type:String},
	h_sellerId:{type:String},
	h_user:{type:String},
	h_data: {type:String},
	h_status: {type:String},
	h_belongUser: User
}