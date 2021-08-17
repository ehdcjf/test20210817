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
      backgorund = _useState2[0],
      setBackground = _useState2[1];

  var _useState3 = useState('#000'),
      _useState4 = (0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState3, 2),
      color = _useState4[0],
      setColor = _useState4[1];

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
        lineNumber: 50,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/request",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "\uD574\uC918"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
              lineNumber: 71,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uD14D\uC2A4\uD2B8 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "text"
          }, text), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAC00\uB85C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, width), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uC138\uB85C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, height), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 12
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAE00\uC790\uD06C\uAE30 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, fontSize), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uBC30\uACBD\uC0C9", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_9__.ChromePicker, {
            co: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAE00\uC790\uC0C9", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_9__.ChromePicker, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onButtonClick,
          children: "Click me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Index, "3pXCpI5Sg+D+zqzqPQ+MCZ523zg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsIkluZGV4IiwicmVmIiwidXNlUmVmIiwidGV4dCIsInVzZUlucHV0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInVzZVN0YXRlIiwiYmFja2dvcnVuZCIsInNldEJhY2tncm91bmQiLCJjb2xvciIsInNldENvbG9yIiwib25CdXR0b25DbGljayIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsInRvUG5nIiwiY2FjaGVCdXN0IiwidGhlbiIsImRhdGFVcmwiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiY2xpY2siLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbkhlaWdodCIsIm1pbldpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidmFsdWUiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSw2REFBckI7S0FBTUQsZTs7QUFPTixJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLEdBQUcsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUEsTUFBTUMsSUFBSSxHQUFHQyx3REFBUSxDQUFDLGFBQUQsQ0FBckI7QUFDQSxNQUFNQyxLQUFLLEdBQUdELHdEQUFRLENBQUMsR0FBRCxDQUF0QjtBQUNBLE1BQU1FLE1BQU0sR0FBR0Ysd0RBQVEsQ0FBQyxHQUFELENBQXZCO0FBQ0EsTUFBTUcsUUFBUSxHQUFHSCx3REFBUSxDQUFDLEVBQUQsQ0FBekI7O0FBTmtCLGtC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QUVBLDhEQUFDLHFEQUFEO0FBQ0UsY0FBRTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBDQSxlQTJDQTtBQUFBLHdEQUVBLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNDQSxlQWlERTtBQUFRLGlCQUFPLEVBQUVNLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBLGtCQURGO0FBZ0VELENBOUZEOztHQUFNYixLO1VBR1NJLG9ELEVBQ0NBLG9ELEVBQ0NBLG9ELEVBQ0VBLG9EOzs7TUFOYkosSztBQStGTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYjc1NWMzYzM1YzM2YTQ3NmYyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmxvZ0xheW91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdG9QbmcgfSBmcm9tIFwiaHRtbC10by1pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgQ2hyb21lUGlja2VyIH0gZnJvbSAncmVhY3QtY29sb3InXHJcblxyXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB0ZXh0ID0gdXNlSW5wdXQoXCJIRUxMTyBXT1JMRFwiKTtcclxuICBjb25zdCB3aWR0aCA9IHVzZUlucHV0KDcwMCk7XHJcbiAgY29uc3QgaGVpZ2h0ID0gdXNlSW5wdXQoMzUwKTsgIFxyXG4gIGNvbnN0IGZvbnRTaXplID0gdXNlSW5wdXQoNzIpO1xyXG4gIGNvbnN0IFtiYWNrZ29ydW5kLHNldEJhY2tncm91bmRdID0gdXNlU3RhdGUoJyNmZmYnKVxyXG4gIGNvbnN0IFtjb2xvcixzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnIzAwMCcpXHJcblxyXG4gIGNvbnN0IG9uQnV0dG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRvUG5nKHJlZi5jdXJyZW50LCB7IGNhY2hlQnVzdDogdHJ1ZSB9KVxyXG4gICAgICAudGhlbigoZGF0YVVybCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsaW5rLmRvd25sb2FkID0gXCJteS1pbWFnZS1uYW1lLnBuZ1wiO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVcmw7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtyZWZdKTtcclxuXHJcbiBcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEJsb2dMYXlvdXQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZXF1ZXN0XCI+XHJcbiAgICAgICAgICA8YT7tlbTspJg8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6JzEwMHB4JyxcclxuICAgICAgICAgICAgICBtaW5XaWR0aDonMTAwcHgnLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRoLnZhbHVlfXB4YCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodC52YWx1ZX1weGAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJwaW5rXCIsXHJcbiAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0byBhdXRvJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOmAke2ZvbnRTaXplLnZhbHVlfXB4YCxcclxuICAgICAgICAgICAgICB9fT57dGV4dC52YWx1ZX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIO2FjeyKpO2KuCA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udGV4dH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAg6rCA66GcIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgey4uLndpZHRofSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAg7IS466GcIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgey4uLmhlaWdodH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIOq4gOyekO2BrOq4sCA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi5mb250U2l6ZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAg67Cw6rK97IOJXHJcbiAgICAgICAgPENocm9tZVBpY2tlciBcclxuICAgICAgICAgIGNvXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICDquIDsnpDsg4lcclxuICAgICAgICA8Q2hyb21lUGlja2VyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25CdXR0b25DbGlja30+Q2xpY2sgbWU8L2J1dHRvbj5cclxuICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cclxuICAgICAgPC9CbG9nTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=