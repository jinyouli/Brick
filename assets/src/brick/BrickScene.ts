import { BrickBall } from "./BrickBall";
import { BrickPaddle } from "./BrickPaddle";
import { BrickLayout } from "./BrickLayout";
// import { G } from "../G";
import { GameRoot } from "./GameRoot";

const { ccclass, property } = cc._decorator;

@ccclass
export class BrickScene extends cc.Component {

    public gameRoot: GameRoot = null;

    @property(BrickBall)
    private ball: BrickBall = null;
    @property(BrickPaddle)
    private paddle: BrickPaddle = null;
    @property(BrickLayout)
    private layout: BrickLayout = null;
    @property(cc.Label)
    private scoreLabel: cc.Label = null;

    alertDialog: cc.Node;
    @property(cc.Prefab)
    private alertPrefab: cc.Prefab = null;
    
    private brickNum: number = 50;
    private score = 0;
    private physicsManager: cc.PhysicsManager = null;

    onLoad() {

        this.alertDialog = cc.instantiate(this.alertPrefab);
 
        this.physicsManager = cc.director.getPhysicsManager();
        this.startGame();

        this.alertDialog.getComponent('Alert').showAlert('学会了吗？', function(){
            cc.log('点击确定按钮');
        }, true);
    }

    //this.physicsManager.debugDrawFlags =0;
    // cc.PhysicsManager.DrawBits.e_aabbBit |
    // cc.PhysicsManager.DrawBits.e_pairBit |
    // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
    // cc.PhysicsManager.DrawBits.e_jointBit |
    // cc.PhysicsManager.DrawBits.e_shapeBit
    // ; 

    init() {
        this.score = 0;
        this.scoreLabel.string = "0";
        this.brickNum = 50;
        this.physicsManager.enabled = true;
        this.ball.init(this);
        this.paddle.init();
        this.layout.init(this.brickNum);
        // this.overPanel.init(this);

    }

    startGame() {
        this.init();
    }

    pauseGame() {
        this.physicsManager.enabled = false;
    }

    resumeGame() {
        this.physicsManager.enabled = true;
    }

    stopGame() {
        this.physicsManager.enabled = false;
        
        //console.log("测试");
        //this.startGame();
        this.gameRoot.showMaskMessage("游戏结束",
                {
                    label: "再来一局", cb: () => {
                        this.startGame();
                    }, target: this
                });
    }

    addScore(score){
        this.score += score;
    }

    minusBrick(n){
        this.brickNum -= n;
    }

    onBallContactBrick(ballNode, brickNode) {
        brickNode.parent = null;
        this.addScore(1);
        this.minusBrick(1);
        this.scoreLabel.string = this.score + "";
        if (this.brickNum <= 0) {
            this.stopGame();
        }
    }

    onBallContactGround(ballNode: cc.Node, groundNode: cc.Node) {
        console.log("停止");
        //this.stopGame();
    }

    onBallContactPaddle(ballNode: cc.Node, paddleNode: cc.Node) {

    }

    onBallContactWall(ballNode: cc.Node, brickNode: cc.Node) {

    }

    onDestroy() {
        this.physicsManager.enabled = false;
    }


}
