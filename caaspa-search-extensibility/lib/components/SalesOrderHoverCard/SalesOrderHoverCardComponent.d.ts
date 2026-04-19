import { BaseWebComponent } from '@pnp/modern-search-extensibility';
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
export declare class SalesOrderHoverCardWebComponent extends BaseWebComponent {
    constructor();
    connectedCallback(): Promise<void>;
}
//# sourceMappingURL=SalesOrderHoverCardComponent.d.ts.map