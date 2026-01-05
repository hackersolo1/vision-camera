document.addEventListener('DOMContentLoaded', () => {
    const adcnBtn = document.querySelector('#adcn');
    const camera1Btn = document.querySelector('.camera-1');
    const camera2Btn = document.querySelector('.camera-2');
    const camera3Btn = document.querySelector('.camera-3');
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
        modelCamera.src = 'dome-camera.glb';
        infoWindow.style.animation = 'show 0.3s ease-in-out forwards';
    });

    // Câmera 2 - Bullet Intelbras
    camera2Btn.addEventListener('click', () => {
        h3Camera.innerText = 'Câmera Bullet Intelbras Full HD';
        infoP.innerText = 'Câmera bullet externa com resolução Full HD, visão noturna infravermelha de 20 metros e proteção IP66. Perfeita para monitoramento de áreas externas.';
        cameraImg.src = 'bullet_camera.webp';
        modelCamera.setAttribute('camera-controls', '');
        modelCamera.setAttribute('auto-rotate', '');
        modelCamera.src = 'bullet-camera.glb';
        infoWindow.style.animation = 'show 0.3s ease-in-out forwards';
    });

    // Câmera 3 - PTZ Pelco
    camera3Btn.addEventListener('click', () => {
        h3Camera.innerText = 'Câmera PTZ Pelco 4K Profissional';
        infoP.innerText = 'Câmera PTZ (Pan-Tilt-Zoom) externa com zoom ótico 20x, acompanhamento automático de movimento e áudio bidirecional. Ideal para áreas externas de grande cobertura.';
        cameraImg.src = 'ptz_camera.jpg';
        modelCamera.setAttribute('camera-controls', '');
        modelCamera.setAttribute('auto-rotate', '');
        modelCamera.src = 'ptz-camera.glb';
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