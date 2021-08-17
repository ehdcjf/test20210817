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

  var handleChangeBack = function handleChangeBack(ele) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsIkluZGV4IiwicmVmIiwidXNlUmVmIiwidGV4dCIsInVzZUlucHV0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInVzZVN0YXRlIiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJmb250Q29sb3IiLCJzZXRGb250Q29sb3IiLCJoYW5kbGVDaGFuZ2VDb2xvciIsImVsZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VCYWNrIiwib25CdXR0b25DbGljayIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsInRvUG5nIiwiY2FjaGVCdXN0IiwidGhlbiIsImRhdGFVcmwiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiY2xpY2siLCJlcnIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZUJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw2REFBckI7S0FBTUQsZTs7QUFPTixJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLEdBQUcsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUEsTUFBTUMsSUFBSSxHQUFHQyx3REFBUSxDQUFDLGFBQUQsQ0FBckI7QUFDQSxNQUFNQyxLQUFLLEdBQUdELHdEQUFRLENBQUMsR0FBRCxDQUF0QjtBQUNBLE1BQU1FLE1BQU0sR0FBR0Ysd0RBQVEsQ0FBQyxHQUFELENBQXZCO0FBQ0EsTUFBTUcsUUFBUSxHQUFHSCx3REFBUSxDQUFDLEVBQUQsQ0FBekI7O0FBTmtCLGtCQU9pQkksK0NBQVEsQ0FBQyxNQUFELENBUHpCO0FBQUEsTUFPWEMsVUFQVztBQUFBLE1BT0FDLGFBUEE7O0FBQUEsbUJBUWVGLCtDQUFRLENBQUMsTUFBRCxDQVJ2QjtBQUFBLE1BUVhHLFNBUlc7QUFBQSxNQVFEQyxZQVJDOztBQVVsQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEdBQUQsRUFBTztBQUMvQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosRUFEK0IsQ0FFL0I7QUFFRCxHQUpEOztBQU1BLE1BQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0gsR0FBRCxFQUFPO0FBQzlCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixFQUQ4QixDQUU5QjtBQUVELEdBSkQ7O0FBTUEsTUFBTUksYUFBYSxHQUFHQyxrREFBVyxDQUFDLFlBQU07QUFDdEMsUUFBSWxCLEdBQUcsQ0FBQ21CLE9BQUosS0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEI7QUFDRDs7QUFFREMsd0RBQUssQ0FBQ3BCLEdBQUcsQ0FBQ21CLE9BQUwsRUFBYztBQUFFRSxlQUFTLEVBQUU7QUFBYixLQUFkLENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLE9BQUQsRUFBYTtBQUNqQixVQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FGLFVBQUksQ0FBQ0csUUFBTCxHQUFnQixtQkFBaEI7QUFDQUgsVUFBSSxDQUFDSSxJQUFMLEdBQVlMLE9BQVo7QUFDQUMsVUFBSSxDQUFDSyxLQUFMO0FBQ0QsS0FOSCxXQU9TLFVBQUNDLEdBQUQsRUFBUztBQUNkaEIsYUFBTyxDQUFDQyxHQUFSLENBQVllLEdBQVo7QUFDRCxLQVRIO0FBVUQsR0FmZ0MsRUFlOUIsQ0FBQzlCLEdBQUQsQ0FmOEIsQ0FBakM7QUFvQkEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsOERBQUMsMkRBQUQ7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRSw4REFBQyxlQUFEO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUVBLEdBQVY7QUFBQSxpQ0FDRTtBQUFLLGlCQUFLLEVBQUU7QUFDVitCLG9CQUFNLEVBQUUsUUFERTtBQUVWQyxxQkFBTyxFQUFFLE1BRkM7QUFHVkMsdUJBQVMsRUFBQyxPQUhBO0FBSVZDLHNCQUFRLEVBQUMsT0FKQztBQUtWQyw0QkFBYyxFQUFDLFFBTEw7QUFNVkMsd0JBQVUsRUFBQyxRQU5EO0FBT1ZoQyxtQkFBSyxZQUFLQSxLQUFLLENBQUNpQyxLQUFYLE9BUEs7QUFRVmhDLG9CQUFNLFlBQUtBLE1BQU0sQ0FBQ2dDLEtBQVosT0FSSTtBQVNWN0Isd0JBQVUsRUFBRUE7QUFURixhQUFaO0FBQUEsbUNBWUU7QUFBRyxtQkFBSyxFQUFFO0FBQ1J1QixzQkFBTSxFQUFFLFdBREE7QUFFUnpCLHdCQUFRLFlBQUlBLFFBQVEsQ0FBQytCLEtBQWI7QUFGQSxlQUFWO0FBQUEsd0JBR0luQyxJQUFJLENBQUNtQztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQXdCQTtBQUFBLG1EQUNLO0FBQU8sZ0JBQUksRUFBQztBQUFaLGFBQXlCakMsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJBLGVBMkJBO0FBQUEsbURBQ0c7QUFBTyxnQkFBSSxFQUFDO0FBQVosYUFBeUJDLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNCQSxlQThCQTtBQUFBLHdEQUVBLDhEQUFDLHFEQUFEO0FBQ0UsaUJBQUssRUFBRUcsVUFEVDtBQUVFLDRCQUFnQixFQUFFOEI7QUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJBLGVBd0NBO0FBQUEsbURBQ0s7QUFBTyxnQkFBSSxFQUFDO0FBQVosYUFBdUJwQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4Q0EsZUE0Q0E7QUFBQSwrREFDSztBQUFPLGdCQUFJLEVBQUM7QUFBWixhQUF5QkksUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUNBLGVBZ0RBO0FBQUEsd0RBRUEsOERBQUMscURBQUQ7QUFDRSxpQkFBSyxFQUFFSSxTQURUO0FBRUUsNEJBQWdCLEVBQUVFO0FBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhEQSxlQXlERTtBQUFRLGlCQUFPLEVBQUVLLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBLGtCQURGO0FBd0VELENBbEhEOztHQUFNbEIsSztVQUdTSSxvRCxFQUNDQSxvRCxFQUNDQSxvRCxFQUNFQSxvRDs7O01BTmJKLEs7QUFtSE4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjFjY2M5ZThhZTgzOTdhYjZiY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2dMYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHRvUG5nIH0gZnJvbSBcImh0bWwtdG8taW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjayx1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IENocm9tZVBpY2tlciB9IGZyb20gJ3JlYWN0LWNvbG9yJ1xyXG5cclxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgdGV4dCA9IHVzZUlucHV0KFwiSEVMTE8gV09STERcIik7XHJcbiAgY29uc3Qgd2lkdGggPSB1c2VJbnB1dCg3MDApO1xyXG4gIGNvbnN0IGhlaWdodCA9IHVzZUlucHV0KDM1MCk7ICBcclxuICBjb25zdCBmb250U2l6ZSA9IHVzZUlucHV0KDcyKTtcclxuICBjb25zdCBbYmFja2dyb3VuZCxzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKCcjZmZmJylcclxuICBjb25zdCBbZm9udENvbG9yLHNldEZvbnRDb2xvcl0gPSB1c2VTdGF0ZSgnIzAwMCcpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNvbG9yID0gKGVsZSk9PntcclxuICAgIGNvbnNvbGUubG9nKGVsZSlcclxuICAgIC8vIHNldEJhY2tncm91bmQoY29sb3IuaGV4KVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUJhY2sgPSAoZWxlKT0+e1xyXG4gICAgY29uc29sZS5sb2coZWxlKVxyXG4gICAgLy8gc2V0QmFja2dyb3VuZChjb2xvci5oZXgpXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25CdXR0b25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChyZWYuY3VycmVudCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdG9QbmcocmVmLmN1cnJlbnQsIHsgY2FjaGVCdXN0OiB0cnVlIH0pXHJcbiAgICAgIC50aGVuKChkYXRhVXJsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSBcIm15LWltYWdlLW5hbWUucG5nXCI7XHJcbiAgICAgICAgbGluay5ocmVmID0gZGF0YVVybDtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW3JlZl0pO1xyXG5cclxuIFxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5CbG9nPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QmxvZ0xheW91dD5cclxuICAgICAgICA8TGluayBocmVmPVwiL3JlcXVlc3RcIj5cclxuICAgICAgICAgIDxhPu2VtOykmDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxTdHlsZWRDb250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIG1pbkhlaWdodDonMTAwcHgnLFxyXG4gICAgICAgICAgICAgIG1pbldpZHRoOicxMDBweCcsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICAgICAgICB3aWR0aDogYCR7d2lkdGgudmFsdWV9cHhgLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0LnZhbHVlfXB4YCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8gYXV0bycsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTpgJHtmb250U2l6ZS52YWx1ZX1weGAsXHJcbiAgICAgICAgICAgICAgfX0+e3RleHQudmFsdWV9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIOqwgOuhnCA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi53aWR0aH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIOyEuOuhnCA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi5oZWlnaHR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICDrsLDqsr3sg4lcclxuICAgICAgICA8Q2hyb21lUGlja2VyIFxyXG4gICAgICAgICAgY29sb3I9e2JhY2tncm91bmR9XHJcbiAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXtoYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIOuCtOyaqSA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udGV4dH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICDquIDsnpDtgazquLAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4uZm9udFNpemV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIOq4gOyekOyDiVxyXG4gICAgICAgIDxDaHJvbWVQaWNrZXIgXHJcbiAgICAgICAgICBjb2xvcj17Zm9udENvbG9yfVxyXG4gICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17aGFuZGxlQ2hhbmdlQ29sb3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgXHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfT5DbGljayBtZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxyXG4gICAgICA8L0Jsb2dMYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==