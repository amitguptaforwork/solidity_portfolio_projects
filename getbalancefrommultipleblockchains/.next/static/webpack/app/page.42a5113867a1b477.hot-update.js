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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis */ \"(app-client)/./apis.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0xd8da6bf26964af9d7eed9e03e53415d37aa96045\");\n    const [enteredAccount, setEnteredAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0xd8da6bf26964af9d7eed9e03e53415d37aa96045\");\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"fetching...\");\n    const [netWorth, setNetWorth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"fetching...\");\n    const [breakup, setBreakup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"fetching...\");\n    function onAccountChange(event) {\n        console.log(\"In onAccountChange:\", event.target.value);\n        setEnteredAccount(event.target.value);\n    }\n    function onAccountFetch(event) {\n        console.log(\"In onAccountFetch:vlaue of enteredAccount is \", enteredAccount);\n        setTotal(\"fetching ....\");\n        setNetWorth(\"fetching ....\");\n        setBreakup(\"fetching ....\");\n        setAccount(enteredAccount);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            console.log(\"now in useEffect\");\n            let tempNW = await (0,_apis__WEBPACK_IMPORTED_MODULE_2__.getTotalMultichainBalance)(account);\n            setNetWorth(tempNW.total.toString());\n            setBreakup(tempNW.breakup);\n            const tempTotal = await (0,_apis__WEBPACK_IMPORTED_MODULE_2__.getAccountBalance)(account);\n            setTotal(tempTotal.totalBalanceUsd);\n            console.log({\n                tempTotal\n            });\n        })();\n        return ()=>{};\n    }, [\n        account\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"account\",\n                className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                children: \"Account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"account\",\n                className: \"bg-gray-50 border border-gray-300 block w-full \",\n                value: enteredAccount,\n                onChange: onAccountChange,\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: onAccountFetch,\n                className: \"text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                children: \"Get Details for account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Account Balance (USD)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: total\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Net Worth (USD)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: netWorth\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"breakup\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: breakup\n            }, void 0, false, {\n                fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Knowledge\\\\Blockchain\\\\Projects_Solidity\\\\getbalancefrommultipleblockchains\\\\app\\\\page.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"T4LLXBuWeFA0gKB3m8fw5mwI7Aw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEM7QUFHM0I7QUFHRixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFFdkMsU0FBU2MsZ0JBQWdCQyxLQUFLO1FBRTVCQyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCRixNQUFNRyxNQUFNLENBQUNDLEtBQUs7UUFDckRaLGtCQUFrQlEsTUFBTUcsTUFBTSxDQUFDQyxLQUFLO0lBRXRDO0lBRUEsU0FBU0MsZUFBZUwsS0FBSztRQUMzQkMsUUFBUUMsR0FBRyxDQUFDLGlEQUFpRFg7UUFDN0RHLFNBQVM7UUFDVEUsWUFBWTtRQUNaRSxXQUFXO1FBQ1hSLFdBQVdDO0lBQ2I7SUFHQVAsZ0RBQVNBLENBQUM7UUFDUDtZQUNDaUIsUUFBUUMsR0FBRyxDQUFDO1lBQ1osSUFBSUksU0FBUyxNQUFNbkIsZ0VBQXlCQSxDQUFDRTtZQUM3Q08sWUFBWVUsT0FBT2IsS0FBSyxDQUFDYyxRQUFRO1lBQ2pDVCxXQUFXUSxPQUFPVCxPQUFPO1lBRXpCLE1BQU1XLFlBQVksTUFBTXRCLHdEQUFpQkEsQ0FBQ0c7WUFHMUNLLFNBQVNjLFVBQVVDLGVBQWU7WUFDbENSLFFBQVFDLEdBQUcsQ0FBQztnQkFBRU07WUFBVTtRQUMxQjtRQUNBLE9BQU8sS0FFUDtJQUNGLEdBQUc7UUFBQ25CO0tBQVE7SUFJWixxQkFDRSw4REFBQ3FCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBTUMsU0FBUTtnQkFBVUYsV0FBVTswQkFBK0Q7Ozs7OzswQkFFbEcsOERBQUNHO2dCQUFNQyxNQUFLO2dCQUFPQyxJQUFHO2dCQUFVTCxXQUFVO2dCQUFrRFAsT0FBT2I7Z0JBQWdCMEIsVUFBVWxCO2dCQUFpQm1CLFFBQVE7Ozs7OzswQkFDdEosOERBQUNDO2dCQUFPSixNQUFLO2dCQUFTSyxTQUFTZjtnQkFBZ0JNLFdBQVU7MEJBQW1POzs7Ozs7MEJBRzVSLDhEQUFDVTtnQkFBR1YsV0FBVTswQkFBcUI7Ozs7OzswQkFDbkMsOERBQUNXOzBCQUFHN0I7Ozs7OzswQkFDSiw4REFBQzRCO2dCQUFHVixXQUFVOzBCQUFxQjs7Ozs7OzBCQUNuQyw4REFBQ1c7MEJBQUczQjs7Ozs7OzBCQUNKLDhEQUFDMEI7Z0JBQUdWLFdBQVU7MEJBQXFCOzs7Ozs7MEJBQ25DLDhEQUFDVzswQkFBR3pCOzs7Ozs7Ozs7Ozs7QUFHVjtHQTNEd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyAvLyBUaGlzIGlzIGEgY2xpZW50IGNvbXBvbmVudCBcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBnZXRBY2NvdW50QmFsYW5jZSwgZ2V0VG90YWxNdWx0aWNoYWluQmFsYW5jZVxufSBmcm9tICcuLi9hcGlzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIjB4ZDhkYTZiZjI2OTY0YWY5ZDdlZWQ5ZTAzZTUzNDE1ZDM3YWE5NjA0NVwiKTtcbiAgY29uc3QgW2VudGVyZWRBY2NvdW50LCBzZXRFbnRlcmVkQWNjb3VudF0gPSB1c2VTdGF0ZShcIjB4ZDhkYTZiZjI2OTY0YWY5ZDdlZWQ5ZTAzZTUzNDE1ZDM3YWE5NjA0NVwiKTtcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZShcImZldGNoaW5nLi4uXCIpO1xuICBjb25zdCBbbmV0V29ydGgsIHNldE5ldFdvcnRoXSA9IHVzZVN0YXRlKFwiZmV0Y2hpbmcuLi5cIik7XG4gIGNvbnN0IFticmVha3VwLCBzZXRCcmVha3VwXSA9IHVzZVN0YXRlKFwiZmV0Y2hpbmcuLi5cIik7XG5cbiAgZnVuY3Rpb24gb25BY2NvdW50Q2hhbmdlKGV2ZW50KSB7XG5cbiAgICBjb25zb2xlLmxvZyhcIkluIG9uQWNjb3VudENoYW5nZTpcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIHNldEVudGVyZWRBY2NvdW50KGV2ZW50LnRhcmdldC52YWx1ZSlcblxuICB9XG5cbiAgZnVuY3Rpb24gb25BY2NvdW50RmV0Y2goZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkluIG9uQWNjb3VudEZldGNoOnZsYXVlIG9mIGVudGVyZWRBY2NvdW50IGlzIFwiLCBlbnRlcmVkQWNjb3VudClcbiAgICBzZXRUb3RhbChcImZldGNoaW5nIC4uLi5cIilcbiAgICBzZXROZXRXb3J0aChcImZldGNoaW5nIC4uLi5cIilcbiAgICBzZXRCcmVha3VwKFwiZmV0Y2hpbmcgLi4uLlwiKVxuICAgIHNldEFjY291bnQoZW50ZXJlZEFjY291bnQpO1xuICB9XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vdyBpbiB1c2VFZmZlY3RcIilcbiAgICAgIGxldCB0ZW1wTlcgPSBhd2FpdCBnZXRUb3RhbE11bHRpY2hhaW5CYWxhbmNlKGFjY291bnQpO1xuICAgICAgc2V0TmV0V29ydGgodGVtcE5XLnRvdGFsLnRvU3RyaW5nKCkpO1xuICAgICAgc2V0QnJlYWt1cCh0ZW1wTlcuYnJlYWt1cCk7XG5cbiAgICAgIGNvbnN0IHRlbXBUb3RhbCA9IGF3YWl0IGdldEFjY291bnRCYWxhbmNlKGFjY291bnQsXG4gICAgICApO1xuXG4gICAgICBzZXRUb3RhbCh0ZW1wVG90YWwudG90YWxCYWxhbmNlVXNkKTtcbiAgICAgIGNvbnNvbGUubG9nKHsgdGVtcFRvdGFsIH0pO1xuICAgIH0pKCk7XG4gICAgcmV0dXJuICgpID0+IHtcblxuICAgIH07XG4gIH0sIFthY2NvdW50XSk7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3AtMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhY2NvdW50XCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+QWNjb3VudDwvbGFiZWw+XG4gICAgICB7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhY2NvdW50XCIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMFwiIHBsYWNlaG9sZGVyPXthY2NvdW50fSByZXF1aXJlZCAvPiAqL31cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWNjb3VudFwiIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBibG9jayB3LWZ1bGwgXCIgdmFsdWU9e2VudGVyZWRBY2NvdW50fSBvbkNoYW5nZT17b25BY2NvdW50Q2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25BY2NvdW50RmV0Y2h9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1yLTIgbWItMiBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCI+R2V0IERldGFpbHMgZm9yIGFjY291bnQ8L2J1dHRvbj5cblxuXG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWJvbGQnPkFjY291bnQgQmFsYW5jZSAoVVNEKTwvaDE+XG4gICAgICA8cD57dG90YWx9PC9wPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkJz5OZXQgV29ydGggKFVTRCk8L2gxPlxuICAgICAgPHA+e25ldFdvcnRofTwvcD5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCc+YnJlYWt1cDwvaDE+XG4gICAgICA8cD57YnJlYWt1cH08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRBY2NvdW50QmFsYW5jZSIsImdldFRvdGFsTXVsdGljaGFpbkJhbGFuY2UiLCJIb21lIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJlbnRlcmVkQWNjb3VudCIsInNldEVudGVyZWRBY2NvdW50IiwidG90YWwiLCJzZXRUb3RhbCIsIm5ldFdvcnRoIiwic2V0TmV0V29ydGgiLCJicmVha3VwIiwic2V0QnJlYWt1cCIsIm9uQWNjb3VudENoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwib25BY2NvdW50RmV0Y2giLCJ0ZW1wTlciLCJ0b1N0cmluZyIsInRlbXBUb3RhbCIsInRvdGFsQmFsYW5jZVVzZCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});