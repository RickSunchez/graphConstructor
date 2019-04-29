function arrow(startPoint, endPoint) {
	var width = 5,
		sp = startPoint,
		ep = endPoint,
		dir = false,

		ANGLE = 0.0,
		dirBase = {"x": 0.0, "y": 0.0},
		trL = {"x": 0.0, "y": 0.0},
		trR = {"x": 0.0, "y": 0.0},
		tmp = {"x": 0.0, "y": 0.0},
		trAngle = 60*Math.PI/180,
		trLen = 15;

	this.draw = () => {
		if (sp.get("y") > ep.get("y")) {
			ANGLE = Math.atan((ep.get("x")-sp.get("x"))/(sp.get("y")-ep.get("y")))
		} else {
			ANGLE = Math.atan((ep.get("x")-sp.get("x"))/(sp.get("y")-ep.get("y"))) + Math.PI;
		}

		ctx.beginPath();
			ctx.lineWidth=width;
			ctx.moveTo(sp.get("x"), sp.get("y"));
			if (dir) {
				var tmp = {
					"x": ep.get("x") - 3/2*ep.get("r")*Math.sin(ANGLE),
					"y": ep.get("y") + 3/2*ep.get("r")*Math.cos(ANGLE)
					}
				ctx.lineTo(tmp.x, tmp.y);
			} else {
				ctx.lineTo(ep.get("x"), ep.get("y"));
			}
			
			ctx.strokeStyle = "#270089";
			ctx.stroke();
		ctx.closePath();

		if (dir){
			dirBase.x = ep.get("x") - ep.get("r")*Math.sin(ANGLE);
			dirBase.y = ep.get("y") + ep.get("r")*Math.cos(ANGLE);
	
			trL.x = dirBase.x - Math.cos(ANGLE-trAngle) * trLen;
			trL.y = dirBase.y - Math.sin(ANGLE-trAngle) * trLen;
	
			trR.x = dirBase.x + Math.cos(ANGLE+trAngle) * trLen;
			trR.y = dirBase.y + Math.sin(ANGLE+trAngle) * trLen;
	
			ctx.beginPath();
				ctx.moveTo(dirBase.x, dirBase.y);
				ctx.lineTo(trL.x, trL.y);
				ctx.lineTo(trR.x, trR.y);
				ctx.lineTo(dirBase.x, dirBase.y);
				ctx.fillStyle = "#270089";
				ctx.fill();
			ctx.closePath();
		}
	}
	this.set = (param, value) => {
		switch (param) {
			case "start":
				sp = value;
				break;
			case "end":
				ep = value;
				break;
			case "dir":
				dir = value;
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
			case "dir":
				return dir;
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
			case "text":
				return text;
				break;
			default:
				console.log("Unexpected parametr name or value")
				break;
		}
	}
}