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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('#fff'),
      background = _useState[0],
      setBackground = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('#000'),
      fontColor = _useState2[0],
      setFontColor = _useState2[1];

  var handleChangeColor = function handleChangeColor(ele) {
    console.log(ele); // setBackground(color.hex)
  };

  var handleChangeBackgound = function handleChangeBackgound(ele) {
    console.log(ele); // setBackground(color.hex)
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
        lineNumber: 62,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/request",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "\uD574\uC918"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
              lineNumber: 83,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAC00\uB85C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, width), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uC138\uB85C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, height), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 12
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uBC30\uACBD\uC0C9", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_8__.ChromePicker, {
            color: background,
            onChangeComplete: handleChangeBackground
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uB0B4\uC6A9 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "text"
          }, text), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAE00\uC790\uD06C\uAE30 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, fontSize), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAE00\uC790\uC0C9", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_8__.ChromePicker, {
            color: fontColor,
            onChangeComplete: handleChangeColor
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onButtonClick,
          children: "Click me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Index, "lq3r2aXVH3v0mnG9VloAXyRZyYM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsIkluZGV4IiwicmVmIiwidXNlUmVmIiwidGV4dCIsInVzZUlucHV0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInVzZVN0YXRlIiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJmb250Q29sb3IiLCJzZXRGb250Q29sb3IiLCJoYW5kbGVDaGFuZ2VDb2xvciIsImVsZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VCYWNrZ291bmQiLCJvbkJ1dHRvbkNsaWNrIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwidG9QbmciLCJjYWNoZUJ1c3QiLCJ0aGVuIiwiZGF0YVVybCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkb3dubG9hZCIsImhyZWYiLCJjbGljayIsImVyciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZEQUFyQjtLQUFNRCxlOztBQU9OLElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsR0FBRyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBbEI7QUFFQSxNQUFNQyxJQUFJLEdBQUdDLHdEQUFRLENBQUMsYUFBRCxDQUFyQjtBQUNBLE1BQU1DLEtBQUssR0FBR0Qsd0RBQVEsQ0FBQyxHQUFELENBQXRCO0FBQ0EsTUFBTUUsTUFBTSxHQUFHRix3REFBUSxD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QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JBLGVBOEJBO0FBQUEsd0RBRUEsOERBQUMscURBQUQ7QUFDRSxpQkFBSyxFQUFFRyxVQURUO0FBRUUsNEJBQWdCLEVBQUU4QjtBQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5QkEsZUF3Q0E7QUFBQSxtREFDSztBQUFPLGdCQUFJLEVBQUM7QUFBWixhQUF1QnBDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhDQSxlQTRDQTtBQUFBLCtEQUNLO0FBQU8sZ0JBQUksRUFBQztBQUFaLGFBQXlCSSxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1Q0EsZUFnREE7QUFBQSx3REFFQSw4REFBQyxxREFBRDtBQUNFLGlCQUFLLEVBQUVJLFNBRFQ7QUFFRSw0QkFBZ0IsRUFBRUU7QUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaERBLGVBeURFO0FBQVEsaUJBQU8sRUFBRUssYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUF3RUQsQ0FsSEQ7O0dBQU1sQixLO1VBR1NJLG9ELEVBQ0NBLG9ELEVBQ0NBLG9ELEVBQ0VBLG9EOzs7TUFOYkosSztBQW1ITiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYWEyNzNmNDYyZjBmYTkwMTFiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmxvZ0xheW91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdG9QbmcgfSBmcm9tIFwiaHRtbC10by1pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrLHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgQ2hyb21lUGlja2VyIH0gZnJvbSAncmVhY3QtY29sb3InXHJcblxyXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB0ZXh0ID0gdXNlSW5wdXQoXCJIRUxMTyBXT1JMRFwiKTtcclxuICBjb25zdCB3aWR0aCA9IHVzZUlucHV0KDcwMCk7XHJcbiAgY29uc3QgaGVpZ2h0ID0gdXNlSW5wdXQoMzUwKTsgIFxyXG4gIGNvbnN0IGZvbnRTaXplID0gdXNlSW5wdXQoNzIpO1xyXG4gIGNvbnN0IFtiYWNrZ3JvdW5kLHNldEJhY2tncm91bmRdID0gdXNlU3RhdGUoJyNmZmYnKVxyXG4gIGNvbnN0IFtmb250Q29sb3Isc2V0Rm9udENvbG9yXSA9IHVzZVN0YXRlKCcjMDAwJylcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ29sb3IgPSAoZWxlKT0+e1xyXG4gICAgY29uc29sZS5sb2coZWxlKVxyXG4gICAgLy8gc2V0QmFja2dyb3VuZChjb2xvci5oZXgpXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQmFja2dvdW5kID0gKGVsZSk9PntcclxuICAgIGNvbnNvbGUubG9nKGVsZSlcclxuICAgIC8vIHNldEJhY2tncm91bmQoY29sb3IuaGV4KVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQnV0dG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRvUG5nKHJlZi5jdXJyZW50LCB7IGNhY2hlQnVzdDogdHJ1ZSB9KVxyXG4gICAgICAudGhlbigoZGF0YVVybCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsaW5rLmRvd25sb2FkID0gXCJteS1pbWFnZS1uYW1lLnBuZ1wiO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVcmw7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtyZWZdKTtcclxuXHJcbiBcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEJsb2dMYXlvdXQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZXF1ZXN0XCI+XHJcbiAgICAgICAgICA8YT7tlbTspJg8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6JzEwMHB4JyxcclxuICAgICAgICAgICAgICBtaW5XaWR0aDonMTAwcHgnLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRoLnZhbHVlfXB4YCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodC52YWx1ZX1weGAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgfX0+XHJcblxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvIGF1dG8nLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6YCR7Zm9udFNpemUudmFsdWV9cHhgLFxyXG4gICAgICAgICAgICAgIH19Pnt0ZXh0LnZhbHVlfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDqsIDroZwgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4ud2lkdGh9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICDshLjroZwgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4uaGVpZ2h0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAg67Cw6rK97IOJXHJcbiAgICAgICAgPENocm9tZVBpY2tlciBcclxuICAgICAgICAgIGNvbG9yPXtiYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17aGFuZGxlQ2hhbmdlQmFja2dyb3VuZH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDrgrTsmqkgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnRleHR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAg6riA7J6Q7YGs6riwIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgey4uLmZvbnRTaXplfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDquIDsnpDsg4lcclxuICAgICAgICA8Q2hyb21lUGlja2VyIFxyXG4gICAgICAgICAgY29sb3I9e2ZvbnRDb2xvcn1cclxuICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9e2hhbmRsZUNoYW5nZUNvbG9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25CdXR0b25DbGlja30+Q2xpY2sgbWU8L2J1dHRvbj5cclxuICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cclxuICAgICAgPC9CbG9nTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=