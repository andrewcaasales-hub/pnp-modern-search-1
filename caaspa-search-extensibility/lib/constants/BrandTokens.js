"use strict";
/**
 * CAASPA Enterprise Search – Unified Brand Token System
 *
 * Centralized design tokens for all custom search UI components.
 * Use these tokens consistently across all cards, templates, and layouts.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitConditionConfig = exports.UnitStatusConfig = exports.StatusBadgeConfig = exports.Easing = exports.Motion = exports.ZIndex = exports.Radius = exports.Spacing = exports.Typography = exports.BrandTokens = void 0;
// ─── Colour Palette ──────────────────────────────────────────────────────────
exports.BrandTokens = {
    // Primary brand
    brandPrimary: '#0078D4',
    brandSecondary: '#0F3460',
    brandAccent: '#D4AF37', // gold accent
    brandInk: '#102A43',
    // Semantic colours – status & states
    success: '#107C10',
    warning: '#CA5010',
    error: '#A4262C',
    info: '#0078D4',
    pending: '#EDEBE9',
    // Neutrals
    text: '#323130',
    textMuted: '#605E5C',
    textLight: 'rgba(255,255,255,0.68)',
    textLighter: 'rgba(255,255,255,0.62)',
    // Surfaces
    surface: '#FFFFFF',
    surfaceAlt: '#F7FAFF',
    surfaceSubtle: '#F8FBFF',
    surfaceInverted: '#102A43',
    // Borders & dividers
    border: '#EDEBE9',
    borderSubtle: '#E4EDF8',
    borderStrong: '#D0DBEA',
    divider: 'rgba(0,0,0,0.08)',
    // Shadows – layered depth
    shadowXS: '0 2px 8px rgba(8,27,52,0.08)',
    shadowSM: '0 4px 12px rgba(8,27,52,0.12)',
    shadowMD: '0 8px 24px rgba(8,27,52,0.14)',
    shadowLG: '0 14px 34px rgba(8,27,52,0.16)',
    shadowXL: '0 14px 34px -18px rgba(8,27,52,0.20)',
    shadowInner: 'inset 0 1px 2px rgba(0,0,0,0.05)',
    // Gradients – premium feel
    gradientHeader: 'radial-gradient(circle at 8% 6%, rgba(255,255,255,0.14), transparent 35%), linear-gradient(138deg, #0B2E59 0%, #123868 48%, #0F4C81 100%)',
    gradientAccent: 'linear-gradient(90deg, #0B2E59 0%, #0078D4 42%, #10A37F 80%, #D4AF37 100%)',
    gradientProgress: 'linear-gradient(180deg, #F8FBFF 0%, #F2F7FD 100%)',
    gradientButton: 'linear-gradient(90deg, #0F5EA8 0%, #0078D4 100%)',
};
// ─── Typography ──────────────────────────────────────────────────────────────
exports.Typography = {
    fontFamily: '"Aptos", "Segoe UI Variable Text", "Bahnschrift", sans-serif',
    fontFamilyMono: '"Courier New", monospace',
    // Heading scales
    h1: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 1.25,
        letterSpacing: -0.02,
    },
    h2: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 1.3,
        letterSpacing: -0.01,
    },
    h3: {
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 1.35,
    },
    h4: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.4,
    },
    // Body text
    bodyLarge: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.5,
    },
    bodyRegular: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.5,
    },
    bodySmall: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 1.5,
    },
    bodyXSmall: {
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 1.45,
    },
    // Labels & captions
    label: {
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1.33,
        letterSpacing: 0.04,
        textTransform: 'uppercase',
    },
    caption: {
        fontSize: 11,
        fontWeight: 500,
        lineHeight: 1.36,
        letterSpacing: 0.02,
    },
    captionSmall: {
        fontSize: 10,
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: 0.08,
        textTransform: 'uppercase',
    },
};
// ─── Spacing scale ───────────────────────────────────────────────────────────
exports.Spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
};
// ─── Border radius ───────────────────────────────────────────────────────────
exports.Radius = {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 14,
    round: 999,
};
// ─── Z-index scale ──────────────────────────────────────────────────────────
exports.ZIndex = {
    base: 0,
    dropdown: 100,
    modal: 1000,
    tooltip: 1100,
};
// ─── Transition durations (ms) ───────────────────────────────────────────────
exports.Motion = {
    instant: 0,
    fast: 75,
    base: 150,
    moderate: 200,
    slow: 300,
    slower: 400,
    slowest: 500,
};
// ─── Easing functions ────────────────────────────────────────────────────────
exports.Easing = {
    easeLinear: 'linear',
    easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};
// ─── Status badge configuration ──────────────────────────────────────────────
exports.StatusBadgeConfig = {
    Request: { bg: '#EFF6FC', text: '#0078D4', label: 'Request' },
    Quoted: { bg: '#F3F2F1', text: '#323130', label: 'Quoted' },
    Approved: { bg: '#DFF6DD', text: '#107C10', label: 'Approved' },
    InProduction: { bg: '#FFF4CE', text: '#7D5400', label: 'In Production' },
    Dispatched: { bg: '#E8F5FE', text: '#005A9E', label: 'Dispatched' },
    Invoiced: { bg: '#DFF6DD', text: '#107C10', label: 'Invoiced ✓' },
    Cancelled: { bg: '#FDE7E9', text: '#A4262C', label: 'Cancelled' },
    OnHold: { bg: '#FFF4CE', text: '#CA5010', label: 'On Hold' },
};
// ─── Unit status config ──────────────────────────────────────────────────────
exports.UnitStatusConfig = {
    Available: { bg: '#DFF6DD', text: '#107C10', dot: '#107C10' },
    Reserved: { bg: '#EFF6FC', text: '#0078D4', dot: '#0078D4' },
    Sold: { bg: '#F3F2F1', text: '#605E5C', dot: '#605E5C' },
    OnOrder: { bg: '#FFF4CE', text: '#7D5400', dot: '#CA5010' },
    InService: { bg: '#E8F5FE', text: '#005A9E', dot: '#038387' },
    Scrapped: { bg: '#FDE7E9', text: '#A4262C', dot: '#A4262C' },
};
// ─── Unit condition config ───────────────────────────────────────────────────
exports.UnitConditionConfig = {
    New: { label: 'New', colour: '#107C10' },
    Used: { label: 'Used', colour: '#605E5C' },
    Demo: { label: 'Demo', colour: '#0078D4' },
    Parts: { label: 'Parts', colour: '#A4262C' },
};
//# sourceMappingURL=BrandTokens.js.map