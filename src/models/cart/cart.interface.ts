import { HaveFood } from "../food/haveFood.interface";

export interface Cart {
    price: string,
    adr: string,
    havefood:  [HaveFood]
}