"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    makeBackground();
  }

  function makeBackground() {
    for (var i = 0; i < 80; i++) {
      makeFourier();
    }
  }

  function makeFourier() {
    let fourier = gen("div");
    fourier.id = "fourier";
    let circle = gen("div");
    circle.id = "circle";
    let line = gen("div");
    line.id = "line";
    let height = Math.ceil(Math.random() * 25) + 1;
    fourier.style.height = height + "em";
    fourier.addEventListener("mouseover", () => {
      fourier.style.height = (height + 25) + "em";
    });
    fourier.addEventListener("mouseout", () => {
      fourier.style.height = height + "em";
    })
    fourier.appendChild(circle);
    fourier.appendChild(line);
    id("bg").appendChild(fourier);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object} - The first DOM object matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
