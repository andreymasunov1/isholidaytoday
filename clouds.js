const animatedObject = document.getElementById('animatedObject');

function moveObject() {
  const randomTop = Math.floor(Math.random() * window.innerHeight);
  const randomDuration = Math.floor(Math.random() * 5) + 5; // Random duration between 5 and 10 seconds

  animatedObject.style.transition = `left ${randomDuration}s linear`;
  animatedObject.style.left = window.innerWidth + 'px';
  animatedObject.style.top = randomTop + 'px';

  // Reset position to the left after the animation completes
  animatedObject.addEventListener('transitionend', function () {
    animatedObject.style.transition = 'none'; // Remove transition for instant position reset
    animatedObject.style.left = '-50px'; // Adjust based on the object width
    setTimeout(() => {
      moveObject(); // Start the next animation
    }, 0);
  });
}

moveObject();
  