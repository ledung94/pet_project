import mongoose from "mongoose";
import { Message } from "./message.schema";
export declare type AttachmentDocument = Attachment & Document;
export declare class Attachment {
    thumbUrl: string;
    fileUrl: string;
    message: Message;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
export declare const AttachmentSchema: mongoose.Schema<Attachment, mongoose.Model<Attachment, any, any, any, any>, {}, {}, {}, {}, "type", Attachment>;
