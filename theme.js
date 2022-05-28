/**
 * Theme.js
 * @author      Sadiq Ahmed <sadiq.com.bd@gmail.com>
 * @version     1.0.0
 * @description Theme JS
 * @package     Theme
 * @subpackage  Scripts
 * @category    Theme
 * 
 */

"use strict";

function Theme(mode) {
    if (mode === 'light') {
        mode = 0;
        this.textColor = '#333';
        this.backgroundColor = '#f5f5f5';
        this.borderColor = '#ddd';
    }
    if (mode === 'dark') {
        mode = 1;
        this.textColor = '#f5f5f5';
        this.backgroundColor = '#333';
        this.borderColor = '#444';
    }
    this.mode = mode;
    this.css = this.createCssElement();
}

Theme.setTextColor = function (color) {
    this.textColor = color;
};

Theme.setBackgroundColor = function (color) {
    this.backgroundColor = color;
};

Theme.setBorderColor = function (color) {
    this.borderColor = color;
};

Theme.prototype.genarate = function () {
    this.handleCss();
}

Theme.prototype.createCssElement = function () {
    var css = document.createElement('style');
    css.type = 'text/css';
    document.head.appendChild(css);
    return css;
}

Theme.prototype.appendCss = function (css) {
    this.css.innerHTML += css + '\n';
}


Theme.prototype.applyElement = function (element) {
    let e = document.querySelectorAll(element);
    for (let i = 0; i < e.length; i++) {
        e[i].classList.add('themejs');
    }
}

Theme.prototype.handleCss = function () {
    this.appendCss(`
        .themejs,
        .themejs *,
        .themejs *:before,
        .themejs *:after,
        .themejs *:hover,
        .themejs *:focus,
        .themejs *:active,
        .themejs input::-webkit-input-placeholder {
            background-color: ${this.backgroundColor};
            color: ${this.textColor};
            border-color: ${this.borderColor};
        }
    `);
}


