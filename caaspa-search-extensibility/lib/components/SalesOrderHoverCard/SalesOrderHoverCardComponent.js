"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHoverCardWebComponent = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var modern_search_extensibility_1 = require("@pnp/modern-search-extensibility");
var SalesOrderHoverCard_1 = require("./SalesOrderHoverCard");
/**
 * Usage in a Handlebars template:
 *
 *   <caaspa-salesorder-hovercard
 *       data-order-number="{{item.OrderNumber}}"
 *       data-customer-name="{{item.CustomerName}}"
 *       data-customer-reference="{{item.CustomerReference}}"
 *       data-order-date="{{item.OrderDate}}"
 *       data-required-date="{{item.RequiredDate}}"
 *       data-total-value="{{item.TotalValue}}"
 *       data-currency="{{item.Currency}}"
 *       data-status="{{item.Status}}"
 *       data-sales-rep="{{item.SalesRep}}"
 *       data-description="{{item.Description}}"
 *       data-order-url="{{item.Path}}"
 *       data-compact="false">
 *   </caaspa-salesorder-hovercard>
 */
var SalesOrderHoverCardWebComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SalesOrderHoverCardWebComponent, _super);
    function SalesOrderHoverCardWebComponent() {
        return _super.call(this) || this;
    }
    SalesOrderHoverCardWebComponent.prototype.connectedCallback = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var props, order, compact;
            return tslib_1.__generator(this, function (_a) {
                props = this.resolveAttributes();
                order = {
                    OrderNumber: props.orderNumber || '',
                    CustomerName: props.customerName || '',
                    CustomerReference: props.customerReference,
                    OrderDate: props.orderDate,
                    RequiredDate: props.requiredDate,
                    TotalValue: props.totalValue ? parseFloat(props.totalValue) : undefined,
                    Currency: props.currency || 'GBP',
                    Status: props.status || 'Request',
                    SalesRep: props.salesRep,
                    Description: props.description,
                    OrderUrl: props.orderUrl,
                    Notes: props.notes,
                };
                compact = props.compact === 'true';
                ReactDOM.render(React.createElement(SalesOrderHoverCard_1.SalesOrderHoverCard, { order: order, compact: compact }), this);
                return [2 /*return*/];
            });
        });
    };
    return SalesOrderHoverCardWebComponent;
}(modern_search_extensibility_1.BaseWebComponent));
exports.SalesOrderHoverCardWebComponent = SalesOrderHoverCardWebComponent;
//# sourceMappingURL=SalesOrderHoverCardComponent.js.map