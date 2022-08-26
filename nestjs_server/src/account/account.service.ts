import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from './schema/account.schema';

@Injectable()
export class AccountService {
    constructor(@InjectModel(Account.name) private AccountModel: Model<AccountDocument>){}

    async register(): Promise<Account> {
        const account = new this.AccountModel();
        return account.save();
    }
}
