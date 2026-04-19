/**
 * CAASPA Enterprise Search – Motion & Animation Utilities
 *
 * Choreographed reveal sequences, smooth transitions, and depth-driven animations.
 */
export declare const MotionKeyframes: "\n  @keyframes slideInUp {\n    from {\n      opacity: 0;\n      transform: translateY(12px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes scaleIn {\n    from {\n      opacity: 0;\n      transform: scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  @keyframes slideInLeft {\n    from {\n      opacity: 0;\n      transform: translateX(-8px);\n    }\n    to {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n\n  @keyframes progressFill {\n    from {\n      flex-basis: 0%;\n      opacity: 0.6;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes cardHoverLift {\n    0% {\n      box-shadow: 0 2px 8px rgba(8, 27, 52, 0.08);\n    }\n    100% {\n      box-shadow: 0 8px 24px rgba(8, 27, 52, 0.14);\n      transform: translateY(-3px);\n    }\n  }\n\n  @keyframes pulseGlow {\n    0%, 100% {\n      box-shadow: 0 0 0 0 rgba(0, 120, 212, 0.25);\n    }\n    50% {\n      box-shadow: 0 0 0 8px rgba(0, 120, 212, 0);\n    }\n  }\n\n  @keyframes shimmer {\n    0% {\n      background-position: -1000px 0;\n    }\n    100% {\n      background-position: 1000px 0;\n    }\n  }\n";
export declare function staggeredRevealStyle(index: number, baseDelay?: number): React.CSSProperties;
export declare function cardEntranceStyle(delayMs?: number): React.CSSProperties;
export declare function smoothHoverTransition(): React.CSSProperties;
export declare function fadeTransition(duration?: 200): React.CSSProperties;
export declare const buttonInteraction: {
    readonly onMouseEnter: (e: React.MouseEvent<HTMLElement>) => void;
    readonly onMouseLeave: (e: React.MouseEvent<HTMLElement>) => void;
    readonly onMouseDown: (e: React.MouseEvent<HTMLElement>) => void;
    readonly onMouseUp: (e: React.MouseEvent<HTMLElement>) => void;
};
export declare function sectionEntryStyle(staggerIndex?: number): React.CSSProperties;
export declare function pulseIndicatorStyle(): React.CSSProperties;
export declare function shimmerStyle(width?: string): React.CSSProperties;
//# sourceMappingURL=MotionUtils.d.ts.map