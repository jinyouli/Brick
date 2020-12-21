// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Node)
    okButton: cc.Node = null;

    // @property(cc.Node)
    // celButton: cc.Node = null;

    _okCallback: any;
    //_celCallback: any;
    // LIFE-CYCLE CALLBACKS:
    fadeOutFinish: any;

    onLoad () {
        // 初始化透明度和尺寸
        this.node.setScale(2);
        this.node.opacity = 0;

        // 弹出动画，变成初始状态，即两倍大小，透明
        let actionFadeOut = cc.spawn(cc.fadeTo(0.3, 0), cc.scaleTo(0.3, 2.0));
        let self = this;
        // 弹出动画后回调 移除弹出层，对话框其实没有消失，只是变透明了，如果不移除，会屏蔽底层点击事件
        let finished = cc.callFunc(function(){
            self.node.removeFromParent(false);
        }, this);

        // 弹出动画接回调，干掉弹出层
        this.fadeOutFinish = cc.sequence(actionFadeOut,finished);

        // 给按钮注册点击事件
        this.okButton.on('click', this.onButtonClicked,this);
        //this.celButton.on('click', this.onButtonClicked,this);
    }

    onButtonClicked(event:cc.Event){
        // 确定按钮调用回调函数，取消按钮直接关闭对话框
        if(event.target.name == "alert_ok"){
            if(this._okCallback){
                this._okCallback();
            }
        }
        this.node.runAction(this.fadeOutFinish);
    }


    showAlert(text:string, callback, needCancel?){
        let scene = cc.director.getScene();
        this.node.parent = scene;
        // 弹进动画
        let actionFadeIn =cc.spawn(cc.fadeTo(0.3, 255), cc.scaleTo(0.3, 1.0));
        this.node.runAction(actionFadeIn);

        if(text != undefined){
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
        if(callback != undefined){
            this._okCallback = callback;
        }
    }
}
