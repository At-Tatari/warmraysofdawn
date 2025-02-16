document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('header').classList.toggle('active');
});

const colors = ['#0ff', '#f0f', '#ff0']; // Неоновые цвета
        const totalDots = 40; // Общее количество точек

        function createDot() {
            const dot = document.createElement('div');
            dot.className = 'dot';
            
            // Случайные параметры
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 3000 + 2000;
            
            // Начальная позиция
            dot.style.left = Math.random() * 100 + '%';
            dot.style.top = Math.random() * 100 + '%';
            
            // Стилизация
            dot.style.backgroundColor = color;
            dot.style.boxShadow = `0 0 ${size * 5}px ${color}`;
            dot.style.width = dot.style.height = size + 'px';

            // Анимация
            dot.animate([
                { opacity: 0.2, transform: 'scale(0.5)' },
                { opacity: 1, transform: 'scale(1.5)' },
                { opacity: 0.2, transform: 'scale(0.5)' }
            ], {
                duration: duration,
                iterations: Infinity
            });

            return dot;
        }

        // Создание точек
        for (let i = 0; i < totalDots; i++) {
            document.body.appendChild(createDot());
        }

        // Плавное перемещение точек
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth * 100;
            const y = e.clientY / window.innerHeight * 100;
            
            document.querySelectorAll('.dot').forEach(dot => {
                dot.animate([
                    { transform: `translate(${x/20}px, ${y/20}px)` }
                ], { duration: 5000, fill: 'forwards' });
            });
        });