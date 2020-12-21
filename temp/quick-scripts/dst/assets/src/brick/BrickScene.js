
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
        _this.alertPrefab = null;
        _this.brickNum = 50;
        _this.score = 0;
        _this.physicsManager = null;
        return _this;
    }
    BrickScene.prototype.onLoad = function () {
        this.alertDialog = cc.instantiate(this.alertPrefab);
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
        this.physicsManager.enabled = false;
        var self = this;
        this.alertDialog.getComponent('Alert').showAlert('游戏结束', function () {
            self.startGame();
        }, true);
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
        // console.log("停止");
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
    __decorate([
        property(cc.Prefab)
    ], BrickScene.prototype, "alertPrefab", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFJdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQVk7SUFBNUM7UUFBQSxxRUE0R0M7UUExR1UsY0FBUSxHQUFhLElBQUksQ0FBQztRQUd6QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBRTNCLFlBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBSTVCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLG9CQUFjLEdBQXNCLElBQUksQ0FBQzs7SUF5RnJELENBQUM7SUF2RkcsMkJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBR3JCLENBQUM7SUFFRCx3Q0FBd0M7SUFDeEMseUNBQXlDO0lBQ3pDLHlDQUF5QztJQUN6QyxpREFBaUQ7SUFDakQsMENBQTBDO0lBQzFDLHdDQUF3QztJQUN4QyxLQUFLO0lBRUwseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyw2QkFBNkI7SUFFakMsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCw2QkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsQ0FBQztRQUNSLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx1Q0FBa0IsR0FBbEIsVUFBbUIsUUFBUSxFQUFFLFNBQVM7UUFDbEMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUVELHdDQUFtQixHQUFuQixVQUFvQixRQUFpQixFQUFFLFVBQW1CO1FBQ3ZELHFCQUFxQjtRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHdDQUFtQixHQUFuQixVQUFvQixRQUFpQixFQUFFLFVBQW1CO0lBRTFELENBQUM7SUFFRCxzQ0FBaUIsR0FBakIsVUFBa0IsUUFBaUIsRUFBRSxTQUFrQjtJQUV2RCxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBcEdEO1FBREMsUUFBUSxDQUFDLHFCQUFTLENBQUM7NENBQ1c7SUFFL0I7UUFEQyxRQUFRLENBQUMseUJBQVcsQ0FBQzs4Q0FDYTtJQUVuQztRQURDLFFBQVEsQ0FBQyx5QkFBVyxDQUFDOzhDQUNhO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ2lCO0lBSXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ2tCO0lBZjdCLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0E0R3RCO0lBQUQsaUJBQUM7Q0E1R0QsQUE0R0MsQ0E1RytCLEVBQUUsQ0FBQyxTQUFTLEdBNEczQztBQTVHWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyaWNrQmFsbCB9IGZyb20gXCIuL0JyaWNrQmFsbFwiO1xuaW1wb3J0IHsgQnJpY2tQYWRkbGUgfSBmcm9tIFwiLi9Ccmlja1BhZGRsZVwiO1xuaW1wb3J0IHsgQnJpY2tMYXlvdXQgfSBmcm9tIFwiLi9Ccmlja0xheW91dFwiO1xuLy8gaW1wb3J0IHsgRyB9IGZyb20gXCIuLi9HXCI7XG5pbXBvcnQgeyBHYW1lUm9vdCB9IGZyb20gXCIuL0dhbWVSb290XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQnJpY2tTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgZ2FtZVJvb3Q6IEdhbWVSb290ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShCcmlja0JhbGwpXG4gICAgcHJpdmF0ZSBiYWxsOiBCcmlja0JhbGwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShCcmlja1BhZGRsZSlcbiAgICBwcml2YXRlIHBhZGRsZTogQnJpY2tQYWRkbGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShCcmlja0xheW91dClcbiAgICBwcml2YXRlIGxheW91dDogQnJpY2tMYXlvdXQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIGFsZXJ0RGlhbG9nOiBjYy5Ob2RlO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBhbGVydFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBcbiAgICBwcml2YXRlIGJyaWNrTnVtOiBudW1iZXIgPSA1MDtcbiAgICBwcml2YXRlIHNjb3JlID0gMDtcbiAgICBwcml2YXRlIHBoeXNpY3NNYW5hZ2VyOiBjYy5QaHlzaWNzTWFuYWdlciA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICAgICAgdGhpcy5hbGVydERpYWxvZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYWxlcnRQcmVmYWIpO1xuIFxuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICAvL3RoaXMucGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPTA7XG4gICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcbiAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3BhaXJCaXQgfFxuICAgIC8vIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfY2VudGVyT2ZNYXNzQml0IHxcbiAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcbiAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0XG4gICAgLy8gOyBcblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgIHRoaXMuYnJpY2tOdW0gPSA1MDtcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iYWxsLmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMucGFkZGxlLmluaXQoKTtcbiAgICAgICAgdGhpcy5sYXlvdXQuaW5pdCh0aGlzLmJyaWNrTnVtKTtcbiAgICAgICAgLy8gdGhpcy5vdmVyUGFuZWwuaW5pdCh0aGlzKTtcblxuICAgIH1cblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgcGF1c2VHYW1lKCkge1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN1bWVHYW1lKCkge1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0b3BHYW1lKCkge1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hbGVydERpYWxvZy5nZXRDb21wb25lbnQoJ0FsZXJ0Jykuc2hvd0FsZXJ0KCfmuLjmiI/nu5PmnZ8nLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi5zdGFydEdhbWUoKTtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgYWRkU2NvcmUoc2NvcmUpe1xuICAgICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xuICAgIH1cblxuICAgIG1pbnVzQnJpY2sobil7XG4gICAgICAgIHRoaXMuYnJpY2tOdW0gLT0gbjtcbiAgICB9XG5cbiAgICBvbkJhbGxDb250YWN0QnJpY2soYmFsbE5vZGUsIGJyaWNrTm9kZSkge1xuICAgICAgICBicmlja05vZGUucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZGRTY29yZSgxKTtcbiAgICAgICAgdGhpcy5taW51c0JyaWNrKDEpO1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gdGhpcy5zY29yZSArIFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmJyaWNrTnVtIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQmFsbENvbnRhY3RHcm91bmQoYmFsbE5vZGU6IGNjLk5vZGUsIGdyb3VuZE5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWBnOatolwiKTtcbiAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xuICAgIH1cblxuICAgIG9uQmFsbENvbnRhY3RQYWRkbGUoYmFsbE5vZGU6IGNjLk5vZGUsIHBhZGRsZU5vZGU6IGNjLk5vZGUpIHtcblxuICAgIH1cblxuICAgIG9uQmFsbENvbnRhY3RXYWxsKGJhbGxOb2RlOiBjYy5Ob2RlLCBicmlja05vZGU6IGNjLk5vZGUpIHtcblxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG5cbn1cbiJdfQ==