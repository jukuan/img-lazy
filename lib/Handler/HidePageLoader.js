export class HidePageLoader {
    constructor(maxTimeout = 3750) {
        this.maxTimeout = maxTimeout;
        this.hidePg = this.hidePg.bind(this);
    }

    hidePg() {
        const pgLoading = document.querySelector('.pg-loading');
        pgLoading.style.opacity = '0';
        setTimeout(() => {
            pgLoading.style.display = 'none';
        }, 200);
    }

    init() {
        window.addEventListener('load', () => this.hidePg());
        setTimeout(() => this.hidePg(), this.maxTimeout);
    }
}
