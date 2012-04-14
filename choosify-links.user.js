// ==UserScript==
// @name           Choosify Links
// @namespace      choosy
// @match          *://*.google.com/*
// ==/UserScript==

var nav_frame;

function get_nav_frame() {
  if (!nav_frame) {
    nav_frame = document.createElement("iframe");
    document.body.appendChild(nav_frame);
  }
  return nav_frame;
}

function choosy(url) {
  var frame = get_nav_frame();
  frame.src = "x-choosy://open/" + escape(url);
}

function is_anchor(target) {
  return target && target.nodeType === 1 && target.nodeName === "A";
}

function match_anchor(a) {
  return (a.protocol === "https:" && 
          a.hostname.match(/^[a-z0-9\-]+\.google\.com/));
}

function intercept_link(evt) {
  var target = evt.target;
  if (is_anchor(target) && !match_anchor(target)) {
    evt.preventDefault();
    evt.stopPropagation();
    choosy(target.href);
  }
}

addEventListener('click', intercept_link, true);
