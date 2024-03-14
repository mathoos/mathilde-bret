export function setActiveLinks() {
    const scrollPosition = window.scrollY;

    if (!window.matchMedia("(min-width: 990px)").matches) return;

    const sections = Array.from(document.querySelectorAll('section, footer'));

    const onSection = sections.some(element => {
        const elementTop = element.offsetTop - 50;
        const elementBottom = elementTop + element.clientHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            const link = document.querySelector(`nav a[href="#${element.id}"]`);
            if (link) {
                document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
                link.classList.add('active');
                return true;
            }
        }
        return false;
    });

    if (!onSection) {
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    }
}

window.addEventListener('scroll', setActiveLinks);