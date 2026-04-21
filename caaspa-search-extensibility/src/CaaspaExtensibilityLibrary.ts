import * as Handlebars from 'handlebars';
import {
  IExtensibilityLibrary,
  ILayoutDefinition,
  IComponentDefinition,
  ISuggestionProviderDefinition,
  IAdaptiveCardAction,
  IQueryModifierDefinition,
  IDataSourceDefinition,
} from '@pnp/modern-search-extensibility';
import { SalesOrderHoverCardWebComponent } from './components/SalesOrderHoverCard/SalesOrderHoverCardComponent';
import { UnitSearchCardWebComponent } from './components/UnitSearchCard/UnitSearchCardComponent';

/**
 * CAASPA Enterprise Search Extensibility Library
 *
 * Registers custom web components and Handlebars helpers for the
 * PnP Modern Search web parts.
 *
 * Deploy this as an SPFx library component and reference it in the
 * Search Results web part "Extensibility library" property.
 */
export class CaaspaExtensibilityLibrary implements IExtensibilityLibrary {

  // ─── Custom layouts ──────────────────────────────────────────────────────────
  public getCustomLayouts(): ILayoutDefinition[] {
    // No fully custom layouts in v1 — we use the built-in Card layout + result types.
    return [];
  }

  // ─── Custom web components ───────────────────────────────────────────────────
  public getCustomWebComponents(): IComponentDefinition<any>[] {
    return [
      {
        componentName: 'caaspa-salesorder-hovercard',
        componentClass: SalesOrderHoverCardWebComponent,
      },
      {
        componentName: 'caaspa-unit-card',
        componentClass: UnitSearchCardWebComponent,
      },
    ];
  }

  // ─── Custom suggestion providers ─────────────────────────────────────────────
  public getCustomSuggestionProviders(): ISuggestionProviderDefinition[] {
    return [];
  }

  // ─── Handlebars helpers ───────────────────────────────────────────────────────
  public registerHandlebarsCustomizations(handlebarsNamespace: typeof Handlebars): void {

    /**
     * {{caaspaOrderStageIndex status}}
     * Returns the 0-based index of the status in the order pipeline.
     * Useful for conditional logic in templates.
     */
    handlebarsNamespace.registerHelper('caaspaOrderStageIndex', (status: string) => {
      const stages = ['Request', 'Quoted', 'Approved', 'InProduction', 'Dispatched', 'Invoiced'];
      return stages.indexOf(status);
    });

    /**
     * {{caaspaIsOrderComplete status}}
     * Returns true if the order has reached "Invoiced".
     */
    handlebarsNamespace.registerHelper('caaspaIsOrderComplete', (status: string) => {
      return status === 'Invoiced';
    });

    /**
     * {{caaspaIsOrderActive status}}
     * Returns true if the order is in an active, non-terminal state.
     */
    handlebarsNamespace.registerHelper('caaspaIsOrderActive', (status: string) => {
      return !['Cancelled', 'Invoiced', 'OnHold'].includes(status);
    });

    /**
     * {{caaspaUnitStatusColour status}}
     * Returns a CSS colour string for the given unit status.
     */
    handlebarsNamespace.registerHelper('caaspaUnitStatusColour', (status: string) => {
      const map: Record<string, string> = {
        Available: '#107C10',
        Reserved:  '#0078D4',
        Sold:      '#605E5C',
        OnOrder:   '#CA5010',
        InService: '#038387',
        Scrapped:  '#A4262C',
      };
      return map[status] || '#323130';
    });

    /**
     * {{caaspaCurrencyFormat value currency}}
     * Formats a number as a currency string. Falls back to £ if Intl unavailable.
     */
    handlebarsNamespace.registerHelper('caaspaCurrencyFormat', (value: number, currency: string) => {
      if (!value && value !== 0) return '';
      try {
        return new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: currency || 'GBP',
          maximumFractionDigits: 0,
        }).format(value);
      } catch {
        return `£${Number(value).toLocaleString('en-GB')}`;
      }
    });

    /**
     * {{caaspaDateFormat isoString}}
     * Formats an ISO date string to "DD MMM YYYY".
     */
    handlebarsNamespace.registerHelper('caaspaDateFormat', (isoString: string) => {
      if (!isoString) return '';
      try {
        return new Date(isoString).toLocaleDateString('en-GB', {
          day: '2-digit', month: 'short', year: 'numeric',
        });
      } catch {
        return isoString;
      }
    });
  }

  // ─── Adaptive card actions ────────────────────────────────────────────────────
  public invokeCardAction(action: IAdaptiveCardAction): void {
    if (action?.type === 'Action.OpenUrl' && action?.url) {
      window.open(action.url, '_blank', 'noopener,noreferrer');
    }
  }

  // ─── Custom query modifiers ───────────────────────────────────────────────────
  public getCustomQueryModifiers(): IQueryModifierDefinition[] {
    return [];
  }

  // ─── Custom data sources ──────────────────────────────────────────────────────
  public getCustomDataSources(): IDataSourceDefinition[] {
    return [];
  }
}
