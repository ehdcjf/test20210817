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
})(["width:70vw;height:auto;overflow:hidden;display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 auto;", ";transform-origin:50vw 50vh;transform:perspective(1000px) translate3d(0,50vh,0) rotate3d(1,0,0,30deg );"], function (props) {
  return props.flag ? "block" : "none";
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
      lineNumber: 28,
      columnNumber: 7
    }, _this);
  }); // if (loadding) return <li>로딩중입니다^^</li>;
  // if (error) return <li>에러!!</li>;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledList, {
    rotate: props.rotate.toSring(),
    children: Item
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0L1JlcXVlc3RMaXN0LmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRMaXN0Iiwic3R5bGVkIiwicHJvcHMiLCJmbGFnIiwiUmVxdWVzdExpc3QiLCJsaXN0IiwiSXRlbSIsIm1hcCIsInYiLCJpIiwiaWQiLCJuYW1lIiwiY29udGVudCIsImRhdGUiLCJyb3RhdGUiLCJ0b1NyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG1PQVFWLFVBQUNDLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLElBQU4sR0FBYSxPQUFiLEdBQXVCLE1BQW5DO0FBQUEsQ0FSVSxDQUFoQjtLQUFNSCxVOztBQWlCTixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRixLQUFELEVBQVc7QUFDM0IsTUFBTUcsSUFBSSxHQUFHSCxLQUFLLENBQUNHLElBQW5CLENBRDJCLENBRS9CO0FBQ0E7O0FBRUEsTUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUM1Qix3QkFDRSw4REFBQyxpREFBRDtBQUVFLFFBQUUsRUFBRUQsQ0FBQyxDQUFDRSxFQUZSO0FBR0UsVUFBSSxFQUFFRixDQUFDLENBQUNHLElBSFY7QUFJRSxhQUFPLEVBQUVILENBQUMsQ0FBQ0ksT0FKYjtBQUtFLFVBQUksRUFBSUosQ0FBQyxDQUFDSztBQUxaLE9BQ09MLENBQUMsQ0FBQ0UsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFTRCxHQVZVLENBQWIsQ0FMK0IsQ0FpQjdCO0FBQ0E7O0FBQ0Esc0JBQU8sOERBQUMsVUFBRDtBQUFZLFVBQU0sRUFBRVIsS0FBSyxDQUFDWSxNQUFOLENBQWFDLE9BQWIsRUFBcEI7QUFBQSxjQUE2Q1Q7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FwQkQ7O01BQU1GLFc7QUF1Qk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVxdWVzdC4yMWZjOTk0MThjZmI2NDBlMDQ5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcXVlc3RJdGVtIGZyb20gXCIuL1JlcXVlc3RJdGVtXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBTdHlsZWRMaXN0ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICR7KHByb3BzKSA9PiAocHJvcHMuZmxhZyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiKX07XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MHZ3IDUwdmg7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgdHJhbnNsYXRlM2QoMCw1MHZoLDApIHJvdGF0ZTNkKDEsMCwwLFxyXG4zMGRlZ1xyXG4pO1xyXG5cclxuYFxyXG5cclxuXHJcbmNvbnN0IFJlcXVlc3RMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0ID0gcHJvcHMubGlzdDtcclxuLy8gICBjb25zdCBoYW5kbGVEZWxldGUgPSBwcm9wcy5oYW5kbGVEZWxldGU7XHJcbi8vICAgY29uc3QgaGFuZGxlTW9kaWZ5ID0gcHJvcHMuaGFuZGxlTW9kaWZ5O1xyXG4gIFxyXG5jb25zdCBJdGVtID0gbGlzdC5tYXAoKHYsIGkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZXF1ZXN0SXRlbVxyXG4gICAgICAgIGtleT17di5pZH1cclxuICAgICAgICBpZD17di5pZH0gICAgXHJcbiAgICAgICAgbmFtZT17di5uYW1lfVxyXG4gICAgICAgIGNvbnRlbnQ9e3YuY29udGVudH1cclxuICAgICAgICBkYXRlID0ge3YuZGF0ZX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGlmIChsb2FkZGluZykgcmV0dXJuIDxsaT7roZzrlKnspJHsnoXri4jri6ReXjwvbGk+O1xyXG4gIC8vIGlmIChlcnJvcikgcmV0dXJuIDxsaT7sl5Drn6whITwvbGk+O1xyXG4gIHJldHVybiA8U3R5bGVkTGlzdCByb3RhdGU9e3Byb3BzLnJvdGF0ZS50b1NyaW5nKCl9PntJdGVtfTwvU3R5bGVkTGlzdD47XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==