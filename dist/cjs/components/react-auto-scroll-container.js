"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoScrollContainer = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var AutoScrollContainer = function (_a) {
    var children = _a.children, percentageThreshold = _a.percentageThreshold, style = _a.style, className = _a.className, _b = _a.behavior, behavior = _b === void 0 ? "auto" : _b;
    var containerRef = react_1.default.useRef(null);
    var endRef = react_1.default.useRef(null);
    var _c = react_1.default.useState(true), isUserAtBottom = _c[0], setIsUserAtBottom = _c[1];
    var _d = react_1.default.useState(-1), previousHeight = _d[0], setPreviousHeight = _d[1];
    var _e = react_1.default.useState(0), heightChange = _e[0], setHeightChange = _e[1];
    react_1.default.useEffect(function () {
        var _a;
        if (isUserAtBottom && heightChange)
            (_a = endRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: behavior });
    }, [heightChange]);
    var handleOnScroll = function () {
        if (!containerRef.current)
            return;
        var _a = containerRef.current, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
        if (scrollTop + clientHeight >=
            scrollHeight - scrollHeight * (percentageThreshold / 100)) {
            setIsUserAtBottom(true);
        }
        else {
            setIsUserAtBottom(false);
        }
    };
    react_1.default.useEffect(function () {
        var container = containerRef.current;
        if (!container)
            return;
        var currentHeight = container.scrollHeight;
        if (previousHeight !== null && currentHeight !== previousHeight) {
            setHeightChange(currentHeight - previousHeight);
        }
        else {
            setHeightChange(0);
        }
        setPreviousHeight(currentHeight);
    }, [children]);
    return ((0, jsx_runtime_1.jsxs)("div", { style: tslib_1.__assign(tslib_1.__assign({}, style), { overflowY: "auto" }), className: className, ref: containerRef, onScroll: handleOnScroll, children: [children, (0, jsx_runtime_1.jsx)("div", { ref: endRef })] }));
};
exports.AutoScrollContainer = AutoScrollContainer;
//# sourceMappingURL=react-auto-scroll-container.js.map