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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis */ \"(app-client)/./apis.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0xd8da6bf26964af9d7eed9e03e53415d37aa96045\");\n    const [enteredAccount, setEnteredAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0xd8da6bf26964af9d7eed9e03e53415d37aa96045\");\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"fetching...\");\n    const [netWorth, setNetWorth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"fetching...\");\n    const [breakup, setBreakup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"fetching...\");\n    function onAccountChange(event) {\n        console.log(\"In onAccountChange:\", event.target.value);\n        setEnteredAccount(event.target.value);\n    }\n    function onAccountFetch(event) {\n        console.log(\"In onAccountChange:vlaue of enteredAccount is \", enteredAccount);\n        setTotal(\"fetching ....\");\n        setNetWorth(\"fetching ....\");\n        setBreakup(\"fetching ....\");\n        setAccount(enteredAccount);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            console.log(\"now in useEffect\");\n            let tempNW = await (0,_apis__WEBPACK_IMPORTED_MODULE_2__.getTotalMultichainBalance)(account);\n            setNetWorth(tempNW.total.toString());\n            setBreakup(tempNW.breakup);\n            const tempTotal = await (0,_apis__WEBPACK_IMPORTED_MODULE_2__.getAccountBalance)(account);\n            setTotal(tempTotal.totalBalanceUsd);\n            console.log({\n                tempTotal\n            });\n        })();\n        return ()=>{};\n    }, [\n        account\n    ]);\n    // return (\n    //   <main className=\"flex min-h-screen flex-col items-center justify-between p-24\">\n    //     <div className=\"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\">\n    //       <p className=\"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\">\n    //         Get started by editing&nbsp;\n    //         <code className=\"font-mono font-bold\">app/page.tsx</code>\n    //       </p>\n    //       <div className=\"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none\">\n    //         <a\n    //           className=\"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0\"\n    //           href=\"https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n    //           target=\"_blank\"\n    //           rel=\"noopener noreferrer\"\n    //         >\n    //           By{' '}\n    //           <Image\n    //             src=\"/vercel.svg\"\n    //             alt=\"Vercel Logo\"\n    //             className=\"dark:invert\"\n    //             width={100}\n    //             height={24}\n    //             priority\n    //           />\n    //         </a>\n    //       </div>\n    //     </div>\n    //     <div className=\"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\">\n    //       <Image\n    //         className=\"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert\"\n    //         src=\"/next.svg\"\n    //         alt=\"Next.js Logo\"\n    //         width={180}\n    //         height={37}\n    //         priority\n    //       />\n    //     </div>\n    //     <div className=\"mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left\">\n    //       <a\n    //         href=\"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n    //         className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n    //         target=\"_blank\"\n    //         rel=\"noopener noreferrer\"\n    //       >\n    //         <h2 className={`mb-3 text-2xl font-semibold`}>\n    //           Docs{' '}\n    //           <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n    //             -&gt;\n    //           </span>\n    //         </h2>\n    //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n    //           Find in-depth information about Next.js features and API.\n    //         </p>\n    //       </a>\n    //       <a\n    //         href=\"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\"\n    //         className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n    //         target=\"_blank\"\n    //         rel=\"noopener noreferrer\"\n    //       >\n    //         <h2 className={`mb-3 text-2xl font-semibold`}>\n    //           Learn{' '}\n    //           <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n    //             -&gt;\n    //           </span>\n    //         </h2>\n    //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n    //           Learn about Next.js in an interactive course with&nbsp;quizzes!\n    //         </p>\n    //       </a>\n    //       <a\n    //         href=\"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n    //         className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n    //         target=\"_blank\"\n    //         rel=\"noopener noreferrer\"\n    //       >\n    //         <h2 className={`mb-3 text-2xl font-semibold`}>\n    //           Templates{' '}\n    //           <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n    //             -&gt;\n    //           </span>\n    //         </h2>\n    //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n    //           Explore the Next.js 13 playground.\n    //         </p>\n    //       </a>\n    //       <a\n    //         href=\"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n    //         className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n    //         target=\"_blank\"\n    //         rel=\"noopener noreferrer\"\n    //       >\n    //         <h2 className={`mb-3 text-2xl font-semibold`}>\n    //           Deploy{' '}\n    //           <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n    //             -&gt;\n    //           </span>\n    //         </h2>\n    //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n    //           Instantly deploy your Next.js site to a shareable URL with Vercel.\n    //         </p>\n    //       </a>\n    //     </div>\n    //   </main>\n    // )\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"account\",\n                className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                children: \"Account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 163,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"account\",\n                className: \"bg-gray-50 border border-gray-300 block w-full \",\n                value: enteredAccount,\n                onChange: onAccountChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: onAccountFetch,\n                className: \"text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                children: \"Get Details for account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 166,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Account Balance (USD)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: total\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 170,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Net Worth (USD)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 171,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: netWorth\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 172,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"breakup\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 173,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: breakup\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 174,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n        lineNumber: 162,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"T4LLXBuWeFA0gKB3m8fw5mwI7Aw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnRUFBZ0U7SUFDaEUsK0NBQStDO0lBQy9DLGVBQWU7SUFDZixhQUFhO0lBRWIsV0FBVztJQUNYLDJIQUEySDtJQUMzSCxnTUFBZ007SUFDaE0sMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YseURBQXlEO0lBQ3pELHdCQUF3QjtJQUN4Qix3SEFBd0g7SUFDeEgsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZ0VBQWdFO0lBQ2hFLCtFQUErRTtJQUMvRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osSUFBSTtJQUVKLHFCQUNFLDhEQUFDcUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFNQyxTQUFRO2dCQUFVRixXQUFVOzBCQUErRDs7Ozs7OzBCQUVsRyw4REFBQ0c7Z0JBQU1DLE1BQUs7Z0JBQU9DLElBQUc7Z0JBQVVMLFdBQVU7Z0JBQWtEUCxPQUFPYjtnQkFBZ0IwQixVQUFVbEI7Z0JBQWlCbUIsUUFBUTs7Ozs7OzBCQUN0Siw4REFBQ0M7Z0JBQU9KLE1BQUs7Z0JBQVNLLFNBQVNmO2dCQUFnQk0sV0FBVTswQkFBbU87Ozs7OzswQkFHNVIsOERBQUNVO2dCQUFHVixXQUFVOzBCQUFxQjs7Ozs7OzBCQUNuQyw4REFBQ1c7MEJBQUc3Qjs7Ozs7OzBCQUNKLDhEQUFDNEI7Z0JBQUdWLFdBQVU7MEJBQXFCOzs7Ozs7MEJBQ25DLDhEQUFDVzswQkFBRzNCOzs7Ozs7MEJBQ0osOERBQUMwQjtnQkFBR1YsV0FBVTswQkFBcUI7Ozs7OzswQkFDbkMsOERBQUNXOzBCQUFHekI7Ozs7Ozs7Ozs7OztBQUdWO0dBekt3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IC8vIFRoaXMgaXMgYSBjbGllbnQgY29tcG9uZW50IFxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIGdldEFjY291bnRCYWxhbmNlLCBnZXRUb3RhbE11bHRpY2hhaW5CYWxhbmNlXG59IGZyb20gJy4uL2FwaXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKFwiMHhkOGRhNmJmMjY5NjRhZjlkN2VlZDllMDNlNTM0MTVkMzdhYTk2MDQ1XCIpO1xuICBjb25zdCBbZW50ZXJlZEFjY291bnQsIHNldEVudGVyZWRBY2NvdW50XSA9IHVzZVN0YXRlKFwiMHhkOGRhNmJmMjY5NjRhZjlkN2VlZDllMDNlNTM0MTVkMzdhYTk2MDQ1XCIpO1xuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKFwiZmV0Y2hpbmcuLi5cIik7XG4gIGNvbnN0IFtuZXRXb3J0aCwgc2V0TmV0V29ydGhdID0gdXNlU3RhdGUoXCJmZXRjaGluZy4uLlwiKTtcbiAgY29uc3QgW2JyZWFrdXAsIHNldEJyZWFrdXBdID0gdXNlU3RhdGUoXCJmZXRjaGluZy4uLlwiKTtcblxuICBmdW5jdGlvbiBvbkFjY291bnRDaGFuZ2UoZXZlbnQpIHtcblxuICAgIGNvbnNvbGUubG9nKFwiSW4gb25BY2NvdW50Q2hhbmdlOlwiLCBldmVudC50YXJnZXQudmFsdWUpXG4gICAgc2V0RW50ZXJlZEFjY291bnQoZXZlbnQudGFyZ2V0LnZhbHVlKVxuXG4gIH1cblxuICBmdW5jdGlvbiBvbkFjY291bnRGZXRjaChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiSW4gb25BY2NvdW50Q2hhbmdlOnZsYXVlIG9mIGVudGVyZWRBY2NvdW50IGlzIFwiLCBlbnRlcmVkQWNjb3VudClcbiAgICBzZXRUb3RhbChcImZldGNoaW5nIC4uLi5cIilcbiAgICBzZXROZXRXb3J0aChcImZldGNoaW5nIC4uLi5cIilcbiAgICBzZXRCcmVha3VwKFwiZmV0Y2hpbmcgLi4uLlwiKVxuXG5cbiAgICBzZXRBY2NvdW50KGVudGVyZWRBY2NvdW50KTtcbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJub3cgaW4gdXNlRWZmZWN0XCIpXG4gICAgICBsZXQgdGVtcE5XID0gYXdhaXQgZ2V0VG90YWxNdWx0aWNoYWluQmFsYW5jZShhY2NvdW50KTtcbiAgICAgIHNldE5ldFdvcnRoKHRlbXBOVy50b3RhbC50b1N0cmluZygpKTtcbiAgICAgIHNldEJyZWFrdXAodGVtcE5XLmJyZWFrdXApO1xuXG4gICAgICBjb25zdCB0ZW1wVG90YWwgPSBhd2FpdCBnZXRBY2NvdW50QmFsYW5jZShhY2NvdW50LFxuICAgICAgKTtcblxuICAgICAgc2V0VG90YWwodGVtcFRvdGFsLnRvdGFsQmFsYW5jZVVzZCk7XG4gICAgICBjb25zb2xlLmxvZyh7IHRlbXBUb3RhbCB9KTtcbiAgICB9KSgpO1xuICAgIHJldHVybiAoKSA9PiB7XG5cbiAgICB9O1xuICB9LCBbYWNjb3VudF0pO1xuXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgdy1mdWxsIG1heC13LTV4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZvbnQtbW9ubyB0ZXh0LXNtIGxnOmZsZXhcIj5cbiAgLy8gICAgICAgPHAgY2xhc3NOYW1lPVwiZml4ZWQgbGVmdC0wIHRvcC0wIGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBiZy1ncmFkaWVudC10by1iIGZyb20temluYy0yMDAgcGItNiBwdC04IGJhY2tkcm9wLWJsdXItMnhsIGRhcms6Ym9yZGVyLW5ldXRyYWwtODAwIGRhcms6YmctemluYy04MDAvMzAgZGFyazpmcm9tLWluaGVyaXQgbGc6c3RhdGljIGxnOnctYXV0byAgbGc6cm91bmRlZC14bCBsZzpib3JkZXIgbGc6YmctZ3JheS0yMDAgbGc6cC00IGxnOmRhcms6YmctemluYy04MDAvMzBcIj5cbiAgLy8gICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5nJm5ic3A7XG4gIC8vICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZFwiPmFwcC9wYWdlLnRzeDwvY29kZT5cbiAgLy8gICAgICAgPC9wPlxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIGxlZnQtMCBmbGV4IGgtNDggdy1mdWxsIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBiZy1ncmFkaWVudC10by10IGZyb20td2hpdGUgdmlhLXdoaXRlIGRhcms6ZnJvbS1ibGFjayBkYXJrOnZpYS1ibGFjayBsZzpzdGF0aWMgbGc6aC1hdXRvIGxnOnctYXV0byBsZzpiZy1ub25lXCI+XG4gIC8vICAgICAgICAgPGFcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIgZ2FwLTIgcC04IGxnOnBvaW50ZXItZXZlbnRzLWF1dG8gbGc6cC0wXCJcbiAgLy8gICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1hcHBkaXItdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gIC8vICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAvLyAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gIC8vICAgICAgICAgPlxuICAvLyAgICAgICAgICAgQnl7JyAnfVxuICAvLyAgICAgICAgICAgPEltYWdlXG4gIC8vICAgICAgICAgICAgIHNyYz1cIi92ZXJjZWwuc3ZnXCJcbiAgLy8gICAgICAgICAgICAgYWx0PVwiVmVyY2VsIExvZ29cIlxuICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOmludmVydFwiXG4gIC8vICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gIC8vICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gIC8vICAgICAgICAgICAgIHByaW9yaXR5XG4gIC8vICAgICAgICAgICAvPlxuICAvLyAgICAgICAgIDwvYT5cbiAgLy8gICAgICAgPC9kaXY+XG4gIC8vICAgICA8L2Rpdj5cblxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHBsYWNlLWl0ZW1zLWNlbnRlciBiZWZvcmU6YWJzb2x1dGUgYmVmb3JlOmgtWzMwMHB4XSBiZWZvcmU6dy1bNDgwcHhdIGJlZm9yZTotdHJhbnNsYXRlLXgtMS8yIGJlZm9yZTpyb3VuZGVkLWZ1bGwgYmVmb3JlOmJnLWdyYWRpZW50LXJhZGlhbCBiZWZvcmU6ZnJvbS13aGl0ZSBiZWZvcmU6dG8tdHJhbnNwYXJlbnQgYmVmb3JlOmJsdXItMnhsIGJlZm9yZTpjb250ZW50LVsnJ10gYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6LXotMjAgYWZ0ZXI6aC1bMTgwcHhdIGFmdGVyOnctWzI0MHB4XSBhZnRlcjp0cmFuc2xhdGUteC0xLzMgYWZ0ZXI6YmctZ3JhZGllbnQtY29uaWMgYWZ0ZXI6ZnJvbS1za3ktMjAwIGFmdGVyOnZpYS1ibHVlLTIwMCBhZnRlcjpibHVyLTJ4bCBhZnRlcjpjb250ZW50LVsnJ10gYmVmb3JlOmRhcms6YmctZ3JhZGllbnQtdG8tYnIgYmVmb3JlOmRhcms6ZnJvbS10cmFuc3BhcmVudCBiZWZvcmU6ZGFyazp0by1ibHVlLTcwMCBiZWZvcmU6ZGFyazpvcGFjaXR5LTEwIGFmdGVyOmRhcms6ZnJvbS1za3ktOTAwIGFmdGVyOmRhcms6dmlhLVsjMDE0MWZmXSBhZnRlcjpkYXJrOm9wYWNpdHktNDAgYmVmb3JlOmxnOmgtWzM2MHB4XSB6LVstMV1cIj5cbiAgLy8gICAgICAgPEltYWdlXG4gIC8vICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZGFyazpkcm9wLXNoYWRvdy1bMF8wXzAuM3JlbV8jZmZmZmZmNzBdIGRhcms6aW52ZXJ0XCJcbiAgLy8gICAgICAgICBzcmM9XCIvbmV4dC5zdmdcIlxuICAvLyAgICAgICAgIGFsdD1cIk5leHQuanMgTG9nb1wiXG4gIC8vICAgICAgICAgd2lkdGg9ezE4MH1cbiAgLy8gICAgICAgICBoZWlnaHQ9ezM3fVxuICAvLyAgICAgICAgIHByaW9yaXR5XG4gIC8vICAgICAgIC8+XG4gIC8vICAgICA8L2Rpdj5cblxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zMiBncmlkIHRleHQtY2VudGVyIGxnOm1iLTAgbGc6Z3JpZC1jb2xzLTQgbGc6dGV4dC1sZWZ0XCI+XG4gIC8vICAgICAgIDxhXG4gIC8vICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAvLyAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAvLyAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gIC8vICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gIC8vICAgICAgID5cbiAgLy8gICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gIC8vICAgICAgICAgICBEb2NzeycgJ31cbiAgLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIG1vdGlvbi1yZWR1Y2U6dHJhbnNmb3JtLW5vbmVcIj5cbiAgLy8gICAgICAgICAgICAgLSZndDtcbiAgLy8gICAgICAgICAgIDwvc3Bhbj5cbiAgLy8gICAgICAgICA8L2gyPlxuICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gIC8vICAgICAgICAgICBGaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS5cbiAgLy8gICAgICAgICA8L3A+XG4gIC8vICAgICAgIDwvYT5cblxuICAvLyAgICAgICA8YVxuICAvLyAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm4/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1hcHBkaXItdGVtcGxhdGUtdHcmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gIC8vICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiXG4gIC8vICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgLy8gICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgLy8gICAgICAgPlxuICAvLyAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfT5cbiAgLy8gICAgICAgICAgIExlYXJueycgJ31cbiAgLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIG1vdGlvbi1yZWR1Y2U6dHJhbnNmb3JtLW5vbmVcIj5cbiAgLy8gICAgICAgICAgICAgLSZndDtcbiAgLy8gICAgICAgICAgIDwvc3Bhbj5cbiAgLy8gICAgICAgICA8L2gyPlxuICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gIC8vICAgICAgICAgICBMZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoJm5ic3A7cXVpenplcyFcbiAgLy8gICAgICAgICA8L3A+XG4gIC8vICAgICAgIDwvYT5cblxuICAvLyAgICAgICA8YVxuICAvLyAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vdGVtcGxhdGVzP2ZyYW1ld29yaz1uZXh0LmpzJnV0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAvLyAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAvLyAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gIC8vICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gIC8vICAgICAgID5cbiAgLy8gICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gIC8vICAgICAgICAgICBUZW1wbGF0ZXN7JyAnfVxuICAvLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRyYW5zaXRpb24tdHJhbnNmb3JtIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZVwiPlxuICAvLyAgICAgICAgICAgICAtJmd0O1xuICAvLyAgICAgICAgICAgPC9zcGFuPlxuICAvLyAgICAgICAgIDwvaDI+XG4gIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgLy8gICAgICAgICAgIEV4cGxvcmUgdGhlIE5leHQuanMgMTMgcGxheWdyb3VuZC5cbiAgLy8gICAgICAgICA8L3A+XG4gIC8vICAgICAgIDwvYT5cblxuICAvLyAgICAgICA8YVxuICAvLyAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vbmV3P3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAvLyAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAvLyAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gIC8vICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gIC8vICAgICAgID5cbiAgLy8gICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gIC8vICAgICAgICAgICBEZXBsb3l7JyAnfVxuICAvLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRyYW5zaXRpb24tdHJhbnNmb3JtIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZVwiPlxuICAvLyAgICAgICAgICAgICAtJmd0O1xuICAvLyAgICAgICAgICAgPC9zcGFuPlxuICAvLyAgICAgICAgIDwvaDI+XG4gIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgLy8gICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBzaGFyZWFibGUgVVJMIHdpdGggVmVyY2VsLlxuICAvLyAgICAgICAgIDwvcD5cbiAgLy8gICAgICAgPC9hPlxuICAvLyAgICAgPC9kaXY+XG4gIC8vICAgPC9tYWluPlxuICAvLyApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncC0xMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImFjY291bnRcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5BY2NvdW50PC9sYWJlbD5cbiAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFjY291bnRcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCIgcGxhY2Vob2xkZXI9e2FjY291bnR9IHJlcXVpcmVkIC8+ICovfVxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhY2NvdW50XCIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJsb2NrIHctZnVsbCBcIiB2YWx1ZT17ZW50ZXJlZEFjY291bnR9IG9uQ2hhbmdlPXtvbkFjY291bnRDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkFjY291bnRGZXRjaH0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1mdWxsIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbXItMiBtYi0yIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5HZXQgRGV0YWlscyBmb3IgYWNjb3VudDwvYnV0dG9uPlxuXG5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCc+QWNjb3VudCBCYWxhbmNlIChVU0QpPC9oMT5cbiAgICAgIDxwPnt0b3RhbH08L3A+XG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWJvbGQnPk5ldCBXb3J0aCAoVVNEKTwvaDE+XG4gICAgICA8cD57bmV0V29ydGh9PC9wPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkJz5icmVha3VwPC9oMT5cbiAgICAgIDxwPnticmVha3VwfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEFjY291bnRCYWxhbmNlIiwiZ2V0VG90YWxNdWx0aWNoYWluQmFsYW5jZSIsIkhvbWUiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImVudGVyZWRBY2NvdW50Iiwic2V0RW50ZXJlZEFjY291bnQiLCJ0b3RhbCIsInNldFRvdGFsIiwibmV0V29ydGgiLCJzZXROZXRXb3J0aCIsImJyZWFrdXAiLCJzZXRCcmVha3VwIiwib25BY2NvdW50Q2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJvbkFjY291bnRGZXRjaCIsInRlbXBOVyIsInRvU3RyaW5nIiwidGVtcFRvdGFsIiwidG90YWxCYWxhbmNlVXNkIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});