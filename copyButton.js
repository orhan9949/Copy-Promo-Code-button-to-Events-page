const copyButton = {
    init() {
        document.querySelectorAll('.copy-button').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.add('active');
                let copyText = btn.dataset.value;
                navigator.clipboard.writeText(copyText);
                setTimeout(() => {
                    btn.classList.remove('active');
                }, 3200)
            });
        });
    }
}

export default copyButton;


