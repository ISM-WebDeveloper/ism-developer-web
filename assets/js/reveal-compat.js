(function (window, document) {
  "use strict";
  var root = document.documentElement;
  var compactMotion = false;
  var reducedMotion = false;
  var forceMotion = false;
  var pending = [];
  var sections = [];
  var ticking = false;
  var depthLayers = [];
  var depthTicking = false;
  var finePointer = false;
  var requestFrame = window.requestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 16);
  };
  try {
    reducedMotion = /(?:\?|&)motion=reduced(?:&|$)/.test(window.location.search);
    forceMotion = !reducedMotion;
    compactMotion = window.matchMedia && window.matchMedia("(max-width: 700px)").matches;
  } catch (error) {
    compactMotion = false;
    reducedMotion = false;
    forceMotion = true;
  }
  function hasClass(element, className) {
    return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
  }
  function addClass(element, className) {
    if (!element || hasClass(element, className)) return;
    element.className = element.className ? element.className + " " + className : className;
  }
  function removeClass(element, className) {
    if (!element) return;
    element.className = (" " + element.className + " ")
      .replace(" " + className + " ", " ")
      .replace(/^\s+|\s+$/g, "");
  }
  function toArray(nodeList) {
    var result = [];
    var index;
    for (index = 0; index < nodeList.length; index += 1) {
      result.push(nodeList[index]);
    }
    return result;
  }
  function setReveal(element, variant, delay) {
    var motionVariant = variant || "fade-up";
    if (!element) return;
    addClass(element, "reveal");
    if (!element.getAttribute("data-reveal")) {
      element.setAttribute("data-reveal", motionVariant);
    }
    if (!reducedMotion) {
      if (motionVariant === "card-rise") {
        element.style.transform = compactMotion ? "translate3d(0,30px,0) scale(.98)" : "translate3d(0,44px,0) scale(.965)";
      } else if (motionVariant === "soft-zoom") {
        element.style.transform = "translate3d(0,20px,0) scale(.95)";
      } else if (motionVariant === "pop") {
        element.style.transform = compactMotion ? "translate3d(0,16px,0) scale(.94)" : "translate3d(0,22px,0) scale(.9)";
      } else if (motionVariant === "clip-up") {
        element.style.transform = compactMotion ? "translate3d(0,28px,0) scale(.985)" : "translate3d(0,42px,0) scale(.97)";
      }
      if (forceMotion && element.style.transform) {
        element.style.setProperty("transform", element.style.transform, "important");
      }
    }
    element.style.setProperty("transition-delay", Math.max(0, Math.round(delay || 0)) + "ms", forceMotion ? "important" : "");
  }
  function revealAll(selector, variant, delay) {
    var elements = document.querySelectorAll(selector);
    var index;
    for (index = 0; index < elements.length; index += 1) {
      setReveal(elements[index], variant, delay);
    }
  }
  function revealGroup(groupSelector, itemSelector, variants, step, maxDelay) {
    var groups = document.querySelectorAll(groupSelector);
    var groupIndex;
    var motionFactor = compactMotion ? 0.78 : 1;
    for (groupIndex = 0; groupIndex < groups.length; groupIndex += 1) {
      var items = groups[groupIndex].querySelectorAll(itemSelector);
      var itemIndex;
      for (itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
        var variant = variants[itemIndex % variants.length];
        var delay = Math.min(itemIndex * step * motionFactor, maxDelay * motionFactor);
        setReveal(items[itemIndex], variant, delay);
      }
    }
  }
  function revealDirectChildren(groupSelector, variants, step, maxDelay) {
    var groups = document.querySelectorAll(groupSelector);
    var groupIndex;
    var motionFactor = compactMotion ? 0.78 : 1;
    for (groupIndex = 0; groupIndex < groups.length; groupIndex += 1) {
      var items = groups[groupIndex].children;
      var itemIndex;
      for (itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
        var variant = variants[itemIndex % variants.length];
        var delay = Math.min(itemIndex * step * motionFactor, maxDelay * motionFactor);
        setReveal(items[itemIndex], variant, delay);
      }
    }
  }
  function prepareRevealElements() {
    revealAll(".section-title", "fade-up", 0);
    revealAll(".about-visual", "clip-left", 0);
    revealAll(".about-content", "fade-right", compactMotion ? 60 : 110);
    revealGroup(".service-showcase-grid", ".service-showcase-card", ["card-rise"], 72, 360);
    revealAll(".service-showcase-note", "fade-up", compactMotion ? 70 : 130);
    revealAll(".collaboration-story-slider", "soft-zoom", 0);
    revealGroup(".products-section .product-grid", ".product-card", ["card-rise"], 82, 340);
    revealGroup(".maturity-grid", ".maturity-card-premium", ["card-rise"], 82, 340);
    revealAll(".maturity-note", "fade-up", compactMotion ? 70 : 130);
    revealGroup(".process-map", ".process-step", ["card-rise"], 68, 280);
    revealAll(".tools-panel", "soft-zoom", 0);
    revealGroup(".tools-grid", ".tool-card", ["pop"], 42, 360);
    revealAll(".tools-bottom-mark", "fade-up", compactMotion ? 55 : 110);
    revealAll(".dashboard-mockup", "clip-up", 0);
    revealAll(".vault-shell", "soft-zoom", 0);
    revealAll(".configurator-cta-heading", "fade-up", 0);
    revealAll(".configurator-cta-shell", "clip-up", compactMotion ? 55 : 100);
    revealAll(".ism-portfolio-header", "fade-up", 0);
    revealAll(".ism-portfolio-tabs", "fade-up", compactMotion ? 50 : 90);
    revealAll(".ism-portfolio-panel", "soft-zoom", compactMotion ? 70 : 120);
    revealGroup(".faq-column", ".faq-item", ["fade-up"], 62, 250);
    revealAll(".contact-intro", "fade-left", 0);
    revealAll(".contact-form", "fade-right", compactMotion ? 60 : 110);
    revealDirectChildren(".footer-grid", ["fade-up", "soft-zoom"], 75, 300);
    revealAll(".footer-bottom", "fade-up", compactMotion ? 50 : 100);
    pending = toArray(document.querySelectorAll(".reveal"));
    sections = toArray(document.querySelectorAll("main > section, footer"));
  }
  function activateReveal(element) {
    var delay = parseFloat(element.style.transitionDelay) || 0;
    element.style.willChange = "opacity,transform";
    addClass(element, "is-revealed");
    if (!reducedMotion) element.style.setProperty("transform", "none", forceMotion ? "important" : "");
    element.removeAttribute("aria-hidden");
    window.setTimeout(function () {
      addClass(element, "motion-settled");
      element.style.transitionDelay = "0ms";
      element.style.removeProperty("transform");
      element.style.removeProperty("will-change");
    }, delay + 1100);
  }
  function updateSections(viewportHeight) {
    var index;
    var topLimit = viewportHeight * 0.18;
    var bottomLimit = viewportHeight * 0.82;
    for (index = 0; index < sections.length; index += 1) {
      var rect = sections[index].getBoundingClientRect();
      var inView = rect.bottom > topLimit && rect.top < bottomLimit;
      if (inView) addClass(sections[index], "is-in-view");
      else removeClass(sections[index], "is-in-view");
    }
  }
  function revealVisibleElements() {
    var viewportHeight = window.innerHeight || root.clientHeight || 800;
    var entryLine = viewportHeight * (compactMotion ? 0.88 : 0.78);
    var atPageEnd = (window.pageYOffset || root.scrollTop || 0) + viewportHeight >= root.scrollHeight - 2;
    var nextPending = [];
    var index;
    ticking = false;
    for (index = 0; index < pending.length; index += 1) {
      var element = pending[index];
      var rect = element.getBoundingClientRect();
      var isInsideViewport = (rect.top <= entryLine || atPageEnd) && rect.bottom >= 0;
      if (isInsideViewport) activateReveal(element);
      else nextPending.push(element);
    }
    pending = nextPending;
    updateSections(viewportHeight);
  }
  function scheduleRevealCheck() {
    if (ticking) return;
    ticking = true;
    requestFrame(revealVisibleElements);
  }
  function clamp(value, minimum, maximum) {
    return Math.max(minimum, Math.min(maximum, value));
  }
  function enableSurfaceTilt(element) {
    var resetTimer;
    addClass(element, "motion-surface");
    element.addEventListener("mousemove", function (event) {
      var rect;
      var x;
      var y;
      if (hasClass(element, "reveal") && !hasClass(element, "is-revealed")) return;
      window.clearTimeout(resetTimer);
      rect = element.getBoundingClientRect();
      x = (event.clientX - rect.left) / rect.width - 0.5;
      y = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.transitionDuration = "120ms";
      element.style.setProperty("transform", "perspective(1000px) translate3d(0,-4px,0) rotateX(" + (-y * 3.2).toFixed(2) + "deg) rotateY(" + (x * 3.2).toFixed(2) + "deg)", forceMotion ? "important" : "");
    }, false);
    element.addEventListener("mouseleave", function () {
      element.style.transitionDuration = "320ms";
      element.style.removeProperty("transform");
      resetTimer = window.setTimeout(function () {
        element.style.transitionDuration = "";
      }, 340);
    }, false);
  }
  function prepareSurfaceMotion() {
    var surfaces;
    var index;
    if (compactMotion || reducedMotion || !finePointer) return;
    surfaces = document.querySelectorAll(".service-showcase-card,.maturity-card-premium,.process-step,.tool-card,.configurator-cta-shell,.metric,.technical-card");
    for (index = 0; index < surfaces.length; index += 1) enableSurfaceTilt(surfaces[index]);
  }
  function addDepthLayers(selector, strength, scale) {
    var elements = document.querySelectorAll(selector);
    var index;
    for (index = 0; index < elements.length; index += 1) {
      elements[index].style.willChange = "transform";
      depthLayers.push({ element: elements[index], strength: strength, scale: scale });
    }
  }
  function updateDepthMotion() {
    var viewportHeight = window.innerHeight || root.clientHeight || 800;
    var index;
    depthTicking = false;
    for (index = 0; index < depthLayers.length; index += 1) {
      var layer = depthLayers[index];
      var rect = layer.element.getBoundingClientRect();
      var progress;
      var shift;
      if (rect.bottom < -80 || rect.top > viewportHeight + 80) continue;
      progress = (rect.top + rect.height * 0.5 - viewportHeight * 0.5) / (viewportHeight + rect.height);
      shift = clamp(progress * layer.strength, -layer.strength, layer.strength);
      layer.element.style.transform = "translate3d(0," + shift.toFixed(2) + "px,0) scale(" + layer.scale + ")";
    }
  }
  function scheduleDepthMotion() {
    if (depthTicking) return;
    depthTicking = true;
    requestFrame(updateDepthMotion);
  }
  function prepareDepthMotion() {
    if (compactMotion || reducedMotion) return;
    addDepthLayers(".hero-portrait", 14, 1);
    addDepthLayers(".about-orbit-image", 9, 1.015);
    addDepthLayers(".story-slide-background picture", 8, 1.02);
    window.addEventListener("scroll", scheduleDepthMotion, false);
    window.addEventListener("resize", scheduleDepthMotion, false);
    scheduleDepthMotion();
  }
  function initialize() {
    try {
      finePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    } catch (error) {
      finePointer = false;
    }
    prepareRevealElements();
    addClass(root, "motion-ready");
    if (forceMotion) addClass(root, "motion-forced");
    if (reducedMotion) addClass(root, "motion-reduced");
    root.setAttribute("data-motion-engine", "compat-scroll");
    prepareSurfaceMotion();
    prepareDepthMotion();
    window.addEventListener("scroll", scheduleRevealCheck, false);
    window.addEventListener("resize", scheduleRevealCheck, false);
    window.addEventListener("orientationchange", scheduleRevealCheck, false);
    window.addEventListener("pageshow", scheduleRevealCheck, false);
    window.addEventListener("hashchange", scheduleRevealCheck, false);
    requestFrame(function () {
      requestFrame(scheduleRevealCheck);
    });
  }
  removeClass(root, forceMotion ? "motion-reduced" : "motion-forced");
  addClass(root, forceMotion ? "motion-forced" : "motion-reduced");
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, false);
  } else {
    initialize();
  }
}(window, document));
