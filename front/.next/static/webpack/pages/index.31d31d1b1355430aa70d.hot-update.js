/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_lumpen_Desktop_git_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlogLayout */ \"./components/BlogLayout.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-to-image */ \"./node_modules/html-to-image/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.jsx\");\n/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-color */ \"./node_modules/react-color/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lumpen/Desktop/git/front/pages/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_lumpen_Desktop_git_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({\n  displayName: \"pages__StyledContainer\",\n  componentId: \"sc-2cp0ao-0\"\n})([\"width:100%;height:auto;overflow:hidden;margin:0 auto;\"]);\n_c = StyledContainer;\n\nvar Index = function Index() {\n  _s();\n\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n  var text = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)(\"HELLO WORLD\");\n  var width = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)(700);\n  var height = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)(350);\n  var fontSize = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)(72);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('#ffffff'),\n      background = _useState[0],\n      setBackground = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('#000000'),\n      fontColor = _useState2[0],\n      setFontColor = _useState2[1];\n\n  var handleChangeColor = function handleChangeColor(color) {\n    setFontColor(color.hex);\n  };\n\n  var handleChangeBackground = function handleChangeBackground(color) {\n    setBackground(color.hex);\n  };\n\n  var onButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function () {\n    if (ref.current === null) {\n      return;\n    }\n\n    (0,html_to_image__WEBPACK_IMPORTED_MODULE_5__.toPng)(ref.current, {\n      cacheBust: true\n    }).then(function (dataUrl) {\n      var link = document.createElement(\"a\");\n      link.download = \"my-image-name.png\";\n      link.href = dataUrl;\n      link.click();\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, [ref]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    style: {\n      background: '#262E3D',\n      padding: '25px 0',\n      width: '80%',\n      margin: '0 auto'\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n        children: \"Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"/request\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n          style: {\n            \"float\": 'right'\n          },\n          children: \"\\uD574\\uC918\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledContainer, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          ref: ref,\n          style: {\n            margin: '0 auto',\n            display: 'flex',\n            minHeight: '100px',\n            minWidth: '100px',\n            justifyContent: 'center',\n            alignItems: 'center',\n            width: \"\".concat(width.value, \"px\"),\n            height: \"\".concat(height.value, \"px\"),\n            background: background\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            style: {\n              margin: 'auto auto',\n              fontSize: \"\".concat(fontSize.value, \"px\"),\n              color: \"\".concat(fontColor)\n            },\n            children: text.value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(JustDiv, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {\n              children: \"\\uBC30\\uACBD \\uC124\\uC815\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InputContainer, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(JustSpan, {\n                children: [\"\\uAC00\\uB85C \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, _objectSpread({\n                  type: \"number\"\n                }, width), void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 106,\n                  columnNumber: 16\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 105,\n                columnNumber: 11\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(JustSpan, {\n              children: [\"\\uC138\\uB85C \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, _objectSpread({\n                type: \"number\"\n              }, height), void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 14\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ChromePic, {\n              color: background,\n              onChangeComplete: handleChangeBackground\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 11\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(JustDiv, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InputContainer, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {\n                children: \"\\uAE00\\uC790 \\uC124\\uC815\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 124,\n                columnNumber: 11\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(JustSpan, {\n                children: [\"\\uB0B4\\uC6A9 \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, _objectSpread({\n                  type: \"text\"\n                }, text), void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 126,\n                  columnNumber: 16\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 125,\n                columnNumber: 11\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(JustSpan, {\n              children: [\"\\uAE00\\uC790\\uD06C\\uAE30 \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, _objectSpread({\n                type: \"number\"\n              }, fontSize), void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 131,\n                columnNumber: 16\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 130,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ChromePic, {\n              color: fontColor,\n              onChangeComplete: handleChangeColor\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n              onClick: onButtonClick,\n              children: \"Download\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 11\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 9\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"kdMKNndJW0nSWylsSblY3PuXnVE=\", false, function () {\n  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default];\n});\n\n_c2 = Index;\nvar JustDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({\n  displayName: \"pages__JustDiv\",\n  componentId: \"sc-2cp0ao-1\"\n})([\"width:225px;margin:0 auto;\"]);\n_c3 = JustDiv;\nvar Title = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.default)(JustDiv).withConfig({\n  displayName: \"pages__Title\",\n  componentId: \"sc-2cp0ao-2\"\n})([\"text-align:center;color:#ccc;\"]);\n_c4 = Title;\nvar InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({\n  displayName: \"pages__InputContainer\",\n  componentId: \"sc-2cp0ao-3\"\n})([\"\"]);\n_c5 = InputContainer;\nvar JustSpan = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.span.withConfig({\n  displayName: \"pages__JustSpan\",\n  componentId: \"sc-2cp0ao-4\"\n})([\"position:relative;padding:0 11px;color:rgba(0,0,0,.65);font-weight:400;font-size:14px;text-align:center;background-color:#fafafa;border:1px solid #d9d9d9;border-radius:4px;transition:all .3s;\"]);\n_c6 = JustSpan;\nvar ChromePic = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.default)(react_color__WEBPACK_IMPORTED_MODULE_8__.ChromePicker).withConfig({\n  displayName: \"pages__ChromePic\",\n  componentId: \"sc-2cp0ao-5\"\n})([\"\"]);\n_c7 = ChromePic;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({\n  displayName: \"pages__Container\",\n  componentId: \"sc-2cp0ao-6\"\n})([\"width:500px;margin:0 auto;display:flex;\"]);\n_c8 = Container;\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.input.withConfig({\n  displayName: \"pages__Input\",\n  componentId: \"sc-2cp0ao-7\"\n})([\"float:left;width:100%;margin-bottom:0;text-align:inherit;\"]);\n_c9 = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"StyledContainer\");\n$RefreshReg$(_c2, \"Index\");\n$RefreshReg$(_c3, \"JustDiv\");\n$RefreshReg$(_c4, \"Title\");\n$RefreshReg$(_c5, \"InputContainer\");\n$RefreshReg$(_c6, \"JustSpan\");\n$RefreshReg$(_c7, \"ChromePic\");\n$RefreshReg$(_c8, \"Container\");\n$RefreshReg$(_c9, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiU3R5bGVkQ29udGFpbmVyIiwic3R5bGVkIiwiSW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJ0ZXh0IiwidXNlSW5wdXQiLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwidXNlU3RhdGUiLCJiYWNrZ3JvdW5kIiwic2V0QmFja2dyb3VuZCIsImZvbnRDb2xvciIsInNldEZvbnRDb2xvciIsImhhbmRsZUNoYW5nZUNvbG9yIiwiY29sb3IiLCJoZXgiLCJoYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kIiwib25CdXR0b25DbGljayIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsInRvUG5nIiwiY2FjaGVCdXN0IiwidGhlbiIsImRhdGFVcmwiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiY2xpY2siLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZyIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInZhbHVlIiwiSnVzdERpdiIsIlRpdGxlIiwiSW5wdXRDb250YWluZXIiLCJKdXN0U3BhbiIsIkNocm9tZVBpYyIsIkNocm9tZVBpY2tlciIsIkNvbnRhaW5lciIsIklucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw2REFBckI7S0FBTUQsZTs7QUFPTixJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLEdBQUcsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUEsTUFBTUMsSUFBSSxHQUFHQyx3REFBUSxDQUFDLGFB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aWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvZ0xheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9CbG9nTGF5b3V0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB0b1BuZyB9IGZyb20gXCJodG1sLXRvLWltYWdlXCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrLHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuaW1wb3J0IHsgQ2hyb21lUGlja2VyIH0gZnJvbSAncmVhY3QtY29sb3InXG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCB0ZXh0ID0gdXNlSW5wdXQoXCJIRUxMTyBXT1JMRFwiKTtcbiAgY29uc3Qgd2lkdGggPSB1c2VJbnB1dCg3MDApO1xuICBjb25zdCBoZWlnaHQgPSB1c2VJbnB1dCgzNTApOyAgXG4gIGNvbnN0IGZvbnRTaXplID0gdXNlSW5wdXQoNzIpO1xuICBjb25zdCBbYmFja2dyb3VuZCxzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKCcjZmZmZmZmJylcbiAgY29uc3QgW2ZvbnRDb2xvcixzZXRGb250Q29sb3JdID0gdXNlU3RhdGUoJyMwMDAwMDAnKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNvbG9yID0gKGNvbG9yKT0+e1xuICAgIHNldEZvbnRDb2xvcihjb2xvci5oZXgpXG5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUJhY2tncm91bmQgPSAoY29sb3IpPT57XG4gICAgc2V0QmFja2dyb3VuZChjb2xvci5oZXgpXG5cbiAgfVxuXG4gIGNvbnN0IG9uQnV0dG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9QbmcocmVmLmN1cnJlbnQsIHsgY2FjaGVCdXN0OiB0cnVlIH0pXG4gICAgICAudGhlbigoZGF0YVVybCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSBcIm15LWltYWdlLW5hbWUucG5nXCI7XG4gICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVcmw7XG4gICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtyZWZdKTtcblxuIFxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzI2MkUzRCcsXG4gICAgICBwYWRkaW5nOiAnMjVweCAwJyxcbiAgICAgIHdpZHRoOiAnODAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgfX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJsb2c8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJsb2dMYXlvdXQ+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVxdWVzdFwiPlxuICAgICAgICAgIDxhIHN0eWxlPXt7ZmxvYXQ6ICdyaWdodCd9fT7tlbTspJg8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxuICAgIFxuICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9XG4gICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgbWluSGVpZ2h0OicxMDBweCcsXG4gICAgICAgICAgICBtaW5XaWR0aDonMTAwcHgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRoLnZhbHVlfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0LnZhbHVlfXB4YCxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQsXG4gICAgICAgIFxuICAgICAgICAgIH19PlxuICAgICAgICAgICBcblxuICAgICAgICAgICAgICA8cCBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8gYXV0bycsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6YCR7Zm9udFNpemUudmFsdWV9cHhgLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBgJHtmb250Q29sb3J9YCxcbiAgICAgICAgICAgICAgfX0+e3RleHQudmFsdWV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICBcblxuICAgICAgIFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SnVzdERpdj5cbiAgICAgICAgICA8VGl0bGU+67Cw6rK9IOyEpOyglTwvVGl0bGU+XG4gICAgICAgICAgPElucHV0Q29udGFpbmVyPlxuICAgICAgICAgIDxKdXN0U3Bhbj5cbiAgICAgICAgICAgIOqwgOuhnCA8SW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi53aWR0aH0gLz5cbiAgICAgICAgICA8L0p1c3RTcGFuPlxuICAgICAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgICAgICAgPEp1c3RTcGFuPlxuICAgICAgICAgIOyEuOuhnCA8SW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi5oZWlnaHR9IC8+XG4gICAgICAgICAgPC9KdXN0U3Bhbj5cbiAgICAgICAgICA8Q2hyb21lUGljIFxuICAgICAgICAgICAgY29sb3I9e2JhY2tncm91bmR9XG4gICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXtoYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICA8L0p1c3REaXY+XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIDxKdXN0RGl2PlxuICAgICAgICA8SW5wdXRDb250YWluZXI+XG4gICAgICAgICAgPFRpdGxlPuq4gOyekCDshKTsoJU8L1RpdGxlPlxuICAgICAgICAgIDxKdXN0U3Bhbj5cbiAgICAgICAgICAgIOuCtOyaqSA8SW5wdXQgdHlwZT1cInRleHRcIiB7Li4udGV4dH0gLz5cbiAgICAgICAgICA8L0p1c3RTcGFuPlxuICAgICAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgICAgICAgXG4gICAgICAgICAgPEp1c3RTcGFuPlxuICAgICAgICAgIOq4gOyekO2BrOq4sCA8SW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi5mb250U2l6ZX0gLz5cbiAgICAgICAgICA8L0p1c3RTcGFuPlxuICAgICAgICAgIFxuICAgICAgICAgIDxDaHJvbWVQaWMgXG4gICAgICAgICAgY29sb3I9e2ZvbnRDb2xvcn1cbiAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXtoYW5kbGVDaGFuZ2VDb2xvcn1cbiAgICAgICAgLz5cbiAgIFxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfT5Eb3dubG9hZDwvYnV0dG9uPlxuICAgICAgICA8L0p1c3REaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICBcbiAgICAgICAgPC9TdHlsZWRDb250YWluZXI+XG4gICAgICA8L0Jsb2dMYXlvdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmNvbnN0IEp1c3REaXYgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjI1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQoSnVzdERpdilgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNjY2M7XG5gO1xuXG5cblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XG5cbmNvbnN0IEp1c3RTcGFuID0gc3R5bGVkLnNwYW5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAxMXB4O1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuYDtcblxuY29uc3QgQ2hyb21lUGljID0gc3R5bGVkKENocm9tZVBpY2tlcilgYDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG5mbG9hdDogbGVmdDtcbndpZHRoOiAxMDAlO1xubWFyZ2luLWJvdHRvbTogMDtcbnRleHQtYWxpZ246IGluaGVyaXQ7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});