
        var canvas = document.createElement('canvas'),
            context = canvas.getcontext('2d');
        var canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
        var particles = [];
        init();
        function init() {
            document.body.appendChild(canvas);
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            setInterval(loop, 1000 / 30);
        }
        function loop() {
            context.fillStyle = "rgba(0,0,0,1)";
            context.fillRect(0, 0, canvasWidth, canvasHeight);

            var particle = new Particle(canvasWidth * .5, canvasHeight * .5);
            particle.xVel = Math.random() * 4 - 2;
            particles.push(particle);
            for (i = 0; i <= particles.length; i++) {
                var particle = particles[i];
                particle.render(context);
                particle.update();
            }
            if (particles.length > 1000) {
                particles.shift();
            }
        }
        function Particle(xPos, yPos) {
            this.xPos = xPos;
            this.yPos = yPos;

            this.yVel = -5;
            this.xVel = 0;

            this.gravity = 0.1;
            this.render = function (c) {
                c.fillStyle = "rgba(255,255,255, .5)";
                c.beginPath();
                c.arc(this.xPos, this.yPos, 5, 0, Math.PI * 2, true)
            }
            this.update = function () {
                this.yVel += this.gravity;
                this.yPos += this.yVel;
                this.xPos += this.xVel;
            }
        }
