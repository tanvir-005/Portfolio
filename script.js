document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Logic
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('hidden');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('hidden')) {
            // Scrolling down
            header.classList.add('hidden');
        } else if (currentScroll < lastScroll && header.classList.contains('hidden')) {
            // Scrolling up
            header.classList.remove('hidden');
        }
        lastScroll = currentScroll;
    });

    // No mobile menu behavior: navbar is desktop-only with hover dropdowns
});
