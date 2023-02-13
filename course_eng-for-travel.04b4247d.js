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
})({"K6TB":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DropDownSlowly = /*#__PURE__*/function () {
  function DropDownSlowly() {
    _classCallCheck(this, DropDownSlowly);
  }
  _createClass(DropDownSlowly, [{
    key: "addListenner",
    value: function addListenner() {
      var heads = document.querySelectorAll('.course-program__list-item-heading');
      var contents = document.querySelectorAll('.course-program__big-number');
      var checkMarks = document.querySelectorAll('.course-program__img-check');
      var _loop = function _loop(i) {
        heads[i].addEventListener('click', function () {
          contents[i].classList.toggle('animation-for-drop-down');
          checkMarks[i].classList.toggle('chekmark-rotate');
        });
      };
      for (var i = 0; i < heads.length; i++) {
        _loop(i);
      }
      ;
    }
  }]);
  return DropDownSlowly;
}();
;
var _default = new DropDownSlowly();
exports.default = _default;
},{}],"C6Si":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SlickSlider = /*#__PURE__*/function () {
  function SlickSlider() {
    _classCallCheck(this, SlickSlider);
  }
  _createClass(SlickSlider, [{
    key: "addEventListenner",
    value: function addEventListenner() {
      var snake = document.querySelector('.structure-lesson__snake-slide-bar');
      var arrow = document.querySelector('.structure-lesson__arrow-right');
      var sliderSnake = document.querySelector('.structure-lesson__slider-line-snake');
      arrow.addEventListener('click', function () {
        if (snake.classList.value.includes('animation-img__3')) {
          snake.classList.remove('animation-img__3');
          snake.classList.add('animation-img__2');
          sliderSnake.classList.remove('animation-slider__1');
          sliderSnake.classList.add('animation-slider__2');
          return;
        }
        ;
        if (snake.classList.value.includes('animation-img__2')) {
          snake.classList.remove('animation-img__2');
          snake.classList.add('animation-img__1');
          sliderSnake.classList.remove('animation-slider__2');
          sliderSnake.classList.add('animation-slider__3');
          return;
        }
        ;
        if (snake.classList.value.includes('animation-img__1')) {
          snake.classList.remove('animation-img__1');
          snake.classList.add('animation-img__3');
          sliderSnake.classList.remove('animation-slider__3');
          sliderSnake.classList.add('animation-slider__1');
          return;
        }
        ;
      });
    }
  }]);
  return SlickSlider;
}();
;
var _default = new SlickSlider();
exports.default = _default;
},{}],"dlvB":[function(require,module,exports) {
module.exports = "Vector.a6e5648f.svg";
},{}],"U666":[function(require,module,exports) {
module.exports = "Cancel.bb37447f.svg";
},{}],"opYb":[function(require,module,exports) {
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
      var record = document.getElementById('full-screen-record');
      record.addEventListener('click', function () {
        // запись на бесплатное занятие через главную страницу
        _FreeLesson.default.open(); // открытие модального окна
        _FreeLesson.default.sendForm();
        document.addEventListener('keydown', function (event) {
          if (event.code.toLowerCase() == 'escape') {
            _FreeLesson.default.close();
          }
          ;
        });
        var inputTel = document.querySelector('.modal__input_phone');
        inputTel.addEventListener('keyup', function (event) {
          if (event.key != 'Backspace' && (inputTel.value.length === 1 || inputTel.value.length === 5 || inputTel.value.length === 9 || inputTel.value.length === 12)) {
            inputTel.value += '-';
          }
        });
      });
    }
  }]);
  return TechnicalFunctions;
}();
;
var _default = new TechnicalFunctions();
exports.default = _default;
},{"../components/modal/freeLesson/FreeLesson":"mjn2"}],"mjn2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Vector = _interopRequireDefault(require("../freeLesson/img/Vector.svg"));
var _Cancel = _interopRequireDefault(require("../freeLesson/img/Cancel.svg"));
var _TechnicalFunctions = _interopRequireDefault(require("../../../technicalFunctions/TechnicalFunctions"));
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
  }
  _createClass(FreeLesson, [{
    key: "render",
    value: function render() {
      var htmlContent = " \n            <div class=\"modal\" id=\"modal-container\" data-close=\"true\">\n                <div class=\"modal__body _container\" >\n                    <img src=\"".concat(_Cancel.default, "\" alt=\"close\" class=\"modal__close\" data-close=\"true\">\n                    <div class=\"modal__container\">\n                        <h3 class=\"modal__title\">\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u043F\u0440\u043E\u0431\u043D\u043E\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0435</h3>\n                        <form action=\"#\" class=\"modal__form\" id=\"form-free-lesson\">\n                            <input class=\"modal__input modal__input_name _modal-req\" placeholder=\"\u0418\u043C\u044F\" data-input=\"true\">\n                            <img src=\"").concat(_Vector.default, "\" alt=\"star\" class=\"modal__star1\">\n                            <input class=\"modal__input modal__input_birthday _modal-req\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\" data-input=\"true\">\n                            <img src=\"").concat(_Vector.default, "\" alt=\"star\" class=\"modal__star2\">\n                            <input class=\"modal__input modal__input_phone\" placeholder=\"+7 (___)-___-__-__\" type=\"tel\" data-input=\"true\" maxlength=\"15\">\n                            <input class=\"modal__input modal__input_email _modal-req _modal-email\" placeholder=\"example@mail.ru\" type=\"email\" data-input=\"true\">\n                            <img src=\"").concat(_Vector.default, "\" alt=\"star\" class=\"modal__star3\" data-input=\"true\">\n                            <textarea class=\"modal__input modal__input_textarea\" placeholder=\"\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\" maxlength=\"140\" data-input=\"true\"></textarea>\n                            <p class=\"modal__paragraph\"><img src=\"").concat(_Vector.default, "\" alt=\"star\"> \u041F\u043E\u043B\u044F, \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</p>\n                            <button class=\"modal__button _button-green\">\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            ");
      var htmlWrapper = "\n                <div class=\"modal__wrapper\">\n                    ".concat(htmlContent, "\n                </div>\n            ");
      ROOT_MODAL.innerHTML = htmlWrapper;
    }
  }, {
    key: "open",
    value: function open() {
      this.render();
      document.querySelector('.modal__body').classList.add('open'); // анимации появления окна
      document.querySelector('.modal').classList.add('open');
    }
  }, {
    key: "close",
    value: function close() {
      var modal = document.querySelector('.modal');
      var modalWindow = document.querySelector('.modal__body');
      if (modal) {
        modalWindow.classList.remove('open');
        modalWindow.parentElement.classList.remove('open');
        modalWindow.classList.add('disappearance');
        modalWindow.parentElement.classList.add('disappearance');
        setTimeout(function () {
          modalWindow.classList.remove('disappearance');
          modalWindow.parentElement.classList.remove('disappearance');
          ROOT_MODAL.innerHTML = '';
        }, 300);
      }
      ;
    }
  }, {
    key: "sendForm",
    value: function sendForm() {
      var form = document.getElementById('form-free-lesson');
      var container = document.getElementById('modal-container');
      form.addEventListener('submit', formSend);
      function formSend(event) {
        // async
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
                  ROOT_MODAL.innerHTML = '';
                }, 300);
              }
              ; // дублирование кода
            }
          }, 1000);
        } else {
          alert('Заполните обязательные поля');
        }
      }
      function formValidate() {
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
          } else {
            if (input.value == '') {
              formAddError(input);
              error++;
            }
          }
        }
        return error;
      }
      function formAddError(input) {
        input.classList.add('_error');
        if (input.placeholder == 'Имя') {
          input.placeholder = 'Введите имя';
        } else if (input.placeholder == 'example@mail.ru' || input.placeholder == 'Введите почтовый адрес') {
          input.placeholder = 'Введите почтовый адрес';
        } else {
          input.placeholder = 'Введите дату рождения';
        }
      }
    }
  }]);
  return FreeLesson;
}();
var _default = new FreeLesson();
exports.default = _default;
},{"../freeLesson/img/Vector.svg":"dlvB","../freeLesson/img/Cancel.svg":"U666","../../../technicalFunctions/TechnicalFunctions":"opYb"}],"uC6K":[function(require,module,exports) {
"use strict";

var _courseProgram = _interopRequireDefault(require("./course-program/course-program.js"));
var _structure_lesson = _interopRequireDefault(require("./structure_lesson.js"));
var _FreeLesson = _interopRequireDefault(require("../modal/freeLesson/FreeLesson.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_courseProgram.default.addListenner();
_structure_lesson.default.addEventListenner();
},{"./course-program/course-program.js":"K6TB","./structure_lesson.js":"C6Si","../modal/freeLesson/FreeLesson.js":"mjn2"}]},{},["uC6K"], null)