import { User } from "../user/user.interface";
import { LikeUser } from "./likeUser.interface";
import { SubComment } from "./subComment.interface";

export interface Comment {
    c_likecount: {type: Number,default:2},
	c_likeuser: [LikeUser],
	c_content: {type: String},
	c_userAvatar: {type:String},
	c_userName: {type:String},
	c_belongUser: {type: String},
	c_targetUser: User,
	c_subcomment:[SubComment]
}