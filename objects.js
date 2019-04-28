function arrow(startPoint, endPoint) {
	var width = 5,
		sp = startPoint,
		ep = endPoint;
	this.draw = () => {
		ctx.beginPath();
			ctx.lineWidth=width;
			ctx.moveTo(sp.get("x"), sp.get("y"));
			ctx.lineTo(ep.get("x"), ep.get("y"));
			ctx.stroke();
		ctx.closePath();
	}
	this.set = (param, value) => {
		switch (param) {
			case "start":
				sp = value;
				break;
			case "end":
				ep = value;
				break;
			default:
				console.log("Unexpected parametr name or value")
				break;
		}
	}
	
	this.get = (param) => {
		switch (param) {
			case "start":
				return sp;
				break;
			case "end":
				return ep;
				break;
			default:
				console.log("Unexpected parametr name or value")
				break;
		}
	}
}

function point() {
	var r = 20, x = r+5, y = r+5, text = "0", bg = "#e2f9ff";
	
	this.draw = () => {
		ctx.beginPath();
			ctx.lineWidth=1;
			ctx.arc(x,y,r,0,2*Math.PI,1);
			ctx.strokeStyle = "#270089";
			ctx.fillStyle   = bg;
			ctx.fill();
			ctx.stroke();
			ctx.font = "bold 28px Courier";
			text += "";
			ctx.fillStyle = "black";
			if (text.length == 1) {

				ctx.fillText(text, x-8, y+9);
			} else {
				ctx.fillText(text, x-16, y+9);
			}
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
			case "bg":
				if (value == "default") {
					bg = "#e2f9ff";
				} else {
					bg = value;
				}
				
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