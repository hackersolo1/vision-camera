document.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.querySelector('#searchInput');
    const itens = document.querySelectorAll('.products-catalogue .item');
    const notFoundText = document.querySelector('.notFound');
    const camera1Btn = document.querySelector('.camera-1');
    const camera2Btn = document.querySelector('.camera-2');
    const camera3Btn = document.querySelector('.camera-3');
    const infoWindow = document.querySelector('.info-window-pdg-blur');
    const h3Camera = document.querySelector('.camera-name');
    const cameraImg = document.querySelector('.infoWindowCameraImg');
    const infoP = document.querySelector('.info-p');
    const modelCamera = document.querySelector('.md-3d');
    const closeBtn = document.querySelector('#close');


    inputSearch.addEventListener('input', () => {
        const inputValue = inputSearch.value.toLowerCase();

        itens.forEach(item => {
            if(item.textContent.toLowerCase().includes(inputValue)) {
                notFoundText.style.display = 'none';
                item.style.display = 'inline-block';
            } else {
                item.style.display = 'none';
                notFoundText.style.display = 'block';
            }
        });
    });


    camera1Btn.addEventListener('click', () => {
        h3Camera.innerText = 'Jortan JT-8162';
        infoP.innerText = 'A Câmera de Segurança Jortan JT-8163 é uma solução robusta e versátil para quem busca monitoramento inteligente de alta definição. Ideal para ambientes externos e internos, ela combina tecnologia avançada de rastreamento com facilidade de instalação via Wi-Fi';
        cameraImg.src = 'novo-01/jortan-jt-8162.webp';
        modelCamera.setAttribute('camera-controls', '');
        modelCamera.setAttribute('auto-rotate', '');
        modelCamera.src = '/novo-01/jortan-jt-8162.glb';
        infoWindow.style.animation = 'show 0.3s ease-in-out forwards';
    });

    // Câmera 2 - Bullet Intelbras
    camera2Btn.addEventListener('click', () => {
        h3Camera.innerText = 'Câmera PTZ';
        infoP.innerText = 'Câmera bullet externa com resolução Full HD, visão noturna infravermelha e proteção IP66. Perfeita para monitoramento de áreas externas.';
        cameraImg.src = 'novo-01/dome.webp';
        modelCamera.setAttribute('camera-controls', '');
        modelCamera.setAttribute('auto-rotate', '');
        modelCamera.src = 'novo-01/dome.glb';
        modelCamera.style.background = 'rgba(0, 0, 0, 0.5)';
        infoWindow.style.animation = 'show 0.3s ease-in-out forwards';
    });

    // Câmera 3 - PTZ Pelco
    camera3Btn.addEventListener('click', () => {
        h3Camera.innerText = 'Câmera Life Play Tech';
        infoP.innerText = 'Câmera IP Wi-fi em formato de lâmapda, com resolução Full HD de 108px e visão noturna.';
        cameraImg.src = 'novo-01/life-play-tech-lp-8177.webp';
        modelCamera.setAttribute('camera-controls', '');
        modelCamera.setAttribute('auto-rotate', '');
        modelCamera.src = 'novo-01/life-play-tech-lp-8177.glb';
        modelCamera.style.background = 'rgba(0, 0, 0, 0.5)';
        infoWindow.style.animation = 'show 0.3s ease-in-out forwards';
    });

    closeBtn.addEventListener('click', () => {
        infoWindow.style.animation = 'unshow 0.3s ease-in-out forwards';
        h3Camera.innerText = '';
        infoP.innerText = '';
        cameraImg.src = 'none';
        modelCamera.src = 'none';
        modelCamera.style.background = 'none'
        modelCamera.removeAttribute('camera-controls');
    });

})