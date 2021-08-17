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
    setFontColor(color.hex);
  };

  var handleChangeBackground = function handleChangeBackground(color) {
    setBackground(color.hex);
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
        lineNumber: 60,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/request",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "\uD574\uC918"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          ref: ref,
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
          lineNumber: 68,
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
        lineNumber: 67,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsIkluZGV4IiwicmVmIiwidXNlUmVmIiwidGV4dCIsInVzZUlucHV0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInVzZVN0YXRlIiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJmb250Q29sb3IiLCJzZXRGb250Q29sb3IiLCJoYW5kbGVDaGFuZ2VDb2xvciIsImNvbG9yIiwiaGV4IiwiaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCIsIm9uQnV0dG9uQ2xpY2siLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJ0b1BuZyIsImNhY2hlQnVzdCIsInRoZW4iLCJkYXRhVXJsIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRvd25sb2FkIiwiaHJlZiIsImNsaWNrIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNkRBQXJCO0tBQU1ELGU7O0FBT04sSUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxHQUFHLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUFsQjtBQUVBLE1BQU1DLElBQUksR0FBR0Msd0RBQVEsQ0FBQyxhQUFELENBQXJCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRCx3REFBUSxDQUFDLEdBQUQsQ0FBdEI7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLHdEQUFRLENBQUMsR0FBRCxDQUF2QjtB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QUFDLHFEQUFEO0FBQ0UsZUFBSyxFQUFFRyxVQURUO0FBRUUsMEJBQWdCLEVBQUVPO0FBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JBLGVBc0NBO0FBQUEsbURBQ0s7QUFBTyxnQkFBSSxFQUFDO0FBQVosYUFBdUJiLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRDQSxlQTBDQTtBQUFBLCtEQUNLO0FBQU8sZ0JBQUksRUFBQztBQUFaLGFBQXlCSSxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQ0EsZUErQ0EsOERBQUMscURBQUQ7QUFDRSxlQUFLLEVBQUVJLFNBRFQ7QUFFRSwwQkFBZ0IsRUFBRUU7QUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQ0EsZUFxREU7QUFBUSxpQkFBTyxFQUFFSSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQW9FRCxDQTVHRDs7R0FBTWpCLEs7VUFHU0ksb0QsRUFDQ0Esb0QsRUFDQ0Esb0QsRUFDRUEsb0Q7OztNQU5iSixLO0FBNkdOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBhZTY2ZGM5ZmE3ZmUxNmNjNDVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvZ0xheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9CbG9nTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB0b1BuZyB9IGZyb20gXCJodG1sLXRvLWltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2ssdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgeyBDaHJvbWVQaWNrZXIgfSBmcm9tICdyZWFjdC1jb2xvcidcclxuXHJcbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHRleHQgPSB1c2VJbnB1dChcIkhFTExPIFdPUkxEXCIpO1xyXG4gIGNvbnN0IHdpZHRoID0gdXNlSW5wdXQoNzAwKTtcclxuICBjb25zdCBoZWlnaHQgPSB1c2VJbnB1dCgzNTApOyAgXHJcbiAgY29uc3QgZm9udFNpemUgPSB1c2VJbnB1dCg3Mik7XHJcbiAgY29uc3QgW2JhY2tncm91bmQsc2V0QmFja2dyb3VuZF0gPSB1c2VTdGF0ZSgnI2ZmZmZmZicpXHJcbiAgY29uc3QgW2ZvbnRDb2xvcixzZXRGb250Q29sb3JdID0gdXNlU3RhdGUoJyMwMDAwMDAnKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDb2xvciA9IChjb2xvcik9PntcclxuICAgIHNldEZvbnRDb2xvcihjb2xvci5oZXgpXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCA9IChjb2xvcik9PntcclxuICAgIHNldEJhY2tncm91bmQoY29sb3IuaGV4KVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQnV0dG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRvUG5nKHJlZi5jdXJyZW50LCB7IGNhY2hlQnVzdDogdHJ1ZSB9KVxyXG4gICAgICAudGhlbigoZGF0YVVybCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsaW5rLmRvd25sb2FkID0gXCJteS1pbWFnZS1uYW1lLnBuZ1wiO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVcmw7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtyZWZdKTtcclxuXHJcbiBcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEJsb2dMYXlvdXQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZXF1ZXN0XCI+XHJcbiAgICAgICAgICA8YT7tlbTspJg8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiByZWY9e3JlZn1cclxuICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDonMTAwcHgnLFxyXG4gICAgICAgICAgICBtaW5XaWR0aDonMTAwcHgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRoLnZhbHVlfXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHQudmFsdWV9cHhgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvIGF1dG8nLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6YCR7Zm9udFNpemUudmFsdWV9cHhgLFxyXG4gICAgICAgICAgICAgIH19Pnt0ZXh0LnZhbHVlfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIOqwgOuhnCA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi53aWR0aH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIOyEuOuhnCA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi5oZWlnaHR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENocm9tZVBpY2tlciBcclxuICAgICAgICAgIGNvbG9yPXtiYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17aGFuZGxlQ2hhbmdlQmFja2dyb3VuZH0gLz5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDrgrTsmqkgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnRleHR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAg6riA7J6Q7YGs6riwIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgey4uLmZvbnRTaXplfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxDaHJvbWVQaWNrZXIgXHJcbiAgICAgICAgICBjb2xvcj17Zm9udENvbG9yfVxyXG4gICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17aGFuZGxlQ2hhbmdlQ29sb3J9XHJcbiAgICAgICAgLz5cclxuICAgXHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfT5DbGljayBtZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxyXG4gICAgICA8L0Jsb2dMYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==