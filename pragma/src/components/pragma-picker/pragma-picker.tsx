import { Component, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from '../../utils/utils';
import { Field, defaultField } from "../../types";


/**
 * A picker field component.
 */
@Component({
  tag: 'pragma-picker',
  shadow: true
})
export class PragmaPicker {
  /**
   * Pragma field definition.
   */
  @Prop() field: Field | string | any = defaultField;

  /**
   * The field's path.
   */
  @Prop({ mutable: true, reflect: true }) path: string;

  /**
   * The field's label.
   */
  @Prop({ mutable: true, reflect: true }) label: string;

  /**
   * The field's value.
   */
  @Prop({ mutable: true, reflect: true }) value: boolean = false;

  /**
   * Whether the field is disabled.
   */
  @Prop({ mutable: true, reflect: true }) disabled: boolean = false;

  /**
   * Source URL to load picker options from.
   */
  @Prop({ attribute: 'src', mutable: true }) source: string = '';

  /**
   * Placeholder value displayed when an option hasn't been selected.
   */
  @Prop({ mutable: true, reflect: true }) placeholder: string = '';

  /**
   * Target field path for selected options to be added to.
   */
  @Prop({ mutable: true, reflect: true }) target: string | null;

  /**
   * Path to the item list to draw options from in the source data.
   */
  @Prop( {mutable: true, reflect: true}) listPath: string | null;

  /**
   * The item key to draw option labels from.
   */
  @Prop({mutable: true, reflect: true}) labelKey: string|null;

  /**
   * The item key to draw option values from.
   */
  @Prop({ mutable: true, reflect: true}) valueKey: string|null;

  /**
   * Handle the component loading.
   */
  componentWillLoad() {
    this.parseFieldDefinition(this.field, defaultField);
  }

  /**
   * Parse the field attribute when it changes.
   *
   * @param {object|string} newValue
   * @param {object|string} oldValue
   */
  @Watch('field')
  parseFieldDefinition(newValue, oldValue) {
    this.field = parseAndMergeFields(this.field, oldValue, newValue);

    if (!this.field.options) {
      this.field.options = {};
    }

    this.path = this.path || this.field.path;
    this.label = this.label || this.field.name;
    this.value = this.value || this.field.value;
    this.disabled = this.disabled || this.field.disabled;
    this.placeholder = this.placeholder || this.field.options.placeholder;

    this.source = this.source || this.field.options.source;
    this.target = this.target || this.field.options.target;
    this.listPath = this.listPath || this.field.options.listPath;
    this.labelKey = this.labelKey || this.field.options.labelKey;
    this.valueKey = this.valueKey || this.field.options.valueKey;

    // TODO: Define further properties
  };

  componentWillUpdate() {
    // TODO: Load options from source if available
  }

  /**
   * Determine whether to show a placeholder option.
   */
  showPlaceholder(): boolean {
    return !!this.placeholder;
  }

  /**
   * Get the placeholder markup, if it is to be shown.
   *
   * Returns null if the placeholder is not to be shown.
   */
  getPlaceholder(): HTMLOptionElement|null {
    if (this.showPlaceholder()) {
      return <option value="">{this.placeholder}</option>;
    }

    return null;
  }


  render() {
    console.log(
      this.field,
      this.path,
      this.label,
      this.value,
      this.disabled,
      this.source,
      this.placeholder
    );

    return [
      <select>
        {this.getPlaceholder()}
        <slot/>
      </select>


    ];
  }
}
