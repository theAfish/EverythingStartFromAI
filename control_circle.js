const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let circleX = 400;
let circleY = 300;
const circleRadius = 30;
const circleSpeed = 10;

document.addEventListener('keydown', (event) => {
	switch (event.code) {
		case 'KeyW':
			circleY -= circleSpeed;
			break;
		case 'KeyA':
			circleX -= circleSpeed;
			break;
		case 'KeyS':
			circleY += circleSpeed;
			break;
		case 'KeyD':
			circleX += circleSpeed;
			break;
	}
});

function wrapPosition(position, max) {
	// Wrap the position around the edges of the canvas
	if (position < 0) {
		position = max + position;
	}
	if (position > max) {
		position = position - max;
	}
	return position;
}

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Wrap the circle position around the edges of the canvas
	circleX = wrapPosition(circleX, canvas.width);
	circleY = wrapPosition(circleY, canvas.height);

	context.beginPath();
	context.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
	context.fillStyle = 'black';
	context.fill();
	
	requestAnimationFrame(draw);
}

draw();
