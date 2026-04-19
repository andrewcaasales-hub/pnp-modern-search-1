"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitSearchCard = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_components_1 = require("@fluentui/react-components");
var BrandTokens_1 = require("../../constants/BrandTokens");
var MotionUtils_1 = require("../../constants/MotionUtils");
// ─── status badge ─────────────────────────────────────────────────────────────
var UnitStatusBadge = function (_a) {
    var status = _a.status;
    var cfg = BrandTokens_1.UnitStatusConfig[status] || { bg: '#F3F2F1', text: BrandTokens_1.BrandTokens.text, dot: BrandTokens_1.BrandTokens.textMuted };
    return (React.createElement(react_components_1.Badge, { style: { display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '3px 10px', borderRadius: 12, background: cfg.bg, color: cfg.text,
            fontSize: 11, fontWeight: 600 } },
        React.createElement("span", { style: { width: 7, height: 7, borderRadius: '50%', background: cfg.dot, display: 'inline-block' } }),
        status === 'OnOrder' ? 'On Order' : status === 'InService' ? 'In Service' : status));
};
// ─── stat pill ────────────────────────────────────────────────────────────────
var StatPill = function (_a) {
    var label = _a.label, value = _a.value, accent = _a.accent;
    return (React.createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, (0, MotionUtils_1.staggeredRevealStyle)(0, 0)), { background: accent ? '#EFF6FC' : BrandTokens_1.BrandTokens.surfaceAlt, border: "1px solid ".concat(accent ? '#C7E0F4' : BrandTokens_1.BrandTokens.border), borderRadius: BrandTokens_1.Radius.sm, padding: "".concat(BrandTokens_1.Spacing.xs, "px ").concat(BrandTokens_1.Spacing.sm, "px"), minWidth: 90 }) },
        React.createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, BrandTokens_1.Typography.captionSmall), { color: BrandTokens_1.BrandTokens.textMuted, marginBottom: 2 }) }, label),
        React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: accent ? BrandTokens_1.BrandTokens.info : BrandTokens_1.BrandTokens.text, lineHeight: '1.2' } }, value)));
};
// ─── quick link ───────────────────────────────────────────────────────────────
var QuickLink = function (_a) {
    var href = _a.href, icon = _a.icon, label = _a.label, colour = _a.colour;
    return (React.createElement(react_components_1.Button, { as: "a", href: href, target: "_blank", rel: "noopener noreferrer", title: label, appearance: "subtle", style: tslib_1.__assign({ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: "".concat(BrandTokens_1.Spacing.sm, "px ").concat(BrandTokens_1.Spacing.sm, "px"), borderRadius: BrandTokens_1.Radius.sm, background: BrandTokens_1.BrandTokens.surface, border: "1px solid ".concat(BrandTokens_1.BrandTokens.border), color: colour || BrandTokens_1.BrandTokens.text, textDecoration: 'none', fontSize: 10, fontWeight: 600, minWidth: 62, cursor: 'pointer' }, (0, MotionUtils_1.smoothHoverTransition)()), onMouseEnter: function (e) {
            e.currentTarget.style.background = colour || BrandTokens_1.BrandTokens.info;
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'transparent';
        }, onMouseLeave: function (e) {
            e.currentTarget.style.background = BrandTokens_1.BrandTokens.surface;
            e.currentTarget.style.color = colour || BrandTokens_1.BrandTokens.text;
            e.currentTarget.style.borderColor = BrandTokens_1.BrandTokens.border;
        } },
        React.createElement("span", { style: { fontSize: 18 } }, icon),
        React.createElement(react_components_1.Text, { style: { textAlign: 'center', lineHeight: '1.2' } }, label)));
};
// ─── currency formatter ───────────────────────────────────────────────────────
function formatCurrency(value, currency) {
    if (currency === void 0) { currency = 'GBP'; }
    try {
        return new Intl.NumberFormat('en-GB', { style: 'currency', currency: currency, maximumFractionDigits: 0 }).format(value);
    }
    catch (_a) {
        return "".concat(currency, " ").concat(value.toLocaleString());
    }
}
function formatMileage(m) {
    return "".concat(m.toLocaleString(), " mi");
}
function formatDate(iso) {
    try {
        return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }
    catch (_a) {
        return iso;
    }
}
// ─── placeholder image ────────────────────────────────────────────────────────
var VehiclePlaceholder = function (_a) {
    var make = _a.make;
    return (React.createElement("div", { style: {
            width: '100%', height: 140,
            background: BrandTokens_1.BrandTokens.gradientHeader,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.4)',
        } },
        React.createElement("span", { style: { fontSize: 40 } }, "\uD83D\uDE97"),
        React.createElement("span", { style: { fontSize: 12, marginTop: 4 } }, make)));
};
// ─── compliance dot ───────────────────────────────────────────────────────────
function complianceDot(dateStr, label) {
    if (!dateStr)
        return null;
    var exp = new Date(dateStr);
    var now = new Date();
    var daysLeft = Math.floor((exp.getTime() - now.getTime()) / 86400000);
    var colour = daysLeft < 0 ? BrandTokens_1.BrandTokens.error : daysLeft < 30 ? BrandTokens_1.BrandTokens.warning : BrandTokens_1.BrandTokens.success;
    var text = daysLeft < 0
        ? "".concat(label, ": EXPIRED")
        : daysLeft < 30
            ? "".concat(label, ": ").concat(daysLeft, "d left")
            : "".concat(label, ": ").concat(formatDate(dateStr));
    return (React.createElement("span", { key: label, style: { display: 'inline-flex', alignItems: 'center', gap: 4,
            fontSize: 11, color: colour, fontWeight: daysLeft < 30 ? 600 : 400 } },
        React.createElement("span", { style: { width: 6, height: 6, borderRadius: '50%', background: colour, display: 'inline-block' } }),
        text));
}
var UnitSearchCard = function (_a) {
    var unit = _a.unit;
    var condCfg = BrandTokens_1.UnitConditionConfig[unit.Condition] || { label: unit.Condition, colour: BrandTokens_1.BrandTokens.textMuted };
    var primaryStats = [
        unit.Year ? { label: 'Year', value: unit.Year } : null,
        unit.Mileage ? { label: 'Mileage', value: formatMileage(unit.Mileage) } : null,
        unit.FuelType ? { label: 'Fuel', value: unit.FuelType } : null,
        unit.Transmission ? { label: 'Transmission', value: unit.Transmission } : null,
        unit.Colour ? { label: 'Colour', value: unit.Colour } : null,
        unit.EngineSize ? { label: 'Engine', value: unit.EngineSize } : null,
    ].filter(Boolean);
    var quickLinks = [
        unit.PartsCatalogueUrl ? { href: unit.PartsCatalogueUrl, icon: '🔧', label: 'Parts\nCatalogue', colour: BrandTokens_1.BrandTokens.warning } : null,
        unit.ServiceHistoryUrl ? { href: unit.ServiceHistoryUrl, icon: '📋', label: 'Service\nHistory', colour: BrandTokens_1.BrandTokens.success } : null,
        unit.SpecificationUrl ? { href: unit.SpecificationUrl, icon: '📄', label: 'Full\nSpec', colour: BrandTokens_1.BrandTokens.info } : null,
        unit.FinanceUrl ? { href: unit.FinanceUrl, icon: '💰', label: 'Finance', colour: BrandTokens_1.BrandTokens.success } : null,
        unit.UnitUrl ? { href: unit.UnitUrl, icon: '🔗', label: 'Unit\nRecord', colour: BrandTokens_1.BrandTokens.brandPrimary } : null,
    ].filter(Boolean);
    return (React.createElement(React.Fragment, null,
        React.createElement("style", null, MotionUtils_1.MotionKeyframes),
        React.createElement("div", { style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (0, MotionUtils_1.cardEntranceStyle)(120)), { fontFamily: BrandTokens_1.Typography.fontFamily, background: BrandTokens_1.BrandTokens.surface, border: "1px solid ".concat(BrandTokens_1.BrandTokens.border), borderRadius: BrandTokens_1.Radius.xl, boxShadow: BrandTokens_1.BrandTokens.shadowXL, overflow: 'hidden', width: '100%', maxWidth: 360 }), (0, MotionUtils_1.smoothHoverTransition)()) },
            React.createElement("div", { style: { position: 'relative' } },
                unit.ImageUrl ? (React.createElement("img", { src: unit.ImageUrl, alt: "".concat(unit.Make, " ").concat(unit.Model), style: { width: '100%', height: 140, objectFit: 'cover', display: 'block' } })) : (React.createElement(VehiclePlaceholder, { make: unit.Make })),
                React.createElement("div", { style: {
                        position: 'absolute', top: 10, left: 0,
                        background: condCfg.colour, color: '#fff',
                        fontSize: 10, fontWeight: 700, padding: '3px 10px 3px 8px',
                        borderRadius: "0 ".concat(BrandTokens_1.Radius.lg, "px ").concat(BrandTokens_1.Radius.lg, "px 0"), letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                    } }, condCfg.label),
                React.createElement("div", { style: { position: 'absolute', top: 10, right: 10 } },
                    React.createElement(UnitStatusBadge, { status: unit.Status }))),
            React.createElement("div", { style: {
                    background: BrandTokens_1.BrandTokens.gradientHeader,
                    padding: "".concat(BrandTokens_1.Spacing.md, "px ").concat(BrandTokens_1.Spacing.md, "px"),
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                } },
                React.createElement("div", null,
                    React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: '#fff' } }, unit.UnitUrl ? (React.createElement(react_components_1.Link, { href: unit.UnitUrl, style: { color: '#fff', textDecoration: 'none' }, onMouseEnter: function (e) { return (e.currentTarget.style.textDecoration = 'underline'); }, onMouseLeave: function (e) { return (e.currentTarget.style.textDecoration = 'none'); } },
                        unit.Make,
                        " ",
                        unit.Model,
                        unit.Variant ? React.createElement("span", { style: { fontWeight: 400, fontSize: 13 } },
                            " ",
                            unit.Variant) : null)) : "".concat(unit.Make, " ").concat(unit.Model).concat(unit.Variant ? ' ' + unit.Variant : '')),
                    React.createElement("div", { style: { display: 'flex', gap: 10, marginTop: 4 } },
                        unit.Registration && (React.createElement("span", { style: {
                                display: 'inline-block', background: BrandTokens_1.BrandTokens.accentGold, color: '#1A1A1A',
                                fontWeight: 700, fontSize: 12, padding: '1px 8px', borderRadius: BrandTokens_1.Radius.sm,
                                letterSpacing: '0.08em', fontFamily: 'monospace',
                            } }, unit.Registration)),
                        unit.VIN && (React.createElement("span", { style: { fontSize: 10, color: 'rgba(255,255,255,0.5)', alignSelf: 'center' } },
                            "VIN: ",
                            unit.VIN)))),
                (unit.Price || unit.Valuation) && (React.createElement("div", { style: { textAlign: 'right' } },
                    unit.Price ? (React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: BrandTokens_1.BrandTokens.accentGold } }, formatCurrency(unit.Price, unit.Currency))) : null,
                    unit.Valuation && unit.Valuation !== unit.Price ? (React.createElement("div", { style: { fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 1 } },
                        "Val: ",
                        formatCurrency(unit.Valuation, unit.Currency))) : null))),
            primaryStats.length > 0 && (React.createElement("div", { style: { padding: "".concat(BrandTokens_1.Spacing.md, "px ").concat(BrandTokens_1.Spacing.md, "px"), background: BrandTokens_1.BrandTokens.surfaceAlt, borderBottom: "1px solid ".concat(BrandTokens_1.BrandTokens.border) } },
                React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap', gap: 6 } }, primaryStats.map(function (s, i) { return (React.createElement(StatPill, { key: i, label: s.label, value: s.value, accent: s.accent })); })))),
            (unit.MOTExpiry || unit.TaxExpiry || unit.NextServiceDue) && (React.createElement("div", { style: {
                    padding: "".concat(BrandTokens_1.Spacing.sm, "px ").concat(BrandTokens_1.Spacing.md, "px"), background: BrandTokens_1.BrandTokens.surface, borderBottom: "1px solid ".concat(BrandTokens_1.BrandTokens.border),
                    display: 'flex', flexWrap: 'wrap', gap: '6px 14px',
                } },
                complianceDot(unit.MOTExpiry, 'MOT'),
                complianceDot(unit.TaxExpiry, 'Tax'),
                complianceDot(unit.NextServiceDue, 'Next Service'))),
            (unit.Owner || unit.Location) && (React.createElement("div", { style: { padding: '6px 14px', background: BrandTokens_1.BrandTokens.surface, borderBottom: "1px solid ".concat(BrandTokens_1.BrandTokens.border),
                    display: 'flex', gap: 14, fontSize: 11, color: BrandTokens_1.BrandTokens.textMuted } },
                unit.Owner && React.createElement("span", null,
                    "\uD83D\uDC64 ",
                    unit.Owner),
                unit.Location && React.createElement("span", null,
                    "\uD83D\uDCCD ",
                    unit.Location))),
            quickLinks.length > 0 && (React.createElement("div", { style: { padding: "".concat(BrandTokens_1.Spacing.md, "px ").concat(BrandTokens_1.Spacing.md, "px"), background: BrandTokens_1.BrandTokens.surface, borderTop: "1px solid ".concat(BrandTokens_1.BrandTokens.border) } },
                React.createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, BrandTokens_1.Typography.captionSmall), { color: BrandTokens_1.BrandTokens.textMuted, marginBottom: 6 }) }, "Quick Links"),
                React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap', gap: 6 } }, quickLinks.map(function (ql, i) { return (React.createElement(QuickLink, { key: i, href: ql.href, icon: ql.icon, label: ql.label, colour: ql.colour })); })))))));
};
exports.UnitSearchCard = UnitSearchCard;
//# sourceMappingURL=UnitSearchCard.js.map