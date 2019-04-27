function arrow() {
	var width = 5, startX = 0, startY = 0,
				   endX = 0,   endY = 0;
	this.draw() => {
		ctx.beginPath();
			ctx.lineWidth=width;
			ctx.moveTo(startX, startY);
			ctx.lineTo(endX, endY);
		ctx.closePath();
	}
	this.set = (param, value) => {
		switch (param) {
			case "x":
				x = parseInt(value);
				break;
			case "y":
				y = parseInt(value);
				break;
			default:
				console.log("Unexpected parametr name or value")
				break;
		}
	}
	
	this.get = (param) => {
		switch (param) {
			case "x":
				return x;
				break;
			case "y":
				return y;
				break;
			default:
				console.log("Unexpected parametr name or value")
				break;
		}
	}
}

function point() {
	var r = 20, x = r+5, y = r+5, text = "0";
	
	this.draw = () => {
		ctx.beginPath();
			ctx.arc(x,y,r,0,2*Math.PI,1);
			ctx.strokeStyle = "#270089";
			ctx.fillStyle   = "#e2f9ff";
			ctx.fill();
			ctx.stroke();
		ctx.closePath();
	}
	
	this.set = (param, value) => {
		switch (param) {
			case "x":
				x = parseInt(value);
				break;
			case "y":
				y = parseInt(value);
				break;
			case "text":
				text = value;
				break;
			default:
				console.log("Unexpected parametr name or value")
				break;
		}
	}
	
	this.get = (param) => {
		switch (param) {
			case "x":
				return x;
				break;
			case "y":
				return y;
				break;
			case "r":
				return r;
				break;
			default:
				console.log("Unexpected parametr name or value")
				break;
		}
	}
}