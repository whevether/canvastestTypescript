/**
 * Created by Administrator on 2016/9/22 0022.
 */
//jquery 定义文件
///<reference path="../typings/tsd.d.ts" />
//    加载时候绘制动画
var Loader;
(function (Loader) {
    var loader = (function () {
        function loader() {
            this.debug = false;
            //初始化对象
            this.ScreenSize = { 'width': 640, "height": 1050 };
            this.FrameSize = { "width": 800, "height": 1344 };
            this.imgUrl = "http://5t6y7u8i.oss-cn-hangzhou.aliyuncs.com/bath2016/homeimg/";
            this.preLoad = [{ "name": "loading", "type": "image", "url": this.imgUrl + "frame%20(11).jpg" }];
            this.pageLoad = [
                { "name": "frame1", "type": "image", "url": this.imgUrl + "frame%20(11).jpg" },
                { "name": "frame2", "type": "image", "url": this.imgUrl + "frame%20(12).jpg" },
                { "name": "frame3", "type": "image", "url": this.imgUrl + "frame%20(13).jpg" },
                { "name": "frame4", "type": "image", "url": this.imgUrl + "frame%20(14).jpg" },
                { "name": "frame5", "type": "image", "url": this.imgUrl + "frame%20(15).jpg" },
                { "name": "frame6", "type": "image", "url": this.imgUrl + "frame%20(16).jpg" },
                { "name": "frame7", "type": "image", "url": this.imgUrl + "frame%20(17).jpg" },
                { "name": "frame8", "type": "image", "url": this.imgUrl + "frame%20(18).jpg" },
                { "name": "frame9", "type": "image", "url": this.imgUrl + "frame%20(19).jpg" },
                { "name": "frame10", "type": "image", "url": this.imgUrl + "frame%20(20).jpg" },
                { "name": "frame11", "type": "image", "url": this.imgUrl + "frame%20(21).jpg" },
                { "name": "frame12", "type": "image", "url": this.imgUrl + "frame%20(22).jpg" },
                { "name": "frame13", "type": "image", "url": this.imgUrl + "frame%20(23).jpg" },
                { "name": "frame14", "type": "image", "url": this.imgUrl + "frame%20(24).jpg" },
                { "name": "frame15", "type": "image", "url": this.imgUrl + "frame%20(25).jpg" },
                { "name": "frame16", "type": "image", "url": this.imgUrl + "frame%20(26).jpg" },
                { "name": "frame17", "type": "image", "url": this.imgUrl + "frame%20(27).jpg" },
                { "name": "frame18", "type": "image", "url": this.imgUrl + "frame%20(28).jpg" },
                { "name": "frame19", "type": "image", "url": this.imgUrl + "frame%20(29).jpg" },
                { "name": "frame20", "type": "image", "url": this.imgUrl + "frame%20(30).jpg" },
                { "name": "frame21", "type": "image", "url": this.imgUrl + "frame%20(31).jpg" },
                { "name": "frame22", "type": "image", "url": this.imgUrl + "frame%20(32).jpg" },
                { "name": "frame23", "type": "image", "url": this.imgUrl + "frame%20(33).jpg" },
                { "name": "frame24", "type": "image", "url": this.imgUrl + "frame%20(34).jpg" },
                { "name": "frame25", "type": "image", "url": this.imgUrl + "frame%20(35).jpg" },
                { "name": "frame26", "type": "image", "url": this.imgUrl + "frame%20(36).jpg" },
                { "name": "frame27", "type": "image", "url": this.imgUrl + "frame%20(37).jpg" },
                { "name": "frame28", "type": "image", "url": this.imgUrl + "frame%20(38).jpg" },
                { "name": "frame29", "type": "image", "url": this.imgUrl + "frame%20(39).jpg" },
                { "name": "frame30", "type": "image", "url": this.imgUrl + "frame%20(40).jpg" },
                { "name": "frame31", "type": "image", "url": this.imgUrl + "frame%20(41).jpg" },
                { "name": "frame32", "type": "image", "url": this.imgUrl + "frame%20(42).jpg" },
                { "name": "frame33", "type": "image", "url": this.imgUrl + "frame%20(43).jpg" },
                { "name": "frame34", "type": "image", "url": this.imgUrl + "frame%20(44).jpg" },
                { "name": "frame35", "type": "image", "url": this.imgUrl + "frame%20(45).jpg" },
                { "name": "frame36", "type": "image", "url": this.imgUrl + "frame%20(46).jpg" },
                { "name": "frame37", "type": "image", "url": this.imgUrl + "frame%20(47).jpg" },
                { "name": "frame38", "type": "image", "url": this.imgUrl + "frame%20(48).jpg" },
                { "name": "frame39", "type": "image", "url": this.imgUrl + "frame%20(49).jpg" },
                { "name": "frame40", "type": "image", "url": this.imgUrl + "frame%20(50).jpg" },
                { "name": "frame41", "type": "image", "url": this.imgUrl + "frame%20(51).jpg" },
                { "name": "frame42", "type": "image", "url": this.imgUrl + "frame%20(52).jpg" },
                { "name": "frame43", "type": "image", "url": this.imgUrl + "frame%20(53).jpg" },
                { "name": "frame44", "type": "image", "url": this.imgUrl + "frame%20(54).jpg" },
                { "name": "frame45", "type": "image", "url": this.imgUrl + "frame%20(55).jpg" },
                { "name": "frame46", "type": "image", "url": this.imgUrl + "frame%20(56).jpg" },
                { "name": "frame47", "type": "image", "url": this.imgUrl + "frame%20(57).jpg" },
                { "name": "frame48", "type": "image", "url": this.imgUrl + "frame%20(58).jpg" },
                { "name": "frame49", "type": "image", "url": this.imgUrl + "frame%20(59).jpg" },
                { "name": "frame50", "type": "image", "url": this.imgUrl + "frame%20(60).jpg" },
                { "name": "frame51", "type": "image", "url": this.imgUrl + "frame%20(61).jpg" },
                { "name": "frame52", "type": "image", "url": this.imgUrl + "frame%20(62).jpg" },
                { "name": "frame53", "type": "image", "url": this.imgUrl + "frame%20(63).jpg" },
                { "name": "frame54", "type": "image", "url": this.imgUrl + "frame%20(64).jpg" },
                { "name": "frame55", "type": "image", "url": this.imgUrl + "frame%20(65).jpg" },
                { "name": "frame56", "type": "image", "url": this.imgUrl + "frame%20(66).jpg" },
                { "name": "frame57", "type": "image", "url": this.imgUrl + "frame%20(67).jpg" },
                { "name": "frame58", "type": "image", "url": this.imgUrl + "frame%20(68).jpg" },
                { "name": "frame59", "type": "image", "url": this.imgUrl + "frame%20(69).jpg" },
                { "name": "frame60", "type": "image", "url": this.imgUrl + "frame%20(70).jpg" }
            ];
            this.pageResource = {};
            this.loaderResource = 0;
            this.loaderProcess = 0;
            this.preLoader();
            this.pageLoader();
        }
        //第一在家时候的显示的效果
        loader.prototype.preLoader = function () {
            var _this = this;
            for (var i = 0; i < this.preLoad.length; ++i) {
                //判断对象类型是否为图像
                if (this.preLoad[i].type === "image") {
                    //创建一个image实例对象
                    this.pageResource[this.preLoad[i].name] = new Image();
                    this.pageResource[this.preLoad[i].name].src = this.preLoad[i].url;
                    //    载入后增加进度
                    this.pageResource[this.preLoad[i].name].onload = function () { return _this.loaderResource++; };
                }
            }
            //如果载入的图片大于初始的
            var loaderInterval = setInterval(function () {
                if (_this.loaderResource > _this.preLoad.length) {
                    clearInterval(loaderInterval);
                    $("#loader").show();
                    _this.preLoader();
                }
            }, 20);
        };
        //页面加载完后
        loader.prototype.pageLoader = function () {
            var _this = this;
            this.loaderResource = 0; //初始值
            for (var i = 0; i < this.pageLoad.length; i++) {
                this.pageResource[this.pageLoad[i].name] = new Image();
                this.pageResource[this.pageLoad[i].name].src = this.pageLoad[i].url;
                this.pageResource[this.pageLoad[i].name].onload = function () { return _this.loaderResource++; };
            }
            var loaderinit = setInterval(function () {
                if (_this.loaderProcess < Math.ceil(_this.loaderResource / _this.pageLoad.length * 100)) {
                    _this.loaderProcess++;
                }
                $(".process span").text(_this.loaderProcess + "%");
                $("#loader .shui").css({ marginBottom: _this.loaderProcess * 0.25 });
                if (_this.loaderProcess === 100) {
                    clearInterval(loaderinit);
                    $(".loading").fadeOut(500).css({ display: "none" });
                    $("#choose").fadeIn(500).css({ display: "block" });
                    _this.play();
                }
            }, 20);
        };
        //    绘制图片动画
        loader.prototype.play = function () {
            var _this = this;
            var moveCanvas;
            var ctx;
            var frame = 10; //开始帧数
            var interval;
            var choos = false;
            var playall = true;
            var width = window.innerWidth;
            var height = window.innerHeight;
            // console.log(width,height);
            moveCanvas = document.getElementById("ChooseCanvas");
            ctx = moveCanvas.getContext("2d");
            //    清理绘图区域
            ctx.clearRect(0, 0, width, height);
            //    绘制图像
            ctx.drawImage(this.pageResource[("frame" + frame)], 0, 0, width * 2.45, this.FrameSize.height, 0, 0, width, height);
            interval = setInterval(function () {
                if (choos) {
                    frame++;
                }
                else {
                    frame--;
                }
                if (frame > 69) {
                    frame = 68;
                    return choos = false;
                }
                if (frame < 1) {
                    frame = 1;
                    return choos = true;
                }
                ctx.drawImage(_this.pageResource[("frame" + frame)], 0, 0, width * 2.45, _this.FrameSize.height, 0, 0, width, height);
            }, 20);
        };
        return loader;
    }());
    Loader.loader = loader;
})(Loader || (Loader = {}));
$(document).ready(function () {
    var a = new Loader.loader();
});
//# sourceMappingURL=logding.js.map