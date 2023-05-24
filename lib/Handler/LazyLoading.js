export class LazyLoading {
    constructor(selector) {
        this.lazyImages = document.querySelectorAll(selector);
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this));
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tag = entry.target.tagName.toLowerCase();

                if ('img' === tag) {
                    entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
                    entry.target.removeAttribute('data-src');
                } else if ('source' === tag) {
                    entry.target.setAttribute('srcset', entry.target.getAttribute('data-srcset'));
                    entry.target.removeAttribute('data-srcset');
                }

                this.observer.unobserve(entry.target);
            }
        });
    }

    observeImages() {
        this.lazyImages.forEach(img => {
            this.observer.observe(img);
        });
    }
}
