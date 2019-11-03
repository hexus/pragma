import { Component, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from "../../utils/utils";
import { Field, defaultField } from "../../types";

/**
 * A select field component.
 */
@Component({
  tag: 'pragma-select',
  shadow: true
})
export class Select {
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
   * The selectable options.
   */
  @Prop({ mutable: true }) options: object = {};

  /**
   * The field's value.
   */
  @Prop({ mutable: true, reflect: true }) value;

  /**
   * Whether the field is disabled.
   */
  @Prop({ mutable: true, reflect: true }) disabled: boolean = false;

  /**
   * Handle the underlying input changing value.
   *
   * @param {Event} event
   */
  inputChanged(event) {
    const target = event.target as HTMLSelectElement;

    this.value = target.value;
  }

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

    console.log('pragma-select', oldValue, newValue, this.field);

    this.path = this.field.path;
    this.label = this.field.name;
    this.options = this.field.options.options || {};
    this.value = this.field.value;
    this.disabled = this.field.disabled;
  };

  render() {
    return <select
      name={this.path}
      title={this.label}
      disabled={this.disabled}
      onInput={this.inputChanged.bind(this)}
    >
      {
        Object.keys(this.options).map((value) => {
          let label = this.options[value];

          return <option
            value={value}
            selected={this.value === value}
          >
            {label}
          </option>;
        })
      }
    </select>
  }
}
