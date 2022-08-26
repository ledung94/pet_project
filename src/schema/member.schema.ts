import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Account } from "../account/schema/account.schema";
import { Room } from "./room.schema";

export type MemberDocument = Member & Document;

@Schema()
export class Member {

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Account'}]})
    accounts: Account[];

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Room'})
    room: Room;

    @Prop({default: Date.now()})
    createdAt: Date;

    @Prop({default: Date.now()})
    updatedAt: Date;

    @Prop({default: Date.now()})
    deletedAt: Date;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
