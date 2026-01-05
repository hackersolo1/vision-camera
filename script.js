document.addEventListener('DOMContentLoaded', () => {
    const adcnBtn = document.querySelector('#adcn');
    const camera1Btn = document.querySelector('.camera-1');
    const infoWindow = document.querySelector('.info-window-pdg-blur');
    const h3Camera = document.querySelector('.camera-name');
    const cameraImg = document.querySelector('.infoWindowCameraImg');
    const cameraContainer = document.querySelector('.camera-container');
    const infoP = document.querySelector('.info-p');
    const modelCamera = document.querySelector('.md-3d');
    const closeBtn = document.querySelector('#close');


    camera1Btn.addEventListener('click', () => {
        h3Camera.innerText = 'Câmera Dome Hikvision 4K';
        infoP.innerText = 'Câmera de segurança profissional com resolução 4MP (2688x1520), visão noturna infravermelha até 30 metros e proteção IP67. Ideal para ambientes internos e externos.';
        cameraImg.src = 'dome_camera.jpg';
        modelCamera.setAttribute('camera-controls', '');
        modelCamera.setAttribute('auto-rotate', '');
        modelCamera.src = 'security_camera.glb';
        infoWindow.style.animation = 'show 0.3s ease-in-out forwards';
    });

    closeBtn.addEventListener('click', () => {
        infoWindow.style.animation = 'unshow 0.3s ease-in-out forwards';
        h3Camera.innerText = '';
        infoP.innerText = '';
        cameraImg.src = 'none';
        modelCamera.src = 'none';
        modelCamera.removeAttribute('camera-controls');
    });

})