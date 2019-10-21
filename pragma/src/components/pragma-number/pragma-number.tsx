import { Component, Prop, State, Watch, h } from '@stencil/core';
import { parseFieldDefinition } from '../../utils/utils';

/**
 * A number field component.
 */
@Component({
  tag: 'pragma-number',
  shadow: true
})
export class Number {
  /**
   * Pragma field data as a single object.
   *
   * Setting this property will overwrite corresponding attributes.
   */
  @Prop({attribute: 'field'}) fieldAttribute: object|string;

  @State() field: object|any = {
    path: null,
    name: null,
    min: null,
    max: null,
    step: null,
    value: null,
    options: {},
    disabled: false
  };

  /**
   * The field's path.
   */
  @Prop({mutable: true, reflect: true}) path: string;

  /**
   * The field's label.
   */
  @Prop({mutable: true, reflect: true}) label: string;

  /**
   * The minimum value constraint.
   */
  @Prop({mutable: true, reflect: true}) min: number;

  /**
   * The maximum value constraint.
   */
  @Prop({mutable: true, reflect: true}) max: number;

  /**
   * The value step.
   */
  @Prop({mutable: true, reflect: true}) step: number;

  /**
   * The field's value.
   */
  @Prop({mutable: true, reflect: true}) value: number;

  /**
   * Whether the field is disabled.
   */
  @Prop({mutable: true, reflect: true}) disabled: boolean;

  /**
   * Handle the component loading.
   */
  componentWillLoad() {
    this.parseFieldDefinition(this.fieldAttribute);
  }

  /**
   * Parse the field attribute when it changes.
   *
   * @param {string|object} newValue
   */
  @Watch('fieldAttribute')
  parseFieldDefinition(newValue) {
    let parsedField = parseFieldDefinition(newValue);

    this.field = Object.assign(this.field, parsedField);

    console.log(newValue, parsedField, this.field);

    this.path = this.field.path;
    this.label = this.field.name;
    this.min = this.field.options.min;
    this.max = this.field.options.max;
    this.step = this.field.options.step;
    this.value = this.field.value;
    this.disabled = this.field.disabled;
  };

  render() {
    console.log(
      this.field,
      this.path,
      this.label,
      this.min,
      this.max,
      this.step,
      this.disabled
    );

    return <input
      type="number"
      name={this.path}
      title={this.label}
      min={this.min}
      max={this.max}
      step={this.step}
      value={this.value}
      disabled={this.disabled}
    />;
  }
}
