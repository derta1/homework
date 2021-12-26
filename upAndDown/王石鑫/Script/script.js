(function() {
    //封装插件
    var count = 1;
    var timer1;

    function Rim(sliderItemClassName, sliderClassName, rightCtrlClassName, leftCtrlClassName) {
        this.sliderItems = document.getElementsByClassName(sliderItemClassName);
        this.slider = document.getElementsByClassName(sliderClassName)[0];
        this.rightCtrl = document.querySelector('.' + rightCtrlClassName);
        this.leftCtrl = document.querySelector('.' + leftCtrlClassName);
        this.step = 542;
    }
    Rim.prototype.rightAnimation = function(target) {
        var that = this;
        clearInterval(this.slider.timer);
        this.slider.timer = setInterval(function() {
            if (that.slider.offsetLeft <= target) {
                clearInterval(that.slider.timer);
            } else {
                //这里必须设置1
                that.slider.style.left = (that.slider.offsetLeft - 1) + 'px';
            }

        }, 3);
    };
    Rim.prototype.leftAnimation = function(target) {
        var that = this;
        clearInterval(timer1);
        clearInterval(this.slider.timer);
        this.slider.timer = setInterval(function() {
            if (that.slider.offsetLeft >= target) {
                clearInterval(that.slider.timer);
            } else {
                //这里必须设置1
                that.slider.style.left = (that.slider.offsetLeft + 1) + 'px';
            }

        }, 3);
    };
    Rim.prototype.bindEvent = function() {
        var that = this;
        this.rightCtrl.addEventListener('click', function() {
            clearInterval(timer1);
            if (count <= 2) {
                count = count + 1;
                //这个动画函数是一个异步的操作
                //需要等待异步操作完成再进行判断
                that.rightAnimation(-count * that.step);
                that.autoAnimate();
            }
            setTimeout(function() {
                if (count === 3) {
                    that.slider.style.left = 0;
                    count = 0;
                    clearInterval(that.slider.timer);
                }
            }, that.step * 3 + 500);
        });
        this.leftCtrl.addEventListener('click', function() {
            clearInterval(timer1);
            if (count >= 1) {
                count--;
                that.leftAnimation((-count) * that.step);
                that.autoAnimate();
            }
            setTimeout(function() {
                if (count === 0) {
                    that.slider.style.left = -3 * that.step + 'px';
                    count = 3;
                    clearInterval(that.slider.timer);
                }
            }, that.step * 3 + 500);
        });
    };

    Rim.prototype.autoAnimate = function() {
        var that = this;
        timer1 = setInterval(function() {
            if (count <= 2) {
                count = count + 1;
                that.rightAnimation(-count * that.step);
            }
            setTimeout(function() {
                if (count === 3) {
                    that.slider.style.left = 0;
                    count = 0;
                    clearInterval(that.slider.timer);
                }
            }, that.step * 3 + 1000);
        }, 5000)
    }
    window.Rim = Rim;

})();









//请求并渲染数据，默认数据是一定会拿到的
(function() {
    function loadInfo(sliderItemClassName, sliderClassName) {
        axios.get('http://101.43.53.16:8080/text')
            .then((res) => {
                var sliderItems = document.getElementsByClassName(sliderItemClassName);
                var data = JSON.parse(res.request.responseText);
                var persionList = data.persionList;
                var slider = document.getElementsByClassName(sliderClassName)[0];


                for (var i = 0; i < sliderItems.length; i++) {
                    var oImg = sliderItems[i].getElementsByClassName('pic')[0];
                    var oTitle = sliderItems[i].getElementsByTagName('h3')[0];
                    var oDesc = sliderItems[i].getElementsByTagName('p')[0];
                    oImg.src = persionList[i].imgPath;
                    oTitle.innerHTML = persionList[i].text1;
                    oDesc.innerHTML = persionList[i].text2;
                }

                var item0 = sliderItems[0].cloneNode(true);
                var item1 = sliderItems[2].cloneNode(true);
                slider.appendChild(item0, null);
                slider.insertBefore(item1, sliderItems[0]);
                var rim = new Rim('slider-item', 'sliders', 'right-errow', 'left-errow')
                rim.bindEvent();
                rim.autoAnimate();
            })
    }
    window.loadInfo = loadInfo;
})();