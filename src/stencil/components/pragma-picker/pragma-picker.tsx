import { Component, Element, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from '../../utils/utils';
import { Field, defaultField } from "../../types";
import Choices from 'choices.js';
import Papa from 'papaparse';

/**
 * A picker field component.
 */
@Component({
  tag: 'pragma-picker',
  shadow: true
})
export class PragmaPicker {
  /**
   * Choices instance.
   */
  choices?: Choices = null;

  /**
   * Host element.
   */
  @Element() element: HTMLElement;

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
   * Picker options.
   */
  @Prop({ mutable: true }) options: any[] = [];

  /**
   * Source to load picker options from.
   *
   * TODO: Watch and reload options
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
    this.label = this.label || this.field.label;
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

  /**
   * Handle the component loading.
   */
  componentWillLoad() {
    this.parseFieldDefinition(this.field, defaultField);

    this.loadOptions().catch((error) => {
      console.error(`Error loading updated options for picker field '${this.path}'`, error);
    });
  }

  componentDidRender() {
    if (!this.choices) {
      let select = this.element.shadowRoot.querySelector('#picker');

      this.choices = new Choices(select, {
        renderChoiceLimit: 50,
        searchResultLimit: 50
      });
    }

    this.choices.setChoices(
      this.options,
      this.valueKey,
      this.labelKey
    );
  }

  /**
   * TODO: Handle light DOM <option>s in some way
   * TODO: Handle more than just URL sources, e.g. DOM selectors
   */
  async loadOptions(): Promise<any[]> {
    if (this.source) {
      this.options = await fetch(this.source)
        .then(response => response.text())
        .then(data => this.parseOptions(data))
        .catch((error) => {
          console.error(`Error loading options source data for picker field '${this.path}'`, error);
          return [];
        });
    }

    return this.options;
  }

  /**
   * Parse source data.
   *
   * Uses Papa Parse for CSV data.
   *
   * TODO: Parse more than just CSVs yo; REST APIs! JSON!
   *
   * @param {string} data - Raw option data from an HTTP response
   */
  async parseOptions(data): Promise<any[]> {
    return Papa.parse(data, {
      delimiter: ',',
      header: true,
      dynamicTyping: true
      //worker: true // TODO: Try this out later
    }).data;
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
    // console.log(
    //   this.field,
    //   this.path,
    //   this.label,
    //   this.value,
    //   this.disabled,
    //   this.source,
    //   this.placeholder
    // );

    return [
      <select id="picker">
        {this.getPlaceholder()}
        <slot/>
      </select>
    ];
  }
}
