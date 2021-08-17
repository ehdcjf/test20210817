self["webpackHotUpdate_N_E"]("pages/request",{

/***/ "./components/request/RequestList.jsx":
/*!********************************************!*\
  !*** ./components/request/RequestList.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RequestItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestItem */ "./components/request/RequestItem.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_04\\Desktop\\\uC0C8 \uD3F4\uB354\\CreateBanner\\front\\components\\request\\RequestList.jsx",
    _this = undefined;



var StyledList = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "RequestList__StyledList",
  componentId: "sc-10wqua4-0"
})(["width:70vw;height:auto;overflow:hidden;display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 auto;transform-origin:", ";transform:", ";"], function (props) {
  return props.rotate ? "50vw 50vh;" : "none";
}, function (props) {
  return props.rotate ? "perspective(1000px) translate3d(0,20vh,0) rotate3d(1,0,0,30deg);" : "none";
});
_c = StyledList;

var RequestList = function RequestList(props) {
  var list = props.list; //   const handleDelete = props.handleDelete;
  //   const handleModify = props.handleModify;

  var Item = list.map(function (v, i) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RequestItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      id: v.id,
      name: v.name,
      content: v.content,
      date: v.date
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this);
  }); // if (loadding) return <li>로딩중입니다^^</li>;
  // if (error) return <li>에러!!</li>;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledList, {
    rotate: props.rotate.toString(),
    children: Item
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 10
  }, _this);
};

_c2 = RequestList;
/* harmony default export */ __webpack_exports__["default"] = (RequestList);

var _c, _c2;

$RefreshReg$(_c, "StyledList");
$RefreshReg$(_c2, "RequestList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0L1JlcXVlc3RMaXN0LmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRMaXN0Iiwic3R5bGVkIiwicHJvcHMiLCJyb3RhdGUiLCJSZXF1ZXN0TGlzdCIsImxpc3QiLCJJdGVtIiwibWFwIiwidiIsImkiLCJpZCIsIm5hbWUiLCJjb250ZW50IiwiZGF0ZSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZKQVNRLFVBQUNDLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxZQUFmLEdBQThCLE1BQTFDO0FBQUEsQ0FUUixFQVVBLFVBQUNELEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxrRUFBZixHQUFvRixNQUFoRztBQUFBLENBVkEsQ0FBaEI7S0FBTUgsVTs7QUFnQk4sSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0YsS0FBRCxFQUFXO0FBQzNCLE1BQU1HLElBQUksR0FBR0gsS0FBSyxDQUFDRyxJQUFuQixDQUQyQixDQUUvQjtBQUNBOztBQUVBLE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDNUIsd0JBQ0UsOERBQUMsaURBQUQ7QUFFRSxRQUFFLEVBQUVELENBQUMsQ0FBQ0UsRUFGUjtBQUdFLFVBQUksRUFBRUYsQ0FBQyxDQUFDRyxJQUhWO0FBSUUsYUFBTyxFQUFFSCxDQUFDLENBQUNJLE9BSmI7QUFLRSxVQUFJLEVBQUlKLENBQUMsQ0FBQ0s7QUFMWixPQUNPTCxDQUFDLENBQUNFLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBU0QsR0FWVSxDQUFiLENBTCtCLENBaUI3QjtBQUNBOztBQUNBLHNCQUFPLDhEQUFDLFVBQUQ7QUFBWSxVQUFNLEVBQUVSLEtBQUssQ0FBQ0MsTUFBTixDQUFhVyxRQUFiLEVBQXBCO0FBQUEsY0FBOENSO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBcEJEOztNQUFNRixXO0FBdUJOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlcXVlc3QuNGYwMjk1NmM2ZDc0M2YzYzBmZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXF1ZXN0SXRlbSBmcm9tIFwiLi9SZXF1ZXN0SXRlbVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgU3R5bGVkTGlzdCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogNzB2dztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46ICR7KHByb3BzKSA9PiAocHJvcHMucm90YXRlID8gXCI1MHZ3IDUwdmg7XCIgOiBcIm5vbmVcIil9O1xyXG4gICAgdHJhbnNmb3JtOiR7KHByb3BzKSA9PiAocHJvcHMucm90YXRlID8gXCJwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZTNkKDAsMjB2aCwwKSByb3RhdGUzZCgxLDAsMCwzMGRlZyk7XCIgOiBcIm5vbmVcIil9O1xyXG4gICAgIFxyXG5cclxuYFxyXG5cclxuXHJcbmNvbnN0IFJlcXVlc3RMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0ID0gcHJvcHMubGlzdDtcclxuLy8gICBjb25zdCBoYW5kbGVEZWxldGUgPSBwcm9wcy5oYW5kbGVEZWxldGU7XHJcbi8vICAgY29uc3QgaGFuZGxlTW9kaWZ5ID0gcHJvcHMuaGFuZGxlTW9kaWZ5O1xyXG4gIFxyXG5jb25zdCBJdGVtID0gbGlzdC5tYXAoKHYsIGkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZXF1ZXN0SXRlbVxyXG4gICAgICAgIGtleT17di5pZH1cclxuICAgICAgICBpZD17di5pZH0gICAgXHJcbiAgICAgICAgbmFtZT17di5uYW1lfVxyXG4gICAgICAgIGNvbnRlbnQ9e3YuY29udGVudH1cclxuICAgICAgICBkYXRlID0ge3YuZGF0ZX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGlmIChsb2FkZGluZykgcmV0dXJuIDxsaT7roZzrlKnspJHsnoXri4jri6ReXjwvbGk+O1xyXG4gIC8vIGlmIChlcnJvcikgcmV0dXJuIDxsaT7sl5Drn6whITwvbGk+O1xyXG4gIHJldHVybiA8U3R5bGVkTGlzdCByb3RhdGU9e3Byb3BzLnJvdGF0ZS50b1N0cmluZygpfT57SXRlbX08L1N0eWxlZExpc3Q+O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=