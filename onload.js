var ctx,
	canvas,
	pointCounter,
	arrowsList,
	HEIGHT = 300,
	WIDTH  = 400,
	ACTIVE_POINT,
	ACTIVE_ARROW = [],
	onMove = false,
	timer,
	points = new Set(),
	arrows = new Set(),
	delay = false,
	activeKey,
	mousePosX,
	mousePosY,
	k = 1;

window.onload = () => {
	canvas = document.getElementById("cnv");
	var main_container = document.getElementById("main_container"),
		point_counter  = document.getElementById("point_counter"),
		nav            = document.getElementsByTagName("nav")[0];

	canvas.width  = WIDTH;
	canvas.height = HEIGHT;
	canvas.onmousedown = getPoint;
	canvas.onmousemove = dragPoint;
	canvas.onmouseup   = dragReset;
	canvas.oncontextmenu = getPoint;
	canvas.ondblclick = addPoint;
	ctx = canvas.getContext("2d");

	main_container.style.width  = (WIDTH + 200) + "px";
	main_container.style.height = HEIGHT + "px";

	point_counter.style.width  = (WIDTH + 200 - 14) + "px";

	nav.style.height = HEIGHT + "px";

	pointCounter = document.getElementById("point_counter");
	arrowsList = document.getElementById("arrowsList");
}