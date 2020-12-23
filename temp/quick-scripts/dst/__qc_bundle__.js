
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/src/brick/Alert');
require('./assets/src/brick/BrickBall');
require('./assets/src/brick/BrickColor');
require('./assets/src/brick/BrickLayout');
require('./assets/src/brick/BrickPaddle');
require('./assets/src/brick/BrickScene');
require('./assets/src/brick/GameRoot');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickColor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0bcd63ri/9DnaVSqBkzkpxF', 'BrickColor');
// res/src/brick/BrickColor.ts

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
exports.BrickColor = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickColor = /** @class */ (function (_super) {
    __extends(BrickColor, _super);
    function BrickColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brickSprite = null;
        _this.picList = [];
        return _this;
    }
    BrickColor.prototype.start = function () {
        var n = Math.random() * this.picList.length | 0;
        this.brickSprite.spriteFrame = this.picList[n];
    };
    __decorate([
        property(cc.Sprite)
    ], BrickColor.prototype, "brickSprite", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], BrickColor.prototype, "picList", void 0);
    BrickColor = __decorate([
        ccclass
    ], BrickColor);
    return BrickColor;
}(cc.Component));
exports.BrickColor = BrickColor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzXFxzcmNcXGJyaWNrXFxCcmlja0NvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnQyw4QkFBWTtJQUE1QztRQUFBLHFFQVdDO1FBUkcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsYUFBTyxHQUFxQixFQUFFLENBQUM7O0lBTW5DLENBQUM7SUFKRywwQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFQRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOytDQUNJO0lBTHRCLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FXdEI7SUFBRCxpQkFBQztDQVhELEFBV0MsQ0FYK0IsRUFBRSxDQUFDLFNBQVMsR0FXM0M7QUFYWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEJyaWNrQ29sb3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBicmlja1Nwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwaWNMaXN0OiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCBuID0gTWF0aC5yYW5kb20oKSAqIHRoaXMucGljTGlzdC5sZW5ndGggfCAwO1xuICAgICAgICB0aGlzLmJyaWNrU3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5waWNMaXN0W25dO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickPaddle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tQYWRkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLCtCQUFZO0lBQTdDOztJQWFBLENBQUM7SUFYRyw0QkFBTSxHQUFOO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBMEI7WUFDekUsY0FBYztZQUNkLElBQUksVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQzVFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBWlEsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQWF2QjtJQUFELGtCQUFDO0NBYkQsQUFhQyxDQWJnQyxFQUFFLENBQUMsU0FBUyxHQWE1QztBQWJZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQnJpY2tQYWRkbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAgICAgICAgIC8v5bCG5LiW55WM5Z2Q5qCH6L2s5YyW5Li65pys5Zyw5Z2Q5qCHXG4gICAgICAgICAgICBsZXQgdG91Y2hQb2ludCA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRvdWNoUG9pbnQueDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLm5vZGUueCA9IDM2MDtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzXFxzcmNcXGJyaWNrXFxCcmlja0xheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBaUMsK0JBQVk7SUFBN0M7UUFBQSxxRUF1QkM7UUFwQlcsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFXLENBQUMsQ0FBQzs7SUFZakMsQ0FBQztJQVZHLDBCQUFJLEdBQUosVUFBSyxRQUFRO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3QixTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDeEg7SUFDTCxDQUFDO0lBbkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUNNO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ2tCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ1E7SUFYcEIsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQXVCdkI7SUFBRCxrQkFBQztDQXZCRCxBQXVCQyxDQXZCZ0MsRUFBRSxDQUFDLFNBQVMsR0F1QjVDO0FBdkJZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQnJpY2tMYXlvdXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHByaXZhdGUgcGFkZGluZzogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgcHJpdmF0ZSBzcGFjaW5nOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHByaXZhdGUgY29sTnVtOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBicmlja1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBwcml2YXRlIGJyaWNrTnVtOiBudW1iZXIgPSAwO1xuXG4gICAgaW5pdChicmlja051bSkge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5icmlja051bSA9IGJyaWNrTnVtO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnJpY2tOdW07IGkrKykge1xuICAgICAgICAgICAgbGV0IGJyaWNrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnJpY2tQcmVmYWIpO1xuICAgICAgICAgICAgYnJpY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgIGJyaWNrTm9kZS54ID0gdGhpcy5wYWRkaW5nICsgKGkgJSB0aGlzLmNvbE51bSkgKiAoYnJpY2tOb2RlLndpZHRoICsgdGhpcy5zcGFjaW5nKSArIGJyaWNrTm9kZS53aWR0aCAvIDI7XG4gICAgICAgICAgICBicmlja05vZGUueSA9IC10aGlzLnBhZGRpbmcgLSBNYXRoLmZsb29yKGkgLyB0aGlzLmNvbE51bSkgKiAoYnJpY2tOb2RlLmhlaWdodCArIHRoaXMuc3BhY2luZykgLSBicmlja05vZGUuaGVpZ2h0IC8gMjtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickBall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tCYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQTBCQztRQXhCVyxnQkFBVSxHQUFlLElBQUksQ0FBQzs7SUF3QjFDLENBQUM7SUF0Qkcsd0JBQUksR0FBSixVQUFLLFVBQXFCO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLE9BQU87UUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsT0FBTztJQUMzRSxDQUFDO0lBRUQsa0NBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixRQUFRLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDZixLQUFLLENBQUMsRUFBQyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFELE1BQU07WUFDVixLQUFLLENBQUMsRUFBQyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNELE1BQU07WUFDVixLQUFLLENBQUMsRUFBQyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNELE1BQU07WUFDVixLQUFLLENBQUMsRUFBQyxNQUFNO2dCQUNULElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELE1BQU07U0FDYjtJQUNMLENBQUM7SUF6QlEsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQTBCckI7SUFBRCxnQkFBQztDQTFCRCxBQTBCQyxDQTFCOEIsRUFBRSxDQUFDLFNBQVMsR0EwQjFDO0FBMUJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJpY2tTY2VuZSB9IGZyb20gXCIuL0JyaWNrU2NlbmVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQnJpY2tCYWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgYnJpY2tTY2VuZTogQnJpY2tTY2VuZSA9IG51bGw7XG5cbiAgICBpbml0KGJyaWNrU2NlbmU6QnJpY2tTY2VuZSkge1xuICAgICAgICB0aGlzLmJyaWNrU2NlbmUgPSBicmlja1NjZW5lO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygzNjAsMjcwLDApOy8v5Yid5aeL5YyW5L2N572uXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52Mig4MDAsODAwKTsvL+WIneWni+WMlumAn+W6plxuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XG4gICAgICAgIHN3aXRjaCAob3RoZXIudGFnKSB7XG4gICAgICAgICAgICBjYXNlIDE6Ly/nkIPnorDliLDnoJblnZdcbiAgICAgICAgICAgICAgICB0aGlzLmJyaWNrU2NlbmUub25CYWxsQ29udGFjdEJyaWNrKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6Ly/nkIPnorDliLDlnLDpnaJcbiAgICAgICAgICAgICAgICB0aGlzLmJyaWNrU2NlbmUub25CYWxsQ29udGFjdEdyb3VuZChzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOi8v55CD56Kw5Yiw5omY55uYXG4gICAgICAgICAgICAgICAgdGhpcy5icmlja1NjZW5lLm9uQmFsbENvbnRhY3RQYWRkbGUoc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDovL+eQg+eisOWIsOWimVxuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tTY2VuZS5vbkJhbGxDb250YWN0V2FsbChzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/GameRoot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c111o6Z29N2attSrGnB2S8', 'GameRoot');
// src/brick/GameRoot.ts

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
exports.GameRoot = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameRoot = /** @class */ (function (_super) {
    __extends(GameRoot, _super);
    function GameRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskPanel = null;
        _this.messageLabel = null;
        _this.messageBtn1 = null;
        _this.messageBtn2 = null;
        _this.tipPanel = null;
        _this.tipLabel = null;
        return _this;
    }
    GameRoot.prototype.showMaskMessage = function (message, btn1, btn2) {
        var _this = this;
        this.messageLabel.string = message;
        if (!this.maskPanel.active) {
            this.maskPanel.active = true;
        }
        if (btn1) {
            this.messageBtn1.active = true;
            this.messageBtn1.getComponent(cc.Label).string = btn1.label;
            this.messageBtn1.once(cc.Node.EventType.TOUCH_END, function () {
                _this.hideMaskMessage();
                if (btn1.cb) {
                    btn1.cb();
                }
            }, btn1.target);
        }
        else {
            this.messageBtn1.active = false;
        }
        if (btn2) {
            this.messageBtn2.active = true;
            this.messageBtn2.getComponent(cc.Label).string = btn2.label;
            this.messageBtn2.once(cc.Node.EventType.TOUCH_END, function () {
                _this.hideMaskMessage();
                if (btn2.cb) {
                    btn2.cb();
                }
            }, btn2.target);
        }
        else {
            this.messageBtn2.active = false;
        }
    };
    GameRoot.prototype.hideMaskMessage = function () {
        this.maskPanel.active = false;
    };
    GameRoot.prototype.showTip = function (tip) {
        this.tipLabel.string = tip;
        this.tipPanel.getComponent(cc.Animation).play();
    };
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "maskPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "messageBtn1", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "messageBtn2", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "tipPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "tipLabel", void 0);
    GameRoot = __decorate([
        ccclass
    ], GameRoot);
    return GameRoot;
}(cc.Component));
exports.GameRoot = GameRoot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcR2FtZVJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBcUIsRUFBRSxDQUFDLFVBQVUsRUFBakMsT0FBTyxhQUFBLEVBQUMsUUFBUSxjQUFpQixDQUFDO0FBR3pDO0lBQThCLDRCQUFZO0lBQTFDO1FBQUEscUVBdURDO1FBcERXLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFXLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDOztJQTBDckMsQ0FBQztJQXhDVSxrQ0FBZSxHQUF0QixVQUF1QixPQUFjLEVBQUMsSUFBNkMsRUFBQyxJQUE2QztRQUFqSSxpQkE2QkM7UUE1QkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ25DLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDaEM7UUFDRCxJQUFHLElBQUksRUFBRTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDO2dCQUM5QyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3ZCLElBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDUixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7aUJBQ2I7WUFDTCxDQUFDLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xCO2FBQUk7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDbkM7UUFDRCxJQUFHLElBQUksRUFBRTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDO2dCQUM5QyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3ZCLElBQUcsSUFBSSxDQUFDLEVBQUUsRUFBQztvQkFDUCxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7aUJBQ2I7WUFDTCxDQUFDLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xCO2FBQUk7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRU0sa0NBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVNLDBCQUFPLEdBQWQsVUFBZSxHQUFVO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQWxERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ21CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDYztJQWJ4QixRQUFRO1FBRHBCLE9BQU87T0FDSyxRQUFRLENBdURwQjtJQUFELGVBQUM7Q0F2REQsQUF1REMsQ0F2RDZCLEVBQUUsQ0FBQyxTQUFTLEdBdUR6QztBQXZEWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgR2FtZVJvb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBtYXNrUGFuZWw6Y2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbWVzc2FnZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBtZXNzYWdlQnRuMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBtZXNzYWdlQnRuMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSB0aXBQYW5lbDpjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSB0aXBMYWJlbDpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwdWJsaWMgc2hvd01hc2tNZXNzYWdlKG1lc3NhZ2U6c3RyaW5nLGJ0bjE/OntsYWJlbDpzdHJpbmcsY2I/OkZ1bmN0aW9uLHRhcmdldD86YW55fSxidG4yPzp7bGFiZWw6c3RyaW5nLGNiPzpGdW5jdGlvbix0YXJnZXQ/OmFueX0pIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWwuc3RyaW5nID0gbWVzc2FnZTtcbiAgICAgICAgaWYoIXRoaXMubWFza1BhbmVsLmFjdGl2ZSl7XG4gICAgICAgICAgICB0aGlzLm1hc2tQYW5lbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmKGJ0bjEpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJ0bjEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJ0bjEuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBidG4xLmxhYmVsO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQnRuMS5vbmNlKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1hc2tNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgaWYoYnRuMS5jYikge1xuICAgICAgICAgICAgICAgICAgICBidG4xLmNiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxidG4xLnRhcmdldCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQnRuMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZihidG4yKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCdG4yLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCdG4yLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYnRuMi5sYWJlbDtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJ0bjIub25jZShjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVNYXNrTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIGlmKGJ0bjIuY2Ipe1xuICAgICAgICAgICAgICAgICAgICBidG4yLmNiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxidG4yLnRhcmdldCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQnRuMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlTWFza01lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMubWFza1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93VGlwKHRpcDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aXBMYWJlbC5zdHJpbmcgPSB0aXA7XG4gICAgICAgIHRoaXMudGlwUGFuZWwuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgIH1cbiAgICBcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/Alert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3357LnvLZEn4E6bMG7Hgpo', 'Alert');
// src/brick/Alert.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.okButton = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // 初始化透明度和尺寸
        this.node.setScale(2);
        this.node.opacity = 0;
        // 弹出动画，变成初始状态，即两倍大小，透明
        var actionFadeOut = cc.spawn(cc.fadeTo(0.3, 0), cc.scaleTo(0.3, 2.0));
        var self = this;
        // 弹出动画后回调 移除弹出层，对话框其实没有消失，只是变透明了，如果不移除，会屏蔽底层点击事件
        var finished = cc.callFunc(function () {
            self.node.removeFromParent(false);
        }, this);
        // 弹出动画接回调，干掉弹出层
        this.fadeOutFinish = cc.sequence(actionFadeOut, finished);
        // 给按钮注册点击事件
        this.okButton.on('click', this.onButtonClicked, this);
        //this.celButton.on('click', this.onButtonClicked,this);
    };
    NewClass.prototype.onButtonClicked = function (event) {
        // 确定按钮调用回调函数，取消按钮直接关闭对话框
        if (event.target.name == "alert_ok") {
            if (this._okCallback) {
                this._okCallback();
            }
        }
        this.node.runAction(this.fadeOutFinish);
    };
    NewClass.prototype.showAlert = function (text, callback, needCancel) {
        var scene = cc.director.getScene();
        this.node.parent = scene;
        // 弹进动画
        var actionFadeIn = cc.spawn(cc.fadeTo(0.3, 255), cc.scaleTo(0.3, 1.0));
        this.node.runAction(actionFadeIn);
        if (text != undefined) {
            this.label.string = text;
        }
        // if(needCancel || needCancel == undefined){
        //     // 激活取消按钮
        //     //this.celButton.active = true;
        //     let wg = this.okButton.getComponent(cc.Widget);
        //     if(wg){
        //         // 需要重新设置一遍确定按钮
        //         wg.left = 50;
        //         // 确定按钮左对齐
        //         wg.isAlignLeft = true;
        //         // 手动刷新widget，立即生效
        //         wg.updateAlignment();
        //     }
        // }else{
        //     // 干掉取消按钮
        //     //this.celButton.active = false;
        //     // 确定按钮挂载了widget组件，所以直接改x坐标会在下一帧生效
        //     // 确定按钮居中，需要手动刷新widget
        //     let wg = this.okButton.getComponent(cc.Widget);
        //     if(wg){
        //         wg.isAlignHorizontalCenter = true;
        //         // 手动刷新widget，立即生效
        //         wg.updateAlignment();
        //     }
        // }
        // 传一个回调函数进来，用来处理点击确定按钮的逻辑
        if (callback != undefined) {
            this._okCallback = callback;
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "okButton", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQWxlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiwyRUFBMkU7QUFDM0UsZ0hBQWdIO0FBQ2hILG1CQUFtQjtBQUNuQixxRkFBcUY7QUFDckYsMEhBQTBIO0FBQzFILDhCQUE4QjtBQUM5QixxRkFBcUY7QUFDckYsMEhBQTBIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEgsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3RkM7UUF0RkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQVksSUFBSSxDQUFDOztJQW1GN0IsQ0FBQztJQXpFRyx5QkFBTSxHQUFOO1FBQ0ksWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUV0Qix1QkFBdUI7UUFDdkIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixpREFBaUQ7UUFDakQsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULGdCQUFnQjtRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpELFlBQVk7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCx3REFBd0Q7SUFDNUQsQ0FBQztJQUVELGtDQUFlLEdBQWYsVUFBZ0IsS0FBYztRQUMxQix5QkFBeUI7UUFDekIsSUFBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUM7WUFDL0IsSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFDO2dCQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEI7U0FDSjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBR0QsNEJBQVMsR0FBVCxVQUFVLElBQVcsRUFBRSxRQUFRLEVBQUUsVUFBVztRQUN4QyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixPQUFPO1FBQ1AsSUFBSSxZQUFZLEdBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWxDLElBQUcsSUFBSSxJQUFJLFNBQVMsRUFBQztZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFFRCw2Q0FBNkM7UUFDN0MsZ0JBQWdCO1FBQ2hCLHNDQUFzQztRQUN0QyxzREFBc0Q7UUFDdEQsY0FBYztRQUNkLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLGlDQUFpQztRQUNqQyw2QkFBNkI7UUFDN0IsZ0NBQWdDO1FBQ2hDLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLHVDQUF1QztRQUN2Qyx5Q0FBeUM7UUFDekMsNkJBQTZCO1FBQzdCLHNEQUFzRDtRQUN0RCxjQUFjO1FBQ2QsNkNBQTZDO1FBQzdDLDZCQUE2QjtRQUM3QixnQ0FBZ0M7UUFDaEMsUUFBUTtRQUNSLElBQUk7UUFFSiwwQkFBMEI7UUFDMUIsSUFBRyxRQUFRLElBQUksU0FBUyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQXJGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFMUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0Y1QjtJQUFELGVBQUM7Q0F4RkQsQUF3RkMsQ0F4RnFDLEVBQUUsQ0FBQyxTQUFTLEdBd0ZqRDtrQkF4Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL3d3dy5jb2Nvcy5jb20vZG9jcy9jcmVhdG9yL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL3R5cGVzY3JpcHQvaW5kZXguaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vd3d3LmNvY29zLmNvbS9kb2NzL2NyZWF0b3Ivc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzL2luZGV4Lmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vd3d3LmNvY29zLmNvbS9kb2NzL2NyZWF0b3Ivc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzL2luZGV4Lmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG9rQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGNlbEJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgX29rQ2FsbGJhY2s6IGFueTtcclxuICAgIC8vX2NlbENhbGxiYWNrOiBhbnk7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGZhZGVPdXRGaW5pc2g6IGFueTtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIOWIneWni+WMlumAj+aYjuW6puWSjOWwuuWvuFxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgyKTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIC8vIOW8ueWHuuWKqOeUu++8jOWPmOaIkOWIneWni+eKtuaAge+8jOWNs+S4pOWAjeWkp+Wwj++8jOmAj+aYjlxyXG4gICAgICAgIGxldCBhY3Rpb25GYWRlT3V0ID0gY2Muc3Bhd24oY2MuZmFkZVRvKDAuMywgMCksIGNjLnNjYWxlVG8oMC4zLCAyLjApKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8g5by55Ye65Yqo55S75ZCO5Zue6LCDIOenu+mZpOW8ueWHuuWxgu+8jOWvueivneahhuWFtuWunuayoeaciea2iOWkse+8jOWPquaYr+WPmOmAj+aYjuS6hu+8jOWmguaenOS4jeenu+mZpO+8jOS8muWxj+iUveW6leWxgueCueWHu+S6i+S7tlxyXG4gICAgICAgIGxldCBmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8g5by55Ye65Yqo55S75o6l5Zue6LCD77yM5bmy5o6J5by55Ye65bGCXHJcbiAgICAgICAgdGhpcy5mYWRlT3V0RmluaXNoID0gY2Muc2VxdWVuY2UoYWN0aW9uRmFkZU91dCxmaW5pc2hlZCk7XHJcblxyXG4gICAgICAgIC8vIOe7meaMiemSruazqOWGjOeCueWHu+S6i+S7tlxyXG4gICAgICAgIHRoaXMub2tCdXR0b24ub24oJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrZWQsdGhpcyk7XHJcbiAgICAgICAgLy90aGlzLmNlbEJ1dHRvbi5vbignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2tlZCx0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrZWQoZXZlbnQ6Y2MuRXZlbnQpe1xyXG4gICAgICAgIC8vIOehruWumuaMiemSruiwg+eUqOWbnuiwg+WHveaVsO+8jOWPlua2iOaMiemSruebtOaOpeWFs+mXreWvueivneahhlxyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5uYW1lID09IFwiYWxlcnRfb2tcIil7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX29rQ2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb2tDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5mYWRlT3V0RmluaXNoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvd0FsZXJ0KHRleHQ6c3RyaW5nLCBjYWxsYmFjaywgbmVlZENhbmNlbD8pe1xyXG4gICAgICAgIGxldCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHNjZW5lO1xyXG4gICAgICAgIC8vIOW8uei/m+WKqOeUu1xyXG4gICAgICAgIGxldCBhY3Rpb25GYWRlSW4gPWNjLnNwYXduKGNjLmZhZGVUbygwLjMsIDI1NSksIGNjLnNjYWxlVG8oMC4zLCAxLjApKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbkZhZGVJbik7XHJcblxyXG4gICAgICAgIGlmKHRleHQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYobmVlZENhbmNlbCB8fCBuZWVkQ2FuY2VsID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgLy8gICAgIC8vIOa/gOa0u+WPlua2iOaMiemSrlxyXG4gICAgICAgIC8vICAgICAvL3RoaXMuY2VsQnV0dG9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGxldCB3ZyA9IHRoaXMub2tCdXR0b24uZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgLy8gICAgIGlmKHdnKXtcclxuICAgICAgICAvLyAgICAgICAgIC8vIOmcgOimgemHjeaWsOiuvue9ruS4gOmBjeehruWumuaMiemSrlxyXG4gICAgICAgIC8vICAgICAgICAgd2cubGVmdCA9IDUwO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8g56Gu5a6a5oyJ6ZKu5bem5a+56b2QXHJcbiAgICAgICAgLy8gICAgICAgICB3Zy5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyDmiYvliqjliLfmlrB3aWRnZXTvvIznq4vljbPnlJ/mlYhcclxuICAgICAgICAvLyAgICAgICAgIHdnLnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIC8vIOW5suaOieWPlua2iOaMiemSrlxyXG4gICAgICAgIC8vICAgICAvL3RoaXMuY2VsQnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAvLyDnoa7lrprmjInpkq7mjILovb3kuoZ3aWRnZXTnu4Tku7bvvIzmiYDku6Xnm7TmjqXmlLl45Z2Q5qCH5Lya5Zyo5LiL5LiA5bin55Sf5pWIXHJcbiAgICAgICAgLy8gICAgIC8vIOehruWumuaMiemSruWxheS4re+8jOmcgOimgeaJi+WKqOWIt+aWsHdpZGdldFxyXG4gICAgICAgIC8vICAgICBsZXQgd2cgPSB0aGlzLm9rQnV0dG9uLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIC8vICAgICBpZih3Zyl7XHJcbiAgICAgICAgLy8gICAgICAgICB3Zy5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyDmiYvliqjliLfmlrB3aWRnZXTvvIznq4vljbPnlJ/mlYhcclxuICAgICAgICAvLyAgICAgICAgIHdnLnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOS8oOS4gOS4quWbnuiwg+WHveaVsOi/m+adpe+8jOeUqOadpeWkhOeQhueCueWHu+ehruWumuaMiemSrueahOmAu+i+kVxyXG4gICAgICAgIGlmKGNhbGxiYWNrICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX29rQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
