import { BaseWebComponent } from '@pnp/modern-search-extensibility';
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
export declare class UnitSearchCardWebComponent extends BaseWebComponent {
    constructor();
    connectedCallback(): Promise<void>;
}
//# sourceMappingURL=UnitSearchCardComponent.d.ts.map