/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Downloader"] = factory();
	else
		root["Downloader"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/event-emitter.ts":
/*!******************************!*\
  !*** ./src/event-emitter.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n *  event emitter class\n */\nvar EventEmitter = /** @class */ (function () {\n    function EventEmitter() {\n        this.eventList = {};\n    }\n    EventEmitter.prototype.on = function (eventName, handle) {\n        if (Array.isArray(this.eventList[eventName])) {\n            this.eventList[eventName].push(handle);\n        }\n        else {\n            this.eventList[eventName] = [handle];\n        }\n    };\n    EventEmitter.prototype.emit = function (eventName) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        this.eventList[eventName].forEach(function (cb) {\n            cb.apply(null, args);\n        });\n    };\n    EventEmitter.prototype.off = function (eventName, handle) {\n        var arr = this.eventList[eventName] || [];\n        var i = arr.indexOf(handle);\n        if (i >= 0) {\n            this.eventList[eventName].splice(i, 1);\n        }\n    };\n    return EventEmitter;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventEmitter);\n\n\n//# sourceURL=webpack://Downloader/./src/event-emitter.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-emitter */ \"./src/event-emitter.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar mmNavigator;\nwindow.chrome = window.chrome || {};\nmmNavigator = window.navigator;\nvar Downloader = /** @class */ (function (_super) {\n    __extends(Downloader, _super);\n    function Downloader(downloadUrl, downloadName) {\n        var _this = _super.call(this) || this;\n        _this.initOptions(downloadUrl, downloadName);\n        _this.initXhr();\n        return _this;\n    }\n    Downloader.prototype.initOptions = function (downloadUrl, downloadName) {\n        this.downloadName = downloadName;\n        this.downloadUrl = downloadUrl;\n    };\n    Downloader.prototype.initXhr = function () {\n        var _this = this;\n        this.xhr = new XMLHttpRequest();\n        this.xhr.responseType = \"blob\";\n        this.xhr.onprogress = function (event) {\n            _this.emit(\"process\", event);\n        };\n        this.xhr.onreadystatechange = function (event) {\n            if (_this.xhr.readyState === 4 && _this.xhr.status === 200) {\n                if (typeof window.chrome !== \"undefined\") {\n                    // chrome\n                    var link = document.createElement(\"a\"); // 创建a标签\n                    link.href = URL.createObjectURL(_this.xhr.response);\n                    link.download = _this.downloadName;\n                    link.click(); // js点击完成最终本地保存\n                }\n                else if (mmNavigator === null || mmNavigator === void 0 ? void 0 : mmNavigator.msSaveBlob) {\n                    // IE version\n                    var blob = new Blob([_this.xhr.response], {\n                        type: \"application/force-download\",\n                    });\n                    mmNavigator.msSaveBlob(blob, _this.downloadName);\n                }\n                else {\n                    // Firefox version\n                    var file = new File([_this.xhr.response], _this.downloadName, {\n                        type: \"application/force-download\",\n                    });\n                    window.open(URL.createObjectURL(file));\n                }\n            }\n        };\n        this.xhr.open(\"GET\", this.downloadUrl);\n    };\n    Downloader.prototype.start = function () {\n        this.xhr.send();\n    };\n    return Downloader;\n}(_event_emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Downloader);\n\n\n//# sourceURL=webpack://Downloader/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});