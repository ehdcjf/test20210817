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
      setFontColor = _useState4[1];

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

_s(Index, "EUL3ohrzukC3H12Zygvx2j7rmZs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsIkluZGV4IiwicmVmIiwidXNlUmVmIiwidGV4dCIsInVzZUlucHV0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInVzZVN0YXRlIiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJmb250Y29sb3IiLCJzZXRGb250Q29sb3IiLCJoYW5kbGVDaGFuZ2VDb21wbGV0ZSIsImNvbG9yIiwib25CdXR0b25DbGljayIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsInRvUG5nIiwiY2FjaGVCdXN0IiwidGhlbiIsImRhdGFVcmwiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiY2xpY2siLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbkhlaWdodCIsIm1pbldpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLHNFQUFIO0FBQUE7QUFBQTtBQUFBLDZEQUFyQjtLQUFNRCxlOztBQU9OLElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsR0FBRyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBbEI7QUFFQSxNQUFNQyxJQUFJLEdBQUdDLHdEQUFRLENBQUMsYUFBRCxDQUFyQjtBQUNBLE1BQU1DLEtBQUssR0FBR0Qsd0RBQVEsQ0FBQyxHQUFELENBQXRCO0FBQ0EsTUFBTUUsTUFBTSxHQUFHRix3REFBUSxDQUFDLEdBQUQsQ0FBdkI7QUFDQSxNQUFNRyxRQUFRLEdBQUdILHdEQUFR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QUksRUFBQztBQUFaLGFBQXlCQyxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0EsZUFvQ0E7QUFBQSx3REFFQSw4REFBQyxxREFBRDtBQUNFLGlCQUFLLEVBQUVFLFVBRFQ7QUFFRSw0QkFBZ0IsRUFBRUk7QUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcENBLGVBNENBO0FBQUEsd0RBRUEsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUNBLGVBa0RFO0FBQVEsaUJBQU8sRUFBRUUsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFpRUQsQ0FuR0Q7O0dBQU1mLEs7VUFHU0ksb0QsRUFDQ0Esb0QsRUFDQ0Esb0QsRUFDRUEsb0Q7OztNQU5iSixLO0FBb0dOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBiYmZmYTMwOTAzMzRkYTcxNGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvZ0xheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9CbG9nTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB0b1BuZyB9IGZyb20gXCJodG1sLXRvLWltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgeyBDaHJvbWVQaWNrZXIgfSBmcm9tICdyZWFjdC1jb2xvcidcclxuXHJcbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHRleHQgPSB1c2VJbnB1dChcIkhFTExPIFdPUkxEXCIpO1xyXG4gIGNvbnN0IHdpZHRoID0gdXNlSW5wdXQoNzAwKTtcclxuICBjb25zdCBoZWlnaHQgPSB1c2VJbnB1dCgzNTApOyAgXHJcbiAgY29uc3QgZm9udFNpemUgPSB1c2VJbnB1dCg3Mik7XHJcbiAgY29uc3QgW2JhY2tncm91bmQsc2V0QmFja2dyb3VuZF0gPSB1c2VTdGF0ZSgnI2ZmZicpXHJcbiAgY29uc3QgW2ZvbnRjb2xvcixzZXRGb250Q29sb3JdID0gdXNlU3RhdGUoJyMwMDAnKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDb21wbGV0ZSA9IChjb2xvcik9PntcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkJ1dHRvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0b1BuZyhyZWYuY3VycmVudCwgeyBjYWNoZUJ1c3Q6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKGRhdGFVcmwpID0+IHtcclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGluay5kb3dubG9hZCA9IFwibXktaW1hZ2UtbmFtZS5wbmdcIjtcclxuICAgICAgICBsaW5rLmhyZWYgPSBkYXRhVXJsO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbcmVmXSk7XHJcblxyXG4gXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkJsb2c8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxCbG9nTGF5b3V0PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVxdWVzdFwiPlxyXG4gICAgICAgICAgPGE+7ZW07KSYPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPFN0eWxlZENvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OicxMDBweCcsXHJcbiAgICAgICAgICAgICAgbWluV2lkdGg6JzEwMHB4JyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aC52YWx1ZX1weGAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHQudmFsdWV9cHhgLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicGlua1wiLFxyXG4gICAgICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8gYXV0bycsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTpgJHtmb250U2l6ZS52YWx1ZX1weGAsXHJcbiAgICAgICAgICAgICAgfX0+e3RleHQudmFsdWV9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDthY3siqTtirggPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnRleHR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIOqwgOuhnCA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi53aWR0aH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIOyEuOuhnCA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi5oZWlnaHR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICDquIDsnpDtgazquLAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4uZm9udFNpemV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIOuwsOqyveyDiVxyXG4gICAgICAgIDxDaHJvbWVQaWNrZXIgXHJcbiAgICAgICAgICBjb2xvcj17YmFja2dyb3VuZH1cclxuICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9e2hhbmRsZUNoYW5nZUNvbXBsZXRlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAg6riA7J6Q7IOJXHJcbiAgICAgICAgPENocm9tZVBpY2tlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICBcclxuXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQnV0dG9uQ2xpY2t9PkNsaWNrIG1lPC9idXR0b24+XHJcbiAgICAgICAgPC9TdHlsZWRDb250YWluZXI+XHJcbiAgICAgIDwvQmxvZ0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9