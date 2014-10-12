var lastX=0, lastY=0, lastZ=0;

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
		var x = evt.acceleration.x; // X方向の加速度
		var y = evt.acceleration.y; // Y方向の加速度
		var z = evt.acceleration.z; // Z方向の加速度	
		
		var dX = x - lastX;
		var dY = y - lastY;
		var dZ = z - lastZ;
		
		lastX = xg;
		lastY = yg;
		lastZ = zg;
		
		// var transform = 'translate3d(' + (dX*100) + 'px, ' + (dY*100) + 'px, ' + (dZ*100) + 'px)';
		// $("#iframe").css('transform':transform);
		$("#iframe").css('transform':'translate3d(50px,20px,10px)');
	}
}