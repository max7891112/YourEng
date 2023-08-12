// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/courses/components/chooseCourse/img/conversation.png":[function(require,module,exports) {
module.exports = "/conversation.b4aec9ae.png";
},{}],"components/courses/components/chooseCourse/img/big_ban.png":[function(require,module,exports) {
module.exports = "/big_ban.ec46279d.png";
},{}],"components/courses/components/chooseCourse/img/do_more.png":[function(require,module,exports) {
module.exports = "/do_more.b2147a2c.png";
},{}],"components/courses/components/chooseCourse/img/klava.png":[function(require,module,exports) {
module.exports = "/klava.5aba6d0d.png";
},{}],"components/courses/components/chooseCourse/img/discussion.png":[function(require,module,exports) {
module.exports = "/discussion.2235bd6e.png";
},{}],"components/courses/components/chooseCourse/img/oneMoreConversation.png":[function(require,module,exports) {
module.exports = "/oneMoreConversation.cf340cbd.png";
},{}],"components/courses/components/ChooseCourse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _conversation = _interopRequireDefault(require("./chooseCourse/img/conversation.png"));
var _big_ban = _interopRequireDefault(require("./chooseCourse/img/big_ban.png"));
var _do_more = _interopRequireDefault(require("./chooseCourse/img/do_more.png"));
var _klava = _interopRequireDefault(require("./chooseCourse/img/klava.png"));
var _discussion = _interopRequireDefault(require("./chooseCourse/img/discussion.png"));
var _oneMoreConversation = _interopRequireDefault(require("./chooseCourse/img/oneMoreConversation.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ChooseCourse = /*#__PURE__*/function () {
  function ChooseCourse() {
    _classCallCheck(this, ChooseCourse);
    this.container = document.querySelector('.course-list__cards');
    this.data = [_conversation.default, _big_ban.default, _do_more.default, _klava.default, _discussion.default, _oneMoreConversation.default];
  }
  _createClass(ChooseCourse, [{
    key: "render",
    value: function render(img1, img2, img3, img4, img5, img6) {
      var htmlContent = " \n                <div class=\"close-event__card card course-list__size-lesson\" \n                data-sort-data=\"12\" data-sort-duration=\"90\" data-sort-popular=\"8\" data-filter-purpose=\"1\" \n                data-filter-price=\"1,2\" data-filter-duration=\"0\">\n                    <div class=\"card__title\">\u0411\u0438\u0437\u043D\u0435\u0441-\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439</div>\n                    <img src=".concat(img1, " alt=\"classroom\" class=\"card__img\">\n                    <p class=\"card__description\">\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u0435\u043C \u044F\u0437\u044B\u043A\u043E\u0432\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u043D\u0438\u044F: \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u044E\u043C\u0435, \u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0438, \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432\xA0\u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u0430\u0445</p>\n                    <div class=\"card__footer\">\n                        <div class=\"card__price course-list__price-lesson\"><span>\u043E\u0442&nbsp;</span> 10 000 \u0440\u0443\u0431.&nbsp;<span>\u0437\u0430 \u0437\u0430\u043D\u044F\u0442\u0438\u0435</span></div>\n                        <a href=\"../course_eng-for-travel/course_eng-for-travel.html\" class=\"card__link _link-white\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n                    </div>\n                </div>\n                <div class=\"close-event__card card course-list__size-lesson\" \n                data-sort-data=\"9\" data-sort-duration=\"120\" data-sort-popular=\"5\"  data-filter-purpose=\"0,1\"\n                 data-filter-price=\"1,2\" data-filter-duration=\"0\">\n                    <div class=\"card__title\">\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u0434\u043B\u044F \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439</div>\n                    <img src=").concat(img2, " alt=\"classroom\" class=\"card__img\">\n                    <p class=\"card__description\">\u041D\u0438\u0447\u0435\u0433\u043E \u043B\u0438\u0448\u043D\u0435\u0433\u043E! \u0412 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \n                        \u0443\u043F\u043E\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B \u0434\u043B\u044F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u0430\u043D\u0433\u043B\u043E\u044F\u0437\u044B\u0447\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D</p>\n                    <div class=\"card__footer\">\n                        <div class=\"card__price course-list__price-lesson\"><span>\u043E\u0442&nbsp;</span> 8 000 \u0440\u0443\u0431.&nbsp;<span>\u0437\u0430 \u0437\u0430\u043D\u044F\u0442\u0438\u0435</span></div>\n                        <a href=\"../course_eng-for-travel/course_eng-for-travel.html\" class=\"card__link _link-white\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n                    </div>\n                </div>\n                <div class=\"close-event__card card course-list__size-lesson\"\n                 data-sort-data=\"9\" data-sort-duration=\"70\" data-sort-popular=\"10\"  data-filter-purpose=\"0\"\n                  data-filter-price=\"0,1,2\" data-filter-duration=\"0\">\n                    <div class=\"card__title\">\u041E\u0442 Beginner \u0434\u043E Elementary</div>\n                    <img src=").concat(img3, " alt=\"classroom\" class=\"card__img\">\n                    <p class=\"card__description\">\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u0440\u044B\u0432\u043E\u043A \u0432 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0438\n                        \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u044C\u0442\u0435 \u0441\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0434\u043E elementary.</p>\n                    <div class=\"card__footer\">\n                        <div class=\"card__price course-list__price-lesson\"><span>\u043E\u0442&nbsp;</span> 5 000 \u0440\u0443\u0431.&nbsp;<span>\u0437\u0430 \u0437\u0430\u043D\u044F\u0442\u0438\u0435</span></div>\n                        <a href=\"../course_eng-for-travel/course_eng-for-travel.html\" class=\"card__link _link-white\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n                    </div>\n                </div>\n                <div class=\"close-event__card card course-list__size-lesson\"\n                 data-sort-data=\"8\" data-sort-duration=\"50\" data-sort-popular=\"9\" data-filter-price=\"2\"\n                  data-filter-duration=\"1\">\n                    <div class=\"card__title\">IT-\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439</div>\n                    <img src=").concat(img4, " alt=\"classroom\" class=\"card__img\">\n                    <p class=\"card__description\">\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043B\u0435\u043A\u0441\u0438\u043A\u0443 \u0438\u0437 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 IT </p>\n                    <div class=\"card__footer\">\n                        <div class=\"card__price course-list__price-lesson\"><span>\u043E\u0442&nbsp;</span> 12 000 \u0440\u0443\u0431.&nbsp;<span>\u0437\u0430 \u0437\u0430\u043D\u044F\u0442\u0438\u0435</span></div>\n                        <a href=\"../course_eng-for-travel/course_eng-for-travel.html\" class=\"card__link _link-white\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n                    </div>\n                </div>\n                <div class=\"close-event__card card course-list__size-lesson\"\n                 data-sort-data=\"11\" data-sort-duration=\"150\" data-sort-popular=\"5\"  data-filter-purpose=\"0,1\" data-filter-price=\"1,2\"\n                  data-filter-duration=\"2\">\n                    <div class=\"card__title\">\u041E\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u043D\u044B\u0439 \u043A\u0443\u0440\u0441</div>\n                    <img src=").concat(img5, " alt=\"classroom\" class=\"card__img\">\n                    <p class=\"card__description\">\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u043D\u044B\u0445 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \n                        \u0438 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u043D\u0438\u0435 \u044F\u0437\u044B\u043A\u043E\u0432\u043E\u0433\u043E \u0431\u0430\u0440\u044C\u0435\u0440\u0430.\n                        \u041D\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044C \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u0435\u0439 \u044F\u0437\u044B\u043A\u0430.</p>\n                    <div class=\"card__footer\">\n                        <div class=\"card__price course-list__price-lesson\"><span>\u043E\u0442&nbsp;</span> 8 000 \u0440\u0443\u0431.&nbsp;<span>\u0437\u0430 \u0437\u0430\u043D\u044F\u0442\u0438\u0435</span></div>\n                        <a href=\"../course_eng-for-travel/course_eng-for-travel.html\" class=\"card__link _link-white\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n                    </div>\n                </div>\n                <div class=\"close-event__card card course-list__size-lesson\"\n                 data-sort-data=\"10\" data-sort-duration=\"60\" data-sort-popular=\"6\"  data-filter-purpose=\"2\" \n                 data-filter-price=\"0,1,2\" data-filter-duration=\"1\">\n                    <div class=\"card__title\">\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u0434\u043B\u044F \u0415\u0413\u042D</div>\n                    <img src=").concat(img6, " alt=\"classroom\" class=\"card__img\">\n                    <p class=\"card__description\">\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043A \u0415\u0413\u042D - \u043D\u0435 \u0442\u0430\u043A \u0441\u0442\u0440\u0430\u0448\u043D\u043E, \n                        \u043A\u0430\u043A \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u0432\u0433\u043B\u044F\u0434. \u0418 \u043D\u0430 \u0432\u0442\u043E\u0440\u043E\u0439 \u0432\u0437\u0433\u043B\u044F\u0434 \u0442\u043E\u0436\u0435.</p>\n                    <div class=\"card__footer\">\n                        <div class=\"card__price course-list__price-lesson\"><span>\u043E\u0442&nbsp;</span> 5 000 \u0440\u0443\u0431.&nbsp;<span>\u0437\u0430 \u0437\u0430\u043D\u044F\u0442\u0438\u0435</span></div>\n                        <a href=\"../course_eng-for-travel/course_eng-for-travel.html\" class=\"card__link _link-white\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n                    </div>\n                </div>\n            ");
      this.container.innerHTML = htmlContent;
    }
  }, {
    key: "open",
    value: function open(img1, img2, img3, img4, img5, img6) {
      this.render(img1, img2, img3, img4, img5, img6);
      this.container.classList.add('_ul-open');
    }
  }, {
    key: "addListenerForChangePage",
    value: function addListenerForChangePage() {
      var _this = this;
      var ulContainer = document.querySelector('.course-list__number-page');
      var children = ulContainer.children;
      this.open.apply(this, _toConsumableArray(this.data));
      var _iterator = _createForOfIteratorHelper(children),
        _step;
      try {
        var _loop = function _loop() {
          var child = _step.value;
          child.addEventListener('click', function () {
            var _iterator2 = _createForOfIteratorHelper(children),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _child = _step2.value;
                _child.classList.remove('_li-active');
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            child.classList.add('_li-active');
            _this.data.reverse();
            _this.open.apply(_this, _toConsumableArray(_this.data));
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return ChooseCourse;
}();
;
var _default = new ChooseCourse();
exports.default = _default;
},{"./chooseCourse/img/conversation.png":"components/courses/components/chooseCourse/img/conversation.png","./chooseCourse/img/big_ban.png":"components/courses/components/chooseCourse/img/big_ban.png","./chooseCourse/img/do_more.png":"components/courses/components/chooseCourse/img/do_more.png","./chooseCourse/img/klava.png":"components/courses/components/chooseCourse/img/klava.png","./chooseCourse/img/discussion.png":"components/courses/components/chooseCourse/img/discussion.png","./chooseCourse/img/oneMoreConversation.png":"components/courses/components/chooseCourse/img/oneMoreConversation.png"}],"components/1header/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
  }
  _createClass(Header, [{
    key: "menuBurger",
    value: function menuBurger() {
      var widthWindow = document.body.clientWidth;
      var header = document.querySelector('.header');
      header.innerHTML += "\n        <div class=\"header__cross\">\n            <div class=\"header__cross-line\"></div>\n        </div>\n        ";
      var cross = document.querySelector('.header__cross');
      if (widthWindow > 768) {
        cross.classList.add('hidden-abs');
      }
      window.addEventListener('resize', function (e) {
        var currentWwidth = e.target.outerWidth;
        if (currentWwidth <= 768 && cross.classList.contains('hidden-abs')) {
          cross.classList.remove('hidden-abs');
        } else if (currentWwidth > 768 && !cross.classList.contains('hidden-abs')) {
          cross.classList.add('hidden-abs');
        }
      });
      function clickElement() {
        var localCross = document.querySelector('.header__cross');
        var lineCross = document.querySelector('.header__cross-line');
        var menu = document.querySelector('.header__menu-burger');
        var main = document.querySelector('.main');
        var filterFon = document.querySelector('.header__backdropfilter');
        var body = document.querySelector('body');
        if (localCross) {
          localCross.addEventListener('click', function (e) {
            menu.classList.toggle('opacity-see');
            localCross.classList.toggle('header__cross-click');
            lineCross.classList.toggle('header__cross-line-click');
            filterFon.classList.toggle('blur-fon');
            body.classList.toggle('scroll-none');
          });
        }
        ;
      }
      ;
      clickElement();
    }
  }, {
    key: "smoothNavigation",
    value: function smoothNavigation() {
      var menuLinks = document.querySelectorAll('._smooth-link[data-goto]');
      if (menuLinks.length != 0) {
        var _iterator = _createForOfIteratorHelper(menuLinks),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var menuLink = _step.value;
            menuLink.addEventListener('click', function (event) {
              var target = event.target;
              if (target.dataset.goto) {
                var gotoBlock = document.querySelector(target.dataset.goto);
                var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
                window.scrollTo({
                  top: gotoBlockValue,
                  behavior: 'smooth'
                });
                event.preventDefault();
              }
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }]);
  return Header;
}();
var _default = new Header();
exports.default = _default;
},{}],"components/modal/freeLesson/img/Vector.svg":[function(require,module,exports) {
module.exports = "/Vector.fb7dc3c4.svg";
},{}],"components/modal/freeLesson/img/Cancel.svg":[function(require,module,exports) {
module.exports = "/Cancel.a2c6ae3c.svg";
},{}],"node_modules/imask/esm/core/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIRECTION = void 0;
exports.escapeRegExp = escapeRegExp;
exports.forceDirection = forceDirection;
exports.isObject = isObject;
exports.isString = isString;
exports.objectIncludes = objectIncludes;
exports.pick = pick;
/** Checks if value is string */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

/** Checks if value is object */
function isObject(obj) {
  var _obj$constructor;
  return typeof obj === 'object' && obj != null && (obj == null || (_obj$constructor = obj.constructor) == null ? void 0 : _obj$constructor.name) === 'Object';
}
function pick(obj, keys) {
  if (Array.isArray(keys)) return pick(obj, (_, k) => keys.includes(k));
  return Object.entries(obj).reduce((acc, _ref) => {
    let [k, v] = _ref;
    if (keys(v, k)) acc[k] = v;
    return acc;
  }, {});
}

/** Direction */
const DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};

/** Direction */
exports.DIRECTION = DIRECTION;
function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;
    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;
    default:
      return direction;
  }
}

/** Escapes regular expression control chars */
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
}

// cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
function objectIncludes(b, a) {
  if (a === b) return true;
  const arrA = Array.isArray(a),
    arrB = Array.isArray(b);
  let i;
  if (arrA && arrB) {
    if (a.length != b.length) return false;
    for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
    return true;
  }
  if (arrA != arrB) return false;
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const dateA = a instanceof Date,
      dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    const regexpA = a instanceof RegExp,
      regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    const keys = Object.keys(a);
    // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }
  return false;
}

/** Selection range */
},{}],"node_modules/imask/esm/core/action-details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("./utils.js");
/** Provides details of changing input */
class ActionDetails {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */

  constructor(opts) {
    Object.assign(this, opts);

    // double check if left part was changed (autofilling, other non-standard input triggers)
    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }

  /** Start changing position */
  get startChangePos() {
    return Math.min(this.cursorPos, this.oldSelection.start);
  }

  /** Inserted symbols count */
  get insertedCount() {
    return this.cursorPos - this.startChangePos;
  }

  /** Inserted symbols */
  get inserted() {
    return this.value.substr(this.startChangePos, this.insertedCount);
  }

  /** Removed symbols count */
  get removedCount() {
    // Math.max for opposite operation
    return Math.max(this.oldSelection.end - this.startChangePos ||
    // for Delete
    this.oldValue.length - this.value.length, 0);
  }

  /** Removed symbols */
  get removed() {
    return this.oldValue.substr(this.startChangePos, this.removedCount);
  }

  /** Unchanged head symbols */
  get head() {
    return this.value.substring(0, this.startChangePos);
  }

  /** Unchanged tail symbols */
  get tail() {
    return this.value.substring(this.startChangePos + this.insertedCount);
  }

  /** Remove direction */
  get removeDirection() {
    if (!this.removedCount || this.insertedCount) return _utils.DIRECTION.NONE;

    // align right if delete at right
    return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
    // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? _utils.DIRECTION.RIGHT : _utils.DIRECTION.LEFT;
  }
}
exports.default = ActionDetails;
},{"./utils.js":"node_modules/imask/esm/core/utils.js"}],"node_modules/imask/esm/core/holder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IMask;
/** Applies mask on element */
function IMask(el, opts) {
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}
},{}],"node_modules/imask/esm/masked/factory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMask;
exports.maskedClass = maskedClass;
exports.normalizeOpts = normalizeOpts;
var _utils = require("../core/utils.js");
var _holder = _interopRequireDefault(require("../core/holder.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
// export function maskedClass(mask: string): typeof MaskedPattern;
// export function maskedClass(mask: DateConstructor): typeof MaskedDate;
// export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
// export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
// export function maskedClass(mask: MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass(mask: Masked): typeof Masked;
// export function maskedClass(mask: typeof Masked): typeof Masked;
// export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
// export function maskedClass(mask: RegExp): typeof MaskedRegExp;
// export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;
/** Get Masked class by mask type */
function maskedClass(mask) /* TODO */{
  if (mask == null) throw new Error('mask property should be defined');
  if (mask instanceof RegExp) return _holder.default.MaskedRegExp;
  if ((0, _utils.isString)(mask)) return _holder.default.MaskedPattern;
  if (mask === Date) return _holder.default.MaskedDate;
  if (mask === Number) return _holder.default.MaskedNumber;
  if (Array.isArray(mask) || mask === Array) return _holder.default.MaskedDynamic;
  if (_holder.default.Masked && mask.prototype instanceof _holder.default.Masked) return mask;
  if (_holder.default.Masked && mask instanceof _holder.default.Masked) return mask.constructor;
  if (mask instanceof Function) return _holder.default.MaskedFunction;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  return _holder.default.Masked;
}
function normalizeOpts(opts) {
  if (!opts) throw new Error('Options in not defined');
  if (_holder.default.Masked) {
    if (opts.prototype instanceof _holder.default.Masked) return {
      mask: opts
    };

    /*
      handle cases like:
      1) opts = Masked
      2) opts = { mask: Masked, ...instanceOpts }
    */
    const {
      mask = undefined,
      ...instanceOpts
    } = opts instanceof _holder.default.Masked ? {
      mask: opts
    } : (0, _utils.isObject)(opts) && opts.mask instanceof _holder.default.Masked ? opts : {};
    if (mask) {
      const _mask = mask.mask;
      return {
        ...(0, _utils.pick)(mask, (_, k) => !k.startsWith('_')),
        mask: mask.constructor,
        _mask,
        ...instanceOpts
      };
    }
  }
  if (!(0, _utils.isObject)(opts)) return {
    mask: opts
  };
  return {
    ...opts
  };
}

// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754

// From masked
// export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
// // From masked class
// export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// // From mask opts
// export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;

/** Creates new {@link Masked} depending on mask type */
function createMask(opts) {
  if (_holder.default.Masked && opts instanceof _holder.default.Masked) return opts;
  const nOpts = normalizeOpts(opts);
  const MaskedClass = maskedClass(nOpts.mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be imported manually before creating mask.');
  if (nOpts.mask === MaskedClass) delete nOpts.mask;
  if (nOpts._mask) {
    nOpts.mask = nOpts._mask;
    delete nOpts._mask;
  }
  return new MaskedClass(nOpts);
}
_holder.default.createMask = createMask;
},{"../core/utils.js":"node_modules/imask/esm/core/utils.js","../core/holder.js":"node_modules/imask/esm/core/holder.js"}],"node_modules/imask/esm/controls/mask-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _holder = _interopRequireDefault(require("../core/holder.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**  Generic element API to use with mask */
class MaskElement {
  /** */

  /** */

  /** */

  /** Safely returns selection start */
  get selectionStart() {
    let start;
    try {
      start = this._unsafeSelectionStart;
    } catch {}
    return start != null ? start : this.value.length;
  }

  /** Safely returns selection end */
  get selectionEnd() {
    let end;
    try {
      end = this._unsafeSelectionEnd;
    } catch {}
    return end != null ? end : this.value.length;
  }

  /** Safely sets element selection */
  select(start, end) {
    if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
    try {
      this._unsafeSelect(start, end);
    } catch {}
  }

  /** */
  get isActive() {
    return false;
  }
  /** */

  /** */

  /** */
}
exports.default = MaskElement;
_holder.default.MaskElement = MaskElement;
},{"../core/holder.js":"node_modules/imask/esm/core/holder.js"}],"node_modules/imask/esm/controls/html-mask-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _maskElement = _interopRequireDefault(require("./mask-element.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Bridge between HTMLElement and {@link Masked} */
class HTMLMaskElement extends _maskElement.default {
  /** HTMLElement to use mask on */

  constructor(input) {
    super();
    this.input = input;
    this._handlers = {};
  }
  get rootElement() {
    var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
    return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) == null ? void 0 : _this$input$getRootNo2.call(_this$input)) != null ? _this$input$getRootNo : document;
  }

  /**
    Is element in focus
  */
  get isActive() {
    return this.input === this.rootElement.activeElement;
  }

  /**
    Binds HTMLElement events to mask internal events
  */
  bindEvents(handlers) {
    Object.keys(handlers).forEach(event => this._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]));
  }

  /**
    Unbinds HTMLElement events to mask internal events
  */
  unbindEvents() {
    Object.keys(this._handlers).forEach(event => this._toggleEventHandler(event));
  }
  _toggleEventHandler(event, handler) {
    if (this._handlers[event]) {
      this.input.removeEventListener(event, this._handlers[event]);
      delete this._handlers[event];
    }
    if (handler) {
      this.input.addEventListener(event, handler);
      this._handlers[event] = handler;
    }
  }
}
/** Mapping between HTMLElement events and mask internal events */
exports.default = HTMLMaskElement;
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
_holder.default.HTMLMaskElement = HTMLMaskElement;
},{"./mask-element.js":"node_modules/imask/esm/controls/mask-element.js","../core/holder.js":"node_modules/imask/esm/core/holder.js"}],"node_modules/imask/esm/controls/html-input-mask-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _htmlMaskElement = _interopRequireDefault(require("./html-mask-element.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
require("./mask-element.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Bridge between InputElement and {@link Masked} */
class HTMLInputMaskElement extends _htmlMaskElement.default {
  /** InputElement to use mask on */

  constructor(input) {
    super(input);
    this.input = input;
    this._handlers = {};
  }

  /** Returns InputElement selection start */
  get _unsafeSelectionStart() {
    return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
  }

  /** Returns InputElement selection end */
  get _unsafeSelectionEnd() {
    return this.input.selectionEnd;
  }

  /** Sets InputElement selection */
  _unsafeSelect(start, end) {
    this.input.setSelectionRange(start, end);
  }
  get value() {
    return this.input.value;
  }
  set value(value) {
    this.input.value = value;
  }
}
exports.default = HTMLInputMaskElement;
_holder.default.HTMLMaskElement = _htmlMaskElement.default;
},{"./html-mask-element.js":"node_modules/imask/esm/controls/html-mask-element.js","../core/holder.js":"node_modules/imask/esm/core/holder.js","./mask-element.js":"node_modules/imask/esm/controls/mask-element.js"}],"node_modules/imask/esm/controls/html-contenteditable-mask-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _htmlMaskElement = _interopRequireDefault(require("./html-mask-element.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
require("./mask-element.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class HTMLContenteditableMaskElement extends _htmlMaskElement.default {
  /** Returns HTMLElement selection start */
  get _unsafeSelectionStart() {
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    const anchorOffset = selection && selection.anchorOffset;
    const focusOffset = selection && selection.focusOffset;
    if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
      return anchorOffset;
    }
    return focusOffset;
  }

  /** Returns HTMLElement selection end */
  get _unsafeSelectionEnd() {
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    const anchorOffset = selection && selection.anchorOffset;
    const focusOffset = selection && selection.focusOffset;
    if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
      return anchorOffset;
    }
    return focusOffset;
  }

  /** Sets HTMLElement selection */
  _unsafeSelect(start, end) {
    if (!this.rootElement.createRange) return;
    const range = this.rootElement.createRange();
    range.setStart(this.input.firstChild || this.input, start);
    range.setEnd(this.input.lastChild || this.input, end);
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  /** HTMLElement value */
  get value() {
    return this.input.textContent || '';
  }
  set value(value) {
    this.input.textContent = value;
  }
}
exports.default = HTMLContenteditableMaskElement;
_holder.default.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
},{"./html-mask-element.js":"node_modules/imask/esm/controls/html-mask-element.js","../core/holder.js":"node_modules/imask/esm/core/holder.js","./mask-element.js":"node_modules/imask/esm/controls/mask-element.js"}],"node_modules/imask/esm/controls/input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../core/utils.js");
var _actionDetails = _interopRequireDefault(require("../core/action-details.js"));
var _factory = _interopRequireWildcard(require("../masked/factory.js"));
var _maskElement = _interopRequireDefault(require("./mask-element.js"));
var _htmlInputMaskElement = _interopRequireDefault(require("./html-input-mask-element.js"));
var _htmlContenteditableMaskElement = _interopRequireDefault(require("./html-contenteditable-mask-element.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
require("./html-mask-element.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Listens to element events and controls changes between element and {@link Masked} */
class InputMask {
  /**
    View element
  */

  /** Internal {@link Masked} model */

  constructor(el, opts) {
    this.el = el instanceof _maskElement.default ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _htmlContenteditableMaskElement.default(el) : new _htmlInputMaskElement.default(el);
    this.masked = (0, _factory.default)(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
    this._bindEvents();

    // refresh
    this.updateValue();
    this._onChange();
  }
  maskEquals(mask) {
    var _this$masked;
    return mask == null || ((_this$masked = this.masked) == null ? void 0 : _this$masked.maskEquals(mask));
  }

  /** Masked */
  get mask() {
    return this.masked.mask;
  }
  set mask(mask) {
    if (this.maskEquals(mask)) return;
    if (!(mask instanceof _holder.default.Masked) && this.masked.constructor === (0, _factory.maskedClass)(mask)) {
      // TODO "any" no idea
      this.masked.updateOptions({
        mask
      });
      return;
    }
    const masked = mask instanceof _holder.default.Masked ? mask : (0, _factory.default)({
      mask
    });
    masked.unmaskedValue = this.masked.unmaskedValue;
    this.masked = masked;
  }

  /** Raw value */
  get value() {
    return this._value;
  }
  set value(str) {
    if (this.value === str) return;
    this.masked.value = str;
    this.updateControl();
    this.alignCursor();
  }

  /** Unmasked value */
  get unmaskedValue() {
    return this._unmaskedValue;
  }
  set unmaskedValue(str) {
    if (this.unmaskedValue === str) return;
    this.masked.unmaskedValue = str;
    this.updateControl();
    this.alignCursor();
  }

  /** Typed unmasked value */
  get typedValue() {
    return this.masked.typedValue;
  }
  set typedValue(val) {
    if (this.masked.typedValueEquals(val)) return;
    this.masked.typedValue = val;
    this.updateControl();
    this.alignCursor();
  }

  /** Display value */
  get displayValue() {
    return this.masked.displayValue;
  }

  /** Starts listening to element events */
  _bindEvents() {
    this.el.bindEvents({
      selectionChange: this._saveSelection,
      input: this._onInput,
      drop: this._onDrop,
      click: this._onClick,
      focus: this._onFocus,
      commit: this._onChange
    });
  }

  /** Stops listening to element events */
  _unbindEvents() {
    if (this.el) this.el.unbindEvents();
  }

  /** Fires custom event */
  _fireEvent(ev, e) {
    const listeners = this._listeners[ev];
    if (!listeners) return;
    listeners.forEach(l => l(e));
  }

  /** Current selection start */
  get selectionStart() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
  }

  /** Current cursor position */
  get cursorPos() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
  }
  set cursorPos(pos) {
    if (!this.el || !this.el.isActive) return;
    this.el.select(pos, pos);
    this._saveSelection();
  }

  /** Stores current selection */
  _saveSelection( /* ev */
  ) {
    if (this.displayValue !== this.el.value) {
      console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
    }

    this._selection = {
      start: this.selectionStart,
      end: this.cursorPos
    };
  }

  /** Syncronizes model value from view */
  updateValue() {
    this.masked.value = this.el.value;
    this._value = this.masked.value;
  }

  /** Syncronizes view from model value, fires change events */
  updateControl() {
    const newUnmaskedValue = this.masked.unmaskedValue;
    const newValue = this.masked.value;
    const newDisplayValue = this.displayValue;
    const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
    this._unmaskedValue = newUnmaskedValue;
    this._value = newValue;
    if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
    if (isChanged) this._fireChangeEvents();
  }

  /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
  updateOptions(opts) {
    const {
      mask,
      ...restOpts
    } = opts;
    const updateMask = !this.maskEquals(mask);
    const updateOpts = !(0, _utils.objectIncludes)(this.masked, restOpts);
    if (updateMask) this.mask = mask;
    if (updateOpts) this.masked.updateOptions(restOpts); // TODO

    if (updateMask || updateOpts) this.updateControl();
  }

  /** Updates cursor */
  updateCursor(cursorPos) {
    if (cursorPos == null) return;
    this.cursorPos = cursorPos;

    // also queue change cursor for mobile browsers
    this._delayUpdateCursor(cursorPos);
  }

  /** Delays cursor update to support mobile browsers */
  _delayUpdateCursor(cursorPos) {
    this._abortUpdateCursor();
    this._changingCursorPos = cursorPos;
    this._cursorChanging = setTimeout(() => {
      if (!this.el) return; // if was destroyed
      this.cursorPos = this._changingCursorPos;
      this._abortUpdateCursor();
    }, 10);
  }

  /** Fires custom events */
  _fireChangeEvents() {
    this._fireEvent('accept', this._inputEvent);
    if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
  }

  /** Aborts delayed cursor update */
  _abortUpdateCursor() {
    if (this._cursorChanging) {
      clearTimeout(this._cursorChanging);
      delete this._cursorChanging;
    }
  }

  /** Aligns cursor to nearest available position */
  alignCursor() {
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, _utils.DIRECTION.LEFT));
  }

  /** Aligns cursor only if selection is empty */
  alignCursorFriendly() {
    if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
    this.alignCursor();
  }

  /** Adds listener on custom event */
  on(ev, handler) {
    if (!this._listeners[ev]) this._listeners[ev] = [];
    this._listeners[ev].push(handler);
    return this;
  }

  /** Removes custom event listener */
  off(ev, handler) {
    if (!this._listeners[ev]) return this;
    if (!handler) {
      delete this._listeners[ev];
      return this;
    }
    const hIndex = this._listeners[ev].indexOf(handler);
    if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
    return this;
  }

  /** Handles view input event */
  _onInput(e) {
    this._inputEvent = e;
    this._abortUpdateCursor();

    // fix strange IE behavior
    if (!this._selection) return this.updateValue();
    const details = new _actionDetails.default({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    });
    const oldRawValue = this.masked.rawInputValue;
    const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
      input: true,
      raw: true
    }).offset;

    // force align in remove direction only if no input chars were removed
    // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
    const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _utils.DIRECTION.NONE;
    let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
    if (removeDirection !== _utils.DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, _utils.DIRECTION.NONE);
    this.updateControl();
    this.updateCursor(cursorPos);
    delete this._inputEvent;
  }

  /** Handles view change event and commits model value */
  _onChange() {
    if (this.displayValue !== this.el.value) {
      this.updateValue();
    }
    this.masked.doCommit();
    this.updateControl();
    this._saveSelection();
  }

  /** Handles view drop event, prevents by default */
  _onDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  /** Restore last selection on focus */
  _onFocus(ev) {
    this.alignCursorFriendly();
  }

  /** Restore last selection on focus */
  _onClick(ev) {
    this.alignCursorFriendly();
  }

  /** Unbind view events and removes element reference */
  destroy() {
    this._unbindEvents();
    this._listeners.length = 0;
    delete this.el;
  }
}
exports.default = InputMask;
_holder.default.InputMask = InputMask;
},{"../core/utils.js":"node_modules/imask/esm/core/utils.js","../core/action-details.js":"node_modules/imask/esm/core/action-details.js","../masked/factory.js":"node_modules/imask/esm/masked/factory.js","./mask-element.js":"node_modules/imask/esm/controls/mask-element.js","./html-input-mask-element.js":"node_modules/imask/esm/controls/html-input-mask-element.js","./html-contenteditable-mask-element.js":"node_modules/imask/esm/controls/html-contenteditable-mask-element.js","../core/holder.js":"node_modules/imask/esm/core/holder.js","./html-mask-element.js":"node_modules/imask/esm/controls/html-mask-element.js"}],"node_modules/imask/esm/core/change-details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _holder = _interopRequireDefault(require("./holder.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Provides details of changing model value */
class ChangeDetails {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */

  static normalize(prep) {
    return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
  }
  constructor(details) {
    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }

  /** Aggregate changes */
  aggregate(details) {
    this.rawInserted += details.rawInserted;
    this.skip = this.skip || details.skip;
    this.inserted += details.inserted;
    this.tailShift += details.tailShift;
    return this;
  }

  /** Total offset considering all changes */
  get offset() {
    return this.tailShift + this.inserted.length;
  }
}
exports.default = ChangeDetails;
_holder.default.ChangeDetails = ChangeDetails;
},{"./holder.js":"node_modules/imask/esm/core/holder.js"}],"node_modules/imask/esm/core/continuous-tail-details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/** Provides details of continuous extracted tail */
class ContinuousTailDetails {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */

  constructor(value, from, stop) {
    if (value === void 0) {
      value = '';
    }
    if (from === void 0) {
      from = 0;
    }
    this.value = value;
    this.from = from;
    this.stop = stop;
  }
  toString() {
    return this.value;
  }
  extend(tail) {
    this.value += String(tail);
  }
  appendTo(masked) {
    return masked.append(this.toString(), {
      tail: true
    }).aggregate(masked._appendPlaceholder());
  }
  get state() {
    return {
      value: this.value,
      from: this.from,
      stop: this.stop
    };
  }
  set state(state) {
    Object.assign(this, state);
  }
  unshift(beforePos) {
    if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
    const shiftChar = this.value[0];
    this.value = this.value.slice(1);
    return shiftChar;
  }
  shift() {
    if (!this.value.length) return '';
    const shiftChar = this.value[this.value.length - 1];
    this.value = this.value.slice(0, -1);
    return shiftChar;
  }
}
exports.default = ContinuousTailDetails;
},{}],"node_modules/imask/esm/masked/base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _changeDetails = _interopRequireDefault(require("../core/change-details.js"));
var _continuousTailDetails = _interopRequireDefault(require("../core/continuous-tail-details.js"));
var _utils = require("../core/utils.js");
var _holder = _interopRequireDefault(require("../core/holder.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Append flags */

/** Extract flags */

// see https://github.com/microsoft/TypeScript/issues/6223

/** Provides common masking stuff */
class Masked {
  /** */

  /** */

  /** Transforms value before mask processing */

  /** Transforms each char before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing at the end of editing */

  /** Format typed value to string */

  /** Parse string to get typed value */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  constructor(opts) {
    this._value = '';
    this._update({
      ...Masked.DEFAULTS,
      ...opts
    });
    this._initialized = true;
  }

  /** Sets and applies new options */
  updateOptions(opts) {
    if (!Object.keys(opts).length) return;
    this.withValueRefresh(this._update.bind(this, opts));
  }

  /** Sets new options */
  _update(opts) {
    Object.assign(this, opts);
  }

  /** Mask state */
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(state) {
    this._value = state._value;
  }

  /** Resets value */
  reset() {
    this._value = '';
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.resolve(value, {
      input: true
    });
  }

  /** Resolve new value */
  resolve(value, flags) {
    if (flags === void 0) {
      flags = {
        input: true
      };
    }
    this.reset();
    this.append(value, flags, '');
    this.doCommit();
  }
  get unmaskedValue() {
    return this.value;
  }
  set unmaskedValue(value) {
    this.resolve(value, {});
  }
  get typedValue() {
    return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
  }
  set typedValue(value) {
    if (this.format) {
      this.value = this.format(value, this);
    } else {
      this.unmaskedValue = String(value);
    }
  }

  /** Value that includes raw user input */
  get rawInputValue() {
    return this.extractInput(0, this.displayValue.length, {
      raw: true
    });
  }
  set rawInputValue(value) {
    this.resolve(value, {
      raw: true
    });
  }
  get displayValue() {
    return this.value;
  }
  get isComplete() {
    return true;
  }
  get isFilled() {
    return this.isComplete;
  }

  /** Finds nearest input position in direction */
  nearestInputPos(cursorPos, direction) {
    return cursorPos;
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return Math.min(this.displayValue.length, toPos - fromPos);
  }

  /** Extracts value in range considering flags */
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return this.displayValue.slice(fromPos, toPos);
  }

  /** Extracts tail in range */
  extractTail(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return new _continuousTailDetails.default(this.extractInput(fromPos, toPos), fromPos);
  }

  /** Appends tail */
  appendTail(tail) {
    if ((0, _utils.isString)(tail)) tail = new _continuousTailDetails.default(String(tail));
    return tail.appendTo(this);
  }

  /** Appends char */
  _appendCharRaw(ch, flags) {
    if (!ch) return new _changeDetails.default();
    this._value += ch;
    return new _changeDetails.default({
      inserted: ch,
      rawInserted: ch
    });
  }

  /** Appends char */
  _appendChar(ch, flags, checkTail) {
    if (flags === void 0) {
      flags = {};
    }
    const consistentState = this.state;
    let details;
    [ch, details] = this.doPrepareChar(ch, flags);
    details = details.aggregate(this._appendCharRaw(ch, flags));
    if (details.inserted) {
      let consistentTail;
      let appended = this.doValidate(flags) !== false;
      if (appended && checkTail != null) {
        // validation ok, check tail
        const beforeTailState = this.state;
        if (this.overwrite === true) {
          consistentTail = checkTail.state;
          checkTail.unshift(this.displayValue.length - details.tailShift);
        }
        let tailDetails = this.appendTail(checkTail);
        appended = tailDetails.rawInserted === checkTail.toString();

        // not ok, try shift
        if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
          this.state = beforeTailState;
          consistentTail = checkTail.state;
          checkTail.shift();
          tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString();
        }

        // if ok, rollback state after tail
        if (appended && tailDetails.inserted) this.state = beforeTailState;
      }

      // revert all if something went wrong
      if (!appended) {
        details = new _changeDetails.default();
        this.state = consistentState;
        if (checkTail && consistentTail) checkTail.state = consistentTail;
      }
    }
    return details;
  }

  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new _changeDetails.default();
  }

  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new _changeDetails.default();
  }

  /** Appends symbols considering flags */
  append(str, flags, tail) {
    if (!(0, _utils.isString)(str)) throw new Error('value should be string');
    const checkTail = (0, _utils.isString)(tail) ? new _continuousTailDetails.default(String(tail)) : tail;
    if (flags != null && flags.tail) flags._beforeTailState = this.state;
    let details;
    [str, details] = this.doPrepare(str, flags);
    for (let ci = 0; ci < str.length; ++ci) {
      const d = this._appendChar(str[ci], flags, checkTail);
      if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
      details.aggregate(d);
    }
    if ((this.eager === true || this.eager === 'append') && flags != null && flags.input && str) {
      details.aggregate(this._appendEager());
    }

    // append tail but aggregate only tailShift
    if (checkTail != null) {
      details.tailShift += this.appendTail(checkTail).tailShift;
      // TODO it's a good idea to clear state after appending ends
      // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
      // this._resetBeforeTailState();
    }

    return details;
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    this._value = this.displayValue.slice(0, fromPos) + this.displayValue.slice(toPos);
    return new _changeDetails.default();
  }

  /** Calls function and reapplies current value */
  withValueRefresh(fn) {
    if (this._refreshing || !this._initialized) return fn();
    this._refreshing = true;
    const rawInput = this.rawInputValue;
    const value = this.value;
    const ret = fn();
    this.rawInputValue = rawInput;
    // append lost trailing chars at the end
    if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
      this.append(value.slice(this.displayValue.length), {}, '');
    }
    delete this._refreshing;
    return ret;
  }
  runIsolated(fn) {
    if (this._isolated || !this._initialized) return fn(this);
    this._isolated = true;
    const state = this.state;
    const ret = fn(this);
    this.state = state;
    delete this._isolated;
    return ret;
  }
  doSkipInvalid(ch, flags, checkTail) {
    return Boolean(this.skipInvalid);
  }

  /** Prepares string before mask processing */
  doPrepare(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    return _changeDetails.default.normalize(this.prepare ? this.prepare(str, this, flags) : str);
  }

  /** Prepares each char before mask processing */
  doPrepareChar(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    return _changeDetails.default.normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
  }

  /** Validates if value is acceptable */
  doValidate(flags) {
    return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
  }

  /** Does additional processing at the end of editing */
  doCommit() {
    if (this.commit) this.commit(this.value, this);
  }
  splice(start, deleteCount, inserted, removeDirection, flags) {
    if (removeDirection === void 0) {
      removeDirection = _utils.DIRECTION.NONE;
    }
    if (flags === void 0) {
      flags = {
        input: true
      };
    }
    const tailPos = start + deleteCount;
    const tail = this.extractTail(tailPos);
    const eagerRemove = this.eager === true || this.eager === 'remove';
    let oldRawValue;
    if (eagerRemove) {
      removeDirection = (0, _utils.forceDirection)(removeDirection);
      oldRawValue = this.extractInput(0, tailPos, {
        raw: true
      });
    }
    let startChangePos = start;
    const details = new _changeDetails.default();

    // if it is just deletion without insertion
    if (removeDirection !== _utils.DIRECTION.NONE) {
      startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? _utils.DIRECTION.NONE : removeDirection);

      // adjust tailShift if start was aligned
      details.tailShift = startChangePos - start;
    }
    details.aggregate(this.remove(startChangePos));
    if (eagerRemove && removeDirection !== _utils.DIRECTION.NONE && oldRawValue === this.rawInputValue) {
      if (removeDirection === _utils.DIRECTION.FORCE_LEFT) {
        let valLength;
        while (oldRawValue === this.rawInputValue && (valLength = this.displayValue.length)) {
          details.aggregate(new _changeDetails.default({
            tailShift: -1
          })).aggregate(this.remove(valLength - 1));
        }
      } else if (removeDirection === _utils.DIRECTION.FORCE_RIGHT) {
        tail.unshift();
      }
    }
    return details.aggregate(this.append(inserted, flags, tail));
  }
  maskEquals(mask) {
    return this.mask === mask;
  }
  typedValueEquals(value) {
    const tval = this.typedValue;
    return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
  }
}
exports.default = Masked;
Masked.DEFAULTS = {
  skipInvalid: true
};
Masked.EMPTY_VALUES = [undefined, null, ''];
_holder.default.Masked = Masked;
},{"../core/change-details.js":"node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js","../core/utils.js":"node_modules/imask/esm/core/utils.js","../core/holder.js":"node_modules/imask/esm/core/holder.js"}],"node_modules/imask/esm/masked/pattern/chunk-tail-details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _changeDetails = _interopRequireDefault(require("../../core/change-details.js"));
var _utils = require("../../core/utils.js");
var _continuousTailDetails = _interopRequireDefault(require("../../core/continuous-tail-details.js"));
var _holder = _interopRequireDefault(require("../../core/holder.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ChunksTailDetails {
  /** */

  constructor(chunks, from) {
    if (chunks === void 0) {
      chunks = [];
    }
    if (from === void 0) {
      from = 0;
    }
    this.chunks = chunks;
    this.from = from;
  }
  toString() {
    return this.chunks.map(String).join('');
  }
  extend(tailChunk) {
    if (!String(tailChunk)) return;
    tailChunk = (0, _utils.isString)(tailChunk) ? new _continuousTailDetails.default(String(tailChunk)) : tailChunk;
    const lastChunk = this.chunks[this.chunks.length - 1];
    const extendLast = lastChunk && (
    // if stops are same or tail has no stop
    lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
    // if tail chunk goes just after last chunk
    tailChunk.from === lastChunk.from + lastChunk.toString().length;
    if (tailChunk instanceof _continuousTailDetails.default) {
      // check the ability to extend previous chunk
      if (extendLast) {
        // extend previous chunk
        lastChunk.extend(tailChunk.toString());
      } else {
        // append new chunk
        this.chunks.push(tailChunk);
      }
    } else if (tailChunk instanceof ChunksTailDetails) {
      if (tailChunk.stop == null) {
        // unwrap floating chunks to parent, keeping `from` pos
        let firstTailChunk;
        while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
          firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
          firstTailChunk.from += tailChunk.from;
          this.extend(firstTailChunk);
        }
      }

      // if tail chunk still has value
      if (tailChunk.toString()) {
        // if chunks contains stops, then popup stop to container
        tailChunk.stop = tailChunk.blockIndex;
        this.chunks.push(tailChunk);
      }
    }
  }
  appendTo(masked) {
    if (!(masked instanceof _holder.default.MaskedPattern)) {
      const tail = new _continuousTailDetails.default(this.toString());
      return tail.appendTo(masked);
    }
    const details = new _changeDetails.default();
    for (let ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
      const chunk = this.chunks[ci];
      const lastBlockIter = masked._mapPosToBlock(masked.displayValue.length);
      const stop = chunk.stop;
      let chunkBlock;
      if (stop != null && (
      // if block not found or stop is behind lastBlock
      !lastBlockIter || lastBlockIter.index <= stop)) {
        if (chunk instanceof ChunksTailDetails ||
        // for continuous block also check if stop is exist
        masked._stops.indexOf(stop) >= 0) {
          const phDetails = masked._appendPlaceholder(stop);
          details.aggregate(phDetails);
        }
        chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
      }
      if (chunkBlock) {
        const tailDetails = chunkBlock.appendTail(chunk);
        tailDetails.skip = false; // always ignore skip, it will be set on last
        details.aggregate(tailDetails);
        masked._value += tailDetails.inserted;

        // get not inserted chars
        const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
        if (remainChars) details.aggregate(masked.append(remainChars, {
          tail: true
        }));
      } else {
        details.aggregate(masked.append(chunk.toString(), {
          tail: true
        }));
      }
    }
    return details;
  }
  get state() {
    return {
      chunks: this.chunks.map(c => c.state),
      from: this.from,
      stop: this.stop,
      blockIndex: this.blockIndex
    };
  }
  set state(state) {
    const {
      chunks,
      ...props
    } = state;
    Object.assign(this, props);
    this.chunks = chunks.map(cstate => {
      const chunk = "chunks" in cstate ? new ChunksTailDetails() : new _continuousTailDetails.default();
      chunk.state = cstate;
      return chunk;
    });
  }
  unshift(beforePos) {
    if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
    const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
    let ci = 0;
    while (ci < this.chunks.length) {
      const chunk = this.chunks[ci];
      const shiftChar = chunk.unshift(chunkShiftPos);
      if (chunk.toString()) {
        // chunk still contains value
        // but not shifted - means no more available chars to shift
        if (!shiftChar) break;
        ++ci;
      } else {
        // clean if chunk has no value
        this.chunks.splice(ci, 1);
      }
      if (shiftChar) return shiftChar;
    }
    return '';
  }
  shift() {
    if (!this.chunks.length) return '';
    let ci = this.chunks.length - 1;
    while (0 <= ci) {
      const chunk = this.chunks[ci];
      const shiftChar = chunk.shift();
      if (chunk.toString()) {
        // chunk still contains value
        // but not shifted - means no more available chars to shift
        if (!shiftChar) break;
        --ci;
      } else {
        // clean if chunk has no value
        this.chunks.splice(ci, 1);
      }
      if (shiftChar) return shiftChar;
    }
    return '';
  }
}
exports.default = ChunksTailDetails;
},{"../../core/change-details.js":"node_modules/imask/esm/core/change-details.js","../../core/utils.js":"node_modules/imask/esm/core/utils.js","../../core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js","../../core/holder.js":"node_modules/imask/esm/core/holder.js"}],"node_modules/imask/esm/masked/pattern/cursor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../../core/utils.js");
class PatternCursor {
  constructor(masked, pos) {
    this.masked = masked;
    this._log = [];
    const {
      offset,
      index
    } = masked._mapPosToBlock(pos) || (pos < 0 ?
    // first
    {
      index: 0,
      offset: 0
    } :
    // last
    {
      index: this.masked._blocks.length,
      offset: 0
    });
    this.offset = offset;
    this.index = index;
    this.ok = false;
  }
  get block() {
    return this.masked._blocks[this.index];
  }
  get pos() {
    return this.masked._blockStartPos(this.index) + this.offset;
  }
  get state() {
    return {
      index: this.index,
      offset: this.offset,
      ok: this.ok
    };
  }
  set state(s) {
    Object.assign(this, s);
  }
  pushState() {
    this._log.push(this.state);
  }
  popState() {
    const s = this._log.pop();
    if (s) this.state = s;
    return s;
  }
  bindBlock() {
    if (this.block) return;
    if (this.index < 0) {
      this.index = 0;
      this.offset = 0;
    }
    if (this.index >= this.masked._blocks.length) {
      this.index = this.masked._blocks.length - 1;
      this.offset = this.block.displayValue.length; // TODO this is stupid type error, `block` depends on index that was changed above
    }
  }

  _pushLeft(fn) {
    this.pushState();
    for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) == null ? void 0 : _this$block.displayValue.length) || 0) {
      var _this$block;
      if (fn()) return this.ok = true;
    }
    return this.ok = false;
  }
  _pushRight(fn) {
    this.pushState();
    for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
      if (fn()) return this.ok = true;
    }
    return this.ok = false;
  }
  pushLeftBeforeFilled() {
    return this._pushLeft(() => {
      if (this.block.isFixed || !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _utils.DIRECTION.FORCE_LEFT);
      if (this.offset !== 0) return true;
    });
  }
  pushLeftBeforeInput() {
    // cases:
    // filled input: 00|
    // optional empty input: 00[]|
    // nested block: XX<[]>|
    return this._pushLeft(() => {
      if (this.block.isFixed) return;
      this.offset = this.block.nearestInputPos(this.offset, _utils.DIRECTION.LEFT);
      return true;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _utils.DIRECTION.LEFT);
      return true;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (this.block.isFixed || !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _utils.DIRECTION.FORCE_RIGHT);
      if (this.offset !== this.block.value.length) return true;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (this.block.isFixed) return;

      // const o = this.offset;
      this.offset = this.block.nearestInputPos(this.offset, _utils.DIRECTION.NONE);
      // HACK cases like (STILL DOES NOT WORK FOR NESTED)
      // aa|X
      // aa<X|[]>X_    - this will not work
      // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
      return true;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (this.block.isFixed || this.block.isOptional && !this.block.value) return;

      // TODO check |[*]XX_
      this.offset = this.block.nearestInputPos(this.offset, _utils.DIRECTION.NONE);
      return true;
    });
  }
}
exports.default = PatternCursor;
},{"../../core/utils.js":"node_modules/imask/esm/core/utils.js"}],"node_modules/imask/esm/masked/pattern/fixed-definition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _changeDetails = _interopRequireDefault(require("../../core/change-details.js"));
var _utils = require("../../core/utils.js");
var _continuousTailDetails = _interopRequireDefault(require("../../core/continuous-tail-details.js"));
require("../../core/holder.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class PatternFixedDefinition {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  constructor(opts) {
    Object.assign(this, opts);
    this._value = '';
    this.isFixed = true;
  }
  get value() {
    return this._value;
  }
  get unmaskedValue() {
    return this.isUnmasking ? this.value : '';
  }
  get rawInputValue() {
    return this._isRawInput ? this.value : '';
  }
  get displayValue() {
    return this.value;
  }
  reset() {
    this._isRawInput = false;
    this._value = '';
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
    if (!this._value) this._isRawInput = false;
    return new _changeDetails.default();
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _utils.DIRECTION.NONE;
    }
    const minPos = 0;
    const maxPos = this._value.length;
    switch (direction) {
      case _utils.DIRECTION.LEFT:
      case _utils.DIRECTION.FORCE_LEFT:
        return minPos;
      case _utils.DIRECTION.NONE:
      case _utils.DIRECTION.RIGHT:
      case _utils.DIRECTION.FORCE_RIGHT:
      default:
        return maxPos;
    }
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    return this._isRawInput ? toPos - fromPos : 0;
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    if (flags === void 0) {
      flags = {};
    }
    return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
  }
  get isComplete() {
    return true;
  }
  get isFilled() {
    return Boolean(this._value);
  }
  _appendChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const details = new _changeDetails.default();
    if (this.isFilled) return details;
    const appendEager = this.eager === true || this.eager === 'append';
    const appended = this.char === ch;
    const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
    if (isResolved) details.rawInserted = this.char;
    this._value = details.inserted = this.char;
    this._isRawInput = isResolved && (flags.raw || flags.input);
    return details;
  }
  _appendEager() {
    return this._appendChar(this.char, {
      tail: true
    });
  }
  _appendPlaceholder() {
    const details = new _changeDetails.default();
    if (this.isFilled) return details;
    this._value = details.inserted = this.char;
    return details;
  }
  extractTail() {
    return new _continuousTailDetails.default('');
  }
  appendTail(tail) {
    if ((0, _utils.isString)(tail)) tail = new _continuousTailDetails.default(String(tail));
    return tail.appendTo(this);
  }
  append(str, flags, tail) {
    const details = this._appendChar(str[0], flags);
    if (tail != null) {
      details.tailShift += this.appendTail(tail).tailShift;
    }
    return details;
  }
  doCommit() {}
  get state() {
    return {
      _value: this._value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(state) {
    this._value = state._value;
    this._isRawInput = Boolean(state._rawInputValue);
  }
}
exports.default = PatternFixedDefinition;
},{"../../core/change-details.js":"node_modules/imask/esm/core/change-details.js","../../core/utils.js":"node_modules/imask/esm/core/utils.js","../../core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js","../../core/holder.js":"node_modules/imask/esm/core/holder.js"}],"node_modules/imask/esm/masked/pattern/input-definition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _factory = _interopRequireDefault(require("../factory.js"));
var _changeDetails = _interopRequireDefault(require("../../core/change-details.js"));
var _utils = require("../../core/utils.js");
require("../../core/holder.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class PatternInputDefinition {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  constructor(opts) {
    const {
      parent,
      isOptional,
      placeholderChar,
      displayChar,
      lazy,
      eager,
      ...maskOpts
    } = opts;
    this.masked = (0, _factory.default)(maskOpts);
    Object.assign(this, {
      parent,
      isOptional,
      placeholderChar,
      displayChar,
      lazy,
      eager
    });
  }
  reset() {
    this.isFilled = false;
    this.masked.reset();
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    if (fromPos === 0 && toPos >= 1) {
      this.isFilled = false;
      return this.masked.remove(fromPos, toPos);
    }
    return new _changeDetails.default();
  }
  get value() {
    return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
  }
  get unmaskedValue() {
    return this.masked.unmaskedValue;
  }
  get rawInputValue() {
    return this.masked.rawInputValue;
  }
  get displayValue() {
    return this.masked.value && this.displayChar || this.value;
  }
  get isComplete() {
    return Boolean(this.masked.value) || this.isOptional;
  }
  _appendChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    if (this.isFilled) return new _changeDetails.default();
    const state = this.masked.state;
    // simulate input
    const details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
    if (details.inserted && this.doValidate(flags) === false) {
      details.inserted = details.rawInserted = '';
      this.masked.state = state;
    }
    if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
      details.inserted = this.placeholderChar;
    }
    details.skip = !details.inserted && !this.isOptional;
    this.isFilled = Boolean(details.inserted);
    return details;
  }
  append(str, flags, tail) {
    // TODO probably should be done via _appendChar
    return this.masked.append(str, this.currentMaskFlags(flags), tail);
  }
  _appendPlaceholder() {
    const details = new _changeDetails.default();
    if (this.isFilled || this.isOptional) return details;
    this.isFilled = true;
    details.inserted = this.placeholderChar;
    return details;
  }
  _appendEager() {
    return new _changeDetails.default();
  }
  extractTail(fromPos, toPos) {
    return this.masked.extractTail(fromPos, toPos);
  }
  appendTail(tail) {
    return this.masked.appendTail(tail);
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    return this.masked.extractInput(fromPos, toPos, flags);
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _utils.DIRECTION.NONE;
    }
    const minPos = 0;
    const maxPos = this.value.length;
    const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
    switch (direction) {
      case _utils.DIRECTION.LEFT:
      case _utils.DIRECTION.FORCE_LEFT:
        return this.isComplete ? boundPos : minPos;
      case _utils.DIRECTION.RIGHT:
      case _utils.DIRECTION.FORCE_RIGHT:
        return this.isComplete ? boundPos : maxPos;
      case _utils.DIRECTION.NONE:
      default:
        return boundPos;
    }
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    return this.value.slice(fromPos, toPos).length;
  }
  doValidate(flags) {
    return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
  }
  doCommit() {
    this.masked.doCommit();
  }
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue,
      masked: this.masked.state,
      isFilled: this.isFilled
    };
  }
  set state(state) {
    this.masked.state = state.masked;
    this.isFilled = state.isFilled;
  }
  currentMaskFlags(flags) {
    var _flags$_beforeTailSta;
    return {
      ...flags,
      _beforeTailState: (flags == null || (_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.masked) || (flags == null ? void 0 : flags._beforeTailState)
    };
  }
}
exports.default = PatternInputDefinition;
PatternInputDefinition.DEFAULT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
},{"../factory.js":"node_modules/imask/esm/masked/factory.js","../../core/change-details.js":"node_modules/imask/esm/core/change-details.js","../../core/utils.js":"node_modules/imask/esm/core/utils.js","../../core/holder.js":"node_modules/imask/esm/core/holder.js"}],"node_modules/imask/esm/masked/regexp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _base = _interopRequireDefault(require("./base.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
require("../core/change-details.js");
require("../core/continuous-tail-details.js");
require("../core/utils.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Masking by RegExp */
class MaskedRegExp extends _base.default {
  /** */

  /** Enable characters overwriting */

  /** */

  /** */

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const mask = opts.mask;
    if (mask) opts.validate = value => value.search(mask) >= 0;
    super._update(opts);
  }
}
exports.default = MaskedRegExp;
_holder.default.MaskedRegExp = MaskedRegExp;
},{"./base.js":"node_modules/imask/esm/masked/base.js","../core/holder.js":"node_modules/imask/esm/core/holder.js","../core/change-details.js":"node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js","../core/utils.js":"node_modules/imask/esm/core/utils.js"}],"node_modules/imask/esm/masked/pattern.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _changeDetails = _interopRequireDefault(require("../core/change-details.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
var _utils = require("../core/utils.js");
var _base = _interopRequireDefault(require("./base.js"));
var _factory = _interopRequireWildcard(require("./factory.js"));
var _chunkTailDetails = _interopRequireDefault(require("./pattern/chunk-tail-details.js"));
var _cursor = _interopRequireDefault(require("./pattern/cursor.js"));
var _fixedDefinition = _interopRequireDefault(require("./pattern/fixed-definition.js"));
var _inputDefinition = _interopRequireDefault(require("./pattern/input-definition.js"));
require("./regexp.js");
require("../core/continuous-tail-details.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Pattern mask */
class MaskedPattern extends _base.default {
  /** */

  /** */

  /** Single char for empty input */

  /** Single char for filled input */

  /** Show placeholder only when needed */

  /** Enable characters overwriting */

  /** */

  /** */

  constructor(opts) {
    super({
      ...MaskedPattern.DEFAULTS,
      ...opts,
      definitions: Object.assign({}, _inputDefinition.default.DEFAULT_DEFINITIONS, opts == null ? void 0 : opts.definitions)
    });
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    opts.definitions = Object.assign({}, this.definitions, opts.definitions);
    super._update(opts);
    this._rebuildMask();
  }
  _rebuildMask() {
    const defs = this.definitions;
    this._blocks = [];
    this.exposeBlock = undefined;
    this._stops = [];
    this._maskedBlocks = {};
    const pattern = this.mask;
    if (!pattern || !defs) return;
    let unmaskingBlock = false;
    let optionalBlock = false;
    for (let i = 0; i < pattern.length; ++i) {
      if (this.blocks) {
        const p = pattern.slice(i);
        const bNames = Object.keys(this.blocks).filter(bName => p.indexOf(bName) === 0);
        // order by key length
        bNames.sort((a, b) => b.length - a.length);
        // use block name with max length
        const bName = bNames[0];
        if (bName) {
          const {
            expose,
            ...blockOpts
          } = (0, _factory.normalizeOpts)(this.blocks[bName]);
          const maskedBlock = (0, _factory.default)({
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            ...blockOpts,
            parent: this
          });
          if (maskedBlock) {
            this._blocks.push(maskedBlock);
            if (expose) this.exposeBlock = maskedBlock;

            // store block index
            if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
            this._maskedBlocks[bName].push(this._blocks.length - 1);
          }
          i += bName.length - 1;
          continue;
        }
      }
      let char = pattern[i];
      let isInput = (char in defs);
      if (char === MaskedPattern.STOP_CHAR) {
        this._stops.push(this._blocks.length);
        continue;
      }
      if (char === '{' || char === '}') {
        unmaskingBlock = !unmaskingBlock;
        continue;
      }
      if (char === '[' || char === ']') {
        optionalBlock = !optionalBlock;
        continue;
      }
      if (char === MaskedPattern.ESCAPE_CHAR) {
        ++i;
        char = pattern[i];
        if (!char) break;
        isInput = false;
      }
      const def = isInput ? new _inputDefinition.default({
        isOptional: optionalBlock,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...(0, _factory.normalizeOpts)(defs[char]),
        parent: this
      }) : new _fixedDefinition.default({
        char,
        eager: this.eager,
        isUnmasking: unmaskingBlock
      });
      this._blocks.push(def);
    }
  }
  get state() {
    return {
      ...super.state,
      _blocks: this._blocks.map(b => b.state)
    };
  }
  set state(state) {
    const {
      _blocks,
      ...maskedState
    } = state;
    this._blocks.forEach((b, bi) => b.state = _blocks[bi]);
    super.state = maskedState;
  }
  reset() {
    super.reset();
    this._blocks.forEach(b => b.reset());
  }
  get isComplete() {
    return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(b => b.isComplete);
  }
  get isFilled() {
    return this._blocks.every(b => b.isFilled);
  }
  get isFixed() {
    return this._blocks.every(b => b.isFixed);
  }
  get isOptional() {
    return this._blocks.every(b => b.isOptional);
  }
  doCommit() {
    this._blocks.forEach(b => b.doCommit());
    super.doCommit();
  }
  get unmaskedValue() {
    return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((str, b) => str += b.unmaskedValue, '');
  }
  set unmaskedValue(unmaskedValue) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.unmaskedValue = unmaskedValue;
      this.appendTail(tail);
      this.doCommit();
    } else super.unmaskedValue = unmaskedValue;
  }
  get value() {
    return this.exposeBlock ? this.exposeBlock.value :
    // TODO return _value when not in change?
    this._blocks.reduce((str, b) => str += b.value, '');
  }
  set value(value) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.value = value;
      this.appendTail(tail);
      this.doCommit();
    } else super.value = value;
  }
  get typedValue() {
    return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
  }
  set typedValue(value) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.typedValue = value;
      this.appendTail(tail);
      this.doCommit();
    } else super.typedValue = value;
  }
  get displayValue() {
    return this._blocks.reduce((str, b) => str += b.displayValue, '');
  }
  appendTail(tail) {
    return super.appendTail(tail).aggregate(this._appendPlaceholder());
  }
  _appendEager() {
    var _this$_mapPosToBlock;
    const details = new _changeDetails.default();
    let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index;
    if (startBlockIndex == null) return details;

    // TODO test if it works for nested pattern masks
    if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
    for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
      const d = this._blocks[bi]._appendEager();
      if (!d.inserted) break;
      details.aggregate(d);
    }
    return details;
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const blockIter = this._mapPosToBlock(this.displayValue.length);
    const details = new _changeDetails.default();
    if (!blockIter) return details;
    for (let bi = blockIter.index;; ++bi) {
      var _flags$_beforeTailSta;
      const block = this._blocks[bi];
      if (!block) break;
      const blockDetails = block._appendChar(ch, {
        ...flags,
        _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
      });
      const skip = blockDetails.skip;
      details.aggregate(blockDetails);
      if (skip || blockDetails.rawInserted) break; // go next char
    }

    return details;
  }
  extractTail(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const chunkTail = new _chunkTailDetails.default();
    if (fromPos === toPos) return chunkTail;
    this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos) => {
      const blockChunk = b.extractTail(bFromPos, bToPos);
      blockChunk.stop = this._findStopBefore(bi);
      blockChunk.from = this._blockStartPos(bi);
      if (blockChunk instanceof _chunkTailDetails.default) blockChunk.blockIndex = bi;
      chunkTail.extend(blockChunk);
    });
    return chunkTail;
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    if (flags === void 0) {
      flags = {};
    }
    if (fromPos === toPos) return '';
    let input = '';
    this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos) => {
      input += b.extractInput(fromPos, toPos, flags);
    });
    return input;
  }
  _findStopBefore(blockIndex) {
    let stopBefore;
    for (let si = 0; si < this._stops.length; ++si) {
      const stop = this._stops[si];
      if (stop <= blockIndex) stopBefore = stop;else break;
    }
    return stopBefore;
  }

  /** Appends placeholder depending on laziness */
  _appendPlaceholder(toBlockIndex) {
    const details = new _changeDetails.default();
    if (this.lazy && toBlockIndex == null) return details;
    const startBlockIter = this._mapPosToBlock(this.displayValue.length);
    if (!startBlockIter) return details;
    const startBlockIndex = startBlockIter.index;
    const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
    this._blocks.slice(startBlockIndex, endBlockIndex).forEach(b => {
      if (!b.lazy || toBlockIndex != null) {
        var _blocks2;
        const bDetails = b._appendPlaceholder((_blocks2 = b._blocks) == null ? void 0 : _blocks2.length);
        this._value += bDetails.inserted;
        details.aggregate(bDetails);
      }
    });
    return details;
  }

  /** Finds block in pos */
  _mapPosToBlock(pos) {
    let accVal = '';
    for (let bi = 0; bi < this._blocks.length; ++bi) {
      const block = this._blocks[bi];
      const blockStartPos = accVal.length;
      accVal += block.displayValue;
      if (pos <= accVal.length) {
        return {
          index: bi,
          offset: pos - blockStartPos
        };
      }
    }
  }
  _blockStartPos(blockIndex) {
    return this._blocks.slice(0, blockIndex).reduce((pos, b) => pos += b.displayValue.length, 0);
  }
  _forEachBlocksInRange(fromPos, toPos, fn) {
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const fromBlockIter = this._mapPosToBlock(fromPos);
    if (fromBlockIter) {
      const toBlockIter = this._mapPosToBlock(toPos);
      // process first block
      const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
      const fromBlockStartPos = fromBlockIter.offset;
      const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].displayValue.length;
      fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
      if (toBlockIter && !isSameBlock) {
        // process intermediate blocks
        for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
          fn(this._blocks[bi], bi, 0, this._blocks[bi].displayValue.length);
        }

        // process last block
        fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
      }
    }
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const removeDetails = super.remove(fromPos, toPos);
    this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
      removeDetails.aggregate(b.remove(bFromPos, bToPos));
    });
    return removeDetails;
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _utils.DIRECTION.NONE;
    }
    if (!this._blocks.length) return 0;
    const cursor = new _cursor.default(this, cursorPos);
    if (direction === _utils.DIRECTION.NONE) {
      // -------------------------------------------------
      // NONE should only go out from fixed to the right!
      // -------------------------------------------------
      if (cursor.pushRightBeforeInput()) return cursor.pos;
      cursor.popState();
      if (cursor.pushLeftBeforeInput()) return cursor.pos;
      return this.displayValue.length;
    }

    // FORCE is only about a|* otherwise is 0
    if (direction === _utils.DIRECTION.LEFT || direction === _utils.DIRECTION.FORCE_LEFT) {
      // try to break fast when *|a
      if (direction === _utils.DIRECTION.LEFT) {
        cursor.pushRightBeforeFilled();
        if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
        cursor.popState();
      }

      // forward flow
      cursor.pushLeftBeforeInput();
      cursor.pushLeftBeforeRequired();
      cursor.pushLeftBeforeFilled();

      // backward flow
      if (direction === _utils.DIRECTION.LEFT) {
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
        cursor.popState();
        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
        cursor.popState();
      }
      if (cursor.ok) return cursor.pos;
      if (direction === _utils.DIRECTION.FORCE_LEFT) return 0;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      return 0;
    }
    if (direction === _utils.DIRECTION.RIGHT || direction === _utils.DIRECTION.FORCE_RIGHT) {
      // forward flow
      cursor.pushRightBeforeInput();
      cursor.pushRightBeforeRequired();
      if (cursor.pushRightBeforeFilled()) return cursor.pos;
      if (direction === _utils.DIRECTION.FORCE_RIGHT) return this.displayValue.length;

      // backward flow
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      return this.nearestInputPos(cursorPos, _utils.DIRECTION.LEFT);
    }
    return cursorPos;
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    let total = 0;
    this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
      total += b.totalInputPositions(bFromPos, bToPos);
    });
    return total;
  }

  /** Get block by name */
  maskedBlock(name) {
    return this.maskedBlocks(name)[0];
  }

  /** Get all blocks by name */
  maskedBlocks(name) {
    const indices = this._maskedBlocks[name];
    if (!indices) return [];
    return indices.map(gi => this._blocks[gi]);
  }
}
exports.default = MaskedPattern;
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _inputDefinition.default;
MaskedPattern.FixedDefinition = _fixedDefinition.default;
_holder.default.MaskedPattern = MaskedPattern;
},{"../core/change-details.js":"node_modules/imask/esm/core/change-details.js","../core/holder.js":"node_modules/imask/esm/core/holder.js","../core/utils.js":"node_modules/imask/esm/core/utils.js","./base.js":"node_modules/imask/esm/masked/base.js","./factory.js":"node_modules/imask/esm/masked/factory.js","./pattern/chunk-tail-details.js":"node_modules/imask/esm/masked/pattern/chunk-tail-details.js","./pattern/cursor.js":"node_modules/imask/esm/masked/pattern/cursor.js","./pattern/fixed-definition.js":"node_modules/imask/esm/masked/pattern/fixed-definition.js","./pattern/input-definition.js":"node_modules/imask/esm/masked/pattern/input-definition.js","./regexp.js":"node_modules/imask/esm/masked/regexp.js","../core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js"}],"node_modules/imask/esm/masked/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _holder = _interopRequireDefault(require("../core/holder.js"));
var _pattern = _interopRequireDefault(require("./pattern.js"));
require("../core/change-details.js");
require("../core/utils.js");
require("./base.js");
require("../core/continuous-tail-details.js");
require("./factory.js");
require("./pattern/chunk-tail-details.js");
require("./pattern/cursor.js");
require("./pattern/fixed-definition.js");
require("./pattern/input-definition.js");
require("./regexp.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Pattern which accepts ranges */
class MaskedRange extends _pattern.default {
  /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */

  /** Min bound */

  /** Max bound */

  /** */

  get _matchFrom() {
    return this.maxLength - String(this.from).length;
  }
  constructor(opts) {
    super(opts); // mask will be created in _update
  }

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      to = this.to || 0,
      from = this.from || 0,
      maxLength = this.maxLength || 0,
      autofix = this.autofix,
      ...patternOpts
    } = opts;
    this.to = to;
    this.from = from;
    this.maxLength = Math.max(String(to).length, maxLength);
    this.autofix = autofix;
    const fromStr = String(this.from).padStart(this.maxLength, '0');
    const toStr = String(this.to).padStart(this.maxLength, '0');
    let sameCharsCount = 0;
    while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
    patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(this.maxLength - sameCharsCount);
    super._update(patternOpts);
  }
  get isComplete() {
    return super.isComplete && Boolean(this.value);
  }
  boundaries(str) {
    let minstr = '';
    let maxstr = '';
    const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
    if (num) {
      minstr = '0'.repeat(placeholder.length) + num;
      maxstr = '9'.repeat(placeholder.length) + num;
    }
    minstr = minstr.padEnd(this.maxLength, '0');
    maxstr = maxstr.padEnd(this.maxLength, '9');
    return [minstr, maxstr];
  }
  doPrepareChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let details;
    [ch, details] = super.doPrepareChar(ch.replace(/\D/g, ''), flags);
    if (!this.autofix || !ch) return [ch, details];
    const fromStr = String(this.from).padStart(this.maxLength, '0');
    const toStr = String(this.to).padStart(this.maxLength, '0');
    const nextVal = this.value + ch;
    if (nextVal.length > this.maxLength) return ['', details];
    const [minstr, maxstr] = this.boundaries(nextVal);
    if (Number(maxstr) < this.from) return [fromStr[nextVal.length - 1], details];
    if (Number(minstr) > this.to) {
      if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
        return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
      }
      return [toStr[nextVal.length - 1], details];
    }
    return [ch, details];
  }
  doValidate(flags) {
    const str = this.value;
    const firstNonZero = str.search(/[^0]/);
    if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
    const [minstr, maxstr] = this.boundaries(str);
    return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
  }
}
exports.default = MaskedRange;
_holder.default.MaskedRange = MaskedRange;
},{"../core/holder.js":"node_modules/imask/esm/core/holder.js","./pattern.js":"node_modules/imask/esm/masked/pattern.js","../core/change-details.js":"node_modules/imask/esm/core/change-details.js","../core/utils.js":"node_modules/imask/esm/core/utils.js","./base.js":"node_modules/imask/esm/masked/base.js","../core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js","./factory.js":"node_modules/imask/esm/masked/factory.js","./pattern/chunk-tail-details.js":"node_modules/imask/esm/masked/pattern/chunk-tail-details.js","./pattern/cursor.js":"node_modules/imask/esm/masked/pattern/cursor.js","./pattern/fixed-definition.js":"node_modules/imask/esm/masked/pattern/fixed-definition.js","./pattern/input-definition.js":"node_modules/imask/esm/masked/pattern/input-definition.js","./regexp.js":"node_modules/imask/esm/masked/regexp.js"}],"node_modules/imask/esm/masked/date.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pattern = _interopRequireDefault(require("./pattern.js"));
var _range = _interopRequireDefault(require("./range.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
var _utils = require("../core/utils.js");
require("../core/change-details.js");
require("./base.js");
require("../core/continuous-tail-details.js");
require("./factory.js");
require("./pattern/chunk-tail-details.js");
require("./pattern/cursor.js");
require("./pattern/fixed-definition.js");
require("./pattern/input-definition.js");
require("./regexp.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Date mask */
class MaskedDate extends _pattern.default {
  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /** Format typed value to string */

  /** Parse string to get typed value */

  constructor(opts) {
    const {
      mask,
      pattern,
      ...patternOpts
    } = {
      ...MaskedDate.DEFAULTS,
      ...opts
    };
    super({
      ...patternOpts,
      mask: (0, _utils.isString)(mask) ? mask : pattern
    });
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      mask,
      pattern,
      blocks,
      ...patternOpts
    } = {
      ...MaskedDate.DEFAULTS,
      ...opts
    };
    const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
    // adjust year block
    if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
    if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
    if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
      patternBlocks.m.from = opts.min.getMonth() + 1;
      patternBlocks.m.to = opts.max.getMonth() + 1;
      if (patternBlocks.m.from === patternBlocks.m.to) {
        patternBlocks.d.from = opts.min.getDate();
        patternBlocks.d.to = opts.max.getDate();
      }
    }
    Object.assign(patternBlocks, this.blocks, blocks);

    // add autofix
    Object.keys(patternBlocks).forEach(bk => {
      const b = patternBlocks[bk];
      if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
    });
    super._update({
      ...patternOpts,
      mask: (0, _utils.isString)(mask) ? mask : pattern,
      blocks: patternBlocks
    });
  }
  doValidate(flags) {
    const date = this.date;
    return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
  }

  /** Checks if date is exists */
  isDateExist(str) {
    return this.format(this.parse(str, this), this).indexOf(str) >= 0;
  }

  /** Parsed Date */
  get date() {
    return this.typedValue;
  }
  set date(date) {
    this.typedValue = date;
  }
  get typedValue() {
    return this.isComplete ? super.typedValue : null;
  }
  set typedValue(value) {
    super.typedValue = value;
  }
  maskEquals(mask) {
    return mask === Date || super.maskEquals(mask);
  }
}
exports.default = MaskedDate;
MaskedDate.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: _range.default,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: _range.default,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: _range.default,
    from: 1900,
    to: 9999
  }
});
MaskedDate.DEFAULTS = {
  mask: Date,
  pattern: 'd{.}`m{.}`Y',
  format: (date, masked) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: (str, masked) => {
    const [day, month, year] = str.split('.').map(Number);
    return new Date(year, month - 1, day);
  }
};
_holder.default.MaskedDate = MaskedDate;
},{"./pattern.js":"node_modules/imask/esm/masked/pattern.js","./range.js":"node_modules/imask/esm/masked/range.js","../core/holder.js":"node_modules/imask/esm/core/holder.js","../core/utils.js":"node_modules/imask/esm/core/utils.js","../core/change-details.js":"node_modules/imask/esm/core/change-details.js","./base.js":"node_modules/imask/esm/masked/base.js","../core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js","./factory.js":"node_modules/imask/esm/masked/factory.js","./pattern/chunk-tail-details.js":"node_modules/imask/esm/masked/pattern/chunk-tail-details.js","./pattern/cursor.js":"node_modules/imask/esm/masked/pattern/cursor.js","./pattern/fixed-definition.js":"node_modules/imask/esm/masked/pattern/fixed-definition.js","./pattern/input-definition.js":"node_modules/imask/esm/masked/pattern/input-definition.js","./regexp.js":"node_modules/imask/esm/masked/regexp.js"}],"node_modules/imask/esm/masked/dynamic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../core/utils.js");
var _changeDetails = _interopRequireDefault(require("../core/change-details.js"));
var _factory = _interopRequireWildcard(require("./factory.js"));
var _base = _interopRequireDefault(require("./base.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
require("../core/continuous-tail-details.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Dynamic mask for choosing appropriate mask in run-time */
class MaskedDynamic extends _base.default {
  /** Currently chosen mask */

  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  constructor(opts) {
    super({
      ...MaskedDynamic.DEFAULTS,
      ...opts
    });
    this.currentMask = undefined;
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update(opts);
    if ('mask' in opts) {
      this.exposeMask = undefined;
      // mask could be totally dynamic with only `dispatch` option
      this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => {
        const {
          expose,
          ...maskOpts
        } = (0, _factory.normalizeOpts)(m);
        const masked = (0, _factory.default)({
          overwrite: this._overwrite,
          eager: this._eager,
          skipInvalid: this._skipInvalid,
          ...maskOpts
        });
        if (expose) this.exposeMask = masked;
        return masked;
      }) : [];

      // this.currentMask = this.doDispatch(''); // probably not needed but lets see
    }
  }

  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const details = this._applyDispatch(ch, flags);
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
    }
    return details;
  }
  _applyDispatch(appended, flags, tail) {
    if (appended === void 0) {
      appended = '';
    }
    if (flags === void 0) {
      flags = {};
    }
    if (tail === void 0) {
      tail = '';
    }
    const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
    const inputValue = this.rawInputValue;
    const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
    const tailValue = inputValue.slice(insertValue.length);
    const prevMask = this.currentMask;
    const details = new _changeDetails.default();
    const prevMaskState = prevMask == null ? void 0 : prevMask.state;

    // clone flags to prevent overwriting `_beforeTailState`
    this.currentMask = this.doDispatch(appended, {
      ...flags
    }, tail);

    // restore state after dispatch
    if (this.currentMask) {
      if (this.currentMask !== prevMask) {
        // if mask changed reapply input
        this.currentMask.reset();
        if (insertValue) {
          const d = this.currentMask.append(insertValue, {
            raw: true
          });
          details.tailShift = d.inserted.length - prevValueBeforeTail.length;
        }
        if (tailValue) {
          details.tailShift += this.currentMask.append(tailValue, {
            raw: true,
            tail: true
          }).tailShift;
        }
      } else if (prevMaskState) {
        // Dispatch can do something bad with state, so
        // restore prev mask state
        this.currentMask.state = prevMaskState;
      }
    }
    return details;
  }
  _appendPlaceholder() {
    const details = this._applyDispatch();
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendPlaceholder());
    }
    return details;
  }
  _appendEager() {
    const details = this._applyDispatch();
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendEager());
    }
    return details;
  }
  appendTail(tail) {
    const details = new _changeDetails.default();
    if (tail) details.aggregate(this._applyDispatch('', {}, tail));
    return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
  }
  currentMaskFlags(flags) {
    var _flags$_beforeTailSta, _flags$_beforeTailSta2;
    return {
      ...flags,
      _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
    };
  }
  doDispatch(appended, flags, tail) {
    if (flags === void 0) {
      flags = {};
    }
    if (tail === void 0) {
      tail = '';
    }
    return this.dispatch(appended, this, flags, tail);
  }
  doValidate(flags) {
    return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
  }
  doPrepare(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let [s, details] = super.doPrepare(str, flags);
    if (this.currentMask) {
      let currentDetails;
      [s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
      details = details.aggregate(currentDetails);
    }
    return [s, details];
  }
  doPrepareChar(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let [s, details] = super.doPrepareChar(str, flags);
    if (this.currentMask) {
      let currentDetails;
      [s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
      details = details.aggregate(currentDetails);
    }
    return [s, details];
  }
  reset() {
    var _this$currentMask;
    (_this$currentMask = this.currentMask) == null ? void 0 : _this$currentMask.reset();
    this.compiledMasks.forEach(m => m.reset());
  }
  get value() {
    return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : '';
  }
  set value(value) {
    if (this.exposeMask) {
      this.exposeMask.value = value;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
    } else super.value = value;
  }
  get unmaskedValue() {
    return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : '';
  }
  set unmaskedValue(unmaskedValue) {
    if (this.exposeMask) {
      this.exposeMask.unmaskedValue = unmaskedValue;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
    } else super.unmaskedValue = unmaskedValue;
  }
  get typedValue() {
    return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : '';
  }
  set typedValue(typedValue) {
    if (this.exposeMask) {
      this.exposeMask.typedValue = typedValue;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
      return;
    }
    let unmaskedValue = String(typedValue);

    // double check it
    if (this.currentMask) {
      this.currentMask.typedValue = typedValue;
      unmaskedValue = this.currentMask.unmaskedValue;
    }
    this.unmaskedValue = unmaskedValue;
  }
  get displayValue() {
    return this.currentMask ? this.currentMask.displayValue : '';
  }
  get isComplete() {
    var _this$currentMask2;
    return Boolean((_this$currentMask2 = this.currentMask) == null ? void 0 : _this$currentMask2.isComplete);
  }
  get isFilled() {
    var _this$currentMask3;
    return Boolean((_this$currentMask3 = this.currentMask) == null ? void 0 : _this$currentMask3.isFilled);
  }
  remove(fromPos, toPos) {
    const details = new _changeDetails.default();
    if (this.currentMask) {
      details.aggregate(this.currentMask.remove(fromPos, toPos))
      // update with dispatch
      .aggregate(this._applyDispatch());
    }
    return details;
  }
  get state() {
    var _this$currentMask4;
    return {
      ...super.state,
      _rawInputValue: this.rawInputValue,
      compiledMasks: this.compiledMasks.map(m => m.state),
      currentMaskRef: this.currentMask,
      currentMask: (_this$currentMask4 = this.currentMask) == null ? void 0 : _this$currentMask4.state
    };
  }
  set state(state) {
    const {
      compiledMasks,
      currentMaskRef,
      currentMask,
      ...maskedState
    } = state;
    if (compiledMasks) this.compiledMasks.forEach((m, mi) => m.state = compiledMasks[mi]);
    if (currentMaskRef != null) {
      this.currentMask = currentMaskRef;
      this.currentMask.state = currentMask;
    }
    super.state = maskedState;
  }
  extractInput(fromPos, toPos, flags) {
    return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : '';
  }
  extractTail(fromPos, toPos) {
    return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
  }
  doCommit() {
    if (this.currentMask) this.currentMask.doCommit();
    super.doCommit();
  }
  nearestInputPos(cursorPos, direction) {
    return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
  }
  get overwrite() {
    return this.currentMask ? this.currentMask.overwrite : this._overwrite;
  }
  set overwrite(overwrite) {
    this._overwrite = overwrite;
  }
  get eager() {
    return this.currentMask ? this.currentMask.eager : this._eager;
  }
  set eager(eager) {
    this._eager = eager;
  }
  get skipInvalid() {
    return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
  }
  set skipInvalid(skipInvalid) {
    this._skipInvalid = skipInvalid;
  }
  maskEquals(mask) {
    return Array.isArray(mask) ? this.compiledMasks.every((m, mi) => {
      if (!mask[mi]) return;
      const {
        mask: oldMask,
        ...restOpts
      } = mask[mi];
      return (0, _utils.objectIncludes)(m, restOpts) && m.maskEquals(oldMask);
    }) : super.maskEquals(mask);
  }
  typedValueEquals(value) {
    var _this$currentMask5;
    return Boolean((_this$currentMask5 = this.currentMask) == null ? void 0 : _this$currentMask5.typedValueEquals(value));
  }
}
exports.default = MaskedDynamic;
MaskedDynamic.DEFAULTS = void 0;
MaskedDynamic.DEFAULTS = {
  dispatch: (appended, masked, flags, tail) => {
    if (!masked.compiledMasks.length) return;
    const inputValue = masked.rawInputValue;

    // simulate input
    const inputs = masked.compiledMasks.map((m, index) => {
      const isCurrent = masked.currentMask === m;
      const startInputPos = isCurrent ? m.displayValue.length : m.nearestInputPos(m.displayValue.length, _utils.DIRECTION.FORCE_LEFT);
      if (m.rawInputValue !== inputValue) {
        m.reset();
        m.append(inputValue, {
          raw: true
        });
      } else if (!isCurrent) {
        m.remove(startInputPos);
      }
      m.append(appended, masked.currentMaskFlags(flags));
      m.appendTail(tail);
      return {
        index,
        weight: m.rawInputValue.length,
        totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.displayValue.length, _utils.DIRECTION.FORCE_LEFT)))
      };
    });

    // pop masks with longer values first
    inputs.sort((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
    return masked.compiledMasks[inputs[0].index];
  }
};
_holder.default.MaskedDynamic = MaskedDynamic;
},{"../core/utils.js":"node_modules/imask/esm/core/utils.js","../core/change-details.js":"node_modules/imask/esm/core/change-details.js","./factory.js":"node_modules/imask/esm/masked/factory.js","./base.js":"node_modules/imask/esm/masked/base.js","../core/holder.js":"node_modules/imask/esm/core/holder.js","../core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js"}],"node_modules/imask/esm/masked/enum.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pattern = _interopRequireDefault(require("./pattern.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
require("../core/change-details.js");
require("../core/utils.js");
require("./base.js");
require("../core/continuous-tail-details.js");
require("./factory.js");
require("./pattern/chunk-tail-details.js");
require("./pattern/cursor.js");
require("./pattern/fixed-definition.js");
require("./pattern/input-definition.js");
require("./regexp.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Pattern which validates enum values */
class MaskedEnum extends _pattern.default {
  constructor(opts) {
    super(opts); // mask will be created in _update
  }

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      enum: _enum,
      ...eopts
    } = opts;
    if (_enum) {
      const lengths = _enum.map(e => e.length);
      const requiredLength = Math.min(...lengths);
      const optionalLength = Math.max(...lengths) - requiredLength;
      eopts.mask = '*'.repeat(requiredLength);
      if (optionalLength) eopts.mask += '[' + '*'.repeat(optionalLength) + ']';
      this.enum = _enum;
    }
    super._update(eopts);
  }
  doValidate(flags) {
    return this.enum.some(e => e.indexOf(this.unmaskedValue) === 0) && super.doValidate(flags);
  }
}
exports.default = MaskedEnum;
_holder.default.MaskedEnum = MaskedEnum;
},{"./pattern.js":"node_modules/imask/esm/masked/pattern.js","../core/holder.js":"node_modules/imask/esm/core/holder.js","../core/change-details.js":"node_modules/imask/esm/core/change-details.js","../core/utils.js":"node_modules/imask/esm/core/utils.js","./base.js":"node_modules/imask/esm/masked/base.js","../core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js","./factory.js":"node_modules/imask/esm/masked/factory.js","./pattern/chunk-tail-details.js":"node_modules/imask/esm/masked/pattern/chunk-tail-details.js","./pattern/cursor.js":"node_modules/imask/esm/masked/pattern/cursor.js","./pattern/fixed-definition.js":"node_modules/imask/esm/masked/pattern/fixed-definition.js","./pattern/input-definition.js":"node_modules/imask/esm/masked/pattern/input-definition.js","./regexp.js":"node_modules/imask/esm/masked/regexp.js"}],"node_modules/imask/esm/masked/function.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _base = _interopRequireDefault(require("./base.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
require("../core/change-details.js");
require("../core/continuous-tail-details.js");
require("../core/utils.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Masking by custom Function */
class MaskedFunction extends _base.default {
  /** */

  /** Enable characters overwriting */

  /** */

  /** */

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update({
      ...opts,
      validate: opts.mask
    });
  }
}
exports.default = MaskedFunction;
_holder.default.MaskedFunction = MaskedFunction;
},{"./base.js":"node_modules/imask/esm/masked/base.js","../core/holder.js":"node_modules/imask/esm/core/holder.js","../core/change-details.js":"node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js","../core/utils.js":"node_modules/imask/esm/core/utils.js"}],"node_modules/imask/esm/masked/number.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../core/utils.js");
var _changeDetails = _interopRequireDefault(require("../core/change-details.js"));
var _base = _interopRequireDefault(require("./base.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
require("../core/continuous-tail-details.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Number mask */
class MaskedNumber extends _base.default {
  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */

  /** Enable characters overwriting */

  /** */

  /** */

  /** Format typed value to string */

  /** Parse string to get typed value */

  constructor(opts) {
    super({
      ...MaskedNumber.DEFAULTS,
      ...opts
    });
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update(opts);
    this._updateRegExps();
  }
  _updateRegExps() {
    const start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
    const mid = '\\d*';
    const end = (this.scale ? "(" + (0, _utils.escapeRegExp)(this.radix) + "\\d{0," + this.scale + "})?" : '') + '$';
    this._numberRegExp = new RegExp(start + mid + end);
    this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(_utils.escapeRegExp).join('') + "]", 'g');
    this._thousandsSeparatorRegExp = new RegExp((0, _utils.escapeRegExp)(this.thousandsSeparator), 'g');
  }
  _removeThousandsSeparators(value) {
    return value.replace(this._thousandsSeparatorRegExp, '');
  }
  _insertThousandsSeparators(value) {
    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    const parts = value.split(this.radix);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
    return parts.join(this.radix);
  }
  doPrepareChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const [prepCh, details] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (
    /*
      radix should be mapped when
      1) input is done from keyboard = flags.input && flags.raw
      2) unmasked value is set = !flags.input && !flags.raw
      and should not be mapped when
      1) value is set = flags.input && !flags.raw
      2) raw value is set = !flags.input && flags.raw
    */
    flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch), flags);
    if (ch && !prepCh) details.skip = true;
    if (prepCh && !this.allowPositive && !this.value && prepCh !== '-') details.aggregate(this._appendChar('-'));
    return [prepCh, details];
  }
  _separatorsCount(to, extendOnSeparators) {
    if (extendOnSeparators === void 0) {
      extendOnSeparators = false;
    }
    let count = 0;
    for (let pos = 0; pos < to; ++pos) {
      if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
        ++count;
        if (extendOnSeparators) to += this.thousandsSeparator.length;
      }
    }
    return count;
  }
  _separatorsCountFromSlice(slice) {
    if (slice === void 0) {
      slice = this._value;
    }
    return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
    return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    if (!this.thousandsSeparator) return super._appendCharRaw(ch, flags);
    const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
    const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
    this._value = this._removeThousandsSeparators(this.value);
    const appendDetails = super._appendCharRaw(ch, flags);
    this._value = this._insertThousandsSeparators(this._value);
    const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
    const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
    appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
    appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
    return appendDetails;
  }
  _findSeparatorAround(pos) {
    if (this.thousandsSeparator) {
      const searchFrom = pos - this.thousandsSeparator.length + 1;
      const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
      if (separatorPos <= pos) return separatorPos;
    }
    return -1;
  }
  _adjustRangeWithSeparators(from, to) {
    const separatorAroundFromPos = this._findSeparatorAround(from);
    if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
    const separatorAroundToPos = this._findSeparatorAround(to);
    if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
    return [from, to];
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
    const valueBeforePos = this.value.slice(0, fromPos);
    const valueAfterPos = this.value.slice(toPos);
    const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
    this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
    const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
    return new _changeDetails.default({
      tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(cursorPos, direction) {
    if (!this.thousandsSeparator) return cursorPos;
    switch (direction) {
      case _utils.DIRECTION.NONE:
      case _utils.DIRECTION.LEFT:
      case _utils.DIRECTION.FORCE_LEFT:
        {
          const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
          if (separatorAtLeftPos >= 0) {
            const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _utils.DIRECTION.FORCE_LEFT) {
              return separatorAtLeftPos;
            }
          }
          break;
        }
      case _utils.DIRECTION.RIGHT:
      case _utils.DIRECTION.FORCE_RIGHT:
        {
          const separatorAtRightPos = this._findSeparatorAround(cursorPos);
          if (separatorAtRightPos >= 0) {
            return separatorAtRightPos + this.thousandsSeparator.length;
          }
        }
    }
    return cursorPos;
  }
  doValidate(flags) {
    // validate as string
    let valid = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
    if (valid) {
      // validate as number
      const number = this.number;
      valid = valid && !isNaN(number) && (
      // check min bound for negative values
      this.min == null || this.min >= 0 || this.min <= this.number) && (
      // check max bound for positive values
      this.max == null || this.max <= 0 || this.number <= this.max);
    }
    return valid && super.doValidate(flags);
  }
  doCommit() {
    if (this.value) {
      const number = this.number;
      let validnum = number;

      // check bounds
      if (this.min != null) validnum = Math.max(validnum, this.min);
      if (this.max != null) validnum = Math.min(validnum, this.max);
      if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
      let formatted = this.value;
      if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
      if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
      this._value = formatted;
    }
    super.doCommit();
  }
  _normalizeZeros(value) {
    const parts = this._removeThousandsSeparators(value).split(this.radix);

    // remove leading zeros
    parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num) => sign + num);
    // add leading zero
    if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
    if (parts.length > 1) {
      parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
      if (!parts[1].length) parts.length = 1; // remove fractional
    }

    return this._insertThousandsSeparators(parts.join(this.radix));
  }
  _padFractionalZeros(value) {
    if (!value) return value;
    const parts = value.split(this.radix);
    if (parts.length < 2) parts.push('');
    parts[1] = parts[1].padEnd(this.scale, '0');
    return parts.join(this.radix);
  }
  doSkipInvalid(ch, flags, checkTail) {
    if (flags === void 0) {
      flags = {};
    }
    const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
    return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
  }
  set unmaskedValue(unmaskedValue) {
    super.unmaskedValue = unmaskedValue;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(n) {
    this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
  }

  /** Parsed Number */
  get number() {
    return this.typedValue;
  }
  set number(number) {
    this.typedValue = number;
  }

  /**
    Is negative allowed
  */
  get allowNegative() {
    return this.min != null && this.min < 0 || this.max != null && this.max < 0;
  }

  /**
    Is positive allowed
  */
  get allowPositive() {
    return this.min != null && this.min > 0 || this.max != null && this.max > 0;
  }
  typedValueEquals(value) {
    // handle  0 -> '' case (typed = 0 even if value = '')
    // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
    return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
  }
}
exports.default = MaskedNumber;
MaskedNumber.UNMASKED_RADIX = '.';
MaskedNumber.EMPTY_VALUES = [..._base.default.EMPTY_VALUES, 0];
MaskedNumber.DEFAULTS = {
  mask: Number,
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: [MaskedNumber.UNMASKED_RADIX],
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  scale: 2,
  normalizeZeros: true,
  padFractionalZeros: false,
  parse: Number,
  format: n => n.toLocaleString('en-US', {
    useGrouping: false,
    maximumFractionDigits: 20
  })
};
_holder.default.MaskedNumber = MaskedNumber;
},{"../core/utils.js":"node_modules/imask/esm/core/utils.js","../core/change-details.js":"node_modules/imask/esm/core/change-details.js","./base.js":"node_modules/imask/esm/masked/base.js","../core/holder.js":"node_modules/imask/esm/core/holder.js","../core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js"}],"node_modules/imask/esm/masked/pipe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PIPE_TYPE = void 0;
exports.createPipe = createPipe;
exports.pipe = pipe;
var _factory = _interopRequireDefault(require("./factory.js"));
var _holder = _interopRequireDefault(require("../core/holder.js"));
require("../core/utils.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Mask pipe source and destination types */
const PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */
exports.PIPE_TYPE = PIPE_TYPE;
function createPipe(arg, from, to) {
  if (from === void 0) {
    from = PIPE_TYPE.MASKED;
  }
  if (to === void 0) {
    to = PIPE_TYPE.MASKED;
  }
  const masked = (0, _factory.default)(arg);
  return value => masked.runIsolated(m => {
    m[from] = value;
    return m[to];
  });
}

/** Pipes value through mask depending on mask type, source and destination options */
function pipe(value, mask, from, to) {
  return createPipe(mask, from, to)(value);
}
_holder.default.PIPE_TYPE = PIPE_TYPE;
_holder.default.createPipe = createPipe;
_holder.default.pipe = pipe;
},{"./factory.js":"node_modules/imask/esm/masked/factory.js","../core/holder.js":"node_modules/imask/esm/core/holder.js","../core/utils.js":"node_modules/imask/esm/core/utils.js"}],"node_modules/imask/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ChangeDetails", {
  enumerable: true,
  get: function () {
    return _changeDetails.default;
  }
});
Object.defineProperty(exports, "ChunksTailDetails", {
  enumerable: true,
  get: function () {
    return _chunkTailDetails.default;
  }
});
Object.defineProperty(exports, "DIRECTION", {
  enumerable: true,
  get: function () {
    return _utils.DIRECTION;
  }
});
Object.defineProperty(exports, "HTMLContenteditableMaskElement", {
  enumerable: true,
  get: function () {
    return _htmlContenteditableMaskElement.default;
  }
});
Object.defineProperty(exports, "HTMLInputMaskElement", {
  enumerable: true,
  get: function () {
    return _htmlInputMaskElement.default;
  }
});
Object.defineProperty(exports, "HTMLMaskElement", {
  enumerable: true,
  get: function () {
    return _htmlMaskElement.default;
  }
});
Object.defineProperty(exports, "InputMask", {
  enumerable: true,
  get: function () {
    return _input.default;
  }
});
Object.defineProperty(exports, "MaskElement", {
  enumerable: true,
  get: function () {
    return _maskElement.default;
  }
});
Object.defineProperty(exports, "Masked", {
  enumerable: true,
  get: function () {
    return _base.default;
  }
});
Object.defineProperty(exports, "MaskedDate", {
  enumerable: true,
  get: function () {
    return _date.default;
  }
});
Object.defineProperty(exports, "MaskedDynamic", {
  enumerable: true,
  get: function () {
    return _dynamic.default;
  }
});
Object.defineProperty(exports, "MaskedEnum", {
  enumerable: true,
  get: function () {
    return _enum.default;
  }
});
Object.defineProperty(exports, "MaskedFunction", {
  enumerable: true,
  get: function () {
    return _function.default;
  }
});
Object.defineProperty(exports, "MaskedNumber", {
  enumerable: true,
  get: function () {
    return _number.default;
  }
});
Object.defineProperty(exports, "MaskedPattern", {
  enumerable: true,
  get: function () {
    return _pattern.default;
  }
});
Object.defineProperty(exports, "MaskedRange", {
  enumerable: true,
  get: function () {
    return _range.default;
  }
});
Object.defineProperty(exports, "MaskedRegExp", {
  enumerable: true,
  get: function () {
    return _regexp.default;
  }
});
Object.defineProperty(exports, "PIPE_TYPE", {
  enumerable: true,
  get: function () {
    return _pipe.PIPE_TYPE;
  }
});
Object.defineProperty(exports, "PatternFixedDefinition", {
  enumerable: true,
  get: function () {
    return _fixedDefinition.default;
  }
});
Object.defineProperty(exports, "PatternInputDefinition", {
  enumerable: true,
  get: function () {
    return _inputDefinition.default;
  }
});
Object.defineProperty(exports, "createMask", {
  enumerable: true,
  get: function () {
    return _factory.default;
  }
});
Object.defineProperty(exports, "createPipe", {
  enumerable: true,
  get: function () {
    return _pipe.createPipe;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _holder.default;
  }
});
Object.defineProperty(exports, "forceDirection", {
  enumerable: true,
  get: function () {
    return _utils.forceDirection;
  }
});
Object.defineProperty(exports, "normalizeOpts", {
  enumerable: true,
  get: function () {
    return _factory.normalizeOpts;
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});
var _input = _interopRequireDefault(require("./controls/input.js"));
var _holder = _interopRequireDefault(require("./core/holder.js"));
var _htmlContenteditableMaskElement = _interopRequireDefault(require("./controls/html-contenteditable-mask-element.js"));
var _htmlInputMaskElement = _interopRequireDefault(require("./controls/html-input-mask-element.js"));
var _htmlMaskElement = _interopRequireDefault(require("./controls/html-mask-element.js"));
var _maskElement = _interopRequireDefault(require("./controls/mask-element.js"));
var _changeDetails = _interopRequireDefault(require("./core/change-details.js"));
var _utils = require("./core/utils.js");
var _base = _interopRequireDefault(require("./masked/base.js"));
var _date = _interopRequireDefault(require("./masked/date.js"));
var _dynamic = _interopRequireDefault(require("./masked/dynamic.js"));
var _enum = _interopRequireDefault(require("./masked/enum.js"));
var _factory = _interopRequireWildcard(require("./masked/factory.js"));
var _function = _interopRequireDefault(require("./masked/function.js"));
var _number = _interopRequireDefault(require("./masked/number.js"));
var _pattern = _interopRequireDefault(require("./masked/pattern.js"));
var _chunkTailDetails = _interopRequireDefault(require("./masked/pattern/chunk-tail-details.js"));
var _fixedDefinition = _interopRequireDefault(require("./masked/pattern/fixed-definition.js"));
var _inputDefinition = _interopRequireDefault(require("./masked/pattern/input-definition.js"));
var _pipe = require("./masked/pipe.js");
var _range = _interopRequireDefault(require("./masked/range.js"));
var _regexp = _interopRequireDefault(require("./masked/regexp.js"));
require("./core/action-details.js");
require("./core/continuous-tail-details.js");
require("./masked/pattern/cursor.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
try {
  globalThis.IMask = _holder.default;
} catch {}
},{"./controls/input.js":"node_modules/imask/esm/controls/input.js","./core/holder.js":"node_modules/imask/esm/core/holder.js","./controls/html-contenteditable-mask-element.js":"node_modules/imask/esm/controls/html-contenteditable-mask-element.js","./controls/html-input-mask-element.js":"node_modules/imask/esm/controls/html-input-mask-element.js","./controls/html-mask-element.js":"node_modules/imask/esm/controls/html-mask-element.js","./controls/mask-element.js":"node_modules/imask/esm/controls/mask-element.js","./core/change-details.js":"node_modules/imask/esm/core/change-details.js","./core/utils.js":"node_modules/imask/esm/core/utils.js","./masked/base.js":"node_modules/imask/esm/masked/base.js","./masked/date.js":"node_modules/imask/esm/masked/date.js","./masked/dynamic.js":"node_modules/imask/esm/masked/dynamic.js","./masked/enum.js":"node_modules/imask/esm/masked/enum.js","./masked/factory.js":"node_modules/imask/esm/masked/factory.js","./masked/function.js":"node_modules/imask/esm/masked/function.js","./masked/number.js":"node_modules/imask/esm/masked/number.js","./masked/pattern.js":"node_modules/imask/esm/masked/pattern.js","./masked/pattern/chunk-tail-details.js":"node_modules/imask/esm/masked/pattern/chunk-tail-details.js","./masked/pattern/fixed-definition.js":"node_modules/imask/esm/masked/pattern/fixed-definition.js","./masked/pattern/input-definition.js":"node_modules/imask/esm/masked/pattern/input-definition.js","./masked/pipe.js":"node_modules/imask/esm/masked/pipe.js","./masked/range.js":"node_modules/imask/esm/masked/range.js","./masked/regexp.js":"node_modules/imask/esm/masked/regexp.js","./core/action-details.js":"node_modules/imask/esm/core/action-details.js","./core/continuous-tail-details.js":"node_modules/imask/esm/core/continuous-tail-details.js","./masked/pattern/cursor.js":"node_modules/imask/esm/masked/pattern/cursor.js"}],"components/modal/freeLesson/FreeLesson.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Vector = _interopRequireDefault(require("../freeLesson/img/Vector.svg"));
var _Cancel = _interopRequireDefault(require("../freeLesson/img/Cancel.svg"));
var _TechnicalFunctions = _interopRequireDefault(require("../../../technicalFunctions/TechnicalFunctions"));
var _imask = _interopRequireDefault(require("imask"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FreeLesson = /*#__PURE__*/function () {
  function FreeLesson() {
    _classCallCheck(this, FreeLesson);
    this.mask = '';
  }
  _createClass(FreeLesson, [{
    key: "render",
    value: function render() {
      var htmlContent = " \n            <div class=\"modal\" id=\"modal-container\" data-close=\"true\">\n                <div class=\"modal__body _container\" >\n                    <img src=\"".concat(_Cancel.default, "\" alt=\"close\" class=\"modal__close\" data-close=\"true\">\n                    <div class=\"modal__container\">\n                        <h3 class=\"modal__title\">\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u043F\u0440\u043E\u0431\u043D\u043E\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0435</h3>\n                        <form action=\"#\" class=\"modal__form\" id=\"form-free-lesson\">\n                            <div class=\"modal__input-container\">\n                                <input class=\"modal__input modal__input_name _modal-req\" placeholder=\"\u0418\u043C\u044F\" data-input=\"true\">\n                                <img src=\"").concat(_Vector.default, "\" alt=\"star\">\n                            </div>\n                            <div class=\"modal__input-container\">\n                                <input class=\"modal__input modal__input_birthday _modal-req\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\" data-input=\"true\">\n                                <img src=\"").concat(_Vector.default, "\" alt=\"star\">\n                            </div>\n                            <div class=\"modal__input-container\">\n                                <input class=\"modal__input modal__input_phone _modal-req\" placeholder=\"+7 (___)-___-__-__\" type=\"tel\" data-input=\"true\">\n                                <img src=\"").concat(_Vector.default, "\" alt=\"star\">\n                            </div>\n                            \n                            <div class=\"modal__input-container\">\n                                <input class=\"modal__input modal__input_email _modal-req _modal-email\" placeholder=\"example@mail.ru\" type=\"email\" data-input=\"true\">\n                                <img src=\"").concat(_Vector.default, "\" alt=\"star\" data-input=\"true\">\n                            </div>\n\n\n                            <textarea class=\"modal__input modal__input_textarea\" placeholder=\"\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\" maxlength=\"140\" data-input=\"true\"></textarea>\n\n                            \n                            <p class=\"modal__paragraph\"><img src=\"").concat(_Vector.default, "\" alt=\"star\"> \u041F\u043E\u043B\u044F, \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</p>\n                            <button class=\"modal__button _button-green\">\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            ");
      var htmlWrapper = "\n                <div class=\"modal__wrapper\">\n                    ".concat(htmlContent, "\n                </div>\n            ");
      ROOT_MODAL.innerHTML = htmlWrapper;
    }
  }, {
    key: "open",
    value: function open() {
      // this.render();
      var modal = document.querySelector('.modal');
      var modalBody = document.querySelector('.modal__body');
      modal.classList.remove('hidden'); // анимации появления окна
      modal.classList.add('open');
      modalBody.classList.remove('hidden');
      modalBody.classList.add('open');
    }
  }, {
    key: "close",
    value: function close() {
      var modal = document.querySelector('.modal');
      var form = document.getElementById('form-free-lesson');
      form.reset();
      modal.querySelectorAll('input').forEach(function (input) {
        input.classList.remove('_error');
      });
      var modalWindow = document.querySelector('.modal__body');
      if (modal) {
        modalWindow.classList.remove('open');
        modalWindow.parentElement.classList.remove('open');
        modalWindow.classList.add('disappearance');
        modalWindow.parentElement.classList.add('disappearance');
        setTimeout(function () {
          modalWindow.classList.remove('disappearance');
          modalWindow.parentElement.classList.remove('disappearance');
          modalWindow.classList.add('hidden');
          modalWindow.parentElement.classList.add('hidden');
          // ROOT_MODAL.innerHTML = ''
        }, 300);
      }
      ;
    }
  }, {
    key: "sendForm",
    value: function sendForm() {
      var _this = this;
      var form = document.getElementById('form-free-lesson');
      var container = document.getElementById('modal-container');
      this.maskForPhone();
      document.addEventListener('keydown', function (event) {
        if (event.code == 'Escape') {
          _this.close();
        }
        ;
      });
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var error = formValidate(form);
        var formData = new FormData(form);
        if (error == 0) {
          container.classList.add('_sending');
          form.reset();
          setTimeout(function () {
            var response = fetch('sendmail.php', {
              // await
              method: 'POST',
              body: formData
            });
            if (response.ok) {
              var result = response.json(); // await
              alert(result.message);
              form.reset();
              container.classList.remove('_sending');
            } else {
              alert('Ошибка отправки данных на сервер');
              container.classList.remove('_sending');
              var modal = document.querySelector('.modal'); // дублирование кода
              var modalWindow = document.querySelector('.modal__body');
              if (modal) {
                modalWindow.classList.remove('open');
                modalWindow.parentElement.classList.remove('open');
                modalWindow.classList.add('disappearance');
                modalWindow.parentElement.classList.add('disappearance');
                setTimeout(function () {
                  modalWindow.classList.remove('disappearance');
                  modalWindow.parentElement.classList.remove('disappearance');
                  modalWindow.classList.add('hidden');
                  modalWindow.parentElement.classList.add('hidden');
                  // ROOT_MODAL.innerHTML = ''
                }, 300);
              }
              ; // дублирование кода
            }
          }, 1000);
        } else {
          alert('Заполните обязательные поля');
        }
      });
      var formValidate = function formValidate() {
        var error = 0;
        var formReq = document.querySelectorAll('._modal-req');
        for (var i = 0; i < formReq.length; i++) {
          var input = formReq[i];
          _TechnicalFunctions.default.formRemoveError(input);
          if (input.classList.contains('_modal-email')) {
            if (!_TechnicalFunctions.default.emailTest(input)) {
              formAddError(input);
              error++;
            }
          } else if (input.value == '') {
            formAddError(input);
            error++;
          } else if (input.classList.contains('modal__input_phone') && !_this.mask.masked.isComplete) {
            formAddError(input);
            error++;
            input.value = '';
            input.placeholder = 'Введите номер телефона';
          }
        }
        return error;
      };
      function formAddError(input) {
        input.classList.add('_error');
        if (input.placeholder == 'Имя') {
          input.placeholder = 'Введите имя';
        } else if (input.placeholder == 'example@mail.ru' || input.placeholder == 'Введите почтовый адрес') {
          input.placeholder = 'Введите почтовый адрес';
        } else if (input.placeholder == '+7 (___)-___-__-__') {
          input.placeholder = 'Введите номер телефона';
        }
      }
    }
  }, {
    key: "maskForPhone",
    value: function maskForPhone() {
      var phoneInput = document.querySelector('.modal__input_phone');
      if (phoneInput) {
        this.mask = new _imask.default(phoneInput, {
          mask: "+{7}(000) 000-00-00"
        });
      }
      ;
    }
  }]);
  return FreeLesson;
}();
var _default = new FreeLesson();
exports.default = _default;
},{"../freeLesson/img/Vector.svg":"components/modal/freeLesson/img/Vector.svg","../freeLesson/img/Cancel.svg":"components/modal/freeLesson/img/Cancel.svg","../../../technicalFunctions/TechnicalFunctions":"technicalFunctions/TechnicalFunctions.js","imask":"node_modules/imask/esm/index.js"}],"technicalFunctions/TechnicalFunctions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _FreeLesson = _interopRequireDefault(require("../components/modal/freeLesson/FreeLesson"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TechnicalFunctions = /*#__PURE__*/function () {
  function TechnicalFunctions() {
    _classCallCheck(this, TechnicalFunctions);
    this.listenerFlag = true;
  }
  _createClass(TechnicalFunctions, [{
    key: "formValidate",
    value: function formValidate(className, emailName) {
      var error = 0;
      var formReq = document.querySelectorAll(".".concat(className));
      for (var i = 0; i < formReq.length; i++) {
        var input = formReq[i];
        this.formRemoveError(input);
        if (input.classList.contains(emailName)) {
          if (!this.emailTest(input)) {
            this.formAddError(input);
            error++;
          }
          ;
        } else {
          if (input.value == '') {
            this.formAddError(input);
            error++;
          }
          ;
        }
        ;
      }
      ;
      return error;
    }
  }, {
    key: "formAddError",
    value: function formAddError(input) {
      input.classList.add('_error');
      if (input.placeholder == 'example@mail.ru' || input.placeholder == 'Введите почтовый адрес') {
        input.placeholder = 'Введите почтовый адрес';
      }
    }
  }, {
    key: "formRemoveError",
    value: function formRemoveError(input) {
      input.classList.remove('_error');
    }
  }, {
    key: "emailTest",
    value: function emailTest(input) {
      return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(input.value);
    }
  }, {
    key: "addListenerForDataInput",
    value: function addListenerForDataInput() {
      document.addEventListener('click', function (event) {
        var target = event.target;
        if (!target.hasAttribute('data-input')) return;
        target.classList.remove('_error');
      });
    }
  }, {
    key: "addListenerDataClose",
    value: function addListenerDataClose() {
      document.addEventListener('click', function (event) {
        var target = event.target;
        if (target.dataset.close) {
          _FreeLesson.default.close();
        }
        ;
      });
    }
  }, {
    key: "addListenerForFreeLesson",
    value: function addListenerForFreeLesson() {
      var records = document.querySelectorAll('._full-screen-record');
      records.forEach(function (record) {
        record.addEventListener('click', function () {
          // запись на бесплатное занятие через главную страницу
          _FreeLesson.default.open(); // открытие модального окна
          // FreeLesson.sendForm();
        });
      });
    }
  }]);
  return TechnicalFunctions;
}();
;
var _default = new TechnicalFunctions();
exports.default = _default;
},{"../components/modal/freeLesson/FreeLesson":"components/modal/freeLesson/FreeLesson.js"}],"components/footer/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TechnicalFunctions = _interopRequireDefault(require("../../technicalFunctions/TechnicalFunctions"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Footer = /*#__PURE__*/function () {
  function Footer() {
    _classCallCheck(this, Footer);
  }
  _createClass(Footer, [{
    key: "sendForm",
    value: function sendForm() {
      var forms = document.querySelectorAll('._footer__form');
      forms.forEach(function (form) {
        form.addEventListener('submit', formSend);
        function formSend(_x) {
          return _formSend.apply(this, arguments);
        }
        function _formSend() {
          _formSend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
            var error, formData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault();
                  error = _TechnicalFunctions.default.formValidate('_footer__req', '_footer__email');
                  formData = new FormData(form);
                  if (error == 0) {
                    form.reset();
                    setTimeout(function () {
                      var response = fetch('sendmail.php', {
                        // await
                        method: 'POST',
                        body: formData
                      });
                      if (response.ok) {
                        var result = response.json(); // await
                        alert(result.message);
                        form.reset();
                      } else {
                        // alert('Ошибка отправки данных на сервер')
                        alert('Подписка успешно оформлена');
                      }
                    }, 1000);
                  } else {
                    alert('Заполните обязательные поля');
                  }
                  ;
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return _formSend.apply(this, arguments);
        }
        ;
      });
    }
  }]);
  return Footer;
}();
;
var _default = new Footer();
exports.default = _default;
},{"../../technicalFunctions/TechnicalFunctions":"technicalFunctions/TechnicalFunctions.js"}],"components/courses/course.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ChooseCourse = _interopRequireDefault(require("./components/ChooseCourse"));
var _header = _interopRequireDefault(require("../1header/header"));
var _TechnicalFunctions = _interopRequireDefault(require("../../technicalFunctions/TechnicalFunctions"));
var _Footer = _interopRequireDefault(require("../footer/Footer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DropDownList = /*#__PURE__*/function () {
  function DropDownList() {
    _classCallCheck(this, DropDownList);
    this.container = document.querySelector('.course-list__cards');
    this.filterButton = document.querySelector('#filter-btn');
    this.purpose = document.querySelector('.purpose-container');
    this.price = document.querySelector('.price-container');
    this.duration = document.querySelector('.duration-container');
    this.allInputs = document.querySelectorAll('input[type*="checkbox"]');
  }
  _createClass(DropDownList, [{
    key: "addEventListennersort",
    value: function addEventListennersort() {
      var clickElems = document.querySelectorAll('.course-list__item-solo-header');
      var dropDownElems = document.querySelectorAll('.course-list__items-checkbox');
      var degElem = document.querySelectorAll('.course-list__img');
      var _loop = function _loop(i) {
        clickElems[i].addEventListener('click', function () {
          dropDownElems[i].classList.toggle('animation-left-block');
          degElem[i].classList.toggle('animation-rotate');
        });
      };
      for (var i = 0; i < clickElems.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "addEventListenner",
    value: function addEventListenner() {
      var sortMenu = document.querySelector('.choose-course__sort');
      var dropDownElem = document.querySelector('.sort-menu');
      var degElem = document.querySelector('.choose-course__list-img');
      sortMenu.addEventListener('click', function () {
        degElem.classList.toggle('animation-rotate');
        dropDownElem.classList.toggle('super-animation');
      });
    }

    // динамический поиск
  }, {
    key: "dinamicSearch",
    value: function dinamicSearch() {
      var _this = this;
      var button = document.querySelector('.choose-course__btn');
      var input = document.querySelector('.choose-course__input');
      button.addEventListener('click', function () {
        var cards = document.querySelectorAll('.course-list__size-lesson');
        var cardTitles = document.querySelectorAll('.card__title');
        var cardTexts = document.querySelectorAll('.card__description');
        var data = [];
        for (var i = 0; i < cardTitles.length; i++) {
          data.push([cardTitles[i].textContent, cardTexts[i].textContent, i]);
        }
        var standardString = input.value;
        var _iterator = _createForOfIteratorHelper(cards),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var card = _step.value;
            card.classList.remove('hide');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        data.forEach(function (elemArr) {
          var isVisible = elemArr[0].toLowerCase().includes(standardString) || elemArr[1].toLowerCase().includes(standardString);
          if (!isVisible) {
            cards[elemArr[2]].classList.add('hide');
          }
        });
        _this.emptyContent();
      });
    }
    // сортировка
    // вспомогательные функции сортировки
  }, {
    key: "changeClasesAndNames",
    value: function changeClasesAndNames(target, sort, className) {
      var sortText = sort.textContent; // замена названия сортировки
      var targetText = target.textContent;
      sort.innerHTML = targetText;
      target.innerHTML = sortText;
      target.classList.remove(target.classList[0]); // смена классов сортировки
      var tempClass = sort.classList[sort.classList.length - 1];
      target.classList.add(tempClass);
      sort.classList.remove(sort.classList[1]);
      sort.classList.add(className);
    }
  }, {
    key: "sortAndAddData",
    value: function sortAndAddData(dataArr) {
      var _this2 = this;
      dataArr = dataArr.sort(function (a, b) {
        return b[0] - a[0];
      });
      this.container.innerHTML = '';
      dataArr.forEach(function (price) {
        _this2.container.appendChild(price[1]);
      });
    }
  }, {
    key: "sortListener",
    value: function sortListener() {
      var _this3 = this;
      document.addEventListener('click', function (event) {
        var target = event.target;
        if (target.closest('.sort-menu')) {
          if (target.classList.contains('_choose-course-price')) {
            _this3.sortByPrice(target);
          } else if (target.classList.contains('_choose-course-data')) {
            _this3.sortByData(target);
          } else if (target.classList.contains('_choose-course-duration')) {
            _this3.sortByDuration(target);
          } else if (target.classList.contains('_choose-course-popular')) {
            _this3.sortByPopular(target);
          }
        }
      });
    }

    // основные функции сортировки
  }, {
    key: "sortByPrice",
    value: function sortByPrice(target) {
      var prices = document.querySelectorAll('.course-list__price-lesson');
      var sortMethod = document.querySelector('.choose-course__list-methods');
      var dataPrices = [];
      prices.forEach(function (price) {
        dataPrices.push([parseInt(price.textContent.replace(/[^\d]/g, '')), price.parentNode.parentNode]);
      });
      this.sortAndAddData(dataPrices);
      this.changeClasesAndNames(target, sortMethod, '_choose-course-price');
      this.emptyContent();
    }
  }, {
    key: "sortByData",
    value: function sortByData(target) {
      var cards = document.querySelectorAll('.course-list__size-lesson');
      var sortMethod = document.querySelector('.choose-course__list-methods');
      var arrTimes = [];
      cards.forEach(function (card) {
        arrTimes.push([card.getAttribute('data-sort-data'), card]);
      });
      this.sortAndAddData(arrTimes);
      this.changeClasesAndNames(target, sortMethod, '_choose-course-data');
      this.emptyContent();
    }
  }, {
    key: "sortByDuration",
    value: function sortByDuration(target) {
      var cards = document.querySelectorAll('.course-list__size-lesson');
      var sortMethod = document.querySelector('.choose-course__list-methods');
      var arrDuration = [];
      cards.forEach(function (card) {
        arrDuration.push([card.getAttribute('data-sort-duration'), card]);
      });
      this.sortAndAddData(arrDuration);
      this.changeClasesAndNames(target, sortMethod, '_choose-course-duration');
      this.emptyContent();
    }
  }, {
    key: "sortByPopular",
    value: function sortByPopular(target) {
      var cards = document.querySelectorAll('.course-list__size-lesson');
      var sortMethod = document.querySelector('.choose-course__list-methods');
      var arrPopular = [];
      cards.forEach(function (card) {
        arrPopular.push([card.getAttribute('data-sort-popular'), card]);
      });
      this.sortAndAddData(arrPopular);
      this.changeClasesAndNames(target, sortMethod, '_choose-course-popular');
      this.emptyContent();
    }
  }, {
    key: "contains",
    value:
    // фильтры
    // вспомогательные функции фильтров
    function contains(arr, attribute) {
      for (var i = 0; i < attribute.length; i++) {
        if (i % 2 == 0) {
          if (arr.includes(+attribute[i])) {
            return true;
          }
        }
      }
    }
  }, {
    key: "checkWorkFilters",
    value: function checkWorkFilters() {
      var counter = 0;
      var filterFlag = false;
      var cards = document.querySelectorAll('.course-list__size-lesson');
      this.allInputs.forEach(function (input) {
        if (!input.checked) {
          counter++;
        }
      });
      if (counter == this.allInputs.length) {
        cards.forEach(function (card) {
          card.classList.remove('hide');
        });
        this.purpose.removeAttribute('data-purpose');
        this.price.removeAttribute('data-price');
        filterFlag = true;
      }
      return filterFlag;
    }
    // проверка на отсутствие контента
  }, {
    key: "emptyContent",
    value: function emptyContent() {
      var cards = document.querySelectorAll('.course-list__size-lesson');
      var counter = 0;
      cards.forEach(function (card) {
        if (card.classList.contains('hide')) {
          counter++;
        } else {
          return;
        }
      });
      if (counter == cards.length) {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u043E. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u043E\u0438\u0441\u043A\u0430.";
        tempDiv.classList.add('tempDiv');
        this.container.appendChild(tempDiv);
      } else {
        if (document.querySelector('.tempDiv')) {
          document.querySelector('.tempDiv').remove();
        }
      }
    }
  }, {
    key: "checkActiveInputsContainer",
    value: function checkActiveInputsContainer() {
      var _this4 = this;
      this.allInputs.forEach(function (input) {
        input.addEventListener('click', function () {
          var purposeInputs = _this4.purpose.querySelectorAll('input');
          var priceInputs = _this4.price.querySelectorAll('input');
          var durationInputs = _this4.duration.querySelectorAll('input');
          var counterPurpose = 0;
          var counterPrice = 0;
          var counterDuration = 0;
          purposeInputs.forEach(function (input) {
            if (!input.checked) {
              counterPurpose++;
            }
          });
          priceInputs.forEach(function (input) {
            if (!input.checked) {
              counterPrice++;
            }
          });
          durationInputs.forEach(function (input) {
            if (!input.checked) {
              counterDuration++;
            }
          });
          if (counterPurpose == purposeInputs.length) {
            _this4.purpose.removeAttribute('data-purpose');
          }
          if (counterPrice == priceInputs.length) {
            _this4.price.removeAttribute('data-price');
          }
          if (counterDuration == durationInputs.length) {
            _this4.duration.removeAttribute('data-duration');
          }
        });
      });
    }
    // основные функции фильтров  
  }, {
    key: "filterPurpose",
    value: function filterPurpose() {
      var _this5 = this;
      var checkboxes = document.querySelectorAll('._purpose');
      this.filterButton.addEventListener('click', function () {
        document.querySelector('.choose-course__input').value = '';
        if (_this5.checkWorkFilters()) {
          _this5.checkWorkFilters();
          return;
        }
        var cards = document.querySelectorAll('.course-list__size-lesson');
        var arrPurpose = [];
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            arrPurpose.push(i);
          }
        }
        cards.forEach(function (card) {
          if (!card.getAttribute('data-filter-purpose')) {
            return;
          }
          card.setAttribute('data-active-purpose', 'true');
          if (card.getAttribute('data-filter-purpose')) {
            var attribute = card.getAttribute('data-filter-purpose');
            if (!_this5.contains(arrPurpose, attribute)) {
              card.removeAttribute('data-active-purpose');
            } else {
              _this5.purpose.setAttribute('data-purpose', 'true');
            }
          }
          ;
        });
        if (!_this5.purpose.getAttribute('data-purpose')) return;
        cards.forEach(function (card) {
          if (_this5.duration.getAttribute('data-duration') && _this5.price.getAttribute('data-price')) {
            if (!card.getAttribute('data-active-duration') || !card.getAttribute('data-active-purpose') || !card.getAttribute('data-active-price')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          } else if (_this5.duration.getAttribute('data-duration')) {
            if (!card.getAttribute('data-active-duration') || !card.getAttribute('data-active-purpose')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          } else if (_this5.price.getAttribute('data-price')) {
            if (!card.getAttribute('data-active-price') || !card.getAttribute('data-active-purpose')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          } else {
            if (!card.getAttribute('data-active-purpose')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          }
        });
        _this5.emptyContent();
      });
    }
  }, {
    key: "filterPrice",
    value: function filterPrice() {
      var _this6 = this;
      var checkboxes = document.querySelectorAll('._price');
      this.filterButton.addEventListener('click', function () {
        if (_this6.checkWorkFilters()) {
          _this6.checkWorkFilters();
          return;
        }
        var cards = document.querySelectorAll('.course-list__size-lesson');
        var arrPrice = [];
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            arrPrice.push(i);
          }
        }
        cards.forEach(function (card) {
          card.setAttribute('data-active-price', 'true');
          if (card.getAttribute('data-filter-price')) {
            var attribute = card.getAttribute('data-filter-price');
            if (!_this6.contains(arrPrice, attribute)) {
              card.removeAttribute('data-active-price');
            } else {
              _this6.price.setAttribute('data-price', 'true');
            }
          }
          ;
        });
        if (!_this6.price.getAttribute('data-price')) return;
        cards.forEach(function (card) {
          if (_this6.duration.getAttribute('data-duration') && _this6.purpose.getAttribute('data-purpose')) {
            if (!card.getAttribute('data-active-duration') || !card.getAttribute('data-active-purpose') || !card.getAttribute('data-active-price')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          } else if (_this6.duration.getAttribute('data-duration')) {
            if (!card.getAttribute('data-active-duration') || !card.getAttribute('data-active-price')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          } else if (_this6.purpose.getAttribute('data-purpose')) {
            if (!card.getAttribute('data-active-price') || !card.getAttribute('data-active-purpose')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          } else {
            if (!card.getAttribute('data-active-price')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          }
        });
        _this6.emptyContent();
      });
    }
  }, {
    key: "filterDuration",
    value: function filterDuration() {
      var _this7 = this;
      var checkboxes = document.querySelectorAll('._duration');
      this.filterButton.addEventListener('click', function () {
        if (_this7.checkWorkFilters()) {
          _this7.checkWorkFilters();
          return;
        }
        var cards = document.querySelectorAll('.course-list__size-lesson');
        var arrDuration = [];
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            arrDuration.push(i);
          }
        }
        cards.forEach(function (card) {
          card.setAttribute('data-active-duration', 'true');
          if (card.getAttribute('data-filter-duration')) {
            var attribute = card.getAttribute('data-filter-duration');
            if (!_this7.contains(arrDuration, attribute)) {
              card.removeAttribute('data-active-duration');
            } else {
              _this7.duration.setAttribute('data-duration', 'true');
            }
          }
          ;
        });
        if (!_this7.duration.getAttribute('data-duration')) return;
        cards.forEach(function (card) {
          if (_this7.purpose.getAttribute('data-purpose') && _this7.price.getAttribute('data-price')) {
            if (!card.getAttribute('data-active-duration') || !card.getAttribute('data-active-purpose') || !card.getAttribute('data-active-price')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          } else if (_this7.purpose.getAttribute('data-purpose')) {
            if (!card.getAttribute('data-active-duration') || !card.getAttribute('data-active-purpose')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          } else if (_this7.price.getAttribute('data-price')) {
            if (!card.getAttribute('data-active-price') || !card.getAttribute('data-active-duration')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          } else {
            if (!card.getAttribute('data-active-duration')) {
              card.classList.add('hide');
            } else {
              card.classList.remove('hide');
            }
          }
        });
        _this7.emptyContent();
      });
    }
  }, {
    key: "resetFilters",
    value: function resetFilters() {
      var _this8 = this;
      var button = document.querySelector('.course-list__reset');
      button.addEventListener('click', function () {
        var cards = document.querySelectorAll('.course-list__size-lesson');
        _this8.allInputs.forEach(function (input) {
          if (input.checked) {
            input.checked = false;
          }
        });
        cards.forEach(function (card) {
          return [card.classList.remove('hide')];
        });
      });
    }
  }]);
  return DropDownList;
}();
;
var callThisFunc = new DropDownList();
callThisFunc.addEventListennersort();
callThisFunc.addEventListenner();
callThisFunc.filterPurpose();
callThisFunc.filterPrice();
callThisFunc.filterDuration();
callThisFunc.dinamicSearch();
callThisFunc.checkActiveInputsContainer();
callThisFunc.resetFilters();
_ChooseCourse.default.addListenerForChangePage();
callThisFunc.sortListener();
_header.default.menuBurger();
_TechnicalFunctions.default.addListenerForFreeLesson();
_TechnicalFunctions.default.addListenerDataClose();
_Footer.default.sendForm();
var _default = new DropDownList();
exports.default = _default;
},{"./components/ChooseCourse":"components/courses/components/ChooseCourse.js","../1header/header":"components/1header/header.js","../../technicalFunctions/TechnicalFunctions":"technicalFunctions/TechnicalFunctions.js","../footer/Footer":"components/footer/Footer.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64818" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","components/courses/course.js"], null)
//# sourceMappingURL=/course.f49a3ec6.js.map