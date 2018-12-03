webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageHead */ "./components/PageHead.js");
/* harmony import */ var _components_TwoColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TwoColumn */ "./components/TwoColumn.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






var Profile = function Profile() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-463150049"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://via.placeholder.com/400",
    className: "jsx-463150049"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "463150049",
    css: "img.jsx-463150049{border-radius:50%;display:block;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydWNlL2NvZGUvc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZ0IsQUFHMkIsa0JBQ0osY0FDQSxjQUNoQiIsImZpbGUiOiIvaG9tZS9icnVjZS9jb2RlL3NpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZUhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlSGVhZCdcbmltcG9ydCBUd29Db2x1bW4gZnJvbSAnLi4vY29tcG9uZW50cy9Ud29Db2x1bW4nXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgUHJvZmlsZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDBcIi8+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBSaWdodCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8cD5JIGFtIGEgUGhEIHN0dWRlbnQ8L3A+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8UGFnZUhlYWQgLz5cbiAgICA8VHdvQ29sdW1uXG4gICAgICBsZWZ0PXs8UHJvZmlsZSAvPn1cbiAgICAgIHJpZ2h0PXs8UmlnaHQgLz59XG4gICAgLz5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/home/bruce/code/site/pages/index.js */"
  }));
};

var Right = function Right() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "I am a PhD student"));
};

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageHead__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TwoColumn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    left: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Profile, null),
    right: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Right, null)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.6fef0f904097b22d36f3.hot-update.js.map