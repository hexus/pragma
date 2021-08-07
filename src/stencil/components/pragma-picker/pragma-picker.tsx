import { Component, Element, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from '../../utils/utils';
import { Field, defaultField } from "../../types";
import Choices from 'choices.js';
import get from 'lodash/get';
import Papa from 'papaparse';

/**
 * A picker field component.
 */
@Component({
  tag: 'pragma-picker',
  styleUrl: 'pragma-picker.scss',
  // shadow: true
})
export class PragmaPicker {
  /**
   * Choices instance.
   */
  choices?: Choices = null;

  /**
   * JSX select element reference.
   */
  select?: HTMLSelectElement = null;

  /**
   * Host element.
   */
  @Element() element: HTMLElement;

  /**
   * Pragma field definition.
   */
  @Prop() field: Field | string | any = defaultField;

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

    this.path = this.field.path;
    this.label = this.field.label;
    this.value = this.value || this.field.value;
    this.disabled = this.field.disabled;
    this.placeholder = this.field.options.placeholder;

    this.source = this.field.options.source;
    this.static = this.field.options.static;
    this.type = this.field.options.type;
    this.options = this.options || this.field.options.options;
    this.target = this.field.options.target;
    this.listPath = this.field.options.listPath;
    this.labelKey = this.field.options.labelKey;
    this.valueKey = this.field.options.valueKey;

    // TODO: Define further properties
  };

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
  @Prop({ mutable: true, reflect: true }) value: any;

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
   * Whether to assume the source data is static and only load it once.
   */
  @Prop({ mutable: true, reflect: true }) static: boolean = false;

  /**
   * Source data type.
   */
  @Prop({ mutable: true, reflect: true }) type: 'csv' | 'json' = 'json';

  /**
   * Placeholder value displayed when an option hasn't been selected.
   */
  @Prop({ mutable: true, reflect: true }) placeholder: string = '';

  /**
   * Target field path for selected options to be added to.
   */
  @Prop({ mutable: true, reflect: true }) target: string | null;

  /**
   * Path to the item list in the source data to read options from.
   */
  @Prop({ mutable: true, reflect: true }) listPath: string | null;

  /**
   * The item key to draw option labels from.
   */
  @Prop({ mutable: true, reflect: true }) labelKey: string | null;

  /**
   * The item key to draw option values from.
   */
  @Prop({ mutable: true, reflect: true }) valueKey: string | null;

  /**
   * Handle the component loading.
   */
  async componentWillLoad() {
    this.parseFieldDefinition(this.field, defaultField);

    return this.loadOptions().catch((error) => {
      console.error(`Error loading updated options for picker field '${this.path}'`, error);
    });
  }

  componentDidLoad() {
    this.init();
  }

  componentDidUpdate() {
    this.init();
  }

  disconnectedCallback() {
    this.destroy();
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
          console.error(`Error loading options for picker field '${this.path}'`, error);
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
      dynamicTyping: true,
      transform: (value) => value.toLowerCase() === 'null' ? null : value
      //worker: true // TODO: Try this out later
    }).data;
  }

  /**
   * Updates the Choices options.
   */
  async updateOptions() {
    // console.log('<pragma-picker> updateOptions()', this.options, this.valueKey, this.labelKey);
    this.choices.setChoices(
      this.options,
      this.valueKey,
      this.labelKey,
      true
    );
  }

  onChangeEvent = (event: CustomEvent) => {
    // console.log('<pragma-picker> onChangeEvent()', event, event.detail.value, typeof event.detail.value);

    // Choices.js provides the raw value from the option
    this.value = event.detail.value;

    // TODO: Native event dispatch helper like `domEvent.js`
    this.select.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        cancelable: true,
        detail: {
          name: this.path,
          value: event.detail.value
        }
      })
    );
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
   * Returns `null` if the placeholder is not to be shown.
   */
  getPlaceholder(): HTMLOptionElement|null {
    if (this.showPlaceholder()) {
      return <option value="">{this.placeholder}</option>;
    }

    return null;
  }

  /**
   * Get the option for the given picker value.
   *
   * Linear-searches the options list for an item matching the given value.
   */
  getOption(value: any): any {
    // console.log('<pragma-picker> getOption()', value);

    const keys = Object.keys(this.options);
    let option;

    for (let i = 0; i < keys.length; i++) {
      option = this.options[keys[i]];

      // TODO: Stencil casts the value prop to string even if we explicitly set numbers
      //       so we're forced to use loose comparisons for the time being...
      if (this.getOptionValue(option, keys[i]) == value) {
        // console.log('<pragma-picker> selected option', keys[i], value, option);
        return option;
      }
    }

    return null;
  }

  /**
   * Get a single option's value.
   *
   * Reads the `valueKey` path from the given option when configured,
   * otherwise falls back to the given option key.
   */
  getOptionValue(option: any, key: string|number): any {
    if (this.valueKey) {
      return get(option, this.valueKey);
    }

    return key;
  }

  render() {
    // console.log(
    //   '<pragma-picker>',
    //   this.field,
    //   this.path,
    //   this.label,
    //   this.value,
    //   this.disabled,
    //   this.options,
    //   this.source,
    //   this.placeholder
    // );

    // this.destroy(); // ???

    const select = <select
      name={this.path}
      data-choices={true}
      onChange={this.onChangeEvent}
    >
      {this.getPlaceholder()}<slot/>
    </select>;

    // TODO: data-pragma-add-from="this.path"? Altered event propagation for full values?
    const buttonAttributes = {
      disabled: !this.value,
      'data-pragma-add': this.target || false,
      'data-pragma-value': this.getOption(this.value) // TODO: Configurable, this.value or this.getOption(this.value)
    };

    // console.log('<pragma-picker> render() buttonAttributes', buttonAttributes);

    return [
      select,
      <button type="button" { ...buttonAttributes }>Add</button>
    ];
  }

  init() {
    if (!this.choices) {
      const select = this.element.querySelector('select[data-choices]') as HTMLSelectElement;
      const config = {
        placeholder: this.showPlaceholder(),
        placeholderValue: '',
        searchPlaceholderValue: this.placeholder,
        renderChoiceLimit: 50,
        searchResultLimit: 50
      };

      // console.log('<pragma-picker> init()', select, config);

      this.select = select;
      this.choices = new Choices(select, config);
    }

    this.updateOptions();
  }

  destroy() {
    if (this.select) {
      this.select = null;
    }

    if (this.choices) {
      this.choices.destroy();
      this.choices = null;
    }
  }
}
