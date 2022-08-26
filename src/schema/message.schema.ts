import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Account } from "../account/schema/account.schema";
import { Room } from "./room.schema";

export type MessageDocument = Message & Document;

@Schema()
export class Message {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Account'})
    sender: Account;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Room'})
    room: Room;

    @Prop()
    content: string;

    @Prop({default: false})
    isRead: boolean;

    @Prop({enum: ['TEXT', 'FILE'], default: 'TEXT'})
    type: string;

    @Prop({default: Date.now()})
    createdAt: Date;

    @Prop({default: Date.now()})
    updatedAt: Date;

    @Prop({default: Date.now()})
    deletedAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
