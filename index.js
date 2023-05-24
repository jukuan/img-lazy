import {HidePageLoader} from './lib/Handler/HidePageLoader';
import {LazyBackground} from "./lib/Handler/LazyBackground";
import {LazyLoading} from "./lib/Handler/LazyLoading";

const hidePageLoader = new HidePageLoader(5000);
hidePageLoader.init();

const lazyLoading = new LazyLoading('.lazy');
lazyLoading.observeImages();

const lazyBackground = new LazyBackground('.lazy-bg');
lazyBackground.observeBackgrounds();
