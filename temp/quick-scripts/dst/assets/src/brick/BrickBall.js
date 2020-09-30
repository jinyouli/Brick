
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