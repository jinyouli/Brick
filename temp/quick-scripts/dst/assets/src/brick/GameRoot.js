
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