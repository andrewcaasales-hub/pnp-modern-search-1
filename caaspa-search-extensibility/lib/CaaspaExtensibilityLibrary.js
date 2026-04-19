"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaaspaExtensibilityLibrary = void 0;
var SalesOrderHoverCardComponent_1 = require("./components/SalesOrderHoverCard/SalesOrderHoverCardComponent");
var UnitSearchCardComponent_1 = require("./components/UnitSearchCard/UnitSearchCardComponent");
/**
 * CAASPA Enterprise Search Extensibility Library
 *
 * Registers custom web components and Handlebars helpers for the
 * PnP Modern Search web parts.
 *
 * Deploy this as an SPFx library component and reference it in the
 * Search Results web part "Extensibility library" property.
 */
var CaaspaExtensibilityLibrary = /** @class */ (function () {
    function CaaspaExtensibilityLibrary() {
    }
    // ─── Custom layouts ──────────────────────────────────────────────────────────
    CaaspaExtensibilityLibrary.prototype.getCustomLayouts = function () {
        // No fully custom layouts in v1 — we use the built-in Card layout + result types.
        return [];
    };
    // ─── Custom web components ───────────────────────────────────────────────────
    CaaspaExtensibilityLibrary.prototype.getCustomWebComponents = function () {
        return [
            {
                componentName: 'caaspa-salesorder-hovercard',
                componentClass: SalesOrderHoverCardComponent_1.SalesOrderHoverCardWebComponent,
            },
            {
                componentName: 'caaspa-unit-card',
                componentClass: UnitSearchCardComponent_1.UnitSearchCardWebComponent,
            },
        ];
    };
    // ─── Custom suggestion providers ─────────────────────────────────────────────
    CaaspaExtensibilityLibrary.prototype.getCustomSuggestionProviders = function () {
        return [];
    };
    // ─── Handlebars helpers ───────────────────────────────────────────────────────
    CaaspaExtensibilityLibrary.prototype.registerHandlebarsCustomizations = function (handlebarsNamespace) {
        /**
         * {{caaspaOrderStageIndex status}}
         * Returns the 0-based index of the status in the order pipeline.
         * Useful for conditional logic in templates.
         */
        handlebarsNamespace.registerHelper('caaspaOrderStageIndex', function (status) {
            var stages = ['Request', 'Quoted', 'Approved', 'InProduction', 'Dispatched', 'Invoiced'];
            return stages.indexOf(status);
        });
        /**
         * {{caaspaIsOrderComplete status}}
         * Returns true if the order has reached "Invoiced".
         */
        handlebarsNamespace.registerHelper('caaspaIsOrderComplete', function (status) {
            return status === 'Invoiced';
        });
        /**
         * {{caaspaIsOrderActive status}}
         * Returns true if the order is in an active, non-terminal state.
         */
        handlebarsNamespace.registerHelper('caaspaIsOrderActive', function (status) {
            return !['Cancelled', 'Invoiced', 'OnHold'].includes(status);
        });
        /**
         * {{caaspaUnitStatusColour status}}
         * Returns a CSS colour string for the given unit status.
         */
        handlebarsNamespace.registerHelper('caaspaUnitStatusColour', function (status) {
            var map = {
                Available: '#107C10',
                Reserved: '#0078D4',
                Sold: '#605E5C',
                OnOrder: '#CA5010',
                InService: '#038387',
                Scrapped: '#A4262C',
            };
            return map[status] || '#323130';
        });
        /**
         * {{caaspaCurrencyFormat value currency}}
         * Formats a number as a currency string. Falls back to £ if Intl unavailable.
         */
        handlebarsNamespace.registerHelper('caaspaCurrencyFormat', function (value, currency) {
            if (!value && value !== 0)
                return '';
            try {
                return new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: currency || 'GBP',
                    maximumFractionDigits: 0,
                }).format(value);
            }
            catch (_a) {
                return "\u00A3".concat(Number(value).toLocaleString('en-GB'));
            }
        });
        /**
         * {{caaspaDateFormat isoString}}
         * Formats an ISO date string to "DD MMM YYYY".
         */
        handlebarsNamespace.registerHelper('caaspaDateFormat', function (isoString) {
            if (!isoString)
                return '';
            try {
                return new Date(isoString).toLocaleDateString('en-GB', {
                    day: '2-digit', month: 'short', year: 'numeric',
                });
            }
            catch (_a) {
                return isoString;
            }
        });
    };
    // ─── Adaptive card actions ────────────────────────────────────────────────────
    CaaspaExtensibilityLibrary.prototype.invokeCardAction = function (action) {
        if ((action === null || action === void 0 ? void 0 : action.type) === 'Action.OpenUrl' && (action === null || action === void 0 ? void 0 : action.url)) {
            window.open(action.url, '_blank', 'noopener,noreferrer');
        }
    };
    // ─── Custom query modifiers ───────────────────────────────────────────────────
    CaaspaExtensibilityLibrary.prototype.getCustomQueryModifiers = function () {
        return [];
    };
    // ─── Custom data sources ──────────────────────────────────────────────────────
    CaaspaExtensibilityLibrary.prototype.getCustomDataSources = function () {
        return [];
    };
    return CaaspaExtensibilityLibrary;
}());
exports.CaaspaExtensibilityLibrary = CaaspaExtensibilityLibrary;
//# sourceMappingURL=CaaspaExtensibilityLibrary.js.map