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

  var handleChangeColor = function handleChangeColor(ele) {
    console.log(ele);
    setFontColor(color.hex);
  };

  var handleChangeBackground = function handleChangeBackground(ele) {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_8__.ChromePicker, {
          color: background,
          onChangeComplete: handleChangeBackground
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uB0B4\uC6A9 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "text"
          }, text), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAE00\uC790\uD06C\uAE30 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, fontSize), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_8__.ChromePicker, {
          color: fontColor,
          onChangeComplete: handleChangeColor
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onButtonClick,
          children: "Click me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsIkluZGV4IiwicmVmIiwidXNlUmVmIiwidGV4dCIsInVzZUlucHV0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInVzZVN0YXRlIiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJmb250Q29sb3IiLCJzZXRGb250Q29sb3IiLCJoYW5kbGVDaGFuZ2VDb2xvciIsImVsZSIsImNvbnNvbGUiLCJsb2ciLCJjb2xvciIsImhleCIsImhhbmRsZUNoYW5nZUJhY2tncm91bmQiLCJvbkJ1dHRvbkNsaWNrIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwidG9QbmciLCJjYWNoZUJ1c3QiLCJ0aGVuIiwiZGF0YVVybCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkb3dubG9hZCIsImhyZWYiLCJjbGljayIsImVyciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNkRBQXJCO0tBQU1ELGU7O0FBT04sSUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxHQUFHLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUFsQjtBQUVBLE1BQU1DLElBQUksR0FBR0Msd0RBQVEsQ0FBQyxhQUFELENBQXJCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRCx3REFBUSxDQUFDLEdBQUQsQ0FBdEI7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLHdEQUFRLENBQUMsR0FBRCxD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QUFBWixhQUF5QkMsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JBLGVBOEJBLDhEQUFDLHFEQUFEO0FBQ0UsZUFBSyxFQUFFRyxVQURUO0FBRUUsMEJBQWdCLEVBQUVVO0FBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJBLGVBcUNBO0FBQUEsbURBQ0s7QUFBTyxnQkFBSSxFQUFDO0FBQVosYUFBdUJoQixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQ0EsZUF5Q0E7QUFBQSwrREFDSztBQUFPLGdCQUFJLEVBQUM7QUFBWixhQUF5QkksUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekNBLGVBOENBLDhEQUFDLHFEQUFEO0FBQ0UsZUFBSyxFQUFFSSxTQURUO0FBRUUsMEJBQWdCLEVBQUVFO0FBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUNBLGVBb0RFO0FBQVEsaUJBQU8sRUFBRU8sYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFtRUQsQ0E3R0Q7O0dBQU1wQixLO1VBR1NJLG9ELEVBQ0NBLG9ELEVBQ0NBLG9ELEVBQ0VBLG9EOzs7TUFOYkosSztBQThHTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43OWYyZTg1ZWJlMDJiMjgxYzExYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmxvZ0xheW91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdG9QbmcgfSBmcm9tIFwiaHRtbC10by1pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrLHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgQ2hyb21lUGlja2VyIH0gZnJvbSAncmVhY3QtY29sb3InXHJcblxyXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB0ZXh0ID0gdXNlSW5wdXQoXCJIRUxMTyBXT1JMRFwiKTtcclxuICBjb25zdCB3aWR0aCA9IHVzZUlucHV0KDcwMCk7XHJcbiAgY29uc3QgaGVpZ2h0ID0gdXNlSW5wdXQoMzUwKTsgIFxyXG4gIGNvbnN0IGZvbnRTaXplID0gdXNlSW5wdXQoNzIpO1xyXG4gIGNvbnN0IFtiYWNrZ3JvdW5kLHNldEJhY2tncm91bmRdID0gdXNlU3RhdGUoJyNmZmZmZmYnKVxyXG4gIGNvbnN0IFtmb250Q29sb3Isc2V0Rm9udENvbG9yXSA9IHVzZVN0YXRlKCcjMDAwMDAwJylcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ29sb3IgPSAoZWxlKT0+e1xyXG4gICAgY29uc29sZS5sb2coZWxlKVxyXG4gICAgc2V0Rm9udENvbG9yKGNvbG9yLmhleClcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kID0gKGVsZSk9PntcclxuICAgIGNvbnNvbGUubG9nKGVsZSlcclxuICAgIC8vIHNldEJhY2tncm91bmQoY29sb3IuaGV4KVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQnV0dG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRvUG5nKHJlZi5jdXJyZW50LCB7IGNhY2hlQnVzdDogdHJ1ZSB9KVxyXG4gICAgICAudGhlbigoZGF0YVVybCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsaW5rLmRvd25sb2FkID0gXCJteS1pbWFnZS1uYW1lLnBuZ1wiO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVcmw7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtyZWZdKTtcclxuXHJcbiBcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEJsb2dMYXlvdXQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZXF1ZXN0XCI+XHJcbiAgICAgICAgICA8YT7tlbTspJg8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6JzEwMHB4JyxcclxuICAgICAgICAgICAgICBtaW5XaWR0aDonMTAwcHgnLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRoLnZhbHVlfXB4YCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodC52YWx1ZX1weGAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgfX0+XHJcblxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvIGF1dG8nLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6YCR7Zm9udFNpemUudmFsdWV9cHhgLFxyXG4gICAgICAgICAgICAgIH19Pnt0ZXh0LnZhbHVlfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDqsIDroZwgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4ud2lkdGh9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICDshLjroZwgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4uaGVpZ2h0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDaHJvbWVQaWNrZXIgXHJcbiAgICAgICAgICBjb2xvcj17YmFja2dyb3VuZH1cclxuICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9e2hhbmRsZUNoYW5nZUJhY2tncm91bmR9IC8+XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgIFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAg64K07JqpIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi50ZXh0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIOq4gOyekO2BrOq4sCA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi5mb250U2l6ZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8Q2hyb21lUGlja2VyIFxyXG4gICAgICAgICAgY29sb3I9e2ZvbnRDb2xvcn1cclxuICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9e2hhbmRsZUNoYW5nZUNvbG9yfVxyXG4gICAgICAgIC8+XHJcbiAgIFxyXG5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25CdXR0b25DbGlja30+Q2xpY2sgbWU8L2J1dHRvbj5cclxuICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cclxuICAgICAgPC9CbG9nTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=