self["webpackHotUpdate_N_E"]("pages/request",{

/***/ "./pages/request/index.jsx":
/*!*********************************!*\
  !*** ./pages/request/index.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _components_request_RequestForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/request/RequestForm */ "./components/request/RequestForm.jsx");
/* harmony import */ var _components_request_RequestList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/request/RequestList */ "./components/request/RequestList.jsx");
/* harmony import */ var _components_request_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/request/api */ "./components/request/api.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\KGA_04\\Desktop\\\uC0C8 \uD3F4\uB354\\CreateBanner\\front\\pages\\request\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { RequestForm, RequestList } from '../../components/request'






var StyledWrap = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "request__StyledWrap",
  componentId: "sc-fj411z-0"
})(["width:100%;height:auto;overflow:hidden;"]);
_c = StyledWrap;
var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "request__StyledContainer",
  componentId: "sc-fj411z-1"
})(["width:80vw;height:auto;overflow:hidden;margin:0 auto;&>h2{width:70vw;text-align:center;margin:0 auto;font-size:4.5rem;}& > .writeBtn{width:70vw;height:50px;margin:0 auto;text-align:right;}"]);
_c2 = StyledContainer;

var dateFormat = function dateFormat() {
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1 > 0 ? now.getMonth() + 1 : '0' + String(now.getMonth() + 1);
  var d = now.getDate() + 1 > 0 ? now.getDate() + 1 : '0' + String(now.getDate() + 1);
  return "".concat(y, "-").concat(m, "-").concat(d);
};

var index = function index() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      list = _useState[0],
      setList = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      skip = _useState2[0],
      setSkip = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      rotate = _useState3[0],
      setRotate = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      fetching = _useState4[0],
      setFetching = _useState4[1];

  var handleRotate = function handleRotate(value) {
    setRotate(value);
  }; //===== init
  ///=====CREATE


  var handleCreate = /*#__PURE__*/function () {
    var _ref = (0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(data) {
      var card, result, newList;
      return C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              card = _objectSpread({}, data);
              _context.next = 3;
              return (0,_components_request_api__WEBPACK_IMPORTED_MODULE_7__.createRequest)(card);

            case 3:
              result = _context.sent;
              console.log(result);

              if (result.success) {
                card.date = dateFormat();
                card.liked = 0;
                newList = [card].concat((0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(list));
                setList(newList);
                setRotate(false);
              } else {
                alert(result.error);
              } //


            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleCreate(_x) {
      return _ref.apply(this, arguments);
    };
  }(); //======READ


  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var data, result, newList;
    return C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = {
              skip: skip
            };
            _context2.next = 3;
            return (0,_components_request_api__WEBPACK_IMPORTED_MODULE_7__.showRequest)(data);

          case 3:
            result = _context2.sent;
            console.log(result);

            if (result.success) {
              newList = [].concat((0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(list), (0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(result.list));
              setList(newList);
              setSkip(skip + 16);
            } else {
              alert(result.error);
            }

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []); //////==== infinity

  var fetchMoreRequest = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var data, result, newList;
      return C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setFetching(true);
              data = {
                skip: skip
              };
              _context3.next = 4;
              return (0,_components_request_api__WEBPACK_IMPORTED_MODULE_7__.showRequest)(data);

            case 4:
              result = _context3.sent;

              if (result.success) {
                newList = [].concat((0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(list), (0,C_Users_KGA_04_Desktop_CreateBanner_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(result.list));
                setList(newList);
                setSkip(skip + 16);
                setFetching(false);
              } else {
                alert(result.error);
              }

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function fetchMoreRequest() {
      return _ref3.apply(this, arguments);
    };
  }(); // const { loadding, RequestItem, error } = state;


  var handleScroll = function handleScroll() {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = document.documentElement.scrollTop;
    var clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      fetchMoreRequest();
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  /*
    //=====UPDATE
  const handleModify = async (data) => {
      const result = await updateRequest(data);
      if (result.success) {
          const newList = [...list];
          newList.forEach((v) => {
              if (v.id == data.id) {
                  v.content = data.content;
                  v.isUpdate = true;
              }
          });
          setList(newList);
          alert("수정되었습니다.");
      } else {
          alert(result.error);
      }
  };
    //====DELETE
  const handleDelete = async (data) => {
      const result = await destroyRequest(data);
      console.log(result); 
      if (result.success) {
          const newList = [...list];
          newList.forEach((v) => {
              if (v.id == data.id) {
                  v.content = "삭제된 댓글입니다.";
                  v.isWriter = false;
                  v.type = null;
              }
          });
          setList(newList);
          alert("삭제되었습니다.");
      } else {
          alert(result.error);
      }
  };
  */

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledWrap, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uAC1C\uBC1C\uC790\uC5D0\uAC8C '\uC694\uAD6C'\uD558\uC138\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }, _this), rotate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_request_RequestForm__WEBPACK_IMPORTED_MODULE_5__.default, {
        rotate: rotate,
        handleRotate: handleRotate,
        handleCreate: handleCreate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 28
      }, _this), !rotate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "writeBtn",
        onClick: function onClick() {
          handleRotate(true);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsPencilSquare, {
          size: 48
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 29
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_request_RequestList__WEBPACK_IMPORTED_MODULE_6__.default, {
        list: list,
        rotate: rotate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 9
  }, _this);
};

_s(index, "SJ/gqLmPFumboWJT6kULnP8u+ow=");

/* harmony default export */ __webpack_exports__["default"] = (index);

var _c, _c2;

$RefreshReg$(_c, "StyledWrap");
$RefreshReg$(_c2, "StyledContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVxdWVzdC9pbmRleC5qc3giXSwibmFtZXMiOlsiU3R5bGVkV3JhcCIsInN0eWxlZCIsIlN0eWxlZENvbnRhaW5lciIsImRhdGVGb3JtYXQiLCJub3ciLCJEYXRlIiwieSIsImdldEZ1bGxZZWFyIiwibSIsImdldE1vbnRoIiwiU3RyaW5nIiwiZCIsImdldERhdGUiLCJpbmRleCIsInVzZVN0YXRlIiwibGlzdCIsInNldExpc3QiLCJza2lwIiwic2V0U2tpcCIsInJvdGF0ZSIsInNldFJvdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJoYW5kbGVSb3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNyZWF0ZSIsImRhdGEiLCJjYXJkIiwiY3JlYXRlUmVxdWVzdCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwiZGF0ZSIsImxpa2VkIiwibmV3TGlzdCIsImFsZXJ0IiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJzaG93UmVxdWVzdCIsImZldGNoTW9yZVJlcXVlc3QiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0NBQWhCO0tBQU1ELFU7QUFNTixJQUFNRSxlQUFlLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9NQUFyQjtNQUFNQyxlOztBQXVCTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVB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QSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlcXVlc3QuZjZjOTVmMDc2YTZlYmE4YzdhMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFJlcXVlc3RGb3JtLCBSZXF1ZXN0TGlzdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmVxdWVzdCdcclxuaW1wb3J0IHtCc1BlbmNpbFNxdWFyZX0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXHJcbmltcG9ydCBSZXF1ZXN0Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3JlcXVlc3QvUmVxdWVzdEZvcm0nXHJcbmltcG9ydCBSZXF1ZXN0TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3JlcXVlc3QvUmVxdWVzdExpc3QnXHJcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3QsIHNob3dSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZXF1ZXN0L2FwaSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuY29uc3QgU3R5bGVkV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbmBcclxuXHJcbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAmPmgye1xyXG4gICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAud3JpdGVCdG4ge1xyXG4gICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcblxyXG5gXHJcblxyXG5jb25zdCBkYXRlRm9ybWF0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHkgPSBub3cuZ2V0RnVsbFllYXIoKVxyXG4gICAgY29uc3QgbSA9IG5vdy5nZXRNb250aCgpICsgMSA+IDAgPyBub3cuZ2V0TW9udGgoKSArIDEgOiAnMCcgKyBTdHJpbmcobm93LmdldE1vbnRoKCkgKyAxKVxyXG4gICAgY29uc3QgZCA9IG5vdy5nZXREYXRlKCkgKyAxID4gMCA/IG5vdy5nZXREYXRlKCkgKyAxIDogJzAnICsgU3RyaW5nKG5vdy5nZXREYXRlKCkgKyAxKVxyXG5cclxuICAgIHJldHVybiBgJHt5fS0ke219LSR7ZH1gXHJcbn1cclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtza2lwLCBzZXRTa2lwXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3JvdGF0ZSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSb3RhdGUgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBzZXRSb3RhdGUodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgLy89PT09PSBpbml0XHJcblxyXG4gICAgLy8vPT09PT1DUkVBVEVcclxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZSA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhcmQgPSB7IC4uLmRhdGEgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVJlcXVlc3QoY2FyZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgY2FyZC5kYXRlID0gZGF0ZUZvcm1hdCgpO1xyXG4gICAgICAgICAgICBjYXJkLmxpa2VkID0gMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbY2FyZCwgLi4ubGlzdF07XHJcbiAgICAgICAgICAgIHNldExpc3QobmV3TGlzdCk7XHJcbiAgICAgICAgICAgIHNldFJvdGF0ZShmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcilcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL1xyXG4gICAgfTtcclxuXHJcbiAgICAvLz09PT09PVJFQURcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHNraXA6IHNraXBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2hvd1JlcXVlc3QoZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdCwgLi4ucmVzdWx0Lmxpc3RdO1xyXG4gICAgICAgICAgICBzZXRMaXN0KG5ld0xpc3QpO1xyXG4gICAgICAgICAgICBzZXRTa2lwKHNraXAgKyAxNik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQocmVzdWx0LmVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLy8vLy89PT09IGluZmluaXR5XHJcbiAgICBjb25zdCBmZXRjaE1vcmVSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHNraXA6IHNraXBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2hvd1JlcXVlc3QoZGF0YSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0LCAuLi5yZXN1bHQubGlzdF07XHJcbiAgICAgICAgICAgIHNldExpc3QobmV3TGlzdCk7XHJcbiAgICAgICAgICAgIHNldFNraXAoc2tpcCArIDE2KTtcclxuICAgICAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IHsgbG9hZGRpbmcsIFJlcXVlc3RJdGVtLCBlcnJvciB9ID0gc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0ID49IHNjcm9sbEhlaWdodCAmJiBmZXRjaGluZyA9PT0gZmFsc2UgKSB7XHJcbiAgICAgICAgICAgIGZldGNoTW9yZVJlcXVlc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKlxyXG5cclxuICAgIC8vPT09PT1VUERBVEVcclxuICAgIGNvbnN0IGhhbmRsZU1vZGlmeSA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlUmVxdWVzdChkYXRhKTtcclxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0XTtcclxuICAgICAgICAgICAgbmV3TGlzdC5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodi5pZCA9PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi5jb250ZW50ID0gZGF0YS5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHYuaXNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0TGlzdChuZXdMaXN0KTtcclxuICAgICAgICAgICAgYWxlcnQoXCLsiJjsoJXrkJjsl4jsirXri4jri6QuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLz09PT1ERUxFVEVcclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVzdHJveVJlcXVlc3QoZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTsgXHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdF07XHJcbiAgICAgICAgICAgIG5ld0xpc3QuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYuaWQgPT0gZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYuY29udGVudCA9IFwi7IKt7KCc65CcIOuMk+q4gOyeheuLiOuLpC5cIjtcclxuICAgICAgICAgICAgICAgICAgICB2LmlzV3JpdGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdi50eXBlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldExpc3QobmV3TGlzdCk7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi7IKt7KCc65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChyZXN1bHQuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAqL1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFdyYXA+XHJcbiAgICAgICAgICAgIDxTdHlsZWRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8aDI+6rCc67Cc7J6Q7JeQ6rKMICfsmpTqtawn7ZWY7IS47JqUPC9oMj5cclxuICAgICAgICAgICAgICAgIHtyb3RhdGUgJiYgPFJlcXVlc3RGb3JtIHJvdGF0ZT17cm90YXRlfSBoYW5kbGVSb3RhdGU9e2hhbmRsZVJvdGF0ZX0gaGFuZGxlQ3JlYXRlPXtoYW5kbGVDcmVhdGV9IC8+fVxyXG5cclxuICAgICAgICAgICAgICAgIHshcm90YXRlICYmIDxkaXYgY2xhc3NOYW1lPSd3cml0ZUJ0bicgb25DbGljaz17KCk9PntoYW5kbGVSb3RhdGUodHJ1ZSl9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnNQZW5jaWxTcXVhcmUgc2l6ZT17NDh9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFJlcXVlc3RMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdD17bGlzdH1cclxuICAgICAgICAgICAgICAgICAgICByb3RhdGU9e3JvdGF0ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU3R5bGVkV3JhcD5cclxuICAgICk7XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwic291cmNlUm9vdCI6IiJ9