"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoScrollContainer = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importStar(require("react"));
var delay = function (fn, ms) { return setTimeout(fn, ms); };
exports.AutoScrollContainer = react_1.default.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, _a = props.behavior, behavior = _a === void 0 ? "auto" : _a, _b = props.active, active = _b === void 0 ? false : _b, _c = props.forceScroll, forceScroll = _c === void 0 ? false : _c, _d = props.overflowY, overflowY = _d === void 0 ? "auto" : _d, _e = props.percentageThreshold, percentageThreshold = _e === void 0 ? 20 : _e, _f = props.as, Component = _f === void 0 ? "div" : _f;
    var containerRef = react_1.default.useRef(null);
    var endRef = react_1.default.useRef(null);
    var _g = react_1.default.useState(false), isScrollingUp = _g[0], setIsScrollingUp = _g[1];
    react_1.default.useImperativeHandle(ref, function () { return containerRef.current; });
    var _h = react_1.default.useState(active), delayedActive = _h[0], setDelayedActive = _h[1];
    (0, react_1.useEffect)(function () {
        if (active) {
            setDelayedActive(true);
        }
        else {
            delay(function () {
                setDelayedActive(false);
            }, 1);
        }
    }, [active]);
    (0, react_1.useEffect)(function () {
        var container = containerRef.current;
        if (forceScroll) {
            delay(function () {
                var _a;
                containerRef.current &&
                    containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
                (_a = endRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            }, 5);
            return;
        }
        if (!delayedActive || !container || isScrollingUp)
            return;
        delay(function () {
            var _a;
            containerRef.current &&
                containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
            (_a = endRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "instant" });
        }, 5);
    }, [forceScroll, active, children, behavior, isScrollingUp]);
    var handleOnWheel = (0, react_1.useCallback)(function (event) {
        var container = containerRef.current;
        if (!container)
            return;
        var scrollTop = container.scrollTop, scrollHeight = container.scrollHeight, clientHeight = container.clientHeight;
        var thresholdInPixels = (scrollHeight - clientHeight) * (percentageThreshold / 100);
        var isNearBottom = scrollHeight - scrollTop - clientHeight < thresholdInPixels;
        if (event.deltaY < 0) {
            setIsScrollingUp(true);
        }
        else if (isNearBottom) {
            setIsScrollingUp(false);
        }
    }, [percentageThreshold]);
    (0, react_1.useEffect)(function () {
        var container = containerRef.current;
        if (!container)
            return;
        container.addEventListener("wheel", handleOnWheel);
        return function () {
            container.removeEventListener("wheel", handleOnWheel);
        };
    }, [handleOnWheel]);
    return ((0, jsx_runtime_1.jsxs)(Component, { className: className, ref: containerRef, style: tslib_1.__assign(tslib_1.__assign({}, style), { overflowY: overflowY }), children: [children, (0, jsx_runtime_1.jsx)("div", { ref: endRef })] }));
});
