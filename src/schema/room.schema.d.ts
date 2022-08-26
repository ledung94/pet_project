import mongoose from "mongoose";
import { Account } from "../account/schema/account.schema";
export declare type RoomDocument = Room & Document;
export declare class Room {
    title: string;
    isPublic: boolean;
    creator: Account;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
export declare const RoomSchema: mongoose.Schema<Room, mongoose.Model<Room, any, any, any, any>, {}, {}, {}, {}, "type", Room>;
