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
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/request",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "\uD574\uC918"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
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
              lineNumber: 69,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uD14D\uC2A4\uD2B8 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "text"
          }, text), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAC00\uB85C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, width), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uC138\uB85C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, height), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 12
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\uAE00\uC790\uD06C\uAE30 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
            type: "number"
          }, fontSize), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("chrome", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("chrome", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onButtonClick,
          children: "Click me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Index, "tvs9sEXCrOO4xDbrlcA6QXCfuFI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsIkluZGV4IiwicmVmIiwidXNlUmVmIiwidGV4dCIsInVzZUlucHV0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsIm9uQnV0dG9uQ2xpY2siLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJ0b1BuZyIsImNhY2hlQnVzdCIsInRoZW4iLCJkYXRhVXJsIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRvd25sb2FkIiwiaHJlZiIsImNsaWNrIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInZhbHVlIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZEQUFyQjtLQUFNRCxlOztBQU9OLElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsR0FBRyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBbEI7QUFFQSxNQUFNQyxJQUFJLEdBQUdDLHdEQUFRLENBQUMsYUFBRCxDQUFyQjtBQUNBLE1BQU1DLEtBQUssR0FBR0Qsd0RBQVEsQ0FBQyxHQUFELENBQXRCO0FBQ0EsTUFBTUUsTUFBTSxHQUFHRix3REFBUSxDQUFDLEdBQUQsQ0FBdkI7QUFDQSxNQUFNRyxRQUFRLEdBQUdILHdEQUFRLENBQUMsRUFBRCxDQUF6QjtBQUVBLE1BQU1JLGFBQWEsR0FBR0Msa0RBQVcsQ0FBQyxZQUFNO0FBQ3RDLFFBQUlSLEdBQUcsQ0FBQ1MsT0FBSixLQUFnQixJQUFwQixFQUEwQjtBQUN4QjtBQUNEOztBQUVEQyx3REFBSyxDQUFDVixHQUFHLENBQUNTLE9BQUwsRUFBYztBQUFFRSxlQUFTLEVBQUU7QUFBYixLQUFkLENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLE9BQUQsRUFBYTtBQUNqQixVQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FGLFVBQUksQ0FBQ0csUUFBTCxHQUFnQixtQkFBaEI7QUFDQUgsVUFBSSxDQUFDSSxJQUFMLEdBQVlMLE9BQVo7QUFDQUMsVUFBSSxDQUFDSyxLQUFMO0FBQ0QsS0FOSCxXQU9TLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELEtBVEg7QUFVRCxHQWZnQyxFQWU5QixDQUFDcEIsR0FBRCxDQWY4QixDQUFqQztBQW9CQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSw4REFBQywyREFBRDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFLDhEQUFDLGVBQUQ7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBRUEsR0FBVjtBQUFBLGlDQUNFO0FBQUssaUJBQUssRUFBRTtBQUNWdUIsb0JBQU0sRUFBRSxRQURFO0FBRVZDLHFCQUFPLEVBQUUsTUFGQztBQUdWQyx1QkFBUyxFQUFDLE9BSEE7QUFJVkMsc0JBQVEsRUFBQyxPQUpDO0FBS1ZDLDRCQUFjLEVBQUMsUUFMTDtBQU1WQyx3QkFBVSxFQUFDLFFBTkQ7QUFPVnhCLG1CQUFLLFlBQUtBLEtBQUssQ0FBQ3lCLEtBQVgsT0FQSztBQVFWeEIsb0JBQU0sWUFBS0EsTUFBTSxDQUFDd0IsS0FBWixPQVJJO0FBU1ZDLHdCQUFVLEVBQUU7QUFURixhQUFaO0FBQUEsbUNBWUU7QUFBRyxtQkFBSyxFQUFFO0FBQ1JQLHNCQUFNLEVBQUUsV0FEQTtBQUVSakIsd0JBQVEsWUFBSUEsUUFBUSxDQUFDdUIsS0FBYjtBQUZBLGVBQVY7QUFBQSx3QkFHSTNCLElBQUksQ0FBQzJCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBdUJBO0FBQUEseURBQ007QUFBTyxnQkFBSSxFQUFDO0FBQVosYUFBdUIzQixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkEsZUEwQkE7QUFBQSxtREFDSztBQUFPLGdCQUFJLEVBQUM7QUFBWixhQUF5QkUsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJBLGVBNkJBO0FBQUEsbURBQ0c7QUFBTyxnQkFBSSxFQUFDO0FBQVosYUFBeUJDLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCQSxlQWdDQTtBQUFBLCtEQUNLO0FBQU8sZ0JBQUksRUFBQztBQUFaLGFBQXlCQyxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0EsZUFvQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQ0EsZUFzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Q0EsZUF5Q0U7QUFBUSxpQkFBTyxFQUFFQyxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQXdERCxDQXBGRDs7R0FBTVIsSztVQUdTSSxvRCxFQUNDQSxvRCxFQUNDQSxvRCxFQUNFQSxvRDs7O01BTmJKLEs7QUFxRk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjUwMWNlOGM3NzBmN2ViYjdlMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2dMYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHRvUG5nIH0gZnJvbSBcImh0bWwtdG8taW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IGNocm9tZSBhcyBDaHJvbWUgfSBmcm9tICdyZWFjdC1jb2xvcidcclxuXHJcbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHRleHQgPSB1c2VJbnB1dChcIkhFTExPIFdPUkxEXCIpO1xyXG4gIGNvbnN0IHdpZHRoID0gdXNlSW5wdXQoNzAwKTtcclxuICBjb25zdCBoZWlnaHQgPSB1c2VJbnB1dCgzNTApOyAgXHJcbiAgY29uc3QgZm9udFNpemUgPSB1c2VJbnB1dCg3Mik7IFxyXG5cclxuICBjb25zdCBvbkJ1dHRvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0b1BuZyhyZWYuY3VycmVudCwgeyBjYWNoZUJ1c3Q6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKGRhdGFVcmwpID0+IHtcclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGluay5kb3dubG9hZCA9IFwibXktaW1hZ2UtbmFtZS5wbmdcIjtcclxuICAgICAgICBsaW5rLmhyZWYgPSBkYXRhVXJsO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbcmVmXSk7XHJcblxyXG4gXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkJsb2c8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxCbG9nTGF5b3V0PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVxdWVzdFwiPlxyXG4gICAgICAgICAgPGE+7ZW07KSYPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPFN0eWxlZENvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OicxMDBweCcsXHJcbiAgICAgICAgICAgICAgbWluV2lkdGg6JzEwMHB4JyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aC52YWx1ZX1weGAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHQudmFsdWV9cHhgLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicGlua1wiLFxyXG4gICAgICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8gYXV0bycsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTpgJHtmb250U2l6ZS52YWx1ZX1weGAsXHJcbiAgICAgICAgICAgICAgfX0+e3RleHQudmFsdWV9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDthY3siqTtirggPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnRleHR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIOqwgOuhnCA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi53aWR0aH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIOyEuOuhnCA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi5oZWlnaHR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICDquIDsnpDtgazquLAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4uZm9udFNpemV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICAgICAgPGNocm9tZSAvPlxyXG4gICAgICBcclxuICAgICAgICA8Y2hyb21lIC8+XHJcbiAgIFxyXG5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25CdXR0b25DbGlja30+Q2xpY2sgbWU8L2J1dHRvbj5cclxuICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cclxuICAgICAgPC9CbG9nTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=