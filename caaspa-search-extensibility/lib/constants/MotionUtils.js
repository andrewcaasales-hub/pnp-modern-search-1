"use strict";
/**
 * CAASPA Enterprise Search – Motion & Animation Utilities
 *
 * Choreographed reveal sequences, smooth transitions, and depth-driven animations.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonInteraction = exports.MotionKeyframes = void 0;
exports.staggeredRevealStyle = staggeredRevealStyle;
exports.cardEntranceStyle = cardEntranceStyle;
exports.smoothHoverTransition = smoothHoverTransition;
exports.fadeTransition = fadeTransition;
exports.sectionEntryStyle = sectionEntryStyle;
exports.pulseIndicatorStyle = pulseIndicatorStyle;
exports.shimmerStyle = shimmerStyle;
var BrandTokens_1 = require("./BrandTokens");
// ─── CSS animation keyframes ─────────────────────────────────────────────────
exports.MotionKeyframes = "\n  @keyframes slideInUp {\n    from {\n      opacity: 0;\n      transform: translateY(12px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes scaleIn {\n    from {\n      opacity: 0;\n      transform: scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  @keyframes slideInLeft {\n    from {\n      opacity: 0;\n      transform: translateX(-8px);\n    }\n    to {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n\n  @keyframes progressFill {\n    from {\n      flex-basis: 0%;\n      opacity: 0.6;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes cardHoverLift {\n    0% {\n      box-shadow: 0 2px 8px rgba(8, 27, 52, 0.08);\n    }\n    100% {\n      box-shadow: 0 8px 24px rgba(8, 27, 52, 0.14);\n      transform: translateY(-3px);\n    }\n  }\n\n  @keyframes pulseGlow {\n    0%, 100% {\n      box-shadow: 0 0 0 0 rgba(0, 120, 212, 0.25);\n    }\n    50% {\n      box-shadow: 0 0 0 8px rgba(0, 120, 212, 0);\n    }\n  }\n\n  @keyframes shimmer {\n    0% {\n      background-position: -1000px 0;\n    }\n    100% {\n      background-position: 1000px 0;\n    }\n  }\n";
// ─── Staggered reveal helper ─────────────────────────────────────────────────
function staggeredRevealStyle(index, baseDelay) {
    if (baseDelay === void 0) { baseDelay = 30; }
    var delay = index * baseDelay;
    return {
        animation: "slideInUp ".concat(BrandTokens_1.Motion.moderate, "ms ").concat(BrandTokens_1.Easing.easeOutCubic, " ").concat(delay, "ms both"),
    };
}
// ─── Card entrance animation ─────────────────────────────────────────────────
function cardEntranceStyle(delayMs) {
    if (delayMs === void 0) { delayMs = 0; }
    return {
        animation: "scaleIn ".concat(BrandTokens_1.Motion.slow, "ms ").concat(BrandTokens_1.Easing.easeOutCubic, " ").concat(delayMs, "ms both"),
    };
}
// ─── Smooth hover state transition ────────────────────────────────────────────
function smoothHoverTransition() {
    return {
        transition: "transform ".concat(BrandTokens_1.Motion.base, "ms ").concat(BrandTokens_1.Easing.easeInOutCubic, ", box-shadow ").concat(BrandTokens_1.Motion.base, "ms ").concat(BrandTokens_1.Easing.easeInOutCubic),
    };
}
// ─── Fade transition ─────────────────────────────────────────────────────────
function fadeTransition(duration) {
    if (duration === void 0) { duration = BrandTokens_1.Motion.moderate; }
    return {
        transition: "opacity ".concat(duration, "ms ").concat(BrandTokens_1.Easing.easeLinear, ", color ").concat(duration, "ms ").concat(BrandTokens_1.Easing.easeLinear),
    };
}
// ─── Button interaction feedback ──────────────────────────────────────────────
exports.buttonInteraction = {
    onMouseEnter: function (e) {
        var el = e.currentTarget;
        el.style.opacity = '0.9';
        el.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: function (e) {
        var el = e.currentTarget;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    },
    onMouseDown: function (e) {
        var el = e.currentTarget;
        el.style.transform = 'translateY(1px)';
    },
    onMouseUp: function (e) {
        var el = e.currentTarget;
        el.style.transform = 'translateY(-1px)';
    },
};
// ─── Section entry (for grid layouts) ─────────────────────────────────────────
function sectionEntryStyle(staggerIndex) {
    if (staggerIndex === void 0) { staggerIndex = 0; }
    return {
        animation: "slideInUp ".concat(BrandTokens_1.Motion.slow, "ms ").concat(BrandTokens_1.Easing.easeOutExpo, " ").concat(staggerIndex * 40, "ms both"),
    };
}
// ─── Pulse indicator (for live/active states) ───────────────────────────────
function pulseIndicatorStyle() {
    return {
        animation: "pulseGlow 2s ".concat(BrandTokens_1.Easing.easeLinear, " infinite"),
    };
}
// ─── Loading shimmer effect ──────────────────────────────────────────────────
function shimmerStyle(width) {
    if (width === void 0) { width = '100%'; }
    return {
        backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        backgroundSize: '200% 100%',
        animation: "shimmer 2s infinite",
    };
}
//# sourceMappingURL=MotionUtils.js.map