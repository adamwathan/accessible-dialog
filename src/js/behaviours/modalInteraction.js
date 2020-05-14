import "wicg-inert";

const KEYCODE = {
    ESC: 27
};
const dialog = document.querySelector('.dialog');
const dialogWindow = dialog.querySelector('.dialog__window');
const dialogMask = dialog.querySelector('.dialog__mask');
let previousActiveElement;

export default function () {
    const $showModalBtns = document.querySelectorAll('button.showModalBtn');
    $showModalBtns.forEach(btn => {
        btn.addEventListener('click', openDialog);
    });
    // trapFocus(document.querySelector('.dialog__window'));
}

function openDialog() {
    // Grab a reference to the previous activeElement.
    // We'll want to restore this when we close the dialog.
    previousActiveElement = document.activeElement;

    // Quick and dirty way to make all of the siblings of our
    // dialog inert.
    Array.from(document.body.children).forEach(child => {
        if (child !== dialog) {
            child.inert = true;
        }
    });

    // Make the dialog visible.
    dialog.classList.add('opened');
    // Hide scrolling body element
    document.body.style.overflow = "hidden";

    // Listen for things that should close the dialog
    dialogMask.addEventListener('click', closeDialog);
    dialogWindow.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', closeDialog);
    });
    document.addEventListener('keydown', checkCloseDialog);

    // Finally, move focus into the dialog.
    dialog.querySelector('button').focus();
}

function checkCloseDialog(e) {
    if (e.keyCode === KEYCODE.ESC || e.key === 'Escape') {
        closeDialog();
    }
}

function closeDialog() {
    // Clean up any event listeners.
    dialogMask.removeEventListener('click', closeDialog);
    dialogWindow.querySelectorAll('button').forEach(btn => {
        btn.removeEventListener('click', closeDialog);
    });
    document.removeEventListener('keydown', checkCloseDialog);

    // Uninert our siblings
    Array.from(document.body.children).forEach(child => {
        if (child !== dialog) {
            child.inert = false;
        }
    });

    // Remove Hide the dialog.
    dialog.classList.remove('opened');
    // Remove Hide scrolling body element
    document.body.style.overflow = "visible";

    // Restore focus to the previous active element.
    previousActiveElement.focus();
}

function trapFocus(element) {
    const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;

    element.addEventListener('keydown', (e) => {
        const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) { /* shift + tab */
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else /* tab */ {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    });
}