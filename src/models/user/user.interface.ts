import {Cart} from '../cart/cart.interface';
import { DeliveryArea } from '../delivery/deliveryArea.interface';
import { Info } from './info.interface';

export interface User {
    name:string;
    username:string;
    password:string;
    email:string;
    oauthfrom:string;
    oauthId:string;
    active: boolean;
    temporarytoken: string;
    resettoken : string;
    permission : string;
    deliveryarea : DeliveryArea;
    info: Info,
    cart: Cart
}