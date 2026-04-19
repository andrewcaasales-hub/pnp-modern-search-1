"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHoverCard = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_components_1 = require("@fluentui/react-components");
var ISalesOrder_1 = require("../../models/ISalesOrder");
var BrandTokens_1 = require("../../constants/BrandTokens");
var MotionUtils_1 = require("../../constants/MotionUtils");
function stageIndexOf(status) {
    return ISalesOrder_1.ORDER_STAGES.findIndex(function (s) { return s.key === status; });
}
var StageCircle = function (_a) {
    var label = _a.label, state = _a.state, isLast = _a.isLast;
    var bg = state === 'complete' ? BrandTokens_1.BrandTokens.success : state === 'active' ? BrandTokens_1.BrandTokens.brandPrimary : BrandTokens_1.BrandTokens.pending;
    var borderColour = state === 'pending' ? BrandTokens_1.BrandTokens.success : 'transparent';
    var connectorBg = state === 'complete' ? BrandTokens_1.BrandTokens.success : '#D2D0CE';
    return (React.createElement("div", { style: { display: 'flex', alignItems: 'center', flexDirection: 'column', minWidth: 64 } },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', width: '100%' } },
            React.createElement("div", { style: {
                    width: 32, height: 32, borderRadius: '50%', background: bg, border: "2px solid ".concat(borderColour),
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    boxShadow: state === 'active' ? "0 0 0 4px rgba(0,120,212,0.2)" : 'none',
                    transition: "all ".concat(BrandTokens_1.Motion.base, "ms ").concat(BrandTokens_1.Easing.easeInOutCubic),
                } },
                state === 'complete' && React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none" },
                    React.createElement("path", { d: "M2 7l4 4 6-7", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })),
                state === 'active' && React.createElement("div", { style: { width: 10, height: 10, borderRadius: '50%', background: '#fff' } })),
            !isLast && React.createElement("div", { style: { flex: 1, height: 3, background: connectorBg, transition: "background ".concat(BrandTokens_1.Motion.moderate, "ms ").concat(BrandTokens_1.Easing.easeInOutCubic) } })),
        React.createElement("span", { style: { fontSize: 11, fontWeight: state === 'active' ? 600 : 400, color: state === 'pending' ? BrandTokens_1.BrandTokens.textMuted : BrandTokens_1.BrandTokens.text, marginTop: 6, textAlign: 'center', lineHeight: '1.2', whiteSpace: 'nowrap' } }, label)));
};
var StatusBadge = function (_a) {
    var status = _a.status;
    var cfg = BrandTokens_1.StatusBadgeConfig[status] || { bg: '#F3F2F1', text: BrandTokens_1.BrandTokens.text, label: status };
    return React.createElement(react_components_1.Badge, { style: { padding: '2px 10px', background: cfg.bg, color: cfg.text, fontSize: 11, fontWeight: 600, letterSpacing: '0.02em' } }, cfg.label);
};
function formatCurrency(value, currency) {
    if (currency === void 0) { currency = 'GBP'; }
    try {
        return new Intl.NumberFormat('en-GB', { style: 'currency', currency: currency }).format(value);
    }
    catch (_a) {
        return "".concat(currency, " ").concat(value.toLocaleString());
    }
}
function formatDate(iso) {
    try {
        return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }
    catch (_a) {
        return iso;
    }
}
var SalesOrderHoverCard = function (_a) {
    var order = _a.order, compact = _a.compact;
    var isCancelled = order.Status === 'Cancelled';
    var isOnHold = order.Status === 'OnHold';
    var activeIndex = isCancelled || isOnHold ? -1 : stageIndexOf(order.Status);
    return (React.createElement(React.Fragment, null,
        React.createElement("style", null, MotionUtils_1.MotionKeyframes),
        React.createElement("div", { style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (0, MotionUtils_1.cardEntranceStyle)(100)), { fontFamily: BrandTokens_1.Typography.fontFamily, background: BrandTokens_1.BrandTokens.surface, border: "1px solid ".concat(BrandTokens_1.BrandTokens.border), borderRadius: BrandTokens_1.Radius.xl, boxShadow: BrandTokens_1.BrandTokens.shadowXL, overflow: 'hidden', minWidth: compact ? 340 : 420, maxWidth: 540, position: 'relative' }), (0, MotionUtils_1.smoothHoverTransition)()) },
            React.createElement("div", { style: { position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: BrandTokens_1.BrandTokens.gradientAccent } }),
            React.createElement("div", { style: { background: BrandTokens_1.BrandTokens.gradientHeader, padding: "".concat(BrandTokens_1.Spacing.lg, "px 18px 14px"), display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
                React.createElement("div", null,
                    React.createElement(react_components_1.Text, { style: tslib_1.__assign(tslib_1.__assign({}, BrandTokens_1.Typography.captionSmall), { color: BrandTokens_1.BrandTokens.textLight }) }, "Sales Order"),
                    React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: '#fff', marginTop: 4 } }, order.OrderUrl ? React.createElement(react_components_1.Link, { href: order.OrderUrl, style: { color: '#fff', textDecoration: 'none' }, onMouseEnter: function (e) { return (e.currentTarget.style.textDecoration = 'underline'); }, onMouseLeave: function (e) { return (e.currentTarget.style.textDecoration = 'none'); } }, order.OrderNumber) : order.OrderNumber),
                    order.CustomerReference && React.createElement("div", { style: { fontSize: 11, color: BrandTokens_1.BrandTokens.textLighter, marginTop: 3 } },
                        "Ref: ",
                        order.CustomerReference)),
                React.createElement(StatusBadge, { status: order.Status })),
            React.createElement("div", { style: { padding: "".concat(BrandTokens_1.Spacing.lg, "px 18px 13px"), background: isCancelled ? '#FDE7E9' : isOnHold ? '#FFF4CE' : BrandTokens_1.BrandTokens.gradientProgress, borderBottom: "1px solid ".concat(BrandTokens_1.BrandTokens.border) } }, (isCancelled || isOnHold) ? (React.createElement("div", { style: { textAlign: 'center', padding: '6px 0', color: isCancelled ? BrandTokens_1.BrandTokens.error : BrandTokens_1.BrandTokens.warning, fontWeight: 600, fontSize: 13 } }, order.Status)) : (React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8 } }, ISalesOrder_1.ORDER_STAGES.map(function (stage, idx) {
                var state = idx < activeIndex ? 'complete' : idx === activeIndex ? 'active' : 'pending';
                return React.createElement(StageCircle, { key: stage.key, label: stage.label, state: state, isLast: idx === ISalesOrder_1.ORDER_STAGES.length - 1 });
            })))),
            !compact && (React.createElement(React.Fragment, null,
                React.createElement("div", { style: { padding: "".concat(BrandTokens_1.Spacing.lg, "px 18px") } },
                    React.createElement(DetailGrid, { order: order })),
                order.Description && (React.createElement("div", { style: { margin: '0 18px 12px', padding: "".concat(BrandTokens_1.Spacing.md, "px ").concat(BrandTokens_1.Spacing.md, "px"), background: BrandTokens_1.BrandTokens.surfaceAlt, border: "1px dashed ".concat(BrandTokens_1.BrandTokens.borderStrong), borderRadius: BrandTokens_1.Radius.md, fontSize: 12, color: BrandTokens_1.BrandTokens.textMuted, lineHeight: '1.5' } }, order.Description)),
                React.createElement("div", { style: { padding: "".concat(BrandTokens_1.Spacing.md, "px 18px"), borderTop: "1px solid ".concat(BrandTokens_1.BrandTokens.border), display: 'flex', gap: 10, justifyContent: 'flex-end', background: '#FCFDFF' } }, order.OrderUrl && React.createElement(ActionLink, { href: order.OrderUrl, label: "Open Order", primary: true })))))));
};
exports.SalesOrderHoverCard = SalesOrderHoverCard;
var DetailGrid = function (_a) {
    var order = _a.order;
    var items = [
        { label: 'Customer', value: order.CustomerName },
        order.SalesRep ? { label: 'Sales Rep', value: order.SalesRep } : null,
        order.OrderDate ? { label: 'Order Date', value: formatDate(order.OrderDate) } : null,
        order.RequiredDate ? { label: 'Required', value: formatDate(order.RequiredDate) } : null,
        order.TotalValue !== undefined ? { label: 'Value', value: React.createElement("strong", null, formatCurrency(order.TotalValue, order.Currency)) } : null,
    ].filter(Boolean);
    return (React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px' } }, items.map(function (item, i) { return (React.createElement("div", { key: i, style: tslib_1.__assign(tslib_1.__assign({}, (0, MotionUtils_1.staggeredRevealStyle)(i, 50)), { background: '#FAFCFF', border: "1px solid ".concat(BrandTokens_1.BrandTokens.borderSubtle), borderRadius: BrandTokens_1.Radius.md, padding: '8px 9px' }) },
        React.createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, BrandTokens_1.Typography.captionSmall), { color: BrandTokens_1.BrandTokens.textMuted, marginBottom: 2 }) }, item.label),
        React.createElement("div", { style: { fontSize: 13, color: BrandTokens_1.BrandTokens.text, fontWeight: 500 } }, item.value))); })));
};
var ActionLink = function (_a) {
    var href = _a.href, label = _a.label, primary = _a.primary;
    return (React.createElement(react_components_1.Button, tslib_1.__assign({ as: "a", href: href, target: "_blank", rel: "noopener noreferrer", appearance: primary ? 'primary' : 'secondary', style: tslib_1.__assign({ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: BrandTokens_1.Radius.round, fontSize: 12, fontWeight: 600, textDecoration: 'none', background: primary ? BrandTokens_1.BrandTokens.gradientButton : '#F3F2F1', color: primary ? '#fff' : BrandTokens_1.BrandTokens.text, border: primary ? 'none' : "1px solid ".concat(BrandTokens_1.BrandTokens.border), cursor: 'pointer' }, (0, MotionUtils_1.smoothHoverTransition)()) }, MotionUtils_1.buttonInteraction), label));
};
//# sourceMappingURL=SalesOrderHoverCard.js.map