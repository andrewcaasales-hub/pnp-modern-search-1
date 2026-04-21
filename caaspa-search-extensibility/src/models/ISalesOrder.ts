/**
 * Represents a single stage in the sales order lifecycle.
 */
export interface IOrderStage {
  key: string;
  label: string;
  icon: string; // Fluent UI icon name
}

/**
 * All stages in order, from initial request through to invoice.
 */
export const ORDER_STAGES: IOrderStage[] = [
  { key: 'Request',      label: 'Request',      icon: 'DocumentApproval' },
  { key: 'Quoted',       label: 'Quoted',       icon: 'Money' },
  { key: 'Approved',     label: 'Approved',     icon: 'CheckMark' },
  { key: 'InProduction', label: 'In Production', icon: 'Manufacturing' },
  { key: 'Dispatched',   label: 'Dispatched',   icon: 'DeliveryTruck' },
  { key: 'Invoiced',     label: 'Invoiced',     icon: 'ReceiptProcessing' },
];

/** Canonical status values */
export type OrderStatus =
  | 'Request'
  | 'Quoted'
  | 'Approved'
  | 'InProduction'
  | 'Dispatched'
  | 'Invoiced'
  | 'Cancelled'
  | 'OnHold';

/**
 * Sales order data shape as returned by the search index / SharePoint list.
 */
export interface ISalesOrder {
  OrderNumber: string;
  CustomerName: string;
  CustomerReference?: string;
  OrderDate?: string;
  RequiredDate?: string;
  TotalValue?: number;
  Currency?: string;
  Status: OrderStatus;
  SalesRep?: string;
  Description?: string;
  OrderUrl?: string;
  Notes?: string;
}
