"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_STAGES = void 0;
/**
 * All stages in order, from initial request through to invoice.
 */
exports.ORDER_STAGES = [
    { key: 'Request', label: 'Request', icon: 'DocumentApproval' },
    { key: 'Quoted', label: 'Quoted', icon: 'Money' },
    { key: 'Approved', label: 'Approved', icon: 'CheckMark' },
    { key: 'InProduction', label: 'In Production', icon: 'Manufacturing' },
    { key: 'Dispatched', label: 'Dispatched', icon: 'DeliveryTruck' },
    { key: 'Invoiced', label: 'Invoiced', icon: 'ReceiptProcessing' },
];
//# sourceMappingURL=ISalesOrder.js.map