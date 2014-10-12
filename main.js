var lastXG=0, lastYG=0, lastZG=0;

var main = {
	init:function() {
		window.addEventListener("devicemotion", this.devicemotion, true);
	},
    reload: function() {
        var url = document.getElementById("urlinput").value;
        var iframe = document.getElementById("iframe");
        iframe.contentDocument.location.href = url;
    },
    newiframe: function() {
    	$("#iframe").remove();
    	
    	var url = document.getElementById("urlinput").value;
    	$("#placeholder").append("<iframe id=\"iframe\"  src=\"" + url + "\"></iframe>");
    },
	devicemotion: function(evt) {
		var xg = evt.accelerationIncludingGravity.x; // X方向の傾き
		var yg = evt.accelerationIncludingGravity.y; // Y方向の傾き
		var zg = evt.accelerationIncludingGravity.z; // Z方向の傾き
		
		var dXG = xg - lastXG;
		var dYG = yg - lastYG;
		var dZG = zg - lastZG;
		
		lastXG = xg;
		lastYG = yg;
		lastZG = zg;
		
		var transform = "translate3d(" + (dXG*50) + "px, " + (dYG*50) + "px, " + (dZG*50) + "px)";
		$("#iframe").css("transform", transform);
	}
}