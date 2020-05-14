export default function () {
    const $showModalBtn = document.querySelectorAll('button.showModalBtn');
    $showModalBtn.forEach(($showBtn) => {
        $showBtn.addEventListener('click', (e) => {
            document.body.style.overflow = "hidden";
            document.getElementById('dialogOverlay').classList.remove('hidden');
            document.getElementById('dialogOverlay').classList.add('block');
            document.getElementById('dialog').classList.remove('hidden', 'overflow-hidden');
            document.getElementById('dialog').classList.add('block', 'overflow-x-hidden', 'overflow-y-auto');
            document.getElementById('dialog').removeAttribute('aria-hidden');
            
            // Bug: if we close the modal we cannot focus the current button
            // that press show modal
            e.target.blur();
            document.getElementById('dialogCancelBtn').focus();
        });
    });
}