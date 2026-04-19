"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitSearchCardWebComponent = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var modern_search_extensibility_1 = require("@pnp/modern-search-extensibility");
var UnitSearchCard_1 = require("./UnitSearchCard");
/**
 * Usage in a Handlebars template:
 *
 *   <caaspa-unit-card
 *       data-unit-id="{{item.UnitId}}"
 *       data-registration="{{item.Registration}}"
 *       data-vin="{{item.VIN}}"
 *       data-make="{{item.Make}}"
 *       data-model="{{item.Model}}"
 *       data-variant="{{item.Variant}}"
 *       data-year="{{item.Year}}"
 *       data-mileage="{{item.Mileage}}"
 *       data-colour="{{item.Colour}}"
 *       data-fuel-type="{{item.FuelType}}"
 *       data-transmission="{{item.Transmission}}"
 *       data-engine-size="{{item.EngineSize}}"
 *       data-condition="{{item.Condition}}"
 *       data-status="{{item.Status}}"
 *       data-price="{{item.Price}}"
 *       data-currency="{{item.Currency}}"
 *       data-valuation="{{item.Valuation}}"
 *       data-image-url="{{item.ImageUrl}}"
 *       data-unit-url="{{item.Path}}"
 *       data-parts-catalogue-url="{{item.PartsCatalogueUrl}}"
 *       data-service-history-url="{{item.ServiceHistoryUrl}}"
 *       data-specification-url="{{item.SpecificationUrl}}"
 *       data-finance-url="{{item.FinanceUrl}}"
 *       data-owner="{{item.Owner}}"
 *       data-location="{{item.Location}}"
 *       data-mot-expiry="{{item.MOTExpiry}}"
 *       data-tax-expiry="{{item.TaxExpiry}}"
 *       data-next-service-due="{{item.NextServiceDue}}">
 *   </caaspa-unit-card>
 */
var UnitSearchCardWebComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UnitSearchCardWebComponent, _super);
    function UnitSearchCardWebComponent() {
        return _super.call(this) || this;
    }
    UnitSearchCardWebComponent.prototype.connectedCallback = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var props, unit;
            return tslib_1.__generator(this, function (_a) {
                props = this.resolveAttributes();
                unit = {
                    UnitId: props.unitId || '',
                    Registration: props.registration,
                    VIN: props.vin,
                    Make: props.make || '',
                    Model: props.model || '',
                    Variant: props.variant,
                    Year: props.year ? parseInt(props.year, 10) : undefined,
                    Mileage: props.mileage ? parseInt(props.mileage, 10) : undefined,
                    Colour: props.colour,
                    FuelType: props.fuelType,
                    Transmission: props.transmission,
                    EngineSize: props.engineSize,
                    Condition: props.condition || 'Used',
                    Status: props.status || 'Available',
                    Price: props.price ? parseFloat(props.price) : undefined,
                    Currency: props.currency || 'GBP',
                    Valuation: props.valuation ? parseFloat(props.valuation) : undefined,
                    ImageUrl: props.imageUrl,
                    UnitUrl: props.unitUrl,
                    PartsCatalogueUrl: props.partsCatalogueUrl,
                    ServiceHistoryUrl: props.serviceHistoryUrl,
                    SpecificationUrl: props.specificationUrl,
                    FinanceUrl: props.financeUrl,
                    Owner: props.owner,
                    Location: props.location,
                    LastServiceDate: props.lastServiceDate,
                    NextServiceDue: props.nextServiceDue,
                    MOTExpiry: props.motExpiry,
                    TaxExpiry: props.taxExpiry,
                };
                ReactDOM.render(React.createElement(UnitSearchCard_1.UnitSearchCard, { unit: unit }), this);
                return [2 /*return*/];
            });
        });
    };
    return UnitSearchCardWebComponent;
}(modern_search_extensibility_1.BaseWebComponent));
exports.UnitSearchCardWebComponent = UnitSearchCardWebComponent;
//# sourceMappingURL=UnitSearchCardComponent.js.map