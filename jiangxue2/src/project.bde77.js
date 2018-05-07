require=function e(t,i,n){function o(s,c){if(!i[s]){if(!t[s]){var r="function"==typeof require&&require;if(!c&&r)return r(s,!0);if(a)return a(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var d=i[s]={exports:{}};t[s][0].call(d.exports,function(e){var i=t[s][1][e];return o(i||e)},d,d.exports,e,t,i,n)}return i[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({BtnAudio:[function(e,t,i){"use strict";cc._RF.push(t,"a3614yU+vxKs7QAM6gvc3/2","BtnAudio"),cc.Class({extends:cc.Component,properties:{Audio:{default:null,type:cc.AudioClip}},playMp3:function(){}}),cc._RF.pop()},{}],Config:[function(e,t,i){"use strict";cc._RF.push(t,"b35e46X56JFDLgpM8QxzYgM","Config"),Object.defineProperty(i,"__esModule",{value:!0}),i.default={"Fish-0":{score:50,speed:6},"Fish-1":{score:100,speed:5},"Fish-2":{score:200,speed:4},"Fish-3":{score:300,speed:3},"Fish-4":{score:400,speed:3},"Fish-5":{score:700,speed:1},Drill:{score:500,speed:6},Gem:{score:700,speed:6},"Stone-0":{score:10,speed:3},"Stone-1":{score:10,speed:3},"Stone-2":{score:10,speed:3},"Stone-3":{score:10,speed:3},"Shoes-0":{score:0,speed:3},"Shoes-1":{score:0,speed:3},"Bone-0":{score:10,speed:5},"Bone-1":{score:10,speed:5},"Bone-2":{score:50,speed:3},"Bone-3":{score:10,speed:5}},t.exports=i.default,cc._RF.pop()},{}],GameSellect:[function(e,t,i){"use strict";cc._RF.push(t,"3296fCI/1tKv6rw944mt7uV","GameSellect"),cc.Class({extends:cc.Component,properties:{Group:{type:cc.Node,default:[]},Clickaudio:{default:null,url:cc.AudioClip}},onLoad:function(){var e=cc.find("Canvas/BackGround/Button/BackmenuBtn"),t=cc.find("Canvas/BackGround/Button/LeftBtn"),i=cc.find("Canvas/BackGround/Button/RightBtn");this.State=0,this.GameSellectState=0,this.MenuBtn0=cc.find("Canvas/BackGround/MenuSprite/Group0/MenuBtn0"),this.MenuBtn1=cc.find("Canvas/BackGround/MenuSprite/Group1/MenuBtn1"),this.MenuBtn2=cc.find("Canvas/BackGround/MenuSprite/Group2/MenuBtn2"),this.MenuBtn3=cc.find("Canvas/BackGround/MenuSprite/Group3/MenuBtn3"),e.on(cc.Node.EventType.TOUCH_END,this.Backmenu.bind(this)),t.on(cc.Node.EventType.TOUCH_END,this.LeftBtnClicked.bind(this)),i.on(cc.Node.EventType.TOUCH_END,this.RightBtnClicked.bind(this)),this.MenuBtn0.on(cc.Node.EventType.TOUCH_END,this.MenuBtn0Clicked.bind(this)),this.MenuBtn1.on(cc.Node.EventType.TOUCH_END,this.MenuBtn1Clicked.bind(this)),this.MenuBtn2.on(cc.Node.EventType.TOUCH_END,this.MenuBtn2Clicked.bind(this)),this.MenuBtn3.on(cc.Node.EventType.TOUCH_END,this.MenuBtn3Clicked.bind(this)),this.LRBtninit(),cc.director.preloadScene("Game")},Backmenu:function(){cc.audioEngine.play(this.Clickaudio,!1),cc.director.loadScene("Index")},LeftBtnClicked:function(){cc.audioEngine.play(this.Clickaudio,!1),0==this.State?(this.State=3,this.Group[0].active=!1,this.Group[3].active=!0):(this.Group[this.State].active=!1,this.State--,this.Group[this.State].active=!0)},RightBtnClicked:function(){cc.audioEngine.play(this.Clickaudio,!1),3==this.State?(this.State=0,this.Group[3].active=!1,this.Group[0].active=!0):(this.Group[this.State].active=!1,this.State++,this.Group[this.State].active=!0)},LRBtninit:function(){this.Group[0].active=!0,this.Group[1].active=!1,this.Group[2].active=!1,this.Group[3].active=!1},MenuBtn0Clicked:function(){this.GameSellectState=0,this.StartGame()},MenuBtn1Clicked:function(){this.GameSellectState=1,this.StartGame()},MenuBtn2Clicked:function(){this.GameSellectState=2,this.StartGame()},MenuBtn3Clicked:function(){this.GameSellectState=3,this.StartGame()},StartGame:function(){cc.sys.localStorage.removeItem("level"),cc.sys.localStorage.setItem("GameSellectState",this.GameSellectState),cc.director.loadScene("Game")}}),cc._RF.pop()},{}],Hook:[function(e,t,i){"use strict";cc._RF.push(t,"896bfTFm6FIO5iNupN74M8c","Hook");var n=function(e){return e&&e.__esModule?e:{default:e}}(e("./Config"));cc.Class({extends:cc.Component,properties:{BoombAudio:{default:null,url:cc.AudioClip}},start:function(){this.init()},init:function(){this.Canvas=cc.find("Canvas"),this.Main=this.Canvas.getComponent("Main"),this.Prefab=this.Main.Prefab,this.Item=cc.find("Canvas/Header/Miner/Hook/item"),this.Hook=cc.find("Canvas/Header/Miner/Hook"),this.Boomb=cc.find("Canvas/Header/Miner/Hook/Left/Boomb"),this.onCollisionEnter=this.onCollisionEnterA},onCollisionEnterA:function(e,t){if(2!=this.Main.HookState)if(n.default[e.node.name]=n.default[e.node.name]||{},this.other=e,this.isWall=this.Wall(e),cc.log(n.default[e.node.name].name),this.isWall)this.Main.PullBackHook();else if(this.Main.SetSpeed(e),cc.audioEngine.play(this.Main.CollisionAudio),this.other.node.y=-(this.Main.Hook.height+2),this.other.node.x=-this.Main.Hook.width/2,e.node.parent=this.Item,e.node.anchorY=1,"Shoes-1"==n.default[this.other.node.name].name||"Shoes-0"==n.default[this.other.node.name].name){this.Main.RemoveItem(this.Hook.children[1].children);var i=cc.sequence(cc.scaleTo(.35,1,1),cc.scaleTo(.35,0,0));if(this.Boomb.runAction(i),cc.audioEngine.play(this.BoombAudio,!1),this.Main.HookState=3,this.Main.HookState=3){this.Hook.height=this.Hook.height;this.scheduleOnce(function(){this.Main.PullBackHook()},.7)}}else this.Main.PullBackHook()},MoveItemToHook:function(){this.isWall||(this.other.node.y=-(this.Main.Hook.height+2),this.other.node.x=-this.Main.Hook.width/2)},Wall:function(e){return"Wall"==e.node.group},update:function(e){this.other&&this.other.node&&2==this.Main.HookState&&this.MoveItemToHook()}}),cc._RF.pop()},{"./Config":"Config"}],IndexMain:[function(e,t,i){"use strict";cc._RF.push(t,"46088f+PFdImIKRq5WDOvy+","IndexMain"),cc.Class({extends:cc.Component,properties:{BGM:{default:null,url:cc.AudioClip},Clickaudio:{default:null,url:cc.AudioClip}},onLoad:function(){cc.director.setDisplayStats(!1),this.rotateSpeed=.5,this.FishRoll=cc.find("Canvas/FishRoll"),cc.find("Canvas/Start").on(cc.Node.EventType.TOUCH_END,this.StartGameSellect.bind(this)),this.BGM_ID=cc.audioEngine.play(this.BGM,!0),cc.director.preloadScene("GameSellect")},StartGameSellect:function(){cc.audioEngine.play(this.Clickaudio,!1),cc.audioEngine.stop(this.BGM_ID),cc.director.loadScene("GameSellect")},HookRoTate:function(){this.FishRoll.rotation>=35?this.rotateSpeed=-this.rotateSpeed:this.FishRoll.rotation<=-35&&(this.rotateSpeed=Math.abs(this.rotateSpeed)),this.FishRoll.rotation+=this.rotateSpeed},update:function(e){this.HookRoTate()}}),cc._RF.pop()},{}],Main:[function(e,t,i){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}cc._RF.push(t,"a7abbtxvtpLoq5yORxKD06b","Main");var o=function(e){return e&&e.__esModule?e:{default:e}}(e("./Config"));cc.Class({extends:cc.Component,properties:{speed:{default:3,displayName:"钩子速度"},rotateSpeed:{default:1,displayName:"钩子旋转速度"},HookRange:{default:70,displayName:"钩子旋转角度范围"},Prefabs:{default:[],type:cc.Prefab},InitTime:{default:10},CollisionAudio:{default:null,url:cc.AudioClip},AddScroeAudio:{default:null,url:cc.AudioClip},WinAudio:{default:null,url:cc.AudioClip},FailureAudio:{default:null,url:cc.AudioClip},BackGround:{default:[],type:cc.Node},TimeProgressBar:{default:null,type:cc.ProgressBar},BGM0:{default:null,url:cc.AudioClip},BGM1:{default:null,url:cc.AudioClip},BGM2:{default:null,url:cc.AudioClip},BGM3:{default:null,url:cc.AudioClip},Wordfont:{default:null,type:cc.Font},lable1:{default:null,type:cc.Label},lable2:{default:null,type:cc.Label}},onLoad:function(){this.init(),this.lable1.font=this.Wordfont,this.lable2.font=this.Wordfont,this.Score.font=this.Wordfont,this.TargetScore.font=this.Wordfont,this.Checkpoint.font=this.Wordfont,this.changelabel.font=this.Wordfont,this.AddScorelabel.font=this.Wordfont,cc.director.preloadScene("Index")},init:function(){var e=this;this.GameSellectState=cc.sys.localStorage.getItem("GameSellectState"),this.GameBackgroundInit(),this.TimeProgressBarInit(),this.Miner=cc.find("Canvas/Header/Miner"),this.Hook=cc.find("Canvas/Header/Miner/Hook"),this.HookHeight=this.Hook.height,this.HookState=0,this.Score=cc.find("Canvas/Header/Info/ScoreAndTarget/Score").getComponent(cc.Label),this.TargetScore=cc.find("Canvas/Header/Info/ScoreAndTarget/Target").getComponent(cc.Label),this.Checkpoint=cc.find("Canvas/Header/Info/CheckpointAndTime/Checkpoint").getComponent(cc.Label),this.changelabel=cc.find("Canvas/Mask/background/Pause").getComponent(cc.Label),this.AddScorelabel=cc.find("Canvas/Header/Info/AddScore").getComponent(cc.Label),this.AS=cc.find("Canvas/Header/Info/AddScore"),this.MinerAnimation=cc.find("Canvas/Header/Miner").getComponent(cc.Animation),this.itemArea=cc.find("Canvas/ItemArea"),this.manager=cc.director.getCollisionManager(),this.manager.enabled=!0,this.Prefab={},this.Prefabs.forEach(function(t){e.Prefab[t._name]=t});var t=cc.find("Canvas/emitHookBtn"),i=cc.find("Canvas/Mask/ReloadBtn"),n=cc.find("Canvas/Mask/MenuBtn"),o=cc.find("Canvas/Pause");this.Mask=cc.find("Canvas/Mask"),this.GameOverBtn=cc.find("Canvas/Mask/GameOverBtn"),this.Mask.on(cc.Node.EventType.TOUCH_END,this.CloseMask.bind(this)),this.GameOverBtn.on(cc.Node.EventType.TOUCH_END,this.Next.bind(this)),t.on(cc.Node.EventType.TOUCH_END,this.emitHookBtn.bind(this)),i.on(cc.Node.EventType.TOUCH_END,this.Reload.bind(this)),n.on(cc.Node.EventType.TOUCH_END,this.BackMenu.bind(this)),o.on(cc.Node.EventType.TOUCH_END,this.ShowMask.bind(this)),this.ResetInfo(),this.StartTime(),this.SetLevel(),this.CreateTargetScor(),this.CreateItem()},GameBackgroundInit:function(){var e=[this.BGM0,this.BGM1,this.BGM2,this.BGM3];this.BackGround[this.GameSellectState].active=!0,this.BGM_ID=cc.audioEngine.play(e[this.GameSellectState],!0,.5)},TimeProgressBarInit:function(){this.TimeProgressBar.progress=1,this.ProgressBarState=!0,this.TimeProgressBar.node.opacity=255},BackMenu:function(){cc.audioEngine.stopAll(),cc.game.resume(),cc.director.loadScene("GameSellect")},HookRoTate:function(){this.HookState||(this.Hook.rotation>=70?this.rotateSpeed=-this.rotateSpeed:this.Hook.rotation<=-70&&(this.rotateSpeed=Math.abs(this.rotateSpeed)),this.Hook.rotation+=this.rotateSpeed)},emitHookBtn:function(){this.HookState||(this.HookState=1)},emitHook:function(){switch(this.HookState){case 1:this.Hook.height+=this.speed;break;case 2:this.Hook.height<=this.HookHeight?(this.Hook.children[1].childrenCount&&this.Handle(this.Hook.children[1].children),this.StopHookMove()):this.Hook.height-=this.speed}},PullBackHook:function(){this.MinerAnimation.play("PullRope"),this.HookState=2},SetSpeed:function(e){o.default[e.node.name]=o.default[e.node.name]||{},this.speed=o.default[e.node.name].speed||3},ResetInfo:function(){this.victory=this.Score.string=this.Checkpoint.string=this.TargetScore.string=0},StartTime:function(){var e=this;this.TimeProgressBar.progress=1,this.timer=setInterval(function(){e.PauseState?e.TimeProgressBar.progress=e.TimeProgressBar.progress:(e.TimeProgressBar.progress=e.TimeProgressBar.progress-.001,e.TimeProgressBar.progress<=0&&(clearInterval(e.timer),e.GameOver()))},this.InitTime)},SetLevel:function(){cc.sys.localStorage.getItem("level")||cc.sys.localStorage.setItem("level",1),this.Checkpoint.string=""+cc.sys.localStorage.getItem("level")},CreateTargetScor:function(){var e=1e3+500*(cc.sys.localStorage.getItem("level")-1);this.TargetScore.string=e},CreateItem:function(){var e=this,t=(this.TargetScore.string,this.TargetScore.string,parseInt(20*Math.random()+10),this.sortItems());this.CreateCalc(t).forEach(function(t){var i=cc.instantiate(e.Prefab[t._name]),n=e.randomXY();i.parent=e.itemArea,i.setPosition(n)})},randomXY:function(){this.itemArea.y,this.itemArea.height;var e=(this.itemArea.width-30)/2*cc.randomMinus1To1(),t=(this.itemArea.height-30)/2*cc.randomMinus1To1();return cc.p(e,t)},sortItems:function(){var e=[];for(var t in o.default)o.default[t].name=t,e.push(o.default[t]);return e.sort(function(e,t){return e.score>t.score?1:-1}),e},CreateCalc:function(){var e=this,t=this.createRandm(2,4),i=this.createRandm(3,4),o=this.createRandm(2,4),a=this.createRandm(1,2),s=this.createRandm(1,2),c=this.createRandm(3,4),r=this.createRandm(1,2),h=this.createRandm(3,4),d=this.createRandm(2,3),l=[];[{name:"sh",num:t},{name:"st",num:i},{name:"g",num:o},{name:"f0",num:a},{name:"f1",num:s},{name:"f2",num:c},{name:"f3",num:r},{name:"f4",num:h},{name:"f5",num:d}].forEach(function(u){switch(u.name){case"sh":l=[].concat(n(l),n(e.CreateItemType("Shoes-",0,1,0,0,t)));break;case"st":l=[].concat(n(l),n(e.CreateItemType("Stone-",0,3,0,0,i)));break;case"g":l=[].concat(n(l),n(e.CreateItemType("Gem",0,0,0,0,o)));break;case"f0":l=[].concat(n(l),n(e.CreateItemType("Fish-",0,0,0,0,a)));break;case"f1":l=[].concat(n(l),n(e.CreateItemType("Fish-",1,1,0,0,s)));break;case"f2":l=[].concat(n(l),n(e.CreateItemType("Fish-",2,2,0,0,c)));break;case"f3":l=[].concat(n(l),n(e.CreateItemType("Fish-",3,3,0,0,r)));break;case"f4":l=[].concat(n(l),n(e.CreateItemType("Fish-",4,4,0,0,h)));break;case"f5":l=[].concat(n(l),n(e.CreateItemType("Fish-",5,5,0,0,d)))}});var u=cc.sys.localStorage.getItem("level")-1;return 9==u&&(l=[].concat(n(l),n(this.CreateItemType("Gem",0,0,0,0,u-5)))),l},CreateItemType:function(e,t,i,n,o,a){for(var s=[],c=0;c<a;c++){var r=this.createRandm(t,i),h=(this.createRandm(n,o),"");h="Gem"==e?e:e+r,s.push(this.Prefab[h])}return s},createRandm:function(e,t){var i=(t+=1)-e,n=Math.random()*i+e;return parseInt(n)},StopHookMove:function(){this.HookState=0,this.Hook.height=this.HookHeight,this.MinerAnimation.stop("PullRope"),this.speed=3},Handle:function(e){this.AddScore(e),this.RemoveItem(e)},RemoveItem:function(e){e.forEach(function(e){e.destroy()})},AddScore:function(e){if(e[0]){var t=o.default[e[0].name]||{};this.Score.string=parseInt(this.Score.string)+(t.score||0),this.AddScorelabel.string="+"+t.score;var i=cc.sequence(cc.scaleTo(.35,1,1),cc.scaleTo(.55,0,0));this.AS.runAction(i),cc.audioEngine.play(this.AddScroeAudio)}},_GamePauseAminationCallBack:function(){cc.game.pause(),this.PauseState=!0},ShowMask:function(){var e=cc.callFunc(this._GamePauseAminationCallBack,this),t=cc.sequence(cc.scaleTo(.55,1,1),e),i="",n="暂停";t.easing(cc.easeBounceOut(.3)),1==this.victory?(i="下一关",n="胜利",cc.audioEngine.play(this.WinAudio,!1)):2==this.victory?(i="退出",n="失败",cc.audioEngine.play(this.FailureAudio,!1)):(i="继续",n="暂停"),this.GameOverBtn.children[0].getComponent(cc.Label).string=i,this.changelabel.string=n,this.Mask.runAction(t)},CloseMask:function(){if(!this.victory){var e=cc.scaleTo(.2,0,0);cc.game.resume(),this.Mask.runAction(e),this.PauseState=!1}},Reload:function(){cc.audioEngine.stopAll(),cc.game.resume(),this.timer&&clearInterval(this.timer),cc.director.loadScene("Game")},Next:function(){switch(this.victory){case 0:this.CloseMask();break;case 1:var e=this.Checkpoint.string.match(/\d+/)[0];cc.sys.localStorage.setItem("level",parseInt(e)+1),this.Reload();break;case 2:this.ExitGame()}},ExitGame:function(){cc.game.resume(),cc.director.loadScene("Index")},GameOver:function(){var e=0;e=this.Score.string>=this.TargetScore.string?1:2,this.victory=e,this.ShowMask()},ProgressBarCtrl:function(){this.TimeProgressBar.progress<=.15&&(this.ProgressBarState?(this.TimeProgressBar.node.opacity=this.TimeProgressBar.node.opacity-8,this.TimeProgressBar.node.opacity<=50&&(this.ProgressBarState=!1)):(this.TimeProgressBar.node.opacity=this.TimeProgressBar.node.opacity+8,this.TimeProgressBar.node.opacity>=253&&(this.ProgressBarState=!0)))},update:function(e){this.emitHook(),this.HookRoTate(),this.ProgressBarCtrl()}}),cc._RF.pop()},{"./Config":"Config"}]},{},["BtnAudio","GameSellect","Config","Hook","Main","IndexMain"]);