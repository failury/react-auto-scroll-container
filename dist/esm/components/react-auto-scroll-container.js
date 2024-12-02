import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useCallback, useEffect } from "react";
var delay = function (fn, ms) { return setTimeout(fn, ms); };
export var AutoScrollContainer = React.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, _a = props.behavior, behavior = _a === void 0 ? "auto" : _a, _b = props.active, active = _b === void 0 ? false : _b, _c = props.forceScroll, forceScroll = _c === void 0 ? false : _c, _d = props.overflowY, overflowY = _d === void 0 ? "auto" : _d, _e = props.percentageThreshold, percentageThreshold = _e === void 0 ? 20 : _e, _f = props.as, Component = _f === void 0 ? "div" : _f;
    var containerRef = React.useRef(null);
    var endRef = React.useRef(null);
    var _g = React.useState(false), isScrollingUp = _g[0], setIsScrollingUp = _g[1];
    React.useImperativeHandle(ref, function () { return containerRef.current; });
    var _h = React.useState(active), delayedActive = _h[0], setDelayedActive = _h[1];
    useEffect(function () {
        if (active) {
            setDelayedActive(true);
        }
        else {
            delay(function () {
                setDelayedActive(false);
            }, 1);
        }
    }, [active]);
    useEffect(function () {
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
    var handleOnWheel = useCallback(function (event) {
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
    useEffect(function () {
        var container = containerRef.current;
        if (!container)
            return;
        container.addEventListener("wheel", handleOnWheel);
        return function () {
            container.removeEventListener("wheel", handleOnWheel);
        };
    }, [handleOnWheel]);
    return (_jsxs(Component, { className: className, ref: containerRef, style: __assign(__assign({}, style), { overflowY: overflowY }), children: [children, _jsx("div", { ref: endRef })] }));
});
