import React, { CSSProperties, useCallback, useEffect } from "react";

const delay = (fn: () => void, ms: number) => setTimeout(fn, ms);

export const AutoScrollContainer = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    percentageThreshold: number;
    className?: string;
    style?: CSSProperties;
    behavior?: string;
    active?: boolean;
    forceScroll?: boolean;
    overflowY?:
      | "auto"
      | "scroll"
      | "hidden"
      | "visible"
      | undefined
      | "inherit";
    as?: React.ElementType;
  }
>((props, ref) => {
  const {
    children,
    style,
    className,
    behavior = "auto",
    active = false,
    forceScroll = false,
    overflowY = "auto",
    percentageThreshold = 20,
    as: Component = "div",
  } = props;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const endRef = React.useRef<HTMLDivElement>(null);
  const [isScrollingUp, setIsScrollingUp] = React.useState(false);
  React.useImperativeHandle(ref, () => containerRef.current!);
  const [delayedActive, setDelayedActive] = React.useState(active);
  useEffect(() => {
    if (active) {
      setDelayedActive(true);
    } else {
      delay(() => {
        setDelayedActive(false);
      }, 1);
    }
  }, [active]);
  useEffect(() => {
    const container = containerRef.current;
    if (forceScroll) {
      delay(() => {
        containerRef.current &&
          containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
        endRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 5);
      return;
    }

    if (!delayedActive || !container || isScrollingUp) return;

    delay(() => {
      containerRef.current &&
        containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
      endRef.current?.scrollIntoView({ behavior: "instant" });
    }, 5);
  }, [forceScroll, active, children, behavior, isScrollingUp]);
  const handleOnWheel = useCallback(
    (event: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const thresholdInPixels =
        (scrollHeight - clientHeight) * (percentageThreshold / 100);

      const isNearBottom =
        scrollHeight - scrollTop - clientHeight < thresholdInPixels;

      if (event.deltaY < 0) {
        setIsScrollingUp(true);
      } else if (isNearBottom) {
        setIsScrollingUp(false);
      }
    },
    [percentageThreshold]
  );
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleOnWheel);
    return () => {
      container.removeEventListener("wheel", handleOnWheel);
    };
  }, [handleOnWheel]);

  return (
    <Component
      className={className}
      ref={containerRef}
      style={{
        ...style,
        overflowY: overflowY,
      }}
    >
      {children}
      <div ref={endRef}></div>
    </Component>
  );
});
