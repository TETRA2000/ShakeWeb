var lastXG=0, lastYG=0, lastZG=0;

var main = {
	init:function() {
		window.addEventListener("devicemotion", this.devicemotion, true);
	},
    reload: function() {
        var url = document.getElementById("urlinput").value;
        var iframe = document.getElementById("iframe");
        iframe.contentDocument.location.replace(url);
    },
	devicemotion: function(evt) {
		var x = evt.acceleration.x; // X方向の加速度
		var y = evt.acceleration.y; // Y方向の加速度
		var z = evt.acceleration.z; // Z方向の加速度
		var xg = evt.accelerationIncludingGravity.x; // X方向の傾き
		var yg = evt.accelerationIncludingGravity.y; // Y方向の傾き
		var zg = evt.accelerationIncludingGravity.z; // Z方向の傾き
		var a = evt.rotationRate.alpha; // Z方向の回転値
		var b = evt.rotationRate.beta; // X方向の回転値
		var g = evt.rotationRate.gamma; // Y方向の回転値
		var txt = "x:"+x+"y:"+y+"z:"+z+"";
		txt += "傾きx:"+xg+"傾きy:"+yg+"傾きz:"+zg+"";
		txt += "alpha(Z):"+a+"beta(X):"+b+"gamma(Y):"+g;		
		
		var dXG = xg - lastXG;
		var dYG = yg - lastYG;
		var dZG = zg - lastZG;
		
		lastXG = xg;
		lastYG = yg;
		lastZG = zg;
		
		txt = "\n" + dXG + ", " + dYG + ", " + dZG+"";
		
		document.getElementById("sensor").innerHTML = txt;
		
	}
}