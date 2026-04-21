import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseWebComponent } from '@pnp/modern-search-extensibility';
import { SalesOrderHoverCard } from './SalesOrderHoverCard';
import { ISalesOrder } from '../../models/ISalesOrder';

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
export class SalesOrderHoverCardWebComponent extends BaseWebComponent {

  public constructor() {
    super();
  }

  public async connectedCallback(): Promise<void> {
    const props = this.resolveAttributes();

    const order: ISalesOrder = {
      OrderNumber:       props.orderNumber       || '',
      CustomerName:      props.customerName      || '',
      CustomerReference: props.customerReference,
      OrderDate:         props.orderDate,
      RequiredDate:      props.requiredDate,
      TotalValue:        props.totalValue ? parseFloat(props.totalValue) : undefined,
      Currency:          props.currency          || 'GBP',
      Status:            props.status            || 'Request',
      SalesRep:          props.salesRep,
      Description:       props.description,
      OrderUrl:          props.orderUrl,
      Notes:             props.notes,
    };

    const compact = props.compact === 'true';

    ReactDOM.render(
      React.createElement(SalesOrderHoverCard, { order, compact }),
      this
    );
  }
}
