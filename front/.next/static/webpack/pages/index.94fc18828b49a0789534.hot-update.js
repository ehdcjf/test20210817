self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogLayout */ "./components/BlogLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html-to-image */ "./node_modules/html-to-image/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\KGA_04\\Desktop\\\uC0C8 \uD3F4\uB354\\CreateBanner\\front\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.div.withConfig({
  displayName: "pages__StyledContainer",
  componentId: "sc-2cp0ao-0"
})(["width:80vw;height:auto;overflow:hidden;margin:0 auto;"]);
_c = StyledContainer;

var Index = function Index() {
  _s();

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
  var text = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__.default)("HELLO WORLD");
  var width = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__.default)(700);
  var height = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__.default)(350);
  var fontSize = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__.default)(72);

  var _useState = useState('#fff'),
      _useState2 = (0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState, 2),
      background = _useState2[0],
      setBackground = _useState2[1];

  var _useState3 = useState('#000'),
      _useState4 = (0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState3, 2),
      fontcolor = _useState4[0],
      setColor = _useState4[1];

  var handleChangeComplete = function handleChangeComplete(color) {};

  var onButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function () {
    if (ref.current === null) {
      return;
    }

    (0,html_to_image__WEBPACK_IMPORTED_MODULE_6__.toPng)(ref.current, {
      cacheBust: true
    }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.png";
      link.href = dataUrl;
      link.click();
    })["catch"](function (err) {
      console.log(err);
    });
  }, [ref]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/request",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "\uD574\uC918"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          ref: ref,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              margin: '0 auto',
              display: 'flex',
              minHeight: '100px',
              minWidth: '100px',
              justifyContent: 'center',
              alignItems: 'center',
              width: "".concat(width.value, "px"),
              height: "".concat(height.value, "px"),
              background: "pink"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: {
                margin: 'auto auto',
                fontSize: "".concat(fontSize.value, "px")
              },
              children: text.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uD14D\uC2A4\uD2B8 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "text"
          }, text), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAC00\uB85C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, width), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uC138\uB85C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, height), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 12
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAE00\uC790\uD06C\uAE30 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, fontSize), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uBC30\uACBD\uC0C9", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_9__.ChromePicker, {
            color: background,
            onChangeComplete: handleChangeComplete
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAE00\uC790\uC0C9", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_9__.ChromePicker, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onButtonClick,
          children: "Click me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Index, "/3PXzXCD5BT0PtJcy6GbEf21rIY=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__.default];
});

_c2 = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c, _c2;

$RefreshReg$(_c, "StyledContainer");
$RefreshReg$(_c2, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsIkluZGV4IiwicmVmIiwidXNlUmVmIiwidGV4dCIsInVzZUlucHV0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInVzZVN0YXRlIiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJmb250Y29sb3IiLCJzZXRDb2xvciIsImhhbmRsZUNoYW5nZUNvbXBsZXRlIiwiY29sb3IiLCJvbkJ1dHRvbkNsaWNrIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwidG9QbmciLCJjYWNoZUJ1c3QiLCJ0aGVuIiwiZGF0YVVybCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkb3dubG9hZCIsImhyZWYiLCJjbGljayIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0Msc0VBQUg7QUFBQTtBQUFBO0FBQUEsNkRBQXJCO0tBQU1ELGU7O0FBT04sSUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxHQUFHLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUFsQjtBQUVBLE1BQU1DLElBQUksR0FBR0Msd0RBQVEsQ0FBQyxhQUFELENBQXJCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRCx3REFBUSxDQUFDLEdBQUQsQ0FBdEI7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLHdEQUFRLENBQUMsR0FBRCxDQUF2QjtBQUNBLE1BQU1HLFFBQVEsR0FBR0gsd0RBQVEsQ0FB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QUFDO0FBQVosYUFBeUJDLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhDQSxlQW9DQTtBQUFBLHdEQUVBLDhEQUFDLHFEQUFEO0FBQ0UsaUJBQUssRUFBRUUsVUFEVDtBQUVFLDRCQUFnQixFQUFFSTtBQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQ0EsZUE0Q0E7QUFBQSx3REFFQSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1Q0EsZUFrREU7QUFBUSxpQkFBTyxFQUFFRSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQWlFRCxDQW5HRDs7R0FBTWYsSztVQUdTSSxvRCxFQUNDQSxvRCxFQUNDQSxvRCxFQUNFQSxvRDs7O01BTmJKLEs7QUFvR04sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTRmYzE4ODI4YjQ5YTA3ODk1MzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2dMYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHRvUG5nIH0gZnJvbSBcImh0bWwtdG8taW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IENocm9tZVBpY2tlciB9IGZyb20gJ3JlYWN0LWNvbG9yJ1xyXG5cclxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgdGV4dCA9IHVzZUlucHV0KFwiSEVMTE8gV09STERcIik7XHJcbiAgY29uc3Qgd2lkdGggPSB1c2VJbnB1dCg3MDApO1xyXG4gIGNvbnN0IGhlaWdodCA9IHVzZUlucHV0KDM1MCk7ICBcclxuICBjb25zdCBmb250U2l6ZSA9IHVzZUlucHV0KDcyKTtcclxuICBjb25zdCBbYmFja2dyb3VuZCxzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKCcjZmZmJylcclxuICBjb25zdCBbZm9udGNvbG9yLHNldENvbG9yXSA9IHVzZVN0YXRlKCcjMDAwJylcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ29tcGxldGUgPSAoY29sb3IpPT57XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25CdXR0b25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChyZWYuY3VycmVudCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdG9QbmcocmVmLmN1cnJlbnQsIHsgY2FjaGVCdXN0OiB0cnVlIH0pXHJcbiAgICAgIC50aGVuKChkYXRhVXJsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSBcIm15LWltYWdlLW5hbWUucG5nXCI7XHJcbiAgICAgICAgbGluay5ocmVmID0gZGF0YVVybDtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW3JlZl0pO1xyXG5cclxuIFxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5CbG9nPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QmxvZ0xheW91dD5cclxuICAgICAgICA8TGluayBocmVmPVwiL3JlcXVlc3RcIj5cclxuICAgICAgICAgIDxhPu2VtOykmDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxTdHlsZWRDb250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIG1pbkhlaWdodDonMTAwcHgnLFxyXG4gICAgICAgICAgICAgIG1pbldpZHRoOicxMDBweCcsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICAgICAgICB3aWR0aDogYCR7d2lkdGgudmFsdWV9cHhgLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0LnZhbHVlfXB4YCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInBpbmtcIixcclxuICAgICAgICAgICAgfX0+XHJcblxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvIGF1dG8nLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6YCR7Zm9udFNpemUudmFsdWV9cHhgLFxyXG4gICAgICAgICAgICAgIH19Pnt0ZXh0LnZhbHVlfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAg7YWN7Iqk7Yq4IDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi50ZXh0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDqsIDroZwgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4ud2lkdGh9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICDshLjroZwgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4uaGVpZ2h0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAg6riA7J6Q7YGs6riwIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgey4uLmZvbnRTaXplfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDrsLDqsr3sg4lcclxuICAgICAgICA8Q2hyb21lUGlja2VyIFxyXG4gICAgICAgICAgY29sb3I9e2JhY2tncm91bmR9XHJcbiAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXtoYW5kbGVDaGFuZ2VDb21wbGV0ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIOq4gOyekOyDiVxyXG4gICAgICAgIDxDaHJvbWVQaWNrZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgXHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfT5DbGljayBtZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxyXG4gICAgICA8L0Jsb2dMYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==