(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[11],{

/***/ "./pragma/dist/esm/polyfills/dom.js":
/*!******************************************!*\
  !*** ./pragma/dist/esm/polyfills/dom.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  /*\n    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.\n    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\n    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\n    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\n    Code distributed by Google as part of the polymer project is also\n    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\n  */\n  'use strict';\n\n  var aa = new Set(\"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph\".split(\" \"));\n\n  function g(a) {\n    var b = aa.has(a);\n    a = /^[a-z][.0-9_a-z]*-[\\-.0-9_a-z]*$/.test(a);\n    return !b && a;\n  }\n\n  function l(a) {\n    var b = a.isConnected;\n    if (void 0 !== b) return b;\n\n    for (; a && !(a.__CE_isImportDocument || a instanceof Document);) {\n      a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);\n    }\n\n    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));\n  }\n\n  function n(a, b) {\n    for (; b && b !== a && !b.nextSibling;) {\n      b = b.parentNode;\n    }\n\n    return b && b !== a ? b.nextSibling : null;\n  }\n\n  function p(a, b, d) {\n    d = void 0 === d ? new Set() : d;\n\n    for (var c = a; c;) {\n      if (c.nodeType === Node.ELEMENT_NODE) {\n        var e = c;\n        b(e);\n        var f = e.localName;\n\n        if (\"link\" === f && \"import\" === e.getAttribute(\"rel\")) {\n          c = e[\"import\"];\n          if (c instanceof Node && !d.has(c)) for (d.add(c), c = c.firstChild; c; c = c.nextSibling) {\n            p(c, b, d);\n          }\n          c = n(a, e);\n          continue;\n        } else if (\"template\" === f) {\n          c = n(a, e);\n          continue;\n        }\n\n        if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) {\n          p(e, b, d);\n        }\n      }\n\n      c = c.firstChild ? c.firstChild : n(a, c);\n    }\n  }\n\n  function r(a, b, d) {\n    a[b] = d;\n  }\n\n  ;\n\n  function u() {\n    this.a = new Map();\n    this.g = new Map();\n    this.c = [];\n    this.f = [];\n    this.b = !1;\n  }\n\n  function ba(a, b, d) {\n    a.a.set(b, d);\n    a.g.set(d.constructorFunction, d);\n  }\n\n  function ca(a, b) {\n    a.b = !0;\n    a.c.push(b);\n  }\n\n  function da(a, b) {\n    a.b = !0;\n    a.f.push(b);\n  }\n\n  function v(a, b) {\n    a.b && p(b, function (b) {\n      return w(a, b);\n    });\n  }\n\n  function w(a, b) {\n    if (a.b && !b.__CE_patched) {\n      b.__CE_patched = !0;\n\n      for (var d = 0; d < a.c.length; d++) {\n        a.c[d](b);\n      }\n\n      for (d = 0; d < a.f.length; d++) {\n        a.f[d](b);\n      }\n    }\n  }\n\n  function x(a, b) {\n    var d = [];\n    p(b, function (b) {\n      return d.push(b);\n    });\n\n    for (b = 0; b < d.length; b++) {\n      var c = d[b];\n      1 === c.__CE_state ? a.connectedCallback(c) : y(a, c);\n    }\n  }\n\n  function z(a, b) {\n    var d = [];\n    p(b, function (b) {\n      return d.push(b);\n    });\n\n    for (b = 0; b < d.length; b++) {\n      var c = d[b];\n      1 === c.__CE_state && a.disconnectedCallback(c);\n    }\n  }\n\n  function A(a, b, d) {\n    d = void 0 === d ? {} : d;\n\n    var c = d.u || new Set(),\n        e = d.i || function (b) {\n      return y(a, b);\n    },\n        f = [];\n\n    p(b, function (b) {\n      if (\"link\" === b.localName && \"import\" === b.getAttribute(\"rel\")) {\n        var d = b[\"import\"];\n        d instanceof Node && (d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0);\n        d && \"complete\" === d.readyState ? d.__CE_documentLoadHandled = !0 : b.addEventListener(\"load\", function () {\n          var d = b[\"import\"];\n\n          if (!d.__CE_documentLoadHandled) {\n            d.__CE_documentLoadHandled = !0;\n            var f = new Set(c);\n            f[\"delete\"](d);\n            A(a, d, {\n              u: f,\n              i: e\n            });\n          }\n        });\n      } else f.push(b);\n    }, c);\n    if (a.b) for (b = 0; b < f.length; b++) {\n      w(a, f[b]);\n    }\n\n    for (b = 0; b < f.length; b++) {\n      e(f[b]);\n    }\n  }\n\n  function y(a, b) {\n    if (void 0 === b.__CE_state) {\n      var d = b.ownerDocument;\n      if (d.defaultView || d.__CE_isImportDocument && d.__CE_hasRegistry) if (d = a.a.get(b.localName)) {\n        d.constructionStack.push(b);\n        var c = d.constructorFunction;\n\n        try {\n          try {\n            if (new c() !== b) throw Error(\"The custom element constructor did not produce the element being upgraded.\");\n          } finally {\n            d.constructionStack.pop();\n          }\n        } catch (t) {\n          throw b.__CE_state = 2, t;\n        }\n\n        b.__CE_state = 1;\n        b.__CE_definition = d;\n        if (d.attributeChangedCallback) for (d = d.observedAttributes, c = 0; c < d.length; c++) {\n          var e = d[c],\n              f = b.getAttribute(e);\n          null !== f && a.attributeChangedCallback(b, e, null, f, null);\n        }\n        l(b) && a.connectedCallback(b);\n      }\n    }\n  }\n\n  u.prototype.connectedCallback = function (a) {\n    var b = a.__CE_definition;\n    b.connectedCallback && b.connectedCallback.call(a);\n  };\n\n  u.prototype.disconnectedCallback = function (a) {\n    var b = a.__CE_definition;\n    b.disconnectedCallback && b.disconnectedCallback.call(a);\n  };\n\n  u.prototype.attributeChangedCallback = function (a, b, d, c, e) {\n    var f = a.__CE_definition;\n    f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, d, c, e);\n  };\n\n  function B(a) {\n    var b = document;\n    this.c = a;\n    this.a = b;\n    this.b = void 0;\n    A(this.c, this.a);\n    \"loading\" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {\n      childList: !0,\n      subtree: !0\n    }));\n  }\n\n  function C(a) {\n    a.b && a.b.disconnect();\n  }\n\n  B.prototype.f = function (a) {\n    var b = this.a.readyState;\n    \"interactive\" !== b && \"complete\" !== b || C(this);\n\n    for (b = 0; b < a.length; b++) {\n      for (var d = a[b].addedNodes, c = 0; c < d.length; c++) {\n        A(this.c, d[c]);\n      }\n    }\n  };\n\n  function ea() {\n    var a = this;\n    this.b = this.a = void 0;\n    this.c = new Promise(function (b) {\n      a.b = b;\n      a.a && b(a.a);\n    });\n  }\n\n  function D(a) {\n    if (a.a) throw Error(\"Already resolved.\");\n    a.a = void 0;\n    a.b && a.b(void 0);\n  }\n\n  ;\n\n  function E(a) {\n    this.c = !1;\n    this.a = a;\n    this.j = new Map();\n\n    this.f = function (b) {\n      return b();\n    };\n\n    this.b = !1;\n    this.g = [];\n    this.o = new B(a);\n  }\n\n  E.prototype.l = function (a, b) {\n    var d = this;\n    if (!(b instanceof Function)) throw new TypeError(\"Custom element constructors must be functions.\");\n    if (!g(a)) throw new SyntaxError(\"The element name '\" + a + \"' is not valid.\");\n    if (this.a.a.get(a)) throw Error(\"A custom element with name '\" + a + \"' has already been defined.\");\n    if (this.c) throw Error(\"A custom element is already being defined.\");\n    this.c = !0;\n\n    try {\n      var c = function c(b) {\n        var a = e[b];\n        if (void 0 !== a && !(a instanceof Function)) throw Error(\"The '\" + b + \"' callback must be a function.\");\n        return a;\n      },\n          e = b.prototype;\n\n      if (!(e instanceof Object)) throw new TypeError(\"The custom element constructor's prototype is not an object.\");\n      var f = c(\"connectedCallback\");\n      var t = c(\"disconnectedCallback\");\n      var k = c(\"adoptedCallback\");\n      var h = c(\"attributeChangedCallback\");\n      var m = b.observedAttributes || [];\n    } catch (q) {\n      return;\n    } finally {\n      this.c = !1;\n    }\n\n    b = {\n      localName: a,\n      constructorFunction: b,\n      connectedCallback: f,\n      disconnectedCallback: t,\n      adoptedCallback: k,\n      attributeChangedCallback: h,\n      observedAttributes: m,\n      constructionStack: []\n    };\n    ba(this.a, a, b);\n    this.g.push(b);\n    this.b || (this.b = !0, this.f(function () {\n      return fa(d);\n    }));\n  };\n\n  E.prototype.i = function (a) {\n    A(this.a, a);\n  };\n\n  function fa(a) {\n    if (!1 !== a.b) {\n      a.b = !1;\n\n      for (var b = a.g, d = [], c = new Map(), e = 0; e < b.length; e++) {\n        c.set(b[e].localName, []);\n      }\n\n      A(a.a, document, {\n        i: function i(b) {\n          if (void 0 === b.__CE_state) {\n            var e = b.localName,\n                f = c.get(e);\n            f ? f.push(b) : a.a.a.get(e) && d.push(b);\n          }\n        }\n      });\n\n      for (e = 0; e < d.length; e++) {\n        y(a.a, d[e]);\n      }\n\n      for (; 0 < b.length;) {\n        var f = b.shift();\n        e = f.localName;\n        f = c.get(f.localName);\n\n        for (var t = 0; t < f.length; t++) {\n          y(a.a, f[t]);\n        }\n\n        (e = a.j.get(e)) && D(e);\n      }\n    }\n  }\n\n  E.prototype.get = function (a) {\n    if (a = this.a.a.get(a)) return a.constructorFunction;\n  };\n\n  E.prototype.m = function (a) {\n    if (!g(a)) return Promise.reject(new SyntaxError(\"'\" + a + \"' is not a valid custom element name.\"));\n    var b = this.j.get(a);\n    if (b) return b.c;\n    b = new ea();\n    this.j.set(a, b);\n    this.a.a.get(a) && !this.g.some(function (b) {\n      return b.localName === a;\n    }) && D(b);\n    return b.c;\n  };\n\n  E.prototype.s = function (a) {\n    C(this.o);\n    var b = this.f;\n\n    this.f = function (d) {\n      return a(function () {\n        return b(d);\n      });\n    };\n  };\n\n  window.CustomElementRegistry = E;\n  E.prototype.define = E.prototype.l;\n  E.prototype.upgrade = E.prototype.i;\n  E.prototype.get = E.prototype.get;\n  E.prototype.whenDefined = E.prototype.m;\n  E.prototype.polyfillWrapFlushCallback = E.prototype.s;\n  var F = window.Document.prototype.createElement,\n      G = window.Document.prototype.createElementNS,\n      ha = window.Document.prototype.importNode,\n      ia = window.Document.prototype.prepend,\n      ja = window.Document.prototype.append,\n      ka = window.DocumentFragment.prototype.prepend,\n      la = window.DocumentFragment.prototype.append,\n      H = window.Node.prototype.cloneNode,\n      I = window.Node.prototype.appendChild,\n      J = window.Node.prototype.insertBefore,\n      K = window.Node.prototype.removeChild,\n      L = window.Node.prototype.replaceChild,\n      M = Object.getOwnPropertyDescriptor(window.Node.prototype, \"textContent\"),\n      N = window.Element.prototype.attachShadow,\n      O = Object.getOwnPropertyDescriptor(window.Element.prototype, \"innerHTML\"),\n      P = window.Element.prototype.getAttribute,\n      Q = window.Element.prototype.setAttribute,\n      R = window.Element.prototype.removeAttribute,\n      S = window.Element.prototype.getAttributeNS,\n      T = window.Element.prototype.setAttributeNS,\n      U = window.Element.prototype.removeAttributeNS,\n      ma = window.Element.prototype.insertAdjacentElement,\n      na = window.Element.prototype.insertAdjacentHTML,\n      oa = window.Element.prototype.prepend,\n      pa = window.Element.prototype.append,\n      V = window.Element.prototype.before,\n      qa = window.Element.prototype.after,\n      ra = window.Element.prototype.replaceWith,\n      sa = window.Element.prototype.remove,\n      ta = window.HTMLElement,\n      W = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, \"innerHTML\"),\n      ua = window.HTMLElement.prototype.insertAdjacentElement,\n      va = window.HTMLElement.prototype.insertAdjacentHTML;\n  var wa = new function () {}();\n\n  function xa() {\n    var a = X;\n\n    window.HTMLElement = function () {\n      function b() {\n        var b = this.constructor,\n            c = a.g.get(b);\n        if (!c) throw Error(\"The custom element being constructed was not registered with `customElements`.\");\n        var e = c.constructionStack;\n        if (0 === e.length) return e = F.call(document, c.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = c, w(a, e), e;\n        c = e.length - 1;\n        var f = e[c];\n        if (f === wa) throw Error(\"The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.\");\n        e[c] = wa;\n        Object.setPrototypeOf(f, b.prototype);\n        w(a, f);\n        return f;\n      }\n\n      b.prototype = ta.prototype;\n      Object.defineProperty(b.prototype, \"constructor\", {\n        writable: !0,\n        configurable: !0,\n        enumerable: !1,\n        value: b\n      });\n      return b;\n    }();\n  }\n\n  ;\n\n  function Y(a, b, d) {\n    function c(b) {\n      return function (d) {\n        for (var e = [], c = 0; c < arguments.length; ++c) {\n          e[c] = arguments[c];\n        }\n\n        c = [];\n\n        for (var f = [], m = 0; m < e.length; m++) {\n          var q = e[m];\n          q instanceof Element && l(q) && f.push(q);\n          if (q instanceof DocumentFragment) for (q = q.firstChild; q; q = q.nextSibling) {\n            c.push(q);\n          } else c.push(q);\n        }\n\n        b.apply(this, e);\n\n        for (e = 0; e < f.length; e++) {\n          z(a, f[e]);\n        }\n\n        if (l(this)) for (e = 0; e < c.length; e++) {\n          f = c[e], f instanceof Element && x(a, f);\n        }\n      };\n    }\n\n    void 0 !== d.h && (b.prepend = c(d.h));\n    void 0 !== d.append && (b.append = c(d.append));\n  }\n\n  ;\n\n  function ya() {\n    var a = X;\n    r(Document.prototype, \"createElement\", function (b) {\n      if (this.__CE_hasRegistry) {\n        var d = a.a.get(b);\n        if (d) return new d.constructorFunction();\n      }\n\n      b = F.call(this, b);\n      w(a, b);\n      return b;\n    });\n    r(Document.prototype, \"importNode\", function (b, d) {\n      b = ha.call(this, b, !!d);\n      this.__CE_hasRegistry ? A(a, b) : v(a, b);\n      return b;\n    });\n    r(Document.prototype, \"createElementNS\", function (b, d) {\n      if (this.__CE_hasRegistry && (null === b || \"http://www.w3.org/1999/xhtml\" === b)) {\n        var c = a.a.get(d);\n        if (c) return new c.constructorFunction();\n      }\n\n      b = G.call(this, b, d);\n      w(a, b);\n      return b;\n    });\n    Y(a, Document.prototype, {\n      h: ia,\n      append: ja\n    });\n  }\n\n  ;\n\n  function za() {\n    function a(a, c) {\n      Object.defineProperty(a, \"textContent\", {\n        enumerable: c.enumerable,\n        configurable: !0,\n        get: c.get,\n        set: function set(a) {\n          if (this.nodeType === Node.TEXT_NODE) c.set.call(this, a);else {\n            var d = void 0;\n\n            if (this.firstChild) {\n              var e = this.childNodes,\n                  k = e.length;\n\n              if (0 < k && l(this)) {\n                d = Array(k);\n\n                for (var h = 0; h < k; h++) {\n                  d[h] = e[h];\n                }\n              }\n            }\n\n            c.set.call(this, a);\n            if (d) for (a = 0; a < d.length; a++) {\n              z(b, d[a]);\n            }\n          }\n        }\n      });\n    }\n\n    var b = X;\n    r(Node.prototype, \"insertBefore\", function (a, c) {\n      if (a instanceof DocumentFragment) {\n        var e = Array.prototype.slice.apply(a.childNodes);\n        a = J.call(this, a, c);\n        if (l(this)) for (c = 0; c < e.length; c++) {\n          x(b, e[c]);\n        }\n        return a;\n      }\n\n      e = l(a);\n      c = J.call(this, a, c);\n      e && z(b, a);\n      l(this) && x(b, a);\n      return c;\n    });\n    r(Node.prototype, \"appendChild\", function (a) {\n      if (a instanceof DocumentFragment) {\n        var c = Array.prototype.slice.apply(a.childNodes);\n        a = I.call(this, a);\n        if (l(this)) for (var e = 0; e < c.length; e++) {\n          x(b, c[e]);\n        }\n        return a;\n      }\n\n      c = l(a);\n      e = I.call(this, a);\n      c && z(b, a);\n      l(this) && x(b, a);\n      return e;\n    });\n    r(Node.prototype, \"cloneNode\", function (a) {\n      a = H.call(this, !!a);\n      this.ownerDocument.__CE_hasRegistry ? A(b, a) : v(b, a);\n      return a;\n    });\n    r(Node.prototype, \"removeChild\", function (a) {\n      var c = l(a),\n          e = K.call(this, a);\n      c && z(b, a);\n      return e;\n    });\n    r(Node.prototype, \"replaceChild\", function (a, c) {\n      if (a instanceof DocumentFragment) {\n        var e = Array.prototype.slice.apply(a.childNodes);\n        a = L.call(this, a, c);\n        if (l(this)) for (z(b, c), c = 0; c < e.length; c++) {\n          x(b, e[c]);\n        }\n        return a;\n      }\n\n      e = l(a);\n      var f = L.call(this, a, c),\n          d = l(this);\n      d && z(b, c);\n      e && z(b, a);\n      d && x(b, a);\n      return f;\n    });\n    M && M.get ? a(Node.prototype, M) : ca(b, function (b) {\n      a(b, {\n        enumerable: !0,\n        configurable: !0,\n        get: function get() {\n          for (var a = [], b = 0; b < this.childNodes.length; b++) {\n            var f = this.childNodes[b];\n            f.nodeType !== Node.COMMENT_NODE && a.push(f.textContent);\n          }\n\n          return a.join(\"\");\n        },\n        set: function set(a) {\n          for (; this.firstChild;) {\n            K.call(this, this.firstChild);\n          }\n\n          null != a && \"\" !== a && I.call(this, document.createTextNode(a));\n        }\n      });\n    });\n  }\n\n  ;\n\n  function Aa(a) {\n    function b(b) {\n      return function (e) {\n        for (var c = [], d = 0; d < arguments.length; ++d) {\n          c[d] = arguments[d];\n        }\n\n        d = [];\n\n        for (var k = [], h = 0; h < c.length; h++) {\n          var m = c[h];\n          m instanceof Element && l(m) && k.push(m);\n          if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) {\n            d.push(m);\n          } else d.push(m);\n        }\n\n        b.apply(this, c);\n\n        for (c = 0; c < k.length; c++) {\n          z(a, k[c]);\n        }\n\n        if (l(this)) for (c = 0; c < d.length; c++) {\n          k = d[c], k instanceof Element && x(a, k);\n        }\n      };\n    }\n\n    var d = Element.prototype;\n    void 0 !== V && (d.before = b(V));\n    void 0 !== V && (d.after = b(qa));\n    void 0 !== ra && r(d, \"replaceWith\", function (b) {\n      for (var e = [], c = 0; c < arguments.length; ++c) {\n        e[c] = arguments[c];\n      }\n\n      c = [];\n\n      for (var d = [], k = 0; k < e.length; k++) {\n        var h = e[k];\n        h instanceof Element && l(h) && d.push(h);\n        if (h instanceof DocumentFragment) for (h = h.firstChild; h; h = h.nextSibling) {\n          c.push(h);\n        } else c.push(h);\n      }\n\n      k = l(this);\n      ra.apply(this, e);\n\n      for (e = 0; e < d.length; e++) {\n        z(a, d[e]);\n      }\n\n      if (k) for (z(a, this), e = 0; e < c.length; e++) {\n        d = c[e], d instanceof Element && x(a, d);\n      }\n    });\n    void 0 !== sa && r(d, \"remove\", function () {\n      var b = l(this);\n      sa.call(this);\n      b && z(a, this);\n    });\n  }\n\n  ;\n\n  function Ba() {\n    function a(a, b) {\n      Object.defineProperty(a, \"innerHTML\", {\n        enumerable: b.enumerable,\n        configurable: !0,\n        get: b.get,\n        set: function set(a) {\n          var e = this,\n              d = void 0;\n          l(this) && (d = [], p(this, function (a) {\n            a !== e && d.push(a);\n          }));\n          b.set.call(this, a);\n          if (d) for (var f = 0; f < d.length; f++) {\n            var t = d[f];\n            1 === t.__CE_state && c.disconnectedCallback(t);\n          }\n          this.ownerDocument.__CE_hasRegistry ? A(c, this) : v(c, this);\n          return a;\n        }\n      });\n    }\n\n    function b(a, b) {\n      r(a, \"insertAdjacentElement\", function (a, e) {\n        var d = l(e);\n        a = b.call(this, a, e);\n        d && z(c, e);\n        l(a) && x(c, e);\n        return a;\n      });\n    }\n\n    function d(a, b) {\n      function e(a, b) {\n        for (var e = []; a !== b; a = a.nextSibling) {\n          e.push(a);\n        }\n\n        for (b = 0; b < e.length; b++) {\n          A(c, e[b]);\n        }\n      }\n\n      r(a, \"insertAdjacentHTML\", function (a, c) {\n        a = a.toLowerCase();\n\n        if (\"beforebegin\" === a) {\n          var d = this.previousSibling;\n          b.call(this, a, c);\n          e(d || this.parentNode.firstChild, this);\n        } else if (\"afterbegin\" === a) d = this.firstChild, b.call(this, a, c), e(this.firstChild, d);else if (\"beforeend\" === a) d = this.lastChild, b.call(this, a, c), e(d || this.firstChild, null);else if (\"afterend\" === a) d = this.nextSibling, b.call(this, a, c), e(this.nextSibling, d);else throw new SyntaxError(\"The value provided (\" + String(a) + \") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.\");\n      });\n    }\n\n    var c = X;\n    N && r(Element.prototype, \"attachShadow\", function (a) {\n      a = N.call(this, a);\n      var b = c;\n\n      if (b.b && !a.__CE_patched) {\n        a.__CE_patched = !0;\n\n        for (var e = 0; e < b.c.length; e++) {\n          b.c[e](a);\n        }\n      }\n\n      return this.__CE_shadowRoot = a;\n    });\n    O && O.get ? a(Element.prototype, O) : W && W.get ? a(HTMLElement.prototype, W) : da(c, function (b) {\n      a(b, {\n        enumerable: !0,\n        configurable: !0,\n        get: function get() {\n          return H.call(this, !0).innerHTML;\n        },\n        set: function set(a) {\n          var b = \"template\" === this.localName,\n              c = b ? this.content : this,\n              e = G.call(document, this.namespaceURI, this.localName);\n\n          for (e.innerHTML = a; 0 < c.childNodes.length;) {\n            K.call(c, c.childNodes[0]);\n          }\n\n          for (a = b ? e.content : e; 0 < a.childNodes.length;) {\n            I.call(c, a.childNodes[0]);\n          }\n        }\n      });\n    });\n    r(Element.prototype, \"setAttribute\", function (a, b) {\n      if (1 !== this.__CE_state) return Q.call(this, a, b);\n      var e = P.call(this, a);\n      Q.call(this, a, b);\n      b = P.call(this, a);\n      c.attributeChangedCallback(this, a, e, b, null);\n    });\n    r(Element.prototype, \"setAttributeNS\", function (a, b, d) {\n      if (1 !== this.__CE_state) return T.call(this, a, b, d);\n      var e = S.call(this, a, b);\n      T.call(this, a, b, d);\n      d = S.call(this, a, b);\n      c.attributeChangedCallback(this, b, e, d, a);\n    });\n    r(Element.prototype, \"removeAttribute\", function (a) {\n      if (1 !== this.__CE_state) return R.call(this, a);\n      var b = P.call(this, a);\n      R.call(this, a);\n      null !== b && c.attributeChangedCallback(this, a, b, null, null);\n    });\n    r(Element.prototype, \"removeAttributeNS\", function (a, b) {\n      if (1 !== this.__CE_state) return U.call(this, a, b);\n      var d = S.call(this, a, b);\n      U.call(this, a, b);\n      var e = S.call(this, a, b);\n      d !== e && c.attributeChangedCallback(this, b, d, e, a);\n    });\n    ua ? b(HTMLElement.prototype, ua) : ma ? b(Element.prototype, ma) : console.warn(\"Custom Elements: `Element#insertAdjacentElement` was not patched.\");\n    va ? d(HTMLElement.prototype, va) : na ? d(Element.prototype, na) : console.warn(\"Custom Elements: `Element#insertAdjacentHTML` was not patched.\");\n    Y(c, Element.prototype, {\n      h: oa,\n      append: pa\n    });\n    Aa(c);\n  }\n\n  ;\n  var Z = window.customElements;\n\n  if (!Z || Z.forcePolyfill || \"function\" != typeof Z.define || \"function\" != typeof Z.get) {\n    var X = new u();\n    xa();\n    ya();\n    Y(X, DocumentFragment.prototype, {\n      h: ka,\n      append: la\n    });\n    za();\n    Ba();\n    document.__CE_hasRegistry = !0;\n    var customElements = new E(X);\n    Object.defineProperty(window, \"customElements\", {\n      configurable: !0,\n      enumerable: !0,\n      value: customElements\n    });\n  }\n\n  ;\n}).call(self); // Polyfill document.baseURI\n\nif (typeof document.baseURI !== 'string') {\n  Object.defineProperty(Document.prototype, 'baseURI', {\n    enumerable: true,\n    configurable: true,\n    get: function get() {\n      var base = document.querySelector('base');\n\n      if (base) {\n        return base.href;\n      }\n\n      return document.URL;\n    }\n  });\n} // Polyfill CustomEvent\n\n\nif (typeof window.CustomEvent !== 'function') {\n  window.CustomEvent = function CustomEvent(event, params) {\n    params = params || {\n      bubbles: false,\n      cancelable: false,\n      detail: undefined\n    };\n    var evt = document.createEvent('CustomEvent');\n    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n    return evt;\n  };\n\n  window.CustomEvent.prototype = window.Event.prototype;\n} // Event.composedPath\n\n\n(function (E, d, w) {\n  if (!E.composedPath) {\n    E.composedPath = function () {\n      if (this.path) {\n        return this.path;\n      }\n\n      var target = this.target;\n      this.path = [];\n\n      while (target.parentNode !== null) {\n        this.path.push(target);\n        target = target.parentNode;\n      }\n\n      this.path.push(d, w);\n      return this.path;\n    };\n  }\n})(Event.prototype, document, window);\n/*!\nElement.closest and Element.matches\nhttps://github.com/jonathantneal/closest\nCreative Commons Zero v1.0 Universal\n*/\n\n\n(function (a) {\n  \"function\" !== typeof a.matches && (a.matches = a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || function (a) {\n    a = (this.document || this.ownerDocument).querySelectorAll(a);\n\n    for (var b = 0; a[b] && a[b] !== this;) {\n      ++b;\n    }\n\n    return !!a[b];\n  });\n  \"function\" !== typeof a.closest && (a.closest = function (a) {\n    for (var b = this; b && 1 === b.nodeType;) {\n      if (b.matches(a)) return b;\n      b = b.parentNode;\n    }\n\n    return null;\n  });\n})(window.Element.prototype);\n/*!\nElement.getRootNode()\n*/\n\n\n(function (c) {\n  function d(a) {\n    a = b(a);\n    return a && 11 === a.nodeType ? d(a.host) : a;\n  }\n\n  function b(a) {\n    return a && a.parentNode ? b(a.parentNode) : a;\n  }\n\n  \"function\" !== typeof c.getRootNode && (c.getRootNode = function (a) {\n    return a && a.composed ? d(this) : b(this);\n  });\n})(Element.prototype);\n/*!\nElement.isConnected()\n*/\n\n\n(function (prototype) {\n  if (!(\"isConnected\" in prototype)) {\n    Object.defineProperty(prototype, 'isConnected', {\n      configurable: true,\n      enumerable: true,\n      get: function get() {\n        var root = this.getRootNode({\n          composed: true\n        });\n        return root && root.nodeType === 9;\n      }\n    });\n  }\n})(Element.prototype);\n/*!\nElement.remove()\n*/\n\n\n(function (b) {\n  b.forEach(function (a) {\n    a.hasOwnProperty(\"remove\") || Object.defineProperty(a, \"remove\", {\n      configurable: !0,\n      enumerable: !0,\n      writable: !0,\n      value: function value() {\n        null !== this.parentNode && this.parentNode.removeChild(this);\n      }\n    });\n  });\n})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);\n/*!\nElement.classList\n*/\n\n\n!function (e) {\n  'classList' in e || Object.defineProperty(e, \"classList\", {\n    get: function get() {\n      var e = this,\n          t = (e.getAttribute(\"class\") || \"\").replace(/^\\s+|\\s$/g, \"\").split(/\\s+/g);\n\n      function n() {\n        t.length > 0 ? e.setAttribute(\"class\", t.join(\" \")) : e.removeAttribute(\"class\");\n      }\n\n      return \"\" === t[0] && t.splice(0, 1), t.toggle = function (e, i) {\n        void 0 !== i ? i ? t.add(e) : t.remove(e) : -1 !== t.indexOf(e) ? t.splice(t.indexOf(e), 1) : t.push(e), n();\n      }, t.add = function () {\n        for (var e = [].slice.call(arguments), i = 0, s = e.length; i < s; i++) {\n          -1 === t.indexOf(e[i]) && t.push(e[i]);\n        }\n\n        n();\n      }, t.remove = function () {\n        for (var e = [].slice.call(arguments), i = 0, s = e.length; i < s; i++) {\n          -1 !== t.indexOf(e[i]) && t.splice(t.indexOf(e[i]), 1);\n        }\n\n        n();\n      }, t.item = function (e) {\n        return t[e];\n      }, t.contains = function (e) {\n        return -1 !== t.indexOf(e);\n      }, t.replace = function (e, i) {\n        -1 !== t.indexOf(e) && t.splice(t.indexOf(e), 1, i), n();\n      }, t.value = e.getAttribute(\"class\") || \"\", t;\n    }\n  });\n}(Element.prototype);\n/*!\nDOMTokenList\n*/\n\n(function (prototype) {\n  try {\n    document.body.classList.add();\n  } catch (e) {\n    var originalAdd = prototype.add;\n    var originalRemove = prototype.remove;\n\n    prototype.add = function () {\n      for (var i = 0; i < arguments.length; i++) {\n        originalAdd.call(this, arguments[i]);\n      }\n    };\n\n    prototype.remove = function () {\n      for (var i = 0; i < arguments.length; i++) {\n        originalRemove.call(this, arguments[i]);\n      }\n    };\n  }\n})(DOMTokenList.prototype);\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm/polyfills/dom.js?");

/***/ })

}]);