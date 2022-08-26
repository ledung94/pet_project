import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Message } from "./message.schema";

export type AttachmentDocument = Attachment & Document;

@Schema()
export class Attachment {

    @Prop()
    thumbUrl: string;

    @Prop()
    fileUrl: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Message'})
    message: Message;

    @Prop({default: Date.now()})
    createdAt: Date;

    @Prop({default: Date.now()})
    updatedAt: Date;

    @Prop({default: Date.now()})
    deletedAt: Date;
}

export const AttachmentSchema = SchemaFactory.createForClass(Attachment);
