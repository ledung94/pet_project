import { Model } from 'mongoose';
import { Account, AccountDocument } from './schema/account.schema';
export declare class AccountService {
    private AccountModel;
    constructor(AccountModel: Model<AccountDocument>);
    register(): Promise<Account>;
}
