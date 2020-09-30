"use strict";
cc._RF.push(module, '40a3c7zaWJOratrugyfJzIS', 'BrickLayout');
// res/src/brick/BrickLayout.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickLayout = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickLayout = /** @class */ (function (_super) {
    __extends(BrickLayout, _super);
    function BrickLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.padding = 0;
        _this.spacing = 0;
        _this.colNum = 0;
        _this.brickPrefab = null;
        _this.brickNum = 0;
        return _this;
    }
    BrickLayout.prototype.init = function (brickNum) {
        this.node.removeAllChildren();
        this.brickNum = brickNum;
        for (var i = 0; i < this.brickNum; i++) {
            var brickNode = cc.instantiate(this.brickPrefab);
            brickNode.parent = this.node;
            brickNode.x = this.padding + (i % this.colNum) * (brickNode.width + this.spacing) + brickNode.width / 2;
            brickNode.y = -this.padding - Math.floor(i / this.colNum) * (brickNode.height + this.spacing) - brickNode.height / 2;
        }
    };
    __decorate([
        property(cc.Float)
    ], BrickLayout.prototype, "padding", void 0);
    __decorate([
        property(cc.Float)
    ], BrickLayout.prototype, "spacing", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickLayout.prototype, "colNum", void 0);
    __decorate([
        property(cc.Prefab)
    ], BrickLayout.prototype, "brickPrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickLayout.prototype, "brickNum", void 0);
    BrickLayout = __decorate([
        ccclass
    ], BrickLayout);
    return BrickLayout;
}(cc.Component));
exports.BrickLayout = BrickLayout;

cc._RF.pop();