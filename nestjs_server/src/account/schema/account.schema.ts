import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AccountDocument = Account & Document;

@Schema()
export class Account {
    @Prop({required: true})
    name: string;

    @Prop({required: true, unique: true})
    mail: string;

    @Prop({default: false})
    isMailVerified: boolean;

    @Prop({default: true})
    isActive: boolean;

    @Prop({required: true})
    password: string;

    @Prop()
    birthdate: string;

    @Prop(type => Int16Array)
    genre: number;

    @Prop({enum: ['en', 'ja'] ,required: 'en'})
    lang: string;

    @Prop({default: Date.now()})
    createdAt: Date;

    @Prop({default: Date.now()})
    updatedAt: Date;

    @Prop({default: Date.now()})
    deletedAt: Date;
}

export const AccountSchema = SchemaFactory.createForClass(Account);