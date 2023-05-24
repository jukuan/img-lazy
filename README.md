# Lazy Loading Library

This is a JavaScript library that provides several lazy loading utilities to help improve page load times and reduce bandwidth usage.

## Features

The following features are included in the library:

 * HidePageLoader: Hides a loading indicator when the page has finished loading or after a specified timeout.

* LazyBackground: Lazy loads background images by setting their background-image CSS property only when they are visible in the viewport.

* LazyFonts: Lazy loads web fonts by loading them only when they are needed.

* LazyLoading: Lazy loads images and videos by setting their src or srcset attributes only when they are visible in the viewport.

## Installation

`$ npm install img-tobe-lazy --save`

To use the library, you can include the lazy-loading.js file in your HTML:
`<script src="path/to/lazy-loading.js"></script>`

Alternatively, you can import the individual classes using a module bundler like Webpack:
js

```
import { HidePgLoading } from 'lazy-loading';
import { LazyBackground } from 'lazy-loading';
import { LazyFonts } from 'lazy-loading';
import { LazyLoading } from 'lazy-loading';
```

## Usage
### HidePageLoader

To use the HidePgLoading class, create a new instance with the desired maxTimeout value (in milliseconds) and call the initmethod:
js

```
import { HidePgLoading } from 'lazy-loading';

const hidePgLoading = new HidePgLoading(5000); // Hide the page loader after 5 seconds
hidePgLoading.init(); // Start hiding the page loader
```

### LazyBackground

To use the LazyBackground class, create a new instance with the desired CSS selector for the lazy-loaded background images and call the observeBackgrounds method:
`import { LazyBackground } from 'lazy-loading';`

```
const lazyBackground = new LazyBackground('.lazy-bg'); // Lazy load background images with the ".lazy-bg" selector
lazyBackground.observeBackgrounds(); // Start lazy loading the background images
```

Make sure to add a data-bg attribute to each element with a lazy-loaded background image, and a CSS rule to set the background color of the element.

### LazyFonts

To use the LazyFonts class, create a new instance with an array of font family names and call the observeFonts method:
`import { LazyFonts } from 'lazy-loading';`

```
const lazyFonts = new LazyFonts(['Open Sans', 'Roboto']); // Lazy load the "Open Sans" and "Roboto" fonts
lazyFonts.observeFonts(); // Start lazy loading the fonts
```

Make sure to add a data-font-family attribute and a data-font-src attribute to each element with a lazy-loaded font, and a CSS rule to set thefont family of the element.

### LazyLoading

To use the LazyLoading class, create a new instance with the desired CSS selector for the lazy-loaded images and videos and call the observe method:
`import { LazyLoading } from 'lazy-loading';`

```
const lazyLoading = new LazyLoading('.lazy'); // Lazy load images and videos with the ".lazy" selector
lazyLoading.observe(); // Start lazy loading the images and videos
```

Make sure to add a data-src or data-srcset attribute to each element with a lazy-loaded image or video.

## Contributing
Contributions to the library are welcome and encouraged! If you find a bug or have a feature request, please submit an issue. If you would like to contribute code, please fork the repository and submit a pull request.

## License
This library is released under the MIT License. See LICENSE for more information.
