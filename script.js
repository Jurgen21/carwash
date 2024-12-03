const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function openFullScreen(element) {
    const fullScreenModal = document.getElementById('fullScreenModal');
    const fullScreenImage = document.getElementById('fullScreenImage');
    const fullScreenVideo = document.getElementById('fullScreenVideo');
    const fullScreenVideoSource = document.getElementById('fullScreenVideoSource');
    
    // Check if the element is an image or a video
    if (element.tagName === 'IMG') {
        fullScreenImage.src = element.src;
        fullScreenImage.style.display = 'block';
        fullScreenVideo.style.display = 'none';
    } else if (element.tagName === 'VIDEO') {
        fullScreenVideoSource.src = element.querySelector('source').src;
        fullScreenVideo.load(); // Reload video with new source
        fullScreenVideo.style.display = 'block';
        fullScreenImage.style.display = 'none';
    }

    fullScreenModal.style.display = 'flex';
}

// Function to close the full-screen modal
function closeFullScreen() {
    const fullScreenModal = document.getElementById('fullScreenModal');
    fullScreenModal.style.display = 'none';
}