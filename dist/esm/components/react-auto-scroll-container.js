import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
export var AutoScrollContainer = function (_a) {
    var children = _a.children, percentageThreshold = _a.percentageThreshold, style = _a.style, className = _a.className, _b = _a.behavior, behavior = _b === void 0 ? "auto" : _b;
    var containerRef = React.useRef(null);
    var endRef = React.useRef(null);
    var _c = React.useState(true), isUserAtBottom = _c[0], setIsUserAtBottom = _c[1];
    var _d = React.useState(-1), previousHeight = _d[0], setPreviousHeight = _d[1];
    var _e = React.useState(0), heightChange = _e[0], setHeightChange = _e[1];
    React.useEffect(function () {
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
    React.useEffect(function () {
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
    return (_jsxs("div", { style: __assign(__assign({}, style), { overflowY: "auto" }), className: className, ref: containerRef, onScroll: handleOnScroll, children: [children, _jsx("div", { ref: endRef })] }));
};
