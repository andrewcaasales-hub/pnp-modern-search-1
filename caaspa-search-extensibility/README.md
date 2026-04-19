# CAASPA Enterprise Search Extensibility

> A custom PnP Modern Search extensibility library delivering high-end, branded search experiences for Sales Orders and Units inventory.

---

## What's included

| Component | Custom element tag | Purpose |
|---|---|---|
| `SalesOrderHoverCard` | `<caaspa-salesorder-hovercard>` | Full-detail card with a coloured stage-progress bar (Request → Quote → Approval → Production → Dispatch → Invoice) |
| `UnitSearchCard` | `<caaspa-unit-card>` | Inventory card with image, stat grid, compliance indicators (MOT/Tax/Service), and deep-link quick-launch buttons to Parts Catalogue, Service History, Spec Sheet, Finance |
| `CaaspaExtensibilityLibrary` | — | Entry point that registers the components and custom Handlebars helpers |

### Handlebars helpers registered

| Helper | Usage | Returns |
|---|---|---|
| `caaspaOrderStageIndex` | `{{caaspaOrderStageIndex item.Status}}` | `0-5` (or `-1`) |
| `caaspaIsOrderComplete` | `{{caaspaIsOrderComplete item.Status}}` | `true/false` |
| `caaspaIsOrderActive` | `{{caaspaIsOrderActive item.Status}}` | `true/false` |
| `caaspaUnitStatusColour` | `{{caaspaUnitStatusColour item.Status}}` | CSS colour string |
| `caaspaCurrencyFormat` | `{{caaspaCurrencyFormat item.Price item.Currency}}` | `£12,500` |
| `caaspaDateFormat` | `{{caaspaDateFormat item.OrderDate}}` | `15 Apr 2026` |

---

## Order Progress Bar – stage logic

```
Request ──●── Quoted ──●── Approved ──●── In Production ──●── Dispatched ──●── Invoiced
```

| Stage state | Visual |
|---|---|
| **Complete** | Solid green circle with ✓, green connector bar |
| **Active** | Solid blue circle with white dot + glow ring |
| **Pending** | Light-grey outlined circle, grey connector bar |
| **Cancelled / On Hold** | Progress bar hidden; full-width banner message |

---

## Unit Card – quick link colours

| Link | Icon | Accent colour |
|---|---|---|
| Parts Catalogue | 🔧 | Amber `#CA5010` |
| Service History | 📋 | Teal `#038387` |
| Full Spec | 📄 | Blue `#0078D4` |
| Finance | 💰 | Green `#107C10` |
| Unit Record | 🔗 | Navy `#0F3460` |

Compliance indicators turn **amber** when within 30 days of expiry and **red** when expired.

---

## SharePoint managed property mapping

### Sales Orders list

| SP column (internal name) | Managed property | Notes |
|---|---|---|
| Title | `Title` | Use order number as the list item title |
| CustomerName | `CustomerNameOWSCHCS` | → map to `CustomerName` in search schema |
| CustomerReference | `CustomerReferenceOWSCHCS` | |
| OrderDate | `OrderDateOWSDATE` | |
| RequiredDate | `RequiredDateOWSDATE` | |
| TotalValue | `TotalValueOWSNMBR` | |
| Currency | `CurrencyOWSCHCS` | Defaults to GBP |
| Status | `StatusOWSCHCS` | Must match exact key: `Request|Quoted|Approved|InProduction|Dispatched|Invoiced|Cancelled|OnHold` |
| SalesRep | `SalesRepOWSCHCS` | |
| Description | `DescriptionOWSMTXT` | |

### Units list

| SP column | Managed property | Notes |
|---|---|---|
| UnitId | `UnitIdOWSCHCS` | |
| Registration | `RegistrationOWSCHCS` | |
| VIN | `VINOSWCHCS` | |
| Make | `MakeOWSCHCS` | |
| Model | `ModelOWSCHCS` | |
| Variant | `VariantOWSCHCS` | |
| Year | `YearOWSNMBR` | |
| Mileage | `MileageOWSNMBR` | |
| Colour | `ColourOWSCHCS` | |
| FuelType | `FuelTypeOWSCHCS` | |
| Transmission | `TransmissionOWSCHCS` | |
| EngineSize | `EngineSizeOWSCHCS` | |
| Condition | `ConditionOWSCHCS` | `New|Used|Demo|Parts` |
| Status | `UnitStatusOWSCHCS` | `Available|Reserved|Sold|OnOrder|InService|Scrapped` |
| Price | `PriceOWSNMBR` | |
| Currency | `CurrencyOWSCHCS` | |
| Valuation | `ValuationOWSNMBR` | |
| ImageUrl | `ImageUrlOWSURLH` | Store as URL/Picture column |
| PartsCatalogueUrl | `PartsCatalogueUrlOWSURLH` | |
| ServiceHistoryUrl | `ServiceHistoryUrlOWSURLH` | |
| SpecificationUrl | `SpecificationUrlOWSURLH` | |
| FinanceUrl | `FinanceUrlOWSURLH` | |
| Owner | `OwnerOWSCHCS` | |
| Location | `LocationOWSCHCS` | |
| MOTExpiry | `MOTExpiryOWSDATE` | |
| TaxExpiry | `TaxExpiryOWSDATE` | |
| NextServiceDue | `NextServiceDueOWSDATE` | |

---

## Deployment steps

### 1 – Build the extensibility library

```powershell
cd caaspa-search-extensibility
npm install
npm run build
```

> **Note:** In a production SPFx project, replace the build command with `gulp bundle --ship && gulp package-solution --ship` using the Yeoman-generated SPFx library project scaffold. The TypeScript source in `src/` compiles to `lib/` for direct npm linking, or can be bundled into an SPFx `.sppkg`.

### 2 – Deploy the PnP Modern Search web parts

Follow the official [PnP Modern Search installation guide](https://microsoft-search.github.io/pnp-modern-search/installation/).

Deploy the `search-parts` package to your App Catalog.

### 3 – Register the extensibility library

In the **Search Results** web part property pane:

1. Open **Extensibility library** settings.
2. Add the library component ID from your SPFx library manifest.
3. Save.

### 4 – Add the Search Results web part

1. Add a **PnP Search Results** web part to your page.
2. Set the **Layout** to **Custom**.
3. Paste the contents of `src/templates/enterpriseGrid.html` into the template editor.

### 5 – Configure result types (optional granular control)

For fine-grained per-content-type control, instead of the auto-detect logic in `enterpriseGrid.html`:

1. Open **Result Types** in the web part property pane.
2. Add a rule: `ContentTypeId begins with <your-SO-content-type-id>` → paste `salesOrders.html`.
3. Add a rule: `ContentTypeId begins with <your-Unit-content-type-id>` → paste `units.html`.

### 6 – Search schema

In SharePoint Admin → Search → Manage Search Schema, ensure all managed properties listed above are created, mapped to their crawled property counterparts, and are **Retrievable** and **Queryable**.

---

## File structure

```
caaspa-search-extensibility/
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts                          ← Public API
    ├── CaaspaExtensibilityLibrary.ts     ← IExtensibilityLibrary implementation
    ├── models/
    │   ├── ISalesOrder.ts                ← Order data shapes & stage constants
    │   └── IUnit.ts                      ← Unit data shapes
    ├── components/
    │   ├── SalesOrderHoverCard/
    │   │   ├── SalesOrderHoverCard.tsx   ← React card + progress bar
    │   │   └── SalesOrderHoverCardComponent.ts  ← Web component wrapper
    │   └── UnitSearchCard/
    │       ├── UnitSearchCard.tsx        ← React unit card
    │       └── UnitSearchCardComponent.ts       ← Web component wrapper
    └── templates/
        ├── salesOrders.html              ← Result type for SO result type rule
        ├── units.html                    ← Result type for Units result type rule
        └── enterpriseGrid.html           ← Full-page custom layout (recommended)
```
