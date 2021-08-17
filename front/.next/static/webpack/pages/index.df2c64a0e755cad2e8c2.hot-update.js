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
              lineNumber: 81,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
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
            lineNumber: 92,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uC138\uB85C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, height), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 12
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_8__.ChromePicker, {
          color: background,
          onChangeComplete: handleChangeBackground
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uB0B4\uC6A9 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "text"
          }, text), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAE00\uC790\uD06C\uAE30 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, fontSize), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_8__.ChromePicker, {
          color: fontColor,
          onChangeComplete: handleChangeColor
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onButtonClick,
          children: "Click me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsIkluZGV4IiwicmVmIiwidXNlUmVmIiwidGV4dCIsInVzZUlucHV0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInVzZVN0YXRlIiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJmb250Q29sb3IiLCJzZXRGb250Q29sb3IiLCJoYW5kbGVDaGFuZ2VDb2xvciIsImNvbG9yIiwiaGV4IiwiaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCIsIm9uQnV0dG9uQ2xpY2siLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJ0b1BuZyIsImNhY2hlQnVzdCIsInRoZW4iLCJkYXRhVXJsIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRvd25sb2FkIiwiaHJlZiIsImNsaWNrIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNkRBQXJCO0tBQU1ELGU7O0FBT04sSUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxHQUFHLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUFsQjtBQUVBLE1BQU1DLElBQUksR0FBR0Msd0RBQVEsQ0FBQyxhQUFELENBQXJCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRCx3REFBUSxDQUFDLEdBQUQsQ0FBdEI7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLHdEQUFRLENBQUMsR0FBRCxDQUF2QjtB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNCQSxlQThCQSw4REFBQyxxREFBRDtBQUNFLGVBQUssRUFBRUcsVUFEVDtBQUVFLDBCQUFnQixFQUFFTztBQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCQSxlQXFDQTtBQUFBLG1EQUNLO0FBQU8sZ0JBQUksRUFBQztBQUFaLGFBQXVCYixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQ0EsZUF5Q0E7QUFBQSwrREFDSztBQUFPLGdCQUFJLEVBQUM7QUFBWixhQUF5QkksUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekNBLGVBOENBLDhEQUFDLHFEQUFEO0FBQ0UsZUFBSyxFQUFFSSxTQURUO0FBRUUsMEJBQWdCLEVBQUVFO0FBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUNBLGVBb0RFO0FBQVEsaUJBQU8sRUFBRUksYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFtRUQsQ0EzR0Q7O0dBQU1qQixLO1VBR1NJLG9ELEVBQ0NBLG9ELEVBQ0NBLG9ELEVBQ0VBLG9EOzs7TUFOYkosSztBQTRHTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZjJjNjRhMGU3NTVjYWQyZThjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmxvZ0xheW91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdG9QbmcgfSBmcm9tIFwiaHRtbC10by1pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrLHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgQ2hyb21lUGlja2VyIH0gZnJvbSAncmVhY3QtY29sb3InXHJcblxyXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB0ZXh0ID0gdXNlSW5wdXQoXCJIRUxMTyBXT1JMRFwiKTtcclxuICBjb25zdCB3aWR0aCA9IHVzZUlucHV0KDcwMCk7XHJcbiAgY29uc3QgaGVpZ2h0ID0gdXNlSW5wdXQoMzUwKTsgIFxyXG4gIGNvbnN0IGZvbnRTaXplID0gdXNlSW5wdXQoNzIpO1xyXG4gIGNvbnN0IFtiYWNrZ3JvdW5kLHNldEJhY2tncm91bmRdID0gdXNlU3RhdGUoJyNmZmZmZmYnKVxyXG4gIGNvbnN0IFtmb250Q29sb3Isc2V0Rm9udENvbG9yXSA9IHVzZVN0YXRlKCcjMDAwMDAwJylcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ29sb3IgPSAoY29sb3IpPT57XHJcbiAgICBzZXRGb250Q29sb3IoY29sb3IuaGV4KVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUJhY2tncm91bmQgPSAoY29sb3IpPT57XHJcbiAgICBzZXRCYWNrZ3JvdW5kKGNvbG9yLmhleClcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkJ1dHRvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0b1BuZyhyZWYuY3VycmVudCwgeyBjYWNoZUJ1c3Q6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKGRhdGFVcmwpID0+IHtcclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGluay5kb3dubG9hZCA9IFwibXktaW1hZ2UtbmFtZS5wbmdcIjtcclxuICAgICAgICBsaW5rLmhyZWYgPSBkYXRhVXJsO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbcmVmXSk7XHJcblxyXG4gXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkJsb2c8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxCbG9nTGF5b3V0PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVxdWVzdFwiPlxyXG4gICAgICAgICAgPGE+7ZW07KSYPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPFN0eWxlZENvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OicxMDBweCcsXHJcbiAgICAgICAgICAgICAgbWluV2lkdGg6JzEwMHB4JyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aC52YWx1ZX1weGAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHQudmFsdWV9cHhgLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQsXHJcbiAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0byBhdXRvJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOmAke2ZvbnRTaXplLnZhbHVlfXB4YCxcclxuICAgICAgICAgICAgICB9fT57dGV4dC52YWx1ZX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAg6rCA66GcIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgey4uLndpZHRofSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAg7IS466GcIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgey4uLmhlaWdodH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2hyb21lUGlja2VyIFxyXG4gICAgICAgICAgY29sb3I9e2JhY2tncm91bmR9XHJcbiAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXtoYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kfSAvPlxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIOuCtOyaqSA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udGV4dH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICDquIDsnpDtgazquLAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4uZm9udFNpemV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPENocm9tZVBpY2tlciBcclxuICAgICAgICAgIGNvbG9yPXtmb250Q29sb3J9XHJcbiAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXtoYW5kbGVDaGFuZ2VDb2xvcn1cclxuICAgICAgICAvPlxyXG4gICBcclxuXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQnV0dG9uQ2xpY2t9PkNsaWNrIG1lPC9idXR0b24+XHJcbiAgICAgICAgPC9TdHlsZWRDb250YWluZXI+XHJcbiAgICAgIDwvQmxvZ0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9