/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Field, } from "./types";
export namespace Components {
    interface PragmaBoolean {
        /**
          * Whether the field is disabled.
         */
        "disabled": boolean;
        /**
          * Pragma field definition.
         */
        "field": Field | string | any;
        /**
          * The field's label.
         */
        "label": string;
        /**
          * The field's path.
         */
        "path": string;
        /**
          * The field's value.
         */
        "value": boolean;
    }
    interface PragmaFields {
        /**
          * The set of fields to render.
         */
        "fields": Array<Field>;
        /**
          * The path to the subset of fields to render.  This prop is informational for parent `<pragma-form>` elements, so that they know which fields to provide to the `setFields()` setter method.
         */
        "path": string;
        /**
          * Set the set of fields to render.
          * @param fields - The set of fields to render.
         */
        "setFields": (fields: Field[]) => Promise<void>;
    }
    interface PragmaForm {
        /**
          * Default properties for different field types.
         */
        "defaults": {
            [key: string]: any;
        };
        /**
          * Pragma fields to maintain.
         */
        "fields": Array<Field>;
        /**
          * Functions to provide to form expressions.
         */
        "functions": Array<Function>;
        /**
          * Form state data.
         */
        "state": any;
    }
    interface PragmaGroup {
        /**
          * Pragma field definition.
         */
        "field": Field | string | any;
        /**
          * Whether to hide the field's label.
         */
        "hideLabel": boolean;
        /**
          * The field's label.
         */
        "label": string;
        /**
          * The field's path.
         */
        "path": string;
    }
    interface PragmaList {
        /**
          * Whether the field is disabled.
         */
        "disabled": boolean;
        /**
          * Pragma field definition.
         */
        "field": Field | string | any;
        /**
          * The field's label.
         */
        "label": string;
        /**
          * The field's path.
         */
        "path": string;
        /**
          * Whether to show the list's label.
         */
        "showLabel": boolean;
    }
    interface PragmaListItem {
        /**
          * Pragma field definition.
         */
        "field": Field | string | any;
    }
    interface PragmaNumber {
        /**
          * Whether the field is disabled.
         */
        "disabled": boolean;
        /**
          * Pragma field definition.  TODO: Field definition type.
         */
        "field": Field | string | any;
        /**
          * The field's label.
         */
        "label": string;
        /**
          * The maximum value constraint.
         */
        "max": number;
        /**
          * The minimum value constraint.
         */
        "min": number;
        /**
          * The field's path.
         */
        "path": string;
        /**
          * The value step.
         */
        "step": number;
        /**
          * The field's value.
         */
        "value": number;
    }
    interface PragmaPicker {
        /**
          * Whether the field is disabled.
         */
        "disabled": boolean;
        /**
          * Pragma field definition.
         */
        "field": Field | string | any;
        /**
          * The field's label.
         */
        "label": string;
        /**
          * The item key to draw option labels from.
         */
        "labelKey": string | null;
        /**
          * Path to the item list to draw options from in the source data.
         */
        "listPath": string | null;
        /**
          * The field's path.
         */
        "path": string;
        /**
          * Placeholder value displayed when an option hasn't been selected.
         */
        "placeholder": string;
        /**
          * Source URL to load picker options from.
         */
        "source": string;
        /**
          * Target field path for selected options to be added to.
         */
        "target": string | null;
        /**
          * The field's value.
         */
        "value": boolean;
        /**
          * The item key to draw option values from.
         */
        "valueKey": string | null;
    }
    interface PragmaSection {
        "field": any;
    }
    interface PragmaSelect {
        /**
          * Whether the field is disabled.
         */
        "disabled": boolean;
        /**
          * Pragma field definition.
         */
        "field": Field | string | any;
        /**
          * The field's label.
         */
        "label": string;
        /**
          * The selectable options.  TODO: Support objects *and* arrays.
         */
        "options": object;
        /**
          * The field's path.
         */
        "path": string;
        /**
          * The field's value.
         */
        "value": any;
    }
    interface PragmaString {
        /**
          * Whether the field is disabled.
         */
        "disabled": boolean;
        /**
          * Pragma field definition.
         */
        "field": Field | string | any;
        /**
          * The field's label.
         */
        "label": string;
        /**
          * The field's path.
         */
        "path": string;
        /**
          * The field's value.
         */
        "value": string;
    }
    interface PragmaTable {
        /**
          * Whether the field is disabled.
         */
        "disabled": boolean;
        /**
          * Pragma field definition.
         */
        "field": Field | string | any;
        /**
          * The field's label.
         */
        "label": string;
        /**
          * The field's path.
         */
        "path": string;
        /**
          * Whether to show labels for each row.  Displayed in an extra column on the far left of the table.
         */
        "showLabel": boolean;
    }
}
declare global {
    interface HTMLPragmaBooleanElement extends Components.PragmaBoolean, HTMLStencilElement {
    }
    var HTMLPragmaBooleanElement: {
        prototype: HTMLPragmaBooleanElement;
        new (): HTMLPragmaBooleanElement;
    };
    interface HTMLPragmaFieldsElement extends Components.PragmaFields, HTMLStencilElement {
    }
    var HTMLPragmaFieldsElement: {
        prototype: HTMLPragmaFieldsElement;
        new (): HTMLPragmaFieldsElement;
    };
    interface HTMLPragmaFormElement extends Components.PragmaForm, HTMLStencilElement {
    }
    var HTMLPragmaFormElement: {
        prototype: HTMLPragmaFormElement;
        new (): HTMLPragmaFormElement;
    };
    interface HTMLPragmaGroupElement extends Components.PragmaGroup, HTMLStencilElement {
    }
    var HTMLPragmaGroupElement: {
        prototype: HTMLPragmaGroupElement;
        new (): HTMLPragmaGroupElement;
    };
    interface HTMLPragmaListElement extends Components.PragmaList, HTMLStencilElement {
    }
    var HTMLPragmaListElement: {
        prototype: HTMLPragmaListElement;
        new (): HTMLPragmaListElement;
    };
    interface HTMLPragmaListItemElement extends Components.PragmaListItem, HTMLStencilElement {
    }
    var HTMLPragmaListItemElement: {
        prototype: HTMLPragmaListItemElement;
        new (): HTMLPragmaListItemElement;
    };
    interface HTMLPragmaNumberElement extends Components.PragmaNumber, HTMLStencilElement {
    }
    var HTMLPragmaNumberElement: {
        prototype: HTMLPragmaNumberElement;
        new (): HTMLPragmaNumberElement;
    };
    interface HTMLPragmaPickerElement extends Components.PragmaPicker, HTMLStencilElement {
    }
    var HTMLPragmaPickerElement: {
        prototype: HTMLPragmaPickerElement;
        new (): HTMLPragmaPickerElement;
    };
    interface HTMLPragmaSectionElement extends Components.PragmaSection, HTMLStencilElement {
    }
    var HTMLPragmaSectionElement: {
        prototype: HTMLPragmaSectionElement;
        new (): HTMLPragmaSectionElement;
    };
    interface HTMLPragmaSelectElement extends Components.PragmaSelect, HTMLStencilElement {
    }
    var HTMLPragmaSelectElement: {
        prototype: HTMLPragmaSelectElement;
        new (): HTMLPragmaSelectElement;
    };
    interface HTMLPragmaStringElement extends Components.PragmaString, HTMLStencilElement {
    }
    var HTMLPragmaStringElement: {
        prototype: HTMLPragmaStringElement;
        new (): HTMLPragmaStringElement;
    };
    interface HTMLPragmaTableElement extends Components.PragmaTable, HTMLStencilElement {
    }
    var HTMLPragmaTableElement: {
        prototype: HTMLPragmaTableElement;
        new (): HTMLPragmaTableElement;
    };
    interface HTMLElementTagNameMap {
        "pragma-boolean": HTMLPragmaBooleanElement;
        "pragma-fields": HTMLPragmaFieldsElement;
        "pragma-form": HTMLPragmaFormElement;
        "pragma-group": HTMLPragmaGroupElement;
        "pragma-list": HTMLPragmaListElement;
        "pragma-list-item": HTMLPragmaListItemElement;
        "pragma-number": HTMLPragmaNumberElement;
        "pragma-picker": HTMLPragmaPickerElement;
        "pragma-section": HTMLPragmaSectionElement;
        "pragma-select": HTMLPragmaSelectElement;
        "pragma-string": HTMLPragmaStringElement;
        "pragma-table": HTMLPragmaTableElement;
    }
}
declare namespace LocalJSX {
    interface PragmaBoolean {
        /**
          * Whether the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pragma field definition.
         */
        "field"?: Field | string | any;
        /**
          * The field's label.
         */
        "label"?: string;
        /**
          * The field's path.
         */
        "path"?: string;
        /**
          * The field's value.
         */
        "value"?: boolean;
    }
    interface PragmaFields {
        /**
          * The set of fields to render.
         */
        "fields"?: Array<Field>;
        /**
          * The path to the subset of fields to render.  This prop is informational for parent `<pragma-form>` elements, so that they know which fields to provide to the `setFields()` setter method.
         */
        "path"?: string;
    }
    interface PragmaForm {
        /**
          * Default properties for different field types.
         */
        "defaults"?: {
            [key: string]: any;
        };
        /**
          * Pragma fields to maintain.
         */
        "fields"?: Array<Field>;
        /**
          * Functions to provide to form expressions.
         */
        "functions"?: Array<Function>;
        /**
          * Form state data.
         */
        "state"?: any;
    }
    interface PragmaGroup {
        /**
          * Pragma field definition.
         */
        "field"?: Field | string | any;
        /**
          * Whether to hide the field's label.
         */
        "hideLabel"?: boolean;
        /**
          * The field's label.
         */
        "label"?: string;
        /**
          * The field's path.
         */
        "path"?: string;
    }
    interface PragmaList {
        /**
          * Whether the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pragma field definition.
         */
        "field"?: Field | string | any;
        /**
          * The field's label.
         */
        "label"?: string;
        /**
          * The field's path.
         */
        "path"?: string;
        /**
          * Whether to show the list's label.
         */
        "showLabel"?: boolean;
    }
    interface PragmaListItem {
        /**
          * Pragma field definition.
         */
        "field"?: Field | string | any;
    }
    interface PragmaNumber {
        /**
          * Whether the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pragma field definition.  TODO: Field definition type.
         */
        "field"?: Field | string | any;
        /**
          * The field's label.
         */
        "label"?: string;
        /**
          * The maximum value constraint.
         */
        "max"?: number;
        /**
          * The minimum value constraint.
         */
        "min"?: number;
        /**
          * The field's path.
         */
        "path"?: string;
        /**
          * The value step.
         */
        "step"?: number;
        /**
          * The field's value.
         */
        "value"?: number;
    }
    interface PragmaPicker {
        /**
          * Whether the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pragma field definition.
         */
        "field"?: Field | string | any;
        /**
          * The field's label.
         */
        "label"?: string;
        /**
          * The item key to draw option labels from.
         */
        "labelKey"?: string | null;
        /**
          * Path to the item list to draw options from in the source data.
         */
        "listPath"?: string | null;
        /**
          * The field's path.
         */
        "path"?: string;
        /**
          * Placeholder value displayed when an option hasn't been selected.
         */
        "placeholder"?: string;
        /**
          * Source URL to load picker options from.
         */
        "source"?: string;
        /**
          * Target field path for selected options to be added to.
         */
        "target"?: string | null;
        /**
          * The field's value.
         */
        "value"?: boolean;
        /**
          * The item key to draw option values from.
         */
        "valueKey"?: string | null;
    }
    interface PragmaSection {
        "field"?: any;
    }
    interface PragmaSelect {
        /**
          * Whether the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pragma field definition.
         */
        "field"?: Field | string | any;
        /**
          * The field's label.
         */
        "label"?: string;
        /**
          * The selectable options.  TODO: Support objects *and* arrays.
         */
        "options"?: object;
        /**
          * The field's path.
         */
        "path"?: string;
        /**
          * The field's value.
         */
        "value"?: any;
    }
    interface PragmaString {
        /**
          * Whether the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pragma field definition.
         */
        "field"?: Field | string | any;
        /**
          * The field's label.
         */
        "label"?: string;
        /**
          * The field's path.
         */
        "path"?: string;
        /**
          * The field's value.
         */
        "value"?: string;
    }
    interface PragmaTable {
        /**
          * Whether the field is disabled.
         */
        "disabled"?: boolean;
        /**
          * Pragma field definition.
         */
        "field"?: Field | string | any;
        /**
          * The field's label.
         */
        "label"?: string;
        /**
          * The field's path.
         */
        "path"?: string;
        /**
          * Whether to show labels for each row.  Displayed in an extra column on the far left of the table.
         */
        "showLabel"?: boolean;
    }
    interface IntrinsicElements {
        "pragma-boolean": PragmaBoolean;
        "pragma-fields": PragmaFields;
        "pragma-form": PragmaForm;
        "pragma-group": PragmaGroup;
        "pragma-list": PragmaList;
        "pragma-list-item": PragmaListItem;
        "pragma-number": PragmaNumber;
        "pragma-picker": PragmaPicker;
        "pragma-section": PragmaSection;
        "pragma-select": PragmaSelect;
        "pragma-string": PragmaString;
        "pragma-table": PragmaTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pragma-boolean": LocalJSX.PragmaBoolean & JSXBase.HTMLAttributes<HTMLPragmaBooleanElement>;
            "pragma-fields": LocalJSX.PragmaFields & JSXBase.HTMLAttributes<HTMLPragmaFieldsElement>;
            "pragma-form": LocalJSX.PragmaForm & JSXBase.HTMLAttributes<HTMLPragmaFormElement>;
            "pragma-group": LocalJSX.PragmaGroup & JSXBase.HTMLAttributes<HTMLPragmaGroupElement>;
            "pragma-list": LocalJSX.PragmaList & JSXBase.HTMLAttributes<HTMLPragmaListElement>;
            "pragma-list-item": LocalJSX.PragmaListItem & JSXBase.HTMLAttributes<HTMLPragmaListItemElement>;
            "pragma-number": LocalJSX.PragmaNumber & JSXBase.HTMLAttributes<HTMLPragmaNumberElement>;
            "pragma-picker": LocalJSX.PragmaPicker & JSXBase.HTMLAttributes<HTMLPragmaPickerElement>;
            "pragma-section": LocalJSX.PragmaSection & JSXBase.HTMLAttributes<HTMLPragmaSectionElement>;
            "pragma-select": LocalJSX.PragmaSelect & JSXBase.HTMLAttributes<HTMLPragmaSelectElement>;
            "pragma-string": LocalJSX.PragmaString & JSXBase.HTMLAttributes<HTMLPragmaStringElement>;
            "pragma-table": LocalJSX.PragmaTable & JSXBase.HTMLAttributes<HTMLPragmaTableElement>;
        }
    }
}
