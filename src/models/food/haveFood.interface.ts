import { Food } from "./food.interface";
import { FoodClass } from "./foodClass.interface";
import { DeliveryList } from "../delivery/deliveryList.interface";

export interface HaveFood {
    food: Food,
    rejectmsg:string,
    applycash:string,
    foodclass: [FoodClass],
    totalprice:string,
    timeleft:string,
    metro:string,
    orderNum:string,
    metroinfo: string,
    messageinfo:string,
    seller: string,
    cashonly:number,
    usertel: string,
    time: string,
    deli_type:string,
    sellerId: string,
    sellerAvatar: string,
    foodtag: string,
    delivery_status: number,
    delivery_info:any,
    delivery_confirm: DeliveryList,
    status: {
      Ucurrent:string,
      Uforbidden:false,
      Uconfirm:false,
      Uwait:false,
      Upay:false,
      Udown:false,
      Ufinish:false}
    ,
    count: 1,
    userId: string,
    orderId: string
}