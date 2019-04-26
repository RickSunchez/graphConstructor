window.onload = () => {
	//createBody();

	var canvas         = document.getElementById("cnv"),
		main_container = document.getElementById("main_container"),
		point_counter  = document.getElementById("point_counter"),
		nav            = document.getElementsByTagName("nav")[0];

	canvas.width  = WIDTH;
	canvas.height = HEIGHT;
	canvas.onmousedown = getPoint;
	canvas.onmousemove = dragPoint;
	canvas.onmouseup   = dragReset;
	canvas.oncontextmenu = getPoint;
	ctx = canvas.getContext("2d");

	main_container.style.width  = (WIDTH + 200) + "px";
	main_container.style.height = HEIGHT + "px";

	point_counter.style.width  = (WIDTH + 200 - 15) + "px";

	nav.style.height = HEIGHT + "px";

	pointCounter = document.getElementById("point_counter");
}