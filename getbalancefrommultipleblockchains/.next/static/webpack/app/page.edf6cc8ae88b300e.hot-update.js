"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./apis.ts":
/*!*****************!*\
  !*** ./apis.ts ***!
  \*****************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chainsToNativeSymbols: function() { return /* binding */ chainsToNativeSymbols; },\n/* harmony export */   getAccountBalance: function() { return /* binding */ getAccountBalance; },\n/* harmony export */   getTotalMultichainBalance: function() { return /* binding */ getTotalMultichainBalance; }\n/* harmony export */ });\n/* harmony import */ var _ankr_com_ankr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ankr.com/ankr.js */ \"(app-client)/./node_modules/@ankr.com/ankr.js/dist/index.js\");\n/* harmony import */ var _ankr_com_ankr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ankr_com_ankr_js__WEBPACK_IMPORTED_MODULE_0__);\n//import AnkrscanProvider from '@ankr.com/ankr.js';\n\nconst provider = new _ankr_com_ankr_js__WEBPACK_IMPORTED_MODULE_0__.AnkrProvider(\"https://rpc.ankr.com/multichain/4035658e3524cbfe76215a86b745adc08ceae558d1fadc11aa501f5af4179178\");\n//defining the list of supported blockchains\nconst listOfChains = [\n    \"eth\",\n    \"arbitrum\",\n    \"avalanche\",\n    \"bsc\",\n    \"fantom\",\n    \"polygon\"\n];\n//key-value pair mapping of chains to their native symbols\nconst chainsToNativeSymbols = {\n    eth: \"ETH\",\n    arbitrum: \"ETH\",\n    avalanche: \"AVAX\",\n    bsc: \"BNB\",\n    fantom: \"FTM\",\n    polygon: \"MATIC\"\n};\n//getAccountBalance function to fetch coins and their respective token balances\nconst getAccountBalance = async (walletAddress, blockchain)=>{\n    return provider.getAccountBalance({\n        walletAddress\n    });\n};\n//use getAccountBalance to sum total balance across chains\nconst getTotalMultichainBalance = async (walletAddress)=>{\n    let total = 0;\n    for await (const chain of listOfChains){\n        const { totalBalanceUsd, assets } = await getAccountBalance(walletAddress, chain);\n        total += +totalBalanceUsd;\n    }\n    return total;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBpcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1EQUFtRDtBQUNGO0FBR2pELE1BQU1DLFdBQVcsSUFBSUQsMkRBQVlBLENBQUM7QUFFbEMsNENBQTRDO0FBQzVDLE1BQU1FLGVBQTZCO0lBQUM7SUFBTztJQUFZO0lBQ25EO0lBQU87SUFBVTtDQUFXO0FBRWhDLDBEQUEwRDtBQUNuRCxNQUFNQyx3QkFBeUQ7SUFDbEVDLEtBQUs7SUFDTEMsVUFBVTtJQUNWQyxXQUFXO0lBQ1hDLEtBQUs7SUFDTEMsUUFBUTtJQUNSQyxTQUFTO0FBQ2IsRUFBRTtBQUVGLCtFQUErRTtBQUN4RSxNQUFNQyxvQkFBb0IsT0FBT0MsZUFDcENDO0lBQ0EsT0FBT1gsU0FBU1MsaUJBQWlCLENBQUM7UUFDOUJDO0lBQ0o7QUFDSixFQUFFO0FBRUYsMERBQTBEO0FBQ25ELE1BQU1FLDRCQUE0QixPQUFPRjtJQUM1QyxJQUFJRyxRQUFRO0lBQ1osV0FBVyxNQUFNQyxTQUFTYixhQUFjO1FBQ3BDLE1BQU0sRUFBRWMsZUFBZSxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNUCxrQkFDdENDLGVBQ0FJO1FBRUpELFNBQVMsQ0FBQ0U7SUFDZDtJQUNBLE9BQU9GO0FBQ1gsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcGlzLnRzPzJjNWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgQW5rcnNjYW5Qcm92aWRlciBmcm9tICdAYW5rci5jb20vYW5rci5qcyc7XHJcbmltcG9ydCB7IEFua3JQcm92aWRlciB9IGZyb20gJ0BhbmtyLmNvbS9hbmtyLmpzJztcclxuaW1wb3J0IHR5cGUgeyBCbG9ja2NoYWluIH0gZnJvbSAnQGFua3IuY29tL2Fua3IuanMvZGlzdC90eXBlcyc7XHJcblxyXG5jb25zdCBwcm92aWRlciA9IG5ldyBBbmtyUHJvdmlkZXIoJ2h0dHBzOi8vcnBjLmFua3IuY29tL211bHRpY2hhaW4vNDAzNTY1OGUzNTI0Y2JmZTc2MjE1YTg2Yjc0NWFkYzA4Y2VhZTU1OGQxZmFkYzExYWE1MDFmNWFmNDE3OTE3OCcpO1xyXG5cclxuLy9kZWZpbmluZyB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgYmxvY2tjaGFpbnNcclxuY29uc3QgbGlzdE9mQ2hhaW5zOiBCbG9ja2NoYWluW10gPSBbJ2V0aCcsICdhcmJpdHJ1bScsICdhdmFsYW5jaGUnLFxyXG4gICAgJ2JzYycsICdmYW50b20nLCAncG9seWdvbicsXTtcclxuXHJcbi8va2V5LXZhbHVlIHBhaXIgbWFwcGluZyBvZiBjaGFpbnMgdG8gdGhlaXIgbmF0aXZlIHN5bWJvbHNcclxuZXhwb3J0IGNvbnN0IGNoYWluc1RvTmF0aXZlU3ltYm9sczogeyBba2V5IGluIEJsb2NrY2hhaW5dOiBzdHJpbmcgfSA9IHtcclxuICAgIGV0aDogJ0VUSCcsXHJcbiAgICBhcmJpdHJ1bTogJ0VUSCcsXHJcbiAgICBhdmFsYW5jaGU6ICdBVkFYJyxcclxuICAgIGJzYzogJ0JOQicsXHJcbiAgICBmYW50b206ICdGVE0nLFxyXG4gICAgcG9seWdvbjogJ01BVElDJyxcclxufTtcclxuXHJcbi8vZ2V0QWNjb3VudEJhbGFuY2UgZnVuY3Rpb24gdG8gZmV0Y2ggY29pbnMgYW5kIHRoZWlyIHJlc3BlY3RpdmUgdG9rZW4gYmFsYW5jZXNcclxuZXhwb3J0IGNvbnN0IGdldEFjY291bnRCYWxhbmNlID0gYXN5bmMgKHdhbGxldEFkZHJlc3M6IHN0cmluZyxcclxuICAgIGJsb2NrY2hhaW46IEJsb2NrY2hhaW4pID0+IHtcclxuICAgIHJldHVybiBwcm92aWRlci5nZXRBY2NvdW50QmFsYW5jZSh7XHJcbiAgICAgICAgd2FsbGV0QWRkcmVzcyxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy91c2UgZ2V0QWNjb3VudEJhbGFuY2UgdG8gc3VtIHRvdGFsIGJhbGFuY2UgYWNyb3NzIGNoYWluc1xyXG5leHBvcnQgY29uc3QgZ2V0VG90YWxNdWx0aWNoYWluQmFsYW5jZSA9IGFzeW5jICh3YWxsZXRBZGRyZXNzOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGNoYWluIG9mIGxpc3RPZkNoYWlucykge1xyXG4gICAgICAgIGNvbnN0IHsgdG90YWxCYWxhbmNlVXNkLCBhc3NldHMgfSA9IGF3YWl0IGdldEFjY291bnRCYWxhbmNlKFxyXG4gICAgICAgICAgICB3YWxsZXRBZGRyZXNzLFxyXG4gICAgICAgICAgICBjaGFpblxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdG90YWwgKz0gK3RvdGFsQmFsYW5jZVVzZDtcclxuICAgIH1cclxuICAgIHJldHVybiB0b3RhbDtcclxufTsiXSwibmFtZXMiOlsiQW5rclByb3ZpZGVyIiwicHJvdmlkZXIiLCJsaXN0T2ZDaGFpbnMiLCJjaGFpbnNUb05hdGl2ZVN5bWJvbHMiLCJldGgiLCJhcmJpdHJ1bSIsImF2YWxhbmNoZSIsImJzYyIsImZhbnRvbSIsInBvbHlnb24iLCJnZXRBY2NvdW50QmFsYW5jZSIsIndhbGxldEFkZHJlc3MiLCJibG9ja2NoYWluIiwiZ2V0VG90YWxNdWx0aWNoYWluQmFsYW5jZSIsInRvdGFsIiwiY2hhaW4iLCJ0b3RhbEJhbGFuY2VVc2QiLCJhc3NldHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./apis.ts\n"));

/***/ })

});