import React from "react";
export declare const AutoScrollContainer: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    percentageThreshold: number;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    behavior?: string | undefined;
    active?: boolean | undefined;
    forceScroll?: boolean | undefined;
    overflowY?: "auto" | "scroll" | "hidden" | "visible" | undefined | "inherit";
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
} & React.RefAttributes<HTMLDivElement>>;
