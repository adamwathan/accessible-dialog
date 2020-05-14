export default function () {
    const $dialogCancelBtn = document.getElementById('dialogCancelBtn');
    $dialogCancelBtn.addEventListener('click', (e) => {
        document.body.style.overflow = "visible";
        document.getElementById('dialogOverlay').classList.remove('block');
        document.getElementById('dialogOverlay').classList.add('hidden');
        document.getElementById('dialog').classList.remove('block', 'overflow-x-hidden', 'overflow-y-auto');
        document.getElementById('dialog').classList.add('hidden', 'overflow-hidden');
        document.getElementById('dialog').setAttribute('aria-hidden', true);
    });

    window.onclick = function (e) {
        if (e.target === document.getElementById('dialog')) {
            document.body.style.overflow = "visible";
            document.getElementById('dialogOverlay').classList.remove('block');
            document.getElementById('dialogOverlay').classList.add('hidden');
            document.getElementById('dialog').classList.remove('block', 'overflow-x-hidden', 'overflow-y-auto');
            document.getElementById('dialog').classList.add('hidden', 'overflow-hidden');
            document.getElementById('dialog').setAttribute('aria-hidden', true);
        }
    }

    window.onkeydown = function (e) {
        if (document.getElementById('dialog').classList.contains('block') && e.key === "Escape") {
            document.body.style.overflow = "visible";
            document.getElementById('dialogOverlay').classList.remove('block');
            document.getElementById('dialogOverlay').classList.add('hidden');
            document.getElementById('dialog').classList.remove('block', 'overflow-x-hidden', 'overflow-y-auto');
            document.getElementById('dialog').classList.add('hidden', 'overflow-hidden');
            document.getElementById('dialog').setAttribute('aria-hidden', true);
        }
    }
}