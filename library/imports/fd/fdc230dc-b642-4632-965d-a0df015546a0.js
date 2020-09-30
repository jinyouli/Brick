"use strict";
cc._RF.push(module, 'fdc23DctkJGMpZdoN8BVUag', 'BrickBall');
// src/brick/BrickBall.ts

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
exports.BrickBall = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickBall = /** @class */ (function (_super) {
    __extends(BrickBall, _super);
    function BrickBall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brickScene = null;
        return _this;
    }
    BrickBall.prototype.init = function (brickScene) {
        this.brickScene = brickScene;
        this.node.position = cc.v3(360, 270, 0); //初始化位置
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(800, 800); //初始化速度
    };
    BrickBall.prototype.onBeginContact = function (contact, self, other) {
        switch (other.tag) {
            case 1: //球碰到砖块
                this.brickScene.onBallContactBrick(self.node, other.node);
                break;
            case 2: //球碰到地面
                this.brickScene.onBallContactGround(self.node, other.node);
                break;
            case 3: //球碰到托盘
                this.brickScene.onBallContactPaddle(self.node, other.node);
                break;
            case 4: //球碰到墙
                this.brickScene.onBallContactWall(self.node, other.node);
                break;
        }
    };
    BrickBall = __decorate([
        ccclass
    ], BrickBall);
    return BrickBall;
}(cc.Component));
exports.BrickBall = BrickBall;

cc._RF.pop();