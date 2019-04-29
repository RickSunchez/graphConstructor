function getPoint() {
	var elem = event.target.getBoundingClientRect(),
		clickX = event.clientX - elem.left,
		clickY = event.clientY - elem.top,
		onMouse1 = event.button == 0 ? true : false;

	for (let p of points) {
		var X = p.get("x"),
			Y = p.get("y"),
			R = p.get("r"),
			area = Math.pow(clickX-X, 2) + Math.pow(clickY-Y, 2);
		if (area < R*R) {
			ACTIVE_POINT = p;
			if (onMouse1) {
				if (activeKey == 17 || activeKey == 18) {
					ACTIVE_ARROW.push(ACTIVE_POINT);

					if ((ACTIVE_ARROW.length >= 2) && (ACTIVE_ARROW[0] != ACTIVE_ARROW[1])) {
						var newArrow = new arrow(ACTIVE_ARROW[0], ACTIVE_ARROW[1]);

						for (let a of arrows) {
							if (a.get("start") == ACTIVE_ARROW[0] || a.get("start") == ACTIVE_ARROW[1]) 
								if (a.get("end") == ACTIVE_ARROW[0] || a.get("end") == ACTIVE_ARROW[1])
									return false;
						}
						
						if (activeKey == 18) newArrow.set("dir", true);

						arrows.add(newArrow);

						ACTIVE_ARROW.length = 0;
						
					} else if (ACTIVE_ARROW.length >= 2) {
						ACTIVE_ARROW.length = 0;
					}
					update();
					return false;
				} 

				timer = setTimeout(function(){
					onMove = true;
					clearTimeout(timer);
					}, 10)
				break;
			} else if (!delay) {
				delay = true;
				for (let a of arrows) {
					if ((a.get("start") == ACTIVE_POINT) || (a.get("end") == ACTIVE_POINT))
						arrows.delete(a);
				}
				points.delete(ACTIVE_POINT);
				update();

				timer = setTimeout(function(){
					delay = false;
					clearTimeout(timer);
					}, 300)
				break;
			}
		}
	}	

	update();
	return false;
}