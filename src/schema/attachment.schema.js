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
exports.AttachmentSchema = exports.Attachment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const message_schema_1 = require("./message.schema");
let Attachment = class Attachment {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Attachment.prototype, "thumbUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Attachment.prototype, "fileUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Message' }),
    __metadata("design:type", message_schema_1.Message)
], Attachment.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Attachment.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Attachment.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Attachment.prototype, "deletedAt", void 0);
Attachment = __decorate([
    (0, mongoose_1.Schema)()
], Attachment);
exports.Attachment = Attachment;
exports.AttachmentSchema = mongoose_1.SchemaFactory.createForClass(Attachment);
//# sourceMappingURL=attachment.schema.js.map