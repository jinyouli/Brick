"use strict";
cc._RF.push(module, '418dd4SDMdFq4QLDrVag/YV', 'BrickPaddle');
// src/brick/BrickPaddle.ts

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
exports.BrickPaddle = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickPaddle = /** @class */ (function (_super) {
    __extends(BrickPaddle, _super);
    function BrickPaddle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrickPaddle.prototype.onLoad = function () {
        var _this = this;
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            //将世界坐标转化为本地坐标
            var touchPoint = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            _this.node.x = touchPoint.x;
        });
    };
    BrickPaddle.prototype.init = function () {
        this.node.x = 360;
    };
    BrickPaddle = __decorate([
        ccclass
    ], BrickPaddle);
    return BrickPaddle;
}(cc.Component));
exports.BrickPaddle = BrickPaddle;

cc._RF.pop();