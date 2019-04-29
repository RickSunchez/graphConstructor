function update() {
	ctx.clearRect(0,0,WIDTH,HEIGHT);
	arrowsList.innerText = "";

	for (let a of arrows) {
		a.draw();

		var splitChar = a.get("dir") ? " > " : " - ";

		var listItem   = document.createElement("div"),
			innerTxt   = document.createElement("span"),
			removeButt = document.createElement("div");
		listItem.className = "listItem";

		innerTxt.innerText = a.get("start").get("text") +
							 splitChar +
							 a.get("end").get("text");
		removeButt.innerText = "Remove";
		removeButt.className = "removeButt";

		listItem.appendChild(innerTxt);
		listItem.appendChild(removeButt);
		arrowsList.appendChild(listItem);

		removeButt.onclick = function () {
			arrows.delete(a);
			update();
		}
	}

	for (let p of points) {
		if (p.get("x")-p.get("r") <= 0) p.set("x", p.get("r"));
		if (p.get("x")+p.get("r") >= WIDTH) p.set("x", WIDTH-p.get("r"));
		if (p.get("y")-p.get("r") <= 0) p.set("y", p.get("r"));
		if (p.get("y")+p.get("r") >= HEIGHT) p.set("y", HEIGHT-p.get("r"));
		p.set("bg", "default");
		if (p == ACTIVE_POINT) {
			p.set("bg", "red");
		} 

		reNum();
		p.draw();
	}

	pointCounter.innerText = "Point count: " + points.size;
}

function reNum() {
	var k = 1;
	for (let p of points) {
		p.set("text", k);
		k++;
	}
}