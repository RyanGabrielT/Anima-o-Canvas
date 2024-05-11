var onLoad = function (event) {
    
    document.addEventListener('Escape', () => {
if (!run) {
    run = true;
}
else {
    run = false;
}
    });

    const body = document.querySelector('body');
    body.style.minHeight = '100vh';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';

    const canvas = document.createElement('canvas');
    canvas.height = '500';
    canvas.width = '500';
    canvas.style.border = '1px solid black';

    body.appendChild(canvas);

    if (canvas.getContext) {
        let reverse = false;
        let run = true;
        let uou = false;
        let x = 50;
        let y = 250;

        const context = canvas.getContext('2d');

        function draw() {
            if (!run) {
                return;
            }
            
            window.requestAnimationFrame(draw);

            context.save();
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(x, y, 50, 0, 2 * Math.PI);
            context.fillStyle = '#928938';
            context.fill();

            if (reverse) {
                x -= 10;
            }
            else {
                x += 10;
            }

            if (uou) {
                y -= 1;
            }
            else {
                y += 1;
            }

            if (y === 450) {
                uou = true;
            }
            else if (y === 50) {
                uou = false;
            }

            if (x === 450) {
                canvas.style.borderColor = 'blue';
                reverse = true;
            }
            else if (x === 50) {
                canvas.style.borderColor = 'green';
                reverse = false;
            }
            context.restore();
        }
        window.requestAnimationFrame(draw);
    }
}

window.addEventListener("load", onLoad);
