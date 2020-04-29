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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntryUrl = getEntryUrl;
function getEntryUrl(name) {
  if (weex.config.env.platform === 'Web') {
    return './' + name + '.html';
  }
  var bundle = weex.config.bundleUrl.split('/');
  bundle.pop();
  bundle.push(name + '.js');
  return bundle.join('/');
}

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
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

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(17);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
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
__vue_options__.__file = "/Users/lambda/code/weex-learn/demo/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
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
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "40"
  },
  "wrapper": {
    "backgroundColor": "#cccccc"
  },
  "top-bar": {
    "flexDirection": "row",
    "justifyContent": "center",
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
  },
  "title": {
    "fontSize": "32",
    "marginLeft": "15",
    "marginBottom": "20",
    "marginTop": "20"
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(4);

var _navBar = __webpack_require__(0);

var _navBar2 = _interopRequireDefault(_navBar);

var _eventItem = __webpack_require__(11);

var _eventItem2 = _interopRequireDefault(_eventItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage'); //
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
//

var navigator = weex.requireModule('navigator');
exports.default = {
  name: 'App',
  data: function data() {
    return {
      toDoList: [],
      doneList: []
    };
  },

  components: { navBar: _navBar2.default, eventItem: _eventItem2.default },
  created: function created() {
    if (weex.config.env.platform === 'Web') {
      this.show();
    }
  },

  methods: {
    finish: function finish(event, idx) {
      this.toDoList.splice(idx, 1);
      this.doneList.push(event);
    },
    desc: function desc(event, idx) {
      console.log(idx);
    },
    add: function add() {
      if (weex.config.env.platform === 'Web') {
        this.hiden();
      }
      navigator.push({
        url: (0, _utils.getEntryUrl)('add'),
        animated: 'true'
      });
    },
    clear: function clear() {
      this.toDoList = [];
      this.doneList = [];
      storage.removeItem('toDolist');
      storage.removeItem('doneList');
    },
    show: function show() {
      var _this = this;

      storage.getItem('toDolist', function (event) {
        try {
          _this.toDoList = JSON.parse(event.data) || [];
        } catch (e) {}
        console.log('set success');
      });
      storage.getItem('doneList', function (event) {
        try {
          _this.doneList = JSON.parse(event.data) || [];
        } catch (e) {}
        console.log('set success');
      });
    },
    hiden: function hiden() {
      storage.setItem('toDolist', JSON.stringify(this.toDoList), function (event) {
        console.log('set success');
      });
      storage.setItem('doneList', JSON.stringify(this.doneList), function (event) {
        console.log('set success');
      });
    }
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "viewappear": _vm.show,
      "viewdisappear": _vm.hiden
    }
  }, [_c('navBar', {
    attrs: {
      "title": "事件列表"
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("代办事项")]), _vm._l((_vm.toDoList), function(todo, idx) {
    return _c('div', {
      key: todo.name + idx
    }, [_c('eventItem', {
      attrs: {
        "todo": todo,
        "btnName": "完成",
        "onClick": function () { return _vm.finish(todo, idx); }
      }
    })], 1)
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("已办事项")]), _vm._l((_vm.doneList), function(todo, idx) {
    return _c('div', {
      key: todo.name + idx
    }, [_c('eventItem', {
      attrs: {
        "todo": todo,
        "btnName": "详情",
        "onClick": function () { return _vm.desc(todo, idx); }
      }
    })], 1)
  }), _c('div', {
    staticClass: ["b-btn-wrp"]
  }, [_c('text', {
    staticClass: ["b-btn"],
    on: {
      "click": _vm.add
    }
  }, [_vm._v("添加")]), _c('text', {
    staticClass: ["b-btn"],
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("清空")])])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);