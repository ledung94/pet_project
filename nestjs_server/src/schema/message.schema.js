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
exports.MessageSchema = exports.Message = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const account_schema_1 = require("../account/schema/account.schema");
const room_schema_1 = require("./room.schema");
let Message = class Message {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Account' }),
    __metadata("design:type", account_schema_1.Account)
], Message.prototype, "sender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Room' }),
    __metadata("design:type", room_schema_1.Room)
], Message.prototype, "room", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Message.prototype, "isRead", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['TEXT', 'FILE'], default: 'TEXT' }),
    __metadata("design:type", String)
], Message.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Message.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Message.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Message.prototype, "deletedAt", void 0);
Message = __decorate([
    (0, mongoose_1.Schema)()
], Message);
exports.Message = Message;
exports.MessageSchema = mongoose_1.SchemaFactory.createForClass(Message);
//# sourceMappingURL=message.schema.js.map