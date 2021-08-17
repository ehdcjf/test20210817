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
/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlogLayout */ "./components/BlogLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-to-image */ "./node_modules/html-to-image/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\KGA_04\\Desktop\\\uC0C8 \uD3F4\uB354\\CreateBanner\\front\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "pages__StyledContainer",
  componentId: "sc-2cp0ao-0"
})(["width:80vw;height:auto;overflow:hidden;margin:0 auto;"]);
_c = StyledContainer;

var Index = function Index() {
  _s();

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
  var text = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)("HELLO WORLD");
  var width = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)(700);
  var height = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)(350);
  var fontSize = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)(72);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('#ffffff'),
      background = _useState[0],
      setBackground = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('#000000'),
      fontColor = _useState2[0],
      setFontColor = _useState2[1];

  var handleChangeColor = function handleChangeColor(color) {
    console.log(color);
    setFontColor(color.hex);
  };

  var handleChangeBackground = function handleChangeBackground(color) {// setBackground(color.hex)
  };

  var onButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function () {
    if (ref.current === null) {
      return;
    }

    (0,html_to_image__WEBPACK_IMPORTED_MODULE_5__.toPng)(ref.current, {
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/request",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "\uD574\uC918"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
              background: background
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: {
                margin: 'auto auto',
                fontSize: "".concat(fontSize.value, "px")
              },
              children: text.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAC00\uB85C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, width), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uC138\uB85C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, height), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 12
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_8__.ChromePicker, {
          color: background,
          onChangeComplete: handleChangeBackground
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uB0B4\uC6A9 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "text"
          }, text), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAE00\uC790\uD06C\uAE30 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, fontSize), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_8__.ChromePicker, {
          color: fontColor,
          onChangeComplete: handleChangeColor
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onButtonClick,
          children: "Click me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Index, "kdMKNndJW0nSWylsSblY3PuXnVE=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsIkluZGV4IiwicmVmIiwidXNlUmVmIiwidGV4dCIsInVzZUlucHV0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInVzZVN0YXRlIiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJmb250Q29sb3IiLCJzZXRGb250Q29sb3IiLCJoYW5kbGVDaGFuZ2VDb2xvciIsImNvbG9yIiwiY29uc29sZSIsImxvZyIsImhleCIsImhhbmRsZUNoYW5nZUJhY2tncm91bmQiLCJvbkJ1dHRvbkNsaWNrIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwidG9QbmciLCJjYWNoZUJ1c3QiLCJ0aGVuIiwiZGF0YVVybCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkb3dubG9hZCIsImhyZWYiLCJjbGljayIsImVyciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNkRBQXJCO0tBQU1ELGU7O0FBT04sSUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxHQUFHLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUFsQjtBQUVBLE1BQU1DLElBQUksR0FBR0Msd0RBQVEsQ0FBQyxhQUFELENBQXJCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRCx3REFBUSxDQUFDLEdBQUQsQ0FBdEI7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLHdEQUFRLENBQUMsR0FBRCxDQUF2QjtB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkEsZUE4QkEsOERBQUMscURBQUQ7QUFDRSxlQUFLLEVBQUVHLFVBRFQ7QUFFRSwwQkFBZ0IsRUFBRVM7QUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5QkEsZUFxQ0E7QUFBQSxtREFDSztBQUFPLGdCQUFJLEVBQUM7QUFBWixhQUF1QmYsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckNBLGVBeUNBO0FBQUEsK0RBQ0s7QUFBTyxnQkFBSSxFQUFDO0FBQVosYUFBeUJJLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpDQSxlQThDQSw4REFBQyxxREFBRDtBQUNFLGVBQUssRUFBRUksU0FEVDtBQUVFLDBCQUFnQixFQUFFRTtBQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlDQSxlQW9ERTtBQUFRLGlCQUFPLEVBQUVNLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBLGtCQURGO0FBbUVELENBNUdEOztHQUFNbkIsSztVQUdTSSxvRCxFQUNDQSxvRCxFQUNDQSxvRCxFQUNFQSxvRDs7O01BTmJKLEs7QUE2R04sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzg4YzhkMWIxNWZiYjdjMzVhYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2dMYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHRvUG5nIH0gZnJvbSBcImh0bWwtdG8taW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjayx1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IENocm9tZVBpY2tlciB9IGZyb20gJ3JlYWN0LWNvbG9yJ1xyXG5cclxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgdGV4dCA9IHVzZUlucHV0KFwiSEVMTE8gV09STERcIik7XHJcbiAgY29uc3Qgd2lkdGggPSB1c2VJbnB1dCg3MDApO1xyXG4gIGNvbnN0IGhlaWdodCA9IHVzZUlucHV0KDM1MCk7ICBcclxuICBjb25zdCBmb250U2l6ZSA9IHVzZUlucHV0KDcyKTtcclxuICBjb25zdCBbYmFja2dyb3VuZCxzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKCcjZmZmZmZmJylcclxuICBjb25zdCBbZm9udENvbG9yLHNldEZvbnRDb2xvcl0gPSB1c2VTdGF0ZSgnIzAwMDAwMCcpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNvbG9yID0gKGNvbG9yKT0+e1xyXG4gICAgY29uc29sZS5sb2coY29sb3IpXHJcbiAgICBzZXRGb250Q29sb3IoY29sb3IuaGV4KVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUJhY2tncm91bmQgPSAoY29sb3IpPT57XHJcbiAgICAvLyBzZXRCYWNrZ3JvdW5kKGNvbG9yLmhleClcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkJ1dHRvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0b1BuZyhyZWYuY3VycmVudCwgeyBjYWNoZUJ1c3Q6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKGRhdGFVcmwpID0+IHtcclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGluay5kb3dubG9hZCA9IFwibXktaW1hZ2UtbmFtZS5wbmdcIjtcclxuICAgICAgICBsaW5rLmhyZWYgPSBkYXRhVXJsO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbcmVmXSk7XHJcblxyXG4gXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkJsb2c8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxCbG9nTGF5b3V0PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVxdWVzdFwiPlxyXG4gICAgICAgICAgPGE+7ZW07KSYPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPFN0eWxlZENvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OicxMDBweCcsXHJcbiAgICAgICAgICAgICAgbWluV2lkdGg6JzEwMHB4JyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aC52YWx1ZX1weGAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHQudmFsdWV9cHhgLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQsXHJcbiAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0byBhdXRvJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOmAke2ZvbnRTaXplLnZhbHVlfXB4YCxcclxuICAgICAgICAgICAgICB9fT57dGV4dC52YWx1ZX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAg6rCA66GcIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgey4uLndpZHRofSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAg7IS466GcIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgey4uLmhlaWdodH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2hyb21lUGlja2VyIFxyXG4gICAgICAgICAgY29sb3I9e2JhY2tncm91bmR9XHJcbiAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXtoYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kfSAvPlxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIOuCtOyaqSA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udGV4dH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICDquIDsnpDtgazquLAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4uZm9udFNpemV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPENocm9tZVBpY2tlciBcclxuICAgICAgICAgIGNvbG9yPXtmb250Q29sb3J9XHJcbiAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXtoYW5kbGVDaGFuZ2VDb2xvcn1cclxuICAgICAgICAvPlxyXG4gICBcclxuXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQnV0dG9uQ2xpY2t9PkNsaWNrIG1lPC9idXR0b24+XHJcbiAgICAgICAgPC9TdHlsZWRDb250YWluZXI+XHJcbiAgICAgIDwvQmxvZ0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9