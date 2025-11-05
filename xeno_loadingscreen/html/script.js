window.onload = () => {
    const bar = document.querySelector('.progress-bar');
    let width = 0;

    setInterval(() => {
        if (width < 100) {
            width += 1;
            bar.style.width = width + "%";
        }
    }, 60);
};
