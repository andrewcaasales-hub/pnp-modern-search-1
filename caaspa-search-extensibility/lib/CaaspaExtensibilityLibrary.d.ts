import * as Handlebars from 'handlebars';
import { IExtensibilityLibrary, ILayoutDefinition, IComponentDefinition, ISuggestionProviderDefinition, IAdaptiveCardAction, IQueryModifierDefinition, IDataSourceDefinition } from '@pnp/modern-search-extensibility';
/**
 * CAASPA Enterprise Search Extensibility Library
 *
 * Registers custom web components and Handlebars helpers for the
 * PnP Modern Search web parts.
 *
 * Deploy this as an SPFx library component and reference it in the
 * Search Results web part "Extensibility library" property.
 */
export declare class CaaspaExtensibilityLibrary implements IExtensibilityLibrary {
    getCustomLayouts(): ILayoutDefinition[];
    getCustomWebComponents(): IComponentDefinition<any>[];
    getCustomSuggestionProviders(): ISuggestionProviderDefinition[];
    registerHandlebarsCustomizations(handlebarsNamespace: typeof Handlebars): void;
    invokeCardAction(action: IAdaptiveCardAction): void;
    getCustomQueryModifiers(): IQueryModifierDefinition[];
    getCustomDataSources(): IDataSourceDefinition[];
}
//# sourceMappingURL=CaaspaExtensibilityLibrary.d.ts.map