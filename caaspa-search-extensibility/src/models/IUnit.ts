/**
 * Represents a vehicle / unit in the inventory.
 */
export type UnitCondition = 'New' | 'Used' | 'Demo' | 'Parts';
export type UnitStatus   = 'Available' | 'Reserved' | 'Sold' | 'OnOrder' | 'InService' | 'Scrapped';

export interface IUnit {
  UnitId: string;
  Registration?: string;
  VIN?: string;
  Make: string;
  Model: string;
  Variant?: string;
  Year?: number;
  Mileage?: number;
  Colour?: string;
  FuelType?: string;
  Transmission?: string;
  EngineSize?: string;
  Condition: UnitCondition;
  Status: UnitStatus;
  Price?: number;
  Currency?: string;
  Valuation?: number;
  ImageUrl?: string;

  // Deep-link URLs
  UnitUrl?: string;
  PartsCatalogueUrl?: string;
  ServiceHistoryUrl?: string;
  SpecificationUrl?: string;
  FinanceUrl?: string;

  // Extended metadata
  Owner?: string;
  Location?: string;
  LastServiceDate?: string;
  NextServiceDue?: string;
  MOTExpiry?: string;
  TaxExpiry?: string;
}
