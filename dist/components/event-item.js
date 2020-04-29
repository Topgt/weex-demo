// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _eventItem = __webpack_require__(11);

var _eventItem2 = _interopRequireDefault(_eventItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_eventItem2.default.el = '#root';
new Vue(_eventItem2.default);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/lambda/code/weex-learn/demo/src/components/event-item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-08a36576"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "40"
  },
  "event": {
    "marginTop": "8",
    "marginBottom": "8",
    "paddingTop": "18",
    "paddingRight": "10",
    "paddingBottom": "18",
    "paddingLeft": "40",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "event-name": {
    "fontSize": "32"
  },
  "btn-wap": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "btn": {
    "marginRight": "10",
    "borderStyle": "solid",
    "borderColor": "#cccccc",
    "borderWidth": "1",
    "borderRadius": "5",
    "paddingTop": "12",
    "paddingBottom": "12",
    "paddingLeft": "23",
    "paddingRight": "23",
    "fontSize": "28"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

var domModule = weex.requireModule('dom');
exports.default = {
  beforeCreate: function beforeCreate() {
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_1749598_ehrct2r0qpi.ttf')"
    });
  },

  props: {
    todo: {
      type: Object,
      required: true
    },
    btnName: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {}
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["event"]
  }, [_c('text', {
    staticClass: ["event-name"]
  }, [_vm._v(_vm._s(_vm.todo.name))]), _c('div', {
    staticClass: ["btn-wap"]
  }, [_c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.onClick()
      }
    }
  }, [_vm._v(_vm._s(_vm.btnName))]), _c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);