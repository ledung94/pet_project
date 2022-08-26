import mongoose from "mongoose";
import { Account } from "../account/schema/account.schema";
import { Room } from "./room.schema";
export declare type MemberDocument = Member & Document;
export declare class Member {
    accounts: Account[];
    room: Room;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
export declare const MemberSchema: mongoose.Schema<Member, mongoose.Model<Member, any, any, any, any>, {}, {}, {}, {}, "type", Member>;
