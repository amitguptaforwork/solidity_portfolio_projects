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

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis */ \"(app-client)/./apis.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const { total, setTotal } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            // const total2 = await getTotalMultichainBalance(\n            //   \"0xd8da6bf26964af9d7eed9e03e53415d37aa96045\"\n            // );\n            const temp = await (0,_apis__WEBPACK_IMPORTED_MODULE_2__.getAccountBalance)(\"0xd8da6bf26964af9d7eed9e03e53415d37aa96045\");\n            setTotal(temp);\n            console.log({\n                total\n            });\n        })();\n    }, []);\n    // return (\n    //   <main className=\"flex min-h-screen flex-col items-center justify-between p-24\">\n    //     <div className=\"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\">\n    //       <p className=\"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\">\n    //         Get started by editing&nbsp;\n    //         <code className=\"font-mono font-bold\">app/page.tsx</code>\n    //       </p>\n    //       <div className=\"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none\">\n    //         <a\n    //           className=\"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0\"\n    //           href=\"https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n    //           target=\"_blank\"\n    //           rel=\"noopener noreferrer\"\n    //         >\n    //           By{' '}\n    //           <Image\n    //             src=\"/vercel.svg\"\n    //             alt=\"Vercel Logo\"\n    //             className=\"dark:invert\"\n    //             width={100}\n    //             height={24}\n    //             priority\n    //           />\n    //         </a>\n    //       </div>\n    //     </div>\n    //     <div className=\"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\">\n    //       <Image\n    //         className=\"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert\"\n    //         src=\"/next.svg\"\n    //         alt=\"Next.js Logo\"\n    //         width={180}\n    //         height={37}\n    //         priority\n    //       />\n    //     </div>\n    //     <div className=\"mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left\">\n    //       <a\n    //         href=\"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n    //         className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n    //         target=\"_blank\"\n    //         rel=\"noopener noreferrer\"\n    //       >\n    //         <h2 className={`mb-3 text-2xl font-semibold`}>\n    //           Docs{' '}\n    //           <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n    //             -&gt;\n    //           </span>\n    //         </h2>\n    //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n    //           Find in-depth information about Next.js features and API.\n    //         </p>\n    //       </a>\n    //       <a\n    //         href=\"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\"\n    //         className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n    //         target=\"_blank\"\n    //         rel=\"noopener noreferrer\"\n    //       >\n    //         <h2 className={`mb-3 text-2xl font-semibold`}>\n    //           Learn{' '}\n    //           <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n    //             -&gt;\n    //           </span>\n    //         </h2>\n    //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n    //           Learn about Next.js in an interactive course with&nbsp;quizzes!\n    //         </p>\n    //       </a>\n    //       <a\n    //         href=\"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n    //         className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n    //         target=\"_blank\"\n    //         rel=\"noopener noreferrer\"\n    //       >\n    //         <h2 className={`mb-3 text-2xl font-semibold`}>\n    //           Templates{' '}\n    //           <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n    //             -&gt;\n    //           </span>\n    //         </h2>\n    //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n    //           Explore the Next.js 13 playground.\n    //         </p>\n    //       </a>\n    //       <a\n    //         href=\"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n    //         className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n    //         target=\"_blank\"\n    //         rel=\"noopener noreferrer\"\n    //       >\n    //         <h2 className={`mb-3 text-2xl font-semibold`}>\n    //           Deploy{' '}\n    //           <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n    //             -&gt;\n    //           </span>\n    //         </h2>\n    //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n    //           Instantly deploy your Next.js site to a shareable URL with Vercel.\n    //         </p>\n    //       </a>\n    //     </div>\n    //   </main>\n    // )\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Account Balance\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Net Worth\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n        lineNumber: 136,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"KheheMm4IxH67aXiL37gLPEeqn0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEM7QUFHM0I7QUFHRixTQUFTRzs7SUFDdEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSiwrQ0FBUUE7SUFFcENELGdEQUFTQSxDQUFDO1FBQ1A7WUFDQyxrREFBa0Q7WUFDbEQsaURBQWlEO1lBQ2pELEtBQUs7WUFFTCxNQUFNTSxPQUFPLE1BQU1KLHdEQUFpQkEsQ0FDbEM7WUFFRkcsU0FBU0M7WUFDVEMsUUFBUUMsR0FBRyxDQUFDO2dCQUFFSjtZQUFNO1FBQ3RCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsV0FBVztJQUNYLG9GQUFvRjtJQUNwRixxR0FBcUc7SUFDckcsa1RBQWtUO0lBQ2xULHVDQUF1QztJQUN2QyxvRUFBb0U7SUFDcEUsYUFBYTtJQUNiLHdNQUF3TTtJQUN4TSxhQUFhO0lBQ2IsNEdBQTRHO0lBQzVHLHlIQUF5SDtJQUN6SCw0QkFBNEI7SUFDNUIsc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsc0NBQXNDO0lBQ3RDLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFFYiwwbkJBQTBuQjtJQUMxbkIsZUFBZTtJQUNmLG1GQUFtRjtJQUNuRiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBRWIsbUZBQW1GO0lBQ25GLFdBQVc7SUFDWCw0SEFBNEg7SUFDNUgsZ01BQWdNO0lBQ2hNLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLHlEQUF5RDtJQUN6RCxzQkFBc0I7SUFDdEIsd0hBQXdIO0lBQ3hILG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGdFQUFnRTtJQUNoRSxzRUFBc0U7SUFDdEUsZUFBZTtJQUNmLGFBQWE7SUFFYixXQUFXO0lBQ1gsZ0lBQWdJO0lBQ2hJLGdNQUFnTTtJQUNoTSwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVix5REFBeUQ7SUFDekQsdUJBQXVCO0lBQ3ZCLHdIQUF3SDtJQUN4SCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnRUFBZ0U7SUFDaEUsNEVBQTRFO0lBQzVFLGVBQWU7SUFDZixhQUFhO0lBRWIsV0FBVztJQUNYLG1KQUFtSjtJQUNuSixnTUFBZ007SUFDaE0sMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YseURBQXlEO0lBQ3pELDJCQUEyQjtJQUMzQix3SEFBd0g7SUFDeEgsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZ0VBQWdFO0lBQ2hFLCtDQUErQztJQUMvQyxlQUFlO0lBQ2YsYUFBYTtJQUViLFdBQVc7SUFDWCwySEFBMkg7SUFDM0gsZ01BQWdNO0lBQ2hNLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLHlEQUF5RDtJQUN6RCx3QkFBd0I7SUFDeEIsd0hBQXdIO0lBQ3hILG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGdFQUFnRTtJQUNoRSwrRUFBK0U7SUFDL0UsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLElBQUk7SUFFSixxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxQjs7Ozs7OzBCQUNuQyw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXFCOzs7Ozs7Ozs7Ozs7QUFHekM7R0FySXdCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjsgLy8gVGhpcyBpcyBhIGNsaWVudCBjb21wb25lbnQgXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgZ2V0QWNjb3VudEJhbGFuY2UsIGdldFRvdGFsTXVsdGljaGFpbkJhbGFuY2Vcbn0gZnJvbSAnLi4vYXBpcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB0b3RhbCwgc2V0VG90YWwgfSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gY29uc3QgdG90YWwyID0gYXdhaXQgZ2V0VG90YWxNdWx0aWNoYWluQmFsYW5jZShcbiAgICAgIC8vICAgXCIweGQ4ZGE2YmYyNjk2NGFmOWQ3ZWVkOWUwM2U1MzQxNWQzN2FhOTYwNDVcIlxuICAgICAgLy8gKTtcblxuICAgICAgY29uc3QgdGVtcCA9IGF3YWl0IGdldEFjY291bnRCYWxhbmNlKFxuICAgICAgICBcIjB4ZDhkYTZiZjI2OTY0YWY5ZDdlZWQ5ZTAzZTUzNDE1ZDM3YWE5NjA0NVwiLFxuICAgICAgKTtcbiAgICAgIHNldFRvdGFsKHRlbXApXG4gICAgICBjb25zb2xlLmxvZyh7IHRvdGFsIH0pO1xuICAgIH0pKCk7XG4gIH0sIFtdKTtcblxuICAvLyByZXR1cm4gKFxuICAvLyAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIHctZnVsbCBtYXgtdy01eGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmb250LW1vbm8gdGV4dC1zbSBsZzpmbGV4XCI+XG4gIC8vICAgICAgIDxwIGNsYXNzTmFtZT1cImZpeGVkIGxlZnQtMCB0b3AtMCBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXppbmMtMjAwIHBiLTYgcHQtOCBiYWNrZHJvcC1ibHVyLTJ4bCBkYXJrOmJvcmRlci1uZXV0cmFsLTgwMCBkYXJrOmJnLXppbmMtODAwLzMwIGRhcms6ZnJvbS1pbmhlcml0IGxnOnN0YXRpYyBsZzp3LWF1dG8gIGxnOnJvdW5kZWQteGwgbGc6Ym9yZGVyIGxnOmJnLWdyYXktMjAwIGxnOnAtNCBsZzpkYXJrOmJnLXppbmMtODAwLzMwXCI+XG4gIC8vICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgZWRpdGluZyZuYnNwO1xuICAvLyAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGRcIj5hcHAvcGFnZS50c3g8L2NvZGU+XG4gIC8vICAgICAgIDwvcD5cbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMCBsZWZ0LTAgZmxleCBoLTQ4IHctZnVsbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXdoaXRlIHZpYS13aGl0ZSBkYXJrOmZyb20tYmxhY2sgZGFyazp2aWEtYmxhY2sgbGc6c3RhdGljIGxnOmgtYXV0byBsZzp3LWF1dG8gbGc6Ymctbm9uZVwiPlxuICAvLyAgICAgICAgIDxhXG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGZsZXggcGxhY2UtaXRlbXMtY2VudGVyIGdhcC0yIHAtOCBsZzpwb2ludGVyLWV2ZW50cy1hdXRvIGxnOnAtMFwiXG4gIC8vICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAvLyAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgLy8gICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAvLyAgICAgICAgID5cbiAgLy8gICAgICAgICAgIEJ5eycgJ31cbiAgLy8gICAgICAgICAgIDxJbWFnZVxuICAvLyAgICAgICAgICAgICBzcmM9XCIvdmVyY2VsLnN2Z1wiXG4gIC8vICAgICAgICAgICAgIGFsdD1cIlZlcmNlbCBMb2dvXCJcbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFyazppbnZlcnRcIlxuICAvLyAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAvLyAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAvLyAgICAgICAgICAgICBwcmlvcml0eVxuICAvLyAgICAgICAgICAgLz5cbiAgLy8gICAgICAgICA8L2E+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgPC9kaXY+XG5cbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIgYmVmb3JlOmFic29sdXRlIGJlZm9yZTpoLVszMDBweF0gYmVmb3JlOnctWzQ4MHB4XSBiZWZvcmU6LXRyYW5zbGF0ZS14LTEvMiBiZWZvcmU6cm91bmRlZC1mdWxsIGJlZm9yZTpiZy1ncmFkaWVudC1yYWRpYWwgYmVmb3JlOmZyb20td2hpdGUgYmVmb3JlOnRvLXRyYW5zcGFyZW50IGJlZm9yZTpibHVyLTJ4bCBiZWZvcmU6Y29udGVudC1bJyddIGFmdGVyOmFic29sdXRlIGFmdGVyOi16LTIwIGFmdGVyOmgtWzE4MHB4XSBhZnRlcjp3LVsyNDBweF0gYWZ0ZXI6dHJhbnNsYXRlLXgtMS8zIGFmdGVyOmJnLWdyYWRpZW50LWNvbmljIGFmdGVyOmZyb20tc2t5LTIwMCBhZnRlcjp2aWEtYmx1ZS0yMDAgYWZ0ZXI6Ymx1ci0yeGwgYWZ0ZXI6Y29udGVudC1bJyddIGJlZm9yZTpkYXJrOmJnLWdyYWRpZW50LXRvLWJyIGJlZm9yZTpkYXJrOmZyb20tdHJhbnNwYXJlbnQgYmVmb3JlOmRhcms6dG8tYmx1ZS03MDAgYmVmb3JlOmRhcms6b3BhY2l0eS0xMCBhZnRlcjpkYXJrOmZyb20tc2t5LTkwMCBhZnRlcjpkYXJrOnZpYS1bIzAxNDFmZl0gYWZ0ZXI6ZGFyazpvcGFjaXR5LTQwIGJlZm9yZTpsZzpoLVszNjBweF0gei1bLTFdXCI+XG4gIC8vICAgICAgIDxJbWFnZVxuICAvLyAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGRhcms6ZHJvcC1zaGFkb3ctWzBfMF8wLjNyZW1fI2ZmZmZmZjcwXSBkYXJrOmludmVydFwiXG4gIC8vICAgICAgICAgc3JjPVwiL25leHQuc3ZnXCJcbiAgLy8gICAgICAgICBhbHQ9XCJOZXh0LmpzIExvZ29cIlxuICAvLyAgICAgICAgIHdpZHRoPXsxODB9XG4gIC8vICAgICAgICAgaGVpZ2h0PXszN31cbiAgLy8gICAgICAgICBwcmlvcml0eVxuICAvLyAgICAgICAvPlxuICAvLyAgICAgPC9kaXY+XG5cbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMzIgZ3JpZCB0ZXh0LWNlbnRlciBsZzptYi0wIGxnOmdyaWQtY29scy00IGxnOnRleHQtbGVmdFwiPlxuICAvLyAgICAgICA8YVxuICAvLyAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jcz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWFwcGRpci10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgLy8gICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgLy8gICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAvLyAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAvLyAgICAgICA+XG4gIC8vICAgICAgICAgPGgyIGNsYXNzTmFtZT17YG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9PlxuICAvLyAgICAgICAgICAgRG9jc3snICd9XG4gIC8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSBtb3Rpb24tcmVkdWNlOnRyYW5zZm9ybS1ub25lXCI+XG4gIC8vICAgICAgICAgICAgIC0mZ3Q7XG4gIC8vICAgICAgICAgICA8L3NwYW4+XG4gIC8vICAgICAgICAgPC9oMj5cbiAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9e2BtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9PlxuICAvLyAgICAgICAgICAgRmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuXG4gIC8vICAgICAgICAgPC9wPlxuICAvLyAgICAgICA8L2E+XG5cbiAgLy8gICAgICAgPGFcbiAgLy8gICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlLXR3JnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAvLyAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAvLyAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gIC8vICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gIC8vICAgICAgID5cbiAgLy8gICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gIC8vICAgICAgICAgICBMZWFybnsnICd9XG4gIC8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSBtb3Rpb24tcmVkdWNlOnRyYW5zZm9ybS1ub25lXCI+XG4gIC8vICAgICAgICAgICAgIC0mZ3Q7XG4gIC8vICAgICAgICAgICA8L3NwYW4+XG4gIC8vICAgICAgICAgPC9oMj5cbiAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9e2BtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9PlxuICAvLyAgICAgICAgICAgTGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCZuYnNwO3F1aXp6ZXMhXG4gIC8vICAgICAgICAgPC9wPlxuICAvLyAgICAgICA8L2E+XG5cbiAgLy8gICAgICAgPGFcbiAgLy8gICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL3RlbXBsYXRlcz9mcmFtZXdvcms9bmV4dC5qcyZ1dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWFwcGRpci10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgLy8gICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgLy8gICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAvLyAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAvLyAgICAgICA+XG4gIC8vICAgICAgICAgPGgyIGNsYXNzTmFtZT17YG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9PlxuICAvLyAgICAgICAgICAgVGVtcGxhdGVzeycgJ31cbiAgLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIG1vdGlvbi1yZWR1Y2U6dHJhbnNmb3JtLW5vbmVcIj5cbiAgLy8gICAgICAgICAgICAgLSZndDtcbiAgLy8gICAgICAgICAgIDwvc3Bhbj5cbiAgLy8gICAgICAgICA8L2gyPlxuICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gIC8vICAgICAgICAgICBFeHBsb3JlIHRoZSBOZXh0LmpzIDEzIHBsYXlncm91bmQuXG4gIC8vICAgICAgICAgPC9wPlxuICAvLyAgICAgICA8L2E+XG5cbiAgLy8gICAgICAgPGFcbiAgLy8gICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWFwcGRpci10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgLy8gICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgLy8gICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAvLyAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAvLyAgICAgICA+XG4gIC8vICAgICAgICAgPGgyIGNsYXNzTmFtZT17YG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9PlxuICAvLyAgICAgICAgICAgRGVwbG95eycgJ31cbiAgLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIG1vdGlvbi1yZWR1Y2U6dHJhbnNmb3JtLW5vbmVcIj5cbiAgLy8gICAgICAgICAgICAgLSZndDtcbiAgLy8gICAgICAgICAgIDwvc3Bhbj5cbiAgLy8gICAgICAgICA8L2gyPlxuICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gIC8vICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgc2hhcmVhYmxlIFVSTCB3aXRoIFZlcmNlbC5cbiAgLy8gICAgICAgICA8L3A+XG4gIC8vICAgICAgIDwvYT5cbiAgLy8gICAgIDwvZGl2PlxuICAvLyAgIDwvbWFpbj5cbiAgLy8gKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3AtMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkJz5BY2NvdW50IEJhbGFuY2U8L2gxPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkJz5OZXQgV29ydGg8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QWNjb3VudEJhbGFuY2UiLCJIb21lIiwidG90YWwiLCJzZXRUb3RhbCIsInRlbXAiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});