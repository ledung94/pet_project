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
exports.MemberSchema = exports.Member = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const room_schema_1 = require("./room.schema");
let Member = class Member {
};
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Account' }] }),
    __metadata("design:type", Array)
], Member.prototype, "accounts", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Room' }),
    __metadata("design:type", room_schema_1.Room)
], Member.prototype, "room", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Member.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Member.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Member.prototype, "deletedAt", void 0);
Member = __decorate([
    (0, mongoose_1.Schema)()
], Member);
exports.Member = Member;
exports.MemberSchema = mongoose_1.SchemaFactory.createForClass(Member);
//# sourceMappingURL=member.schema.js.map