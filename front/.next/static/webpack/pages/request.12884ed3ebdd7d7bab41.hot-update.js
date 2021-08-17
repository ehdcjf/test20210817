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
})(["width:80vw;height:auto;overflow:hidden;margin:0 auto;&>h2{width:70vw;margin:0 auto;font-size:4.5rem;}& > .writeBtn{width:70vw;height:50px;margin:0 auto;text-align:right;}"]);
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
        lineNumber: 182,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_request_RequestForm__WEBPACK_IMPORTED_MODULE_5__.default, {
        rotate: rotate,
        handleRotate: handleRotate,
        handleCreate: handleCreate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "writeBtn",
        onClick: function onClick() {
          handleRotate(true);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsPencilSquare, {
          size: 48
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_request_RequestList__WEBPACK_IMPORTED_MODULE_6__.default, {
        list: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 180,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVxdWVzdC9pbmRleC5qc3giXSwibmFtZXMiOlsiU3R5bGVkV3JhcCIsInN0eWxlZCIsIlN0eWxlZENvbnRhaW5lciIsImRhdGVGb3JtYXQiLCJub3ciLCJEYXRlIiwieSIsImdldEZ1bGxZZWFyIiwibSIsImdldE1vbnRoIiwiU3RyaW5nIiwiZCIsImdldERhdGUiLCJpbmRleCIsInVzZVN0YXRlIiwibGlzdCIsInNldExpc3QiLCJza2lwIiwic2V0U2tpcCIsInJvdGF0ZSIsInNldFJvdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJoYW5kbGVSb3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNyZWF0ZSIsImRhdGEiLCJjYXJkIiwiY3JlYXRlUmVxdWVzdCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwiZGF0ZSIsImxpa2VkIiwibmV3TGlzdCIsImFsZXJ0IiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJzaG93UmVxdWVzdCIsImZldGNoTW9yZVJlcXVlc3QiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0NBQWhCO0tBQU1ELFU7QUFNTixJQUFNRSxlQUFlLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLGtMQUFyQjtNQUFNQyxlOztBQXVCTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVB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WUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDVE0sWUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1IsWUFBckM7QUFDSCxLQUZEO0FBR0gsR0FMUSxDQUFUO0FBT0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJSSxzQkFDSSw4REFBQyxVQUFEO0FBQUEsMkJBQ0ksOERBQUMsZUFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSw4REFBQyxvRUFBRDtBQUFhLGNBQU0sRUFBRXRCLE1BQXJCO0FBQTZCLG9CQUFZLEVBQUVJLFlBQTNDO0FBQXlELG9CQUFZLEVBQUVFO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBRSxtQkFBSTtBQUFDRixzQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUFtQixTQUEzRDtBQUFBLCtCQUNJLDhEQUFDLDJEQUFEO0FBQWdCLGNBQUksRUFBRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLGVBTUksOERBQUMsb0VBQUQ7QUFDSSxZQUFJLEVBQUVSO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtCSCxDQXBKRDs7R0FBTUYsSzs7QUFzSk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVxdWVzdC4xMjg4NGVkM2ViZGQ3ZDdiYWI0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgUmVxdWVzdEZvcm0sIFJlcXVlc3RMaXN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZXF1ZXN0J1xyXG5pbXBvcnQge0JzUGVuY2lsU3F1YXJlfSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuaW1wb3J0IFJlcXVlc3RGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmVxdWVzdC9SZXF1ZXN0Rm9ybSdcclxuaW1wb3J0IFJlcXVlc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmVxdWVzdC9SZXF1ZXN0TGlzdCdcclxuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdCwgc2hvd1JlcXVlc3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3JlcXVlc3QvYXBpJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBTdHlsZWRXcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYFxyXG5cclxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICY+aDJ7XHJcbiAgICAgICAgd2lkdGg6IDcwdnc7XHJcblxyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC53cml0ZUJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuXHJcbmBcclxuXHJcbmNvbnN0IGRhdGVGb3JtYXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgeSA9IG5vdy5nZXRGdWxsWWVhcigpXHJcbiAgICBjb25zdCBtID0gbm93LmdldE1vbnRoKCkgKyAxID4gMCA/IG5vdy5nZXRNb250aCgpICsgMSA6ICcwJyArIFN0cmluZyhub3cuZ2V0TW9udGgoKSArIDEpXHJcbiAgICBjb25zdCBkID0gbm93LmdldERhdGUoKSArIDEgPiAwID8gbm93LmdldERhdGUoKSArIDEgOiAnMCcgKyBTdHJpbmcobm93LmdldERhdGUoKSArIDEpXHJcblxyXG4gICAgcmV0dXJuIGAke3l9LSR7bX0tJHtkfWBcclxufVxyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NraXAsIHNldFNraXBdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcm90YXRlLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJvdGF0ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFJvdGF0ZSh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvLz09PT09IGluaXRcclxuXHJcbiAgICAvLy89PT09PUNSRUFURVxyXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgY2FyZCA9IHsgLi4uZGF0YSB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlUmVxdWVzdChjYXJkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBjYXJkLmRhdGUgPSBkYXRlRm9ybWF0KCk7XHJcbiAgICAgICAgICAgIGNhcmQubGlrZWQgPSAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IFtjYXJkLCAuLi5saXN0XTtcclxuICAgICAgICAgICAgc2V0TGlzdChuZXdMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcilcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL1xyXG4gICAgfTtcclxuXHJcbiAgICAvLz09PT09PVJFQURcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHNraXA6IHNraXBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2hvd1JlcXVlc3QoZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdCwgLi4ucmVzdWx0Lmxpc3RdO1xyXG4gICAgICAgICAgICBzZXRMaXN0KG5ld0xpc3QpO1xyXG4gICAgICAgICAgICBzZXRTa2lwKHNraXAgKyAxNik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQocmVzdWx0LmVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLy8vLy89PT09IGluZmluaXR5XHJcbiAgICBjb25zdCBmZXRjaE1vcmVSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHNraXA6IHNraXBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2hvd1JlcXVlc3QoZGF0YSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0LCAuLi5yZXN1bHQubGlzdF07XHJcbiAgICAgICAgICAgIHNldExpc3QobmV3TGlzdCk7XHJcbiAgICAgICAgICAgIHNldFNraXAoc2tpcCArIDE2KTtcclxuICAgICAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IHsgbG9hZGRpbmcsIFJlcXVlc3RJdGVtLCBlcnJvciB9ID0gc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0ID49IHNjcm9sbEhlaWdodCAmJiBmZXRjaGluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZmV0Y2hNb3JlUmVxdWVzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcblxyXG4gICAgLy89PT09PVVQREFURVxyXG4gICAgY29uc3QgaGFuZGxlTW9kaWZ5ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGVSZXF1ZXN0KGRhdGEpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RdO1xyXG4gICAgICAgICAgICBuZXdMaXN0LmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2LmlkID09IGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdi5pc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRMaXN0KG5ld0xpc3QpO1xyXG4gICAgICAgICAgICBhbGVydChcIuyImOygleuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQocmVzdWx0LmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vPT09PURFTEVURVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZXN0cm95UmVxdWVzdChkYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpOyBcclxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0XTtcclxuICAgICAgICAgICAgbmV3TGlzdC5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodi5pZCA9PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi5jb250ZW50ID0gXCLsgq3soJzrkJwg64yT6riA7J6F64uI64ukLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHYuaXNXcml0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2LnR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0TGlzdChuZXdMaXN0KTtcclxuICAgICAgICAgICAgYWxlcnQoXCLsgq3soJzrkJjsl4jsirXri4jri6QuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgICovXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkV3JhcD5cclxuICAgICAgICAgICAgPFN0eWxlZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxoMj7qsJzrsJzsnpDsl5DqsowgJ+yalOq1rCftlZjshLjsmpQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPFJlcXVlc3RGb3JtIHJvdGF0ZT17cm90YXRlfSBoYW5kbGVSb3RhdGU9e2hhbmRsZVJvdGF0ZX0gaGFuZGxlQ3JlYXRlPXtoYW5kbGVDcmVhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JpdGVCdG4nIG9uQ2xpY2s9eygpPT57aGFuZGxlUm90YXRlKHRydWUpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJzUGVuY2lsU3F1YXJlIHNpemU9ezQ4fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UmVxdWVzdExpc3RcclxuICAgICAgICAgICAgICAgICAgICBsaXN0PXtsaXN0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TdHlsZWRDb250YWluZXI+XHJcbiAgICAgICAgPC9TdHlsZWRXcmFwPlxyXG4gICAgKTtcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=