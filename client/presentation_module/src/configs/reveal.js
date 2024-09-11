// src/reveal.js
import Reveal from 'reveal.js';
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";

const deck = function (el) {
    return new Reveal(el, {
        plugins: [RevealHighlight], // Add plugins here
        controls: true,
        progress: true,
        slideNumber: true,
        hash: false,
        history: false,
        // Add other Reveal.js configurations here
    })
};

export default deck;
