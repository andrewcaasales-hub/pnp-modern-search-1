/**
 * CAASPA Enterprise Search – Unified Brand Token System
 *
 * Centralized design tokens for all custom search UI components.
 * Use these tokens consistently across all cards, templates, and layouts.
 */
export declare const BrandTokens: {
    readonly brandPrimary: "#0078D4";
    readonly brandSecondary: "#0F3460";
    readonly brandAccent: "#D4AF37";
    readonly brandInk: "#102A43";
    readonly success: "#107C10";
    readonly warning: "#CA5010";
    readonly error: "#A4262C";
    readonly info: "#0078D4";
    readonly pending: "#EDEBE9";
    readonly text: "#323130";
    readonly textMuted: "#605E5C";
    readonly textLight: "rgba(255,255,255,0.68)";
    readonly textLighter: "rgba(255,255,255,0.62)";
    readonly surface: "#FFFFFF";
    readonly surfaceAlt: "#F7FAFF";
    readonly surfaceSubtle: "#F8FBFF";
    readonly surfaceInverted: "#102A43";
    readonly border: "#EDEBE9";
    readonly borderSubtle: "#E4EDF8";
    readonly borderStrong: "#D0DBEA";
    readonly divider: "rgba(0,0,0,0.08)";
    readonly shadowXS: "0 2px 8px rgba(8,27,52,0.08)";
    readonly shadowSM: "0 4px 12px rgba(8,27,52,0.12)";
    readonly shadowMD: "0 8px 24px rgba(8,27,52,0.14)";
    readonly shadowLG: "0 14px 34px rgba(8,27,52,0.16)";
    readonly shadowXL: "0 14px 34px -18px rgba(8,27,52,0.20)";
    readonly shadowInner: "inset 0 1px 2px rgba(0,0,0,0.05)";
    readonly gradientHeader: "radial-gradient(circle at 8% 6%, rgba(255,255,255,0.14), transparent 35%), linear-gradient(138deg, #0B2E59 0%, #123868 48%, #0F4C81 100%)";
    readonly gradientAccent: "linear-gradient(90deg, #0B2E59 0%, #0078D4 42%, #10A37F 80%, #D4AF37 100%)";
    readonly gradientProgress: "linear-gradient(180deg, #F8FBFF 0%, #F2F7FD 100%)";
    readonly gradientButton: "linear-gradient(90deg, #0F5EA8 0%, #0078D4 100%)";
};
export declare const Typography: {
    readonly fontFamily: "\"Aptos\", \"Segoe UI Variable Text\", \"Bahnschrift\", sans-serif";
    readonly fontFamilyMono: "\"Courier New\", monospace";
    readonly h1: {
        readonly fontSize: 24;
        readonly fontWeight: 700;
        readonly lineHeight: 1.25;
        readonly letterSpacing: -0.02;
    };
    readonly h2: {
        readonly fontSize: 20;
        readonly fontWeight: 700;
        readonly lineHeight: 1.3;
        readonly letterSpacing: -0.01;
    };
    readonly h3: {
        readonly fontSize: 18;
        readonly fontWeight: 700;
        readonly lineHeight: 1.35;
    };
    readonly h4: {
        readonly fontSize: 16;
        readonly fontWeight: 700;
        readonly lineHeight: 1.4;
    };
    readonly bodyLarge: {
        readonly fontSize: 16;
        readonly fontWeight: 400;
        readonly lineHeight: 1.5;
    };
    readonly bodyRegular: {
        readonly fontSize: 14;
        readonly fontWeight: 400;
        readonly lineHeight: 1.5;
    };
    readonly bodySmall: {
        readonly fontSize: 12;
        readonly fontWeight: 400;
        readonly lineHeight: 1.5;
    };
    readonly bodyXSmall: {
        readonly fontSize: 11;
        readonly fontWeight: 400;
        readonly lineHeight: 1.45;
    };
    readonly label: {
        readonly fontSize: 12;
        readonly fontWeight: 600;
        readonly lineHeight: 1.33;
        readonly letterSpacing: 0.04;
        readonly textTransform: "uppercase";
    };
    readonly caption: {
        readonly fontSize: 11;
        readonly fontWeight: 500;
        readonly lineHeight: 1.36;
        readonly letterSpacing: 0.02;
    };
    readonly captionSmall: {
        readonly fontSize: 10;
        readonly fontWeight: 600;
        readonly lineHeight: 1.4;
        readonly letterSpacing: 0.08;
        readonly textTransform: "uppercase";
    };
};
export declare const Spacing: {
    readonly xs: 4;
    readonly sm: 8;
    readonly md: 12;
    readonly lg: 16;
    readonly xl: 20;
    readonly xxl: 24;
    readonly xxxl: 32;
};
export declare const Radius: {
    readonly none: 0;
    readonly sm: 4;
    readonly md: 8;
    readonly lg: 12;
    readonly xl: 14;
    readonly round: 999;
};
export declare const ZIndex: {
    readonly base: 0;
    readonly dropdown: 100;
    readonly modal: 1000;
    readonly tooltip: 1100;
};
export declare const Motion: {
    readonly instant: 0;
    readonly fast: 75;
    readonly base: 150;
    readonly moderate: 200;
    readonly slow: 300;
    readonly slower: 400;
    readonly slowest: 500;
};
export declare const Easing: {
    readonly easeLinear: "linear";
    readonly easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
    readonly easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)";
    readonly easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)";
    readonly easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)";
    readonly easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)";
    readonly easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)";
};
export declare const StatusBadgeConfig: {
    readonly Request: {
        readonly bg: "#EFF6FC";
        readonly text: "#0078D4";
        readonly label: "Request";
    };
    readonly Quoted: {
        readonly bg: "#F3F2F1";
        readonly text: "#323130";
        readonly label: "Quoted";
    };
    readonly Approved: {
        readonly bg: "#DFF6DD";
        readonly text: "#107C10";
        readonly label: "Approved";
    };
    readonly InProduction: {
        readonly bg: "#FFF4CE";
        readonly text: "#7D5400";
        readonly label: "In Production";
    };
    readonly Dispatched: {
        readonly bg: "#E8F5FE";
        readonly text: "#005A9E";
        readonly label: "Dispatched";
    };
    readonly Invoiced: {
        readonly bg: "#DFF6DD";
        readonly text: "#107C10";
        readonly label: "Invoiced ✓";
    };
    readonly Cancelled: {
        readonly bg: "#FDE7E9";
        readonly text: "#A4262C";
        readonly label: "Cancelled";
    };
    readonly OnHold: {
        readonly bg: "#FFF4CE";
        readonly text: "#CA5010";
        readonly label: "On Hold";
    };
};
export declare const UnitStatusConfig: {
    readonly Available: {
        readonly bg: "#DFF6DD";
        readonly text: "#107C10";
        readonly dot: "#107C10";
    };
    readonly Reserved: {
        readonly bg: "#EFF6FC";
        readonly text: "#0078D4";
        readonly dot: "#0078D4";
    };
    readonly Sold: {
        readonly bg: "#F3F2F1";
        readonly text: "#605E5C";
        readonly dot: "#605E5C";
    };
    readonly OnOrder: {
        readonly bg: "#FFF4CE";
        readonly text: "#7D5400";
        readonly dot: "#CA5010";
    };
    readonly InService: {
        readonly bg: "#E8F5FE";
        readonly text: "#005A9E";
        readonly dot: "#038387";
    };
    readonly Scrapped: {
        readonly bg: "#FDE7E9";
        readonly text: "#A4262C";
        readonly dot: "#A4262C";
    };
};
export declare const UnitConditionConfig: {
    readonly New: {
        readonly label: "New";
        readonly colour: "#107C10";
    };
    readonly Used: {
        readonly label: "Used";
        readonly colour: "#605E5C";
    };
    readonly Demo: {
        readonly label: "Demo";
        readonly colour: "#0078D4";
    };
    readonly Parts: {
        readonly label: "Parts";
        readonly colour: "#A4262C";
    };
};
//# sourceMappingURL=BrandTokens.d.ts.map