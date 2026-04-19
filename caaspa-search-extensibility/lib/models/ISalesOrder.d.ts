/**
 * Represents a single stage in the sales order lifecycle.
 */
export interface IOrderStage {
    key: string;
    label: string;
    icon: string;
}
/**
 * All stages in order, from initial request through to invoice.
 */
export declare const ORDER_STAGES: IOrderStage[];
/** Canonical status values */
export type OrderStatus = 'Request' | 'Quoted' | 'Approved' | 'InProduction' | 'Dispatched' | 'Invoiced' | 'Cancelled' | 'OnHold';
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
//# sourceMappingURL=ISalesOrder.d.ts.map