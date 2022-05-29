/**
 * Theme.js
 * @author      Sadiq Ahmed <sadiq.com.bd@gmail.com>
 * @version     1.0.4
 * @description Theme JS
 * @package     Theme
 * @category    Theme
 * 
 */

"use strict";

function Theme(mode) {
    this.mode = this.getMode(mode);
    this.cssProperties = {};
    this.setDefault();
    this.css = this.createCssElement();
}

Theme.prototype.setCssProperty = function (property, valueLight, valueDark) {
    this.cssProperties[property] = [valueLight, valueDark];
};

Theme.prototype.getMode = function (mode) {
    if (mode === 'light' || mode === 0) mode = 0;
    else if (mode === 'dark' || mode === 1) mode = 1;
    else throw new Error('Invalid Theme Mode');
    return mode;
}

Theme.prototype.setDefault = function () {
    this.setCssProperty('color', '#333', '#f5f5f5');
    this.setCssProperty('background-color', '#f5f5f5', '#333');
    this.setCssProperty('border-color', '#444', '#ddd');
}

Theme.prototype.init = function () {
    this.handleCss();
}

Theme.prototype.switch = function (mode) {
    if (mode === undefined) {
        if (this.isLight()) this.mode = 1;
        else if (this.isDark()) this.mode = 0;
    } else {
        this.mode = this.getMode(mode);
    }
    this.removeCssElement();
    this.css = this.createCssElement();
    this.handleCss();
}

Theme.prototype.isDark = function () {
    return this.mode === 1;
}

Theme.prototype.isLight = function () {
    return this.mode === 0;
}

Theme.prototype.createCssElement = function () {
    var css = document.createElement('style');
    css.id = 'themejs-css';
    css.type = 'text/css';
    document.head.appendChild(css);
    return css;
}

Theme.prototype.removeCssElement = function () {
    var css = document.getElementById('themejs-css');
    if (css) css.remove();
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

Theme.prototype.applyElements = function (elements) {
    for (let i = 0; i < elements.length; i++) {
        this.applyElement(elements[i]);
    }   
}

Theme.prototype.handleCss = function (mode) {
    if (mode !== undefined) {
        mode = this.getMode(mode);
    } else {
        mode = this.mode;
    }
    this.appendCss(`
        .themejs,
        .themejs *,
        .themejs *:before,
        .themejs *:after,
        .themejs *:hover,
        .themejs *:focus,
        .themejs *:active,
        .themejs ::placeholder {`);
    for (let property in this.cssProperties) {
        this.appendCss(`\t\t\t${property}: ${this.cssProperties[property][mode]};`);
    }
    this.appendCss(`\t\t}`);
}


