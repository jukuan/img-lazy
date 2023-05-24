export class LazyBackground {
    constructor(selector) {
        this.lazyBackgrounds = document.querySelectorAll(selector);
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this));
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bgImage = entry.target.getAttribute('data-bg');
                entry.target.style.backgroundImage = `url('${bgImage}')`;
                this.observer.unobserve(entry.target);
            }
        });
    }

    observeBackgrounds() {
        this.lazyBackgrounds.forEach(bg => {
            this.observer.observe(bg);
        });
    }
}
