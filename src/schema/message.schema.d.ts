import mongoose from "mongoose";
import { Account } from "../account/schema/account.schema";
import { Room } from "./room.schema";
export declare type MessageDocument = Message & Document;
export declare class Message {
    sender: Account;
    room: Room;
    content: string;
    isRead: boolean;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
export declare const MessageSchema: mongoose.Schema<Message, mongoose.Model<Message, any, any, any, any>, {}, {}, {}, {}, "type", Message>;
