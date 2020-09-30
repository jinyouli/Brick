
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2bfdC+iIVD5JQXhPinYIm1', 'BrickScene');
// src/brick/BrickScene.ts

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
exports.BrickScene = void 0;
var BrickBall_1 = require("./BrickBall");
var BrickPaddle_1 = require("./BrickPaddle");
var BrickLayout_1 = require("./BrickLayout");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickScene = /** @class */ (function (_super) {
    __extends(BrickScene, _super);
    function BrickScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameRoot = null;
        _this.ball = null;
        _this.paddle = null;
        _this.layout = null;
        _this.scoreLabel = null;
        _this.brickNum = 50;
        _this.score = 0;
        _this.physicsManager = null;
        return _this;
    }
    BrickScene.prototype.onLoad = function () {
        this.physicsManager = cc.director.getPhysicsManager();
        this.startGame();
    };
    //this.physicsManager.debugDrawFlags =0;
    // cc.PhysicsManager.DrawBits.e_aabbBit |
    // cc.PhysicsManager.DrawBits.e_pairBit |
    // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
    // cc.PhysicsManager.DrawBits.e_jointBit |
    // cc.PhysicsManager.DrawBits.e_shapeBit
    // ; 
    BrickScene.prototype.init = function () {
        this.score = 0;
        this.scoreLabel.string = "0";
        this.brickNum = 50;
        this.physicsManager.enabled = true;
        this.ball.init(this);
        this.paddle.init();
        this.layout.init(this.brickNum);
        // this.overPanel.init(this);
    };
    BrickScene.prototype.startGame = function () {
        this.init();
    };
    BrickScene.prototype.pauseGame = function () {
        this.physicsManager.enabled = false;
    };
    BrickScene.prototype.resumeGame = function () {
        this.physicsManager.enabled = true;
    };
    BrickScene.prototype.stopGame = function () {
        var _this = this;
        this.physicsManager.enabled = false;
        //console.log("测试");
        //this.startGame();
        this.gameRoot.showMaskMessage("游戏结束", {
            label: "再来一局",
            cb: function () {
                _this.startGame();
            },
            target: this
        });
    };
    BrickScene.prototype.addScore = function (score) {
        this.score += score;
    };
    BrickScene.prototype.minusBrick = function (n) {
        this.brickNum -= n;
    };
    BrickScene.prototype.onBallContactBrick = function (ballNode, brickNode) {
        brickNode.parent = null;
        this.addScore(1);
        this.minusBrick(1);
        this.scoreLabel.string = this.score + "";
        if (this.brickNum <= 0) {
            this.stopGame();
        }
    };
    BrickScene.prototype.onBallContactGround = function (ballNode, groundNode) {
        this.stopGame();
    };
    BrickScene.prototype.onBallContactPaddle = function (ballNode, paddleNode) {
    };
    BrickScene.prototype.onBallContactWall = function (ballNode, brickNode) {
    };
    BrickScene.prototype.onDestroy = function () {
        this.physicsManager.enabled = false;
    };
    __decorate([
        property(BrickBall_1.BrickBall)
    ], BrickScene.prototype, "ball", void 0);
    __decorate([
        property(BrickPaddle_1.BrickPaddle)
    ], BrickScene.prototype, "paddle", void 0);
    __decorate([
        property(BrickLayout_1.BrickLayout)
    ], BrickScene.prototype, "layout", void 0);
    __decorate([
        property(cc.Label)
    ], BrickScene.prototype, "scoreLabel", void 0);
    BrickScene = __decorate([
        ccclass
    ], BrickScene);
    return BrickScene;
}(cc.Component));
exports.BrickScene = BrickScene;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFJdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQVk7SUFBNUM7UUFBQSxxRUFzR0M7UUFwR1UsY0FBUSxHQUFhLElBQUksQ0FBQztRQUd6QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBRTNCLFlBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLG9CQUFjLEdBQXNCLElBQUksQ0FBQzs7SUF1RnJELENBQUM7SUFyRkcsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsd0NBQXdDO0lBQ3hDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMsaURBQWlEO0lBQ2pELDBDQUEwQztJQUMxQyx3Q0FBd0M7SUFDeEMsS0FBSztJQUVMLHlCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsNkJBQTZCO0lBRWpDLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFcEMsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQzVCO1lBQ0ksS0FBSyxFQUFFLE1BQU07WUFBRSxFQUFFLEVBQUU7Z0JBQ2YsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLENBQUM7WUFBRSxNQUFNLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVUsR0FBVixVQUFXLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsdUNBQWtCLEdBQWxCLFVBQW1CLFFBQVEsRUFBRSxTQUFTO1FBQ2xDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCx3Q0FBbUIsR0FBbkIsVUFBb0IsUUFBaUIsRUFBRSxVQUFtQjtRQUN0RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHdDQUFtQixHQUFuQixVQUFvQixRQUFpQixFQUFFLFVBQW1CO0lBRTFELENBQUM7SUFFRCxzQ0FBaUIsR0FBakIsVUFBa0IsUUFBaUIsRUFBRSxTQUFrQjtJQUV2RCxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBOUZEO1FBREMsUUFBUSxDQUFDLHFCQUFTLENBQUM7NENBQ1c7SUFFL0I7UUFEQyxRQUFRLENBQUMseUJBQVcsQ0FBQzs4Q0FDYTtJQUVuQztRQURDLFFBQVEsQ0FBQyx5QkFBVyxDQUFDOzhDQUNhO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ2lCO0lBWDNCLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FzR3RCO0lBQUQsaUJBQUM7Q0F0R0QsQUFzR0MsQ0F0RytCLEVBQUUsQ0FBQyxTQUFTLEdBc0czQztBQXRHWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyaWNrQmFsbCB9IGZyb20gXCIuL0JyaWNrQmFsbFwiO1xuaW1wb3J0IHsgQnJpY2tQYWRkbGUgfSBmcm9tIFwiLi9Ccmlja1BhZGRsZVwiO1xuaW1wb3J0IHsgQnJpY2tMYXlvdXQgfSBmcm9tIFwiLi9Ccmlja0xheW91dFwiO1xuLy8gaW1wb3J0IHsgRyB9IGZyb20gXCIuLi9HXCI7XG5pbXBvcnQgeyBHYW1lUm9vdCB9IGZyb20gXCIuL0dhbWVSb290XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQnJpY2tTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgZ2FtZVJvb3Q6IEdhbWVSb290ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShCcmlja0JhbGwpXG4gICAgcHJpdmF0ZSBiYWxsOiBCcmlja0JhbGwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShCcmlja1BhZGRsZSlcbiAgICBwcml2YXRlIHBhZGRsZTogQnJpY2tQYWRkbGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShCcmlja0xheW91dClcbiAgICBwcml2YXRlIGxheW91dDogQnJpY2tMYXlvdXQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBcbiAgICBwcml2YXRlIGJyaWNrTnVtOiBudW1iZXIgPSA1MDtcbiAgICBwcml2YXRlIHNjb3JlID0gMDtcbiAgICBwcml2YXRlIHBoeXNpY3NNYW5hZ2VyOiBjYy5QaHlzaWNzTWFuYWdlciA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIC8vdGhpcy5waHlzaWNzTWFuYWdlci5kZWJ1Z0RyYXdGbGFncyA9MDtcbiAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2FhYmJCaXQgfFxuICAgIC8vIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfcGFpckJpdCB8XG4gICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9jZW50ZXJPZk1hc3NCaXQgfFxuICAgIC8vIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfam9pbnRCaXQgfFxuICAgIC8vIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXRcbiAgICAvLyA7IFxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5icmlja051bSA9IDUwO1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJhbGwuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYWRkbGUuaW5pdCgpO1xuICAgICAgICB0aGlzLmxheW91dC5pbml0KHRoaXMuYnJpY2tOdW0pO1xuICAgICAgICAvLyB0aGlzLm92ZXJQYW5lbC5pbml0KHRoaXMpO1xuXG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBwYXVzZUdhbWUoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlc3VtZUdhbWUoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RvcEdhbWUoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIua1i+ivlVwiKTtcbiAgICAgICAgLy90aGlzLnN0YXJ0R2FtZSgpO1xuICAgICAgICB0aGlzLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIua4uOaIj+e7k+adn1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5YaN5p2l5LiA5bGAXCIsIGNiOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0YXJnZXQ6IHRoaXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRTY29yZShzY29yZSl7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gc2NvcmU7XG4gICAgfVxuXG4gICAgbWludXNCcmljayhuKXtcbiAgICAgICAgdGhpcy5icmlja051bSAtPSBuO1xuICAgIH1cblxuICAgIG9uQmFsbENvbnRhY3RCcmljayhiYWxsTm9kZSwgYnJpY2tOb2RlKSB7XG4gICAgICAgIGJyaWNrTm9kZS5wYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmFkZFNjb3JlKDEpO1xuICAgICAgICB0aGlzLm1pbnVzQnJpY2soMSk7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlICsgXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuYnJpY2tOdW0gPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CYWxsQ29udGFjdEdyb3VuZChiYWxsTm9kZTogY2MuTm9kZSwgZ3JvdW5kTm9kZTogY2MuTm9kZSkge1xuICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XG4gICAgfVxuXG4gICAgb25CYWxsQ29udGFjdFBhZGRsZShiYWxsTm9kZTogY2MuTm9kZSwgcGFkZGxlTm9kZTogY2MuTm9kZSkge1xuXG4gICAgfVxuXG4gICAgb25CYWxsQ29udGFjdFdhbGwoYmFsbE5vZGU6IGNjLk5vZGUsIGJyaWNrTm9kZTogY2MuTm9kZSkge1xuXG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cblxufVxuIl19