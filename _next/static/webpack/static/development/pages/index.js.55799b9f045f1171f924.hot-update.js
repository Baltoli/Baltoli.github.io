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






var Left = function Left() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3186434284"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3186434284"
  }, "Bruce Collie"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://via.placeholder.com/400",
    className: "jsx-3186434284"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3186434284",
    css: "img.jsx-3186434284{border-radius:50%;width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydWNlL2NvZGUvc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFHMkIsa0JBQ1IsVUFDWiIsImZpbGUiOiIvaG9tZS9icnVjZS9jb2RlL3NpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZUhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlSGVhZCdcbmltcG9ydCBUd29Db2x1bW4gZnJvbSAnLi4vY29tcG9uZW50cy9Ud29Db2x1bW4nXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgTGVmdCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8aDE+QnJ1Y2UgQ29sbGllPC9oMT5cbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDBcIiAvPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IFJpZ2h0ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxwPkkgYW0gYSBQaEQgc3R1ZGVudDwvcD5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxQYWdlSGVhZCAvPlxuICAgIDxUd29Db2x1bW5cbiAgICAgIGxlZnQ9ezxMZWZ0IC8+fVxuICAgICAgcmlnaHQ9ezxSaWdodCAvPn1cbiAgICAvPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/home/bruce/code/site/pages/index.js */"
  }));
};

var Right = function Right() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "I am a PhD student"));
};

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageHead__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TwoColumn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    left: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Left, null),
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
//# sourceMappingURL=index.js.55799b9f045f1171f924.hot-update.js.map