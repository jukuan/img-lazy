/**
 * Example in HTML:
 * <div data-font-family="Open Sans" data-font-src="path/to/font.woff2">Some text</div>
 *
 * Example in CSS:
 * [data-font-family="Open Sans"] {
 *   font-family: 'Open Sans', sans-serif;
 * }
 */
export class LazyFonts {
    constructor(families) {
        this.families = families;
        this.loaded = new Set();
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this));
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const family = entry.target.getAttribute('data-font-family');
                if (!this.loaded.has(family)) {
                    const font = new FontFace(family, `url(${entry.target.getAttribute('data-font-src')})`);
                    font.load().then(() => {
                        document.fonts.add(font);
                        this.loaded.add(family);
                    });
                }
                this.observer.unobserve(entry.target);
            }
        });
    }

    observeFonts() {
        this.families.forEach(family => {
            const targets = document.querySelectorAll(`[data-font-family="${family}"]`);
            if (targets.length) {
                targets.forEach(target => {
                    this.observer.observe(target);
                });
            } else {
                console.warn(`No elements found with data-font-family="${family}"`);
            }
        });
    }
}
