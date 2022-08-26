import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Account } from "../account/schema/account.schema";

export type RoomDocument = Room & Document;

@Schema()
export class Room {
    @Prop()
    title: string;

    @Prop({default: false})
    isPublic: boolean;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Account'})
    creator: Account;

    @Prop({default: Date.now()})
    createdAt: Date;

    @Prop({default: Date.now()})
    updatedAt: Date;

    @Prop({default: Date.now()})
    deletedAt: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
