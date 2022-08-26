"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSchema = exports.Account = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Account = class Account {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Account.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Account.prototype, "mail", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Account.prototype, "isMailVerified", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Account.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Account.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Account.prototype, "birthdate", void 0);
__decorate([
    (0, mongoose_1.Prop)(type => Int16Array),
    __metadata("design:type", Number)
], Account.prototype, "genre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['en', 'ja'], required: 'en' }),
    __metadata("design:type", String)
], Account.prototype, "lang", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Account.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Account.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Account.prototype, "deletedAt", void 0);
Account = __decorate([
    (0, mongoose_1.Schema)()
], Account);
exports.Account = Account;
exports.AccountSchema = mongoose_1.SchemaFactory.createForClass(Account);
//# sourceMappingURL=account.schema.js.map