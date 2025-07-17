document.addEventListener('DOMContentLoaded', function() {
    // 作品数据
    const portfolioData = {
        photography: [
            { id: 1, src: 'assets/images/photography/1.png', title: '对称构图', description: '2023年拍摄于布达佩斯', category: 'architecture' },
            { id: 2, src: 'assets/images/photography/2.png', title: '复古色调', description: '2022年人像系列', category: 'portrait' },
            { id: 3, src: 'assets/images/photography/3.png', title: '平面美学', description: '2023年静物摄影', category: 'still-life' },
            { id: 4, src: 'assets/images/photography/4.png', title: '高饱和度', description: '2021年风景摄影', category: 'landscape' },
            { id: 5, src: 'assets/images/photography/5.png', title: '中心对称', description: '2023年建筑摄影', category: 'architecture' },
            { id: 6, src: 'assets/images/photography/6.png', title: '安德森红', description: '2022年色彩研究', category: 'color-study' },
            { id: 7, src: 'assets/images/photography/7.png', title: '对称构图', description: '2023年拍摄于布达佩斯', category: 'architecture' },
            { id: 8, src: 'assets/images/photography/8.jpg', title: '复古色调', description: '2022年人像系列', category: 'portrait' },
            { id: 9, src: 'assets/images/photography/9.png', title: '平面美学', description: '2023年静物摄影', category: 'still-life' },
            { id: 10, src: 'assets/images/photography/10.png', title: '高饱和度', description: '2021年风景摄影', category: 'landscape' },
            { id: 11, src: 'assets/images/photography/11.png', title: '中心对称', description: '2023年建筑摄影', category: 'architecture' },
            { id: 12, src: 'assets/images/photography/15.png', title: '安德森红', description: '2022年色彩研究', category: 'color-study' },
            { id: 13, src: 'assets/images/photography/12.png', title: '高饱和度', description: '2021年风景摄影', category: 'landscape' },
            { id: 14, src: 'assets/images/photography/13.png', title: '中心对称', description: '2023年建筑摄影', category: 'architecture' },
            { id: 15, src: 'assets/images/photography/14.png', title: '安德森红', description: '2022年色彩研究', category: 'color-study' },
        ],
        films: [
            { id: 1, src: 'assets/videos/films/film1.mp4', poster: 'assets/images/films/film1-poster.jpg', title: '对称叙事', description: '2023年实验短片' },
            { id: 2, src: 'assets/videos/films/film2.mp4', poster: 'assets/images/films/film2-poster.jpg', title: '平面运动', description: '2022年纪录短片' },
            { id: 3, src: 'assets/videos/films/film3.mp4', poster: 'assets/images/films/film3-poster.jpg', title: '复古未来', description: '2021年科幻短片' },
            { id: 4, src: 'assets/videos/films/film4.mp4', poster: 'assets/images/films/film4-poster.jpg', title: '色彩交响', description: '2020年音乐短片' }
        ],
        vfx: [
            { id: 1, type: 'video', src: 'assets/videos/vfx/1.mp4', poster: 'assets/images/vfx/111.png', title: '平面动画', description: '2022年动画特效' },
            { id: 2, type: 'video', src: 'assets/videos/vfx/1.mp4', poster: 'assets/images/vfx/111.png', title: '平面动画', description: '2022年动画特效' },
            { id: 3, type: 'video', src: 'assets/videos/vfx/1.mp4', poster: 'assets/images/vfx/111.png', title: '平面动画', description: '2022年动画特效' },
            { id: 4, type: 'video', src: 'assets/videos/vfx/vfx2.mp4', poster: 'assets/images/vfx/vfx2-poster.jpg', title: '合成技术', description: '2021年特效合成' },
            { id: 5, type: 'video', src: 'assets/videos/vfx/1.mp4', poster: 'assets/images/vfx/111.png', title: '平面动画', description: '2022年动画特效' },
            { id: 6, type: 'video', src: 'assets/videos/vfx/1.mp4', poster: 'assets/images/vfx/111.png', title: '平面动画', description: '2022年动画特效' }
        ]
    };

    // 初始化画廊
    function initGallery() {
        renderPhotographyGallery();
        renderFilmsGallery();
        renderVFXGallery();
    }

    // 渲染摄影作品画廊
    function renderPhotographyGallery() {
        const gallery = document.querySelector('#photography .gallery-grid');
        gallery.innerHTML = '';

        portfolioData.photography.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-id', item.id);
            
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.title;
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            
            galleryItem.appendChild(img);
            galleryItem.appendChild(overlay);
            gallery.appendChild(galleryItem);
            
            // 添加点击事件
            galleryItem.addEventListener('click', () => openModal(item.src, `${item.title} - ${item.description}`));
        });
    }

    // 渲染短片作品画廊
    function renderFilmsGallery() {
        const gallery = document.querySelector('#films .video-gallery');
        gallery.innerHTML = '';

        portfolioData.films.forEach(item => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item gallery-item';
            videoItem.setAttribute('data-id', item.id);
            
            const video = document.createElement('video');
            video.poster = item.poster;
            video.innerHTML = `<source src="${item.src}" type="video/mp4">您的浏览器不支持视频播放`;
            video.controls = false;
            
            const playIcon = document.createElement('div');
            playIcon.className = 'video-play-icon';
            playIcon.innerHTML = '<i class="fas fa-play"></i>';
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            
            videoItem.appendChild(video);
            videoItem.appendChild(playIcon);
            videoItem.appendChild(overlay);
            gallery.appendChild(videoItem);
            
            // 添加点击事件
            videoItem.addEventListener('click', () => playVideo(videoItem, video, item.src, `${item.title} - ${item.description}`));
        });
    }

    // 渲染特效制作画廊
    function renderVFXGallery() {
        const gallery = document.querySelector('#vfx .mixed-gallery');
        gallery.innerHTML = '';

        portfolioData.vfx.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-id', item.id);
            
            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.title;
                galleryItem.appendChild(img);
                
                // 添加点击事件
                galleryItem.addEventListener('click', () => openModal(item.src, `${item.title} - ${item.description}`));
            } else {
                const video = document.createElement('video');
                video.poster = item.poster;
                video.innerHTML = `<source src="${item.src}" type="video/mp4">您的浏览器不支持视频播放`;
                video.controls = false;
                
                const playIcon = document.createElement('div');
                playIcon.className = 'video-play-icon';
                playIcon.innerHTML = '<i class="fas fa-play"></i>';
                
                galleryItem.appendChild(video);
                galleryItem.appendChild(playIcon);
                
                // 添加点击事件
                galleryItem.addEventListener('click', () => playVideo(galleryItem, video, item.src, `${item.title} - ${item.description}`));
            }
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            
            galleryItem.appendChild(overlay);
            gallery.appendChild(galleryItem);
        });
    }

    // 选项卡切换功能
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除所有活动状态
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // 添加当前活动状态
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 图片模态框功能
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    function openModal(src, caption) {
        modal.style.display = 'block';
        modalImg.src = src;
        captionText.textContent = caption;
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 视频播放功能
    function playVideo(container, videoElement, src, caption) {
        // 如果是点击播放按钮，则播放视频
        if (videoElement.paused) {
            videoElement.controls = true;
            videoElement.play();
            container.querySelector('.video-play-icon').style.display = 'none';
            container.querySelector('.overlay').style.display = 'none';
        } else {
            // 如果视频正在播放，点击则暂停
            videoElement.pause();
        }
        
        // 监听视频结束
        videoElement.addEventListener('ended', () => {
            videoElement.controls = false;
            container.querySelector('.video-play-icon').style.display = 'flex';
            container.querySelector('.overlay').style.display = 'block';
        });
    }

    // 初始化画廊
    initGallery();
});