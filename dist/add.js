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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
__vue_options__.__file = "/Users/lambda/code/weex-learn/demo/src/components/nav-bar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42c37e09"
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
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "40"
  },
  "top-bar": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "backgroundColor": "#FFFFFF",
    "marginBottom": "20"
  },
  "top-bar-title": {
    "fontSize": "40",
    "fontWeight": "500"
  }
}

/***/ }),
/* 2 */
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

var domModule = weex.requireModule('dom');
var navigator = weex.requireModule('navigator');
exports.default = {
  name: 'navbar',
  props: {
    title: {
      type: String,
      required: true
    },
    showBack: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  berforeCreate: function berforeCreate() {
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_1749598_ehrct2r0qpi.ttf')"
    });
  },

  methods: {
    back: function back() {
      navigator.pop({ animated: 'true' });
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["top-bar"]
  }, [(_vm.showBack) ? _c('text', {
    staticClass: ["iconfont"],
    on: {
      "click": function($event) {
        _vm.back()
      }
    }
  }, [_vm._v("")]) : _c('text'), _c('text', {
    staticClass: ["top-bar-title"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('div')])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _add = __webpack_require__(6);

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_add2.default.el = '#root';
new Vue(_add2.default);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
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
__vue_options__.__file = "/Users/lambda/code/weex-learn/demo/src/add.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-49d147d8"
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
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "40"
  },
  "wrp": {
    "backgroundColor": "#cccccc"
  },
  "form-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "form-item-des": {
    "flexDirection": "row",
    "alignItems": "flex-start",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "e-title": {
    "fontSize": "32",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15"
  },
  "input": {
    "flex": 1,
    "fontSize": "32",
    "height": "60",
    "paddingTop": 0,
    "paddingBottom": 0,
    "paddingLeft": "20",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "5"
  },
  "textarea": {
    "flex": 1,
    "paddingLeft": "20",
    "paddingTop": "12",
    "height": "180",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "5"
  },
  "b-btn-wrp": {
    "position": "absolute",
    "width": "750",
    "height": "100",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "alignItems": "center",
    "bottom": 0,
    "left": 0
  },
  "b-btn": {
    "flex": 1,
    "fontSize": "32",
    "textAlign": "center",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#cccccc",
    "borderLeftWidth": "1"
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navBar = __webpack_require__(0);

var _navBar2 = _interopRequireDefault(_navBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domModule = weex.requireModule('dom'); //
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
//
//
//
//
//
//

var storage = weex.requireModule('storage');
var navigator = weex.requireModule('navigator');
exports.default = {
  name: 'add',
  components: { navBar: _navBar2.default },
  data: function data() {
    return {
      name: '',
      desc: ''
    };
  },
  beforeCreate: function beforeCreate() {
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_1749598_ehrct2r0qpi.ttf')"
    });
  },

  methods: {
    add: function add() {
      var _this = this;

      storage.getItem('toDolist', function (event) {
        try {
          var data = event.data && (event.data !== 'undefined' ? event.data : '[]');
          var toDoList = JSON.parse(data || '[]') || [];
          toDoList.push({ name: _this.name, desc: _this.desc });
          storage.setItem('toDolist', JSON.stringify(toDoList), function () {
            _this.back();
          });
        } catch (e) {}
      });
    },
    back: function back() {
      navigator.pop({ animated: 'true' });
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrp"]
  }, [_c('navBar', {
    attrs: {
      "title": "事件详情",
      "showBack": true
    }
  }), _c('div', {
    staticClass: ["form-item"]
  }, [_c('text', {
    staticClass: ["e-title"]
  }, [_vm._v("事件名称")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入事件名称",
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        _vm.name = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["form-item-des"]
  }, [_c('text', {
    staticClass: ["e-title"]
  }, [_vm._v("事件内容")]), _c('textarea', {
    staticClass: ["textarea"],
    attrs: {
      "placeholder": "请输入事件内容",
      "rows": "3",
      "value": (_vm.desc)
    },
    on: {
      "input": function($event) {
        _vm.desc = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["b-btn-wrp"]
  }, [_c('text', {
    staticClass: ["b-btn"],
    on: {
      "click": _vm.add
    }
  }, [_vm._v("完成")]), _c('text', {
    staticClass: ["b-btn"],
    on: {
      "click": _vm.back
    }
  }, [_vm._v("取消")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);