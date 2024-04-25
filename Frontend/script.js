// script.js
document.addEventListener('mousemove', function(e) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate direction
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    // Calculate angle for a subtle effect
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    // Adjust scale based on mouse position for dynamic interaction
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const maxDistance = Math.sqrt((centerX ** 2) + (centerY ** 2));
    const scaleEffect = Math.min(distance / maxDistance, 0.1); // Limiting the effect

    // Apply transformations with subtle scale changes
    document.getElementById('layer1').style.transform = `translate(-50%, -50%) scale(${1 + scaleEffect})`;
    document.getElementById('layer2').style.transform = `translate(-50%, -50%) scale(${0.9 + scaleEffect / 2})`;
    document.getElementById('layer3').style.transform = `translate(-50%, -50%) scale(${0.8 + scaleEffect / 3})`;

    // Toggle visibility of the input container
    document.querySelector('.layer').addEventListener('click', function() {
        var container = document.getElementById('inputContainer');
        container.classList.toggle('hidden');
    });

    // Send button click animation and functionality
    document.getElementById('sendButton').addEventListener('click', function() {
        var inputData = document.getElementById('inputField').value;
        console.log(inputData); // Placeholder for sending data logic

        // Trigger animation
        this.classList.add('buttonClickAnimate');
        
        // Clear input field and remove animation class after animation completes
        document.getElementById('inputField').value = '';
        setTimeout(() => this.classList.remove('buttonClickAnimate'), 300);
    });

    
});

// script.js
function adjustShape() {
    const layer = document.querySelector('.layer'); // Assuming you have one main layer for simplicity
    const randomBorderRadius = () => `${Math.random() * 50 + 25}%`; // Generates a random border-radius value
    
    // Apply random border-radius for organic shape
    layer.style.borderRadius = `${randomBorderRadius()} ${randomBorderRadius()} ${randomBorderRadius()} ${randomBorderRadius()}`;
    
    // Optional: Apply a slight, random rotation
    layer1.style.borderRadius = `${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}%`;
}

// Adjust shape every 2 seconds for a dynamic effect
setInterval(adjustShape, 1100);

document.getElementById('sendButton').addEventListener('click', function() {
    var fakeMessage = document.getElementById('fakeMessage');
    var trueMessage = document.getElementById('trueMessage');

    // Make an API request
    fetch('YOUR_API_URL')
        .then(response => response.json())
        .then(data => {
            if (data === 0) {
                trueMessage.classList.remove('hidden');
                fakeMessage.classList.add('hidden');
            } else if (data === 1) {
                fakeMessage.classList.remove('hidden');
                trueMessage.classList.add('hidden');
            }
        })
        .catch(error => console.error('Error:', error));
});
