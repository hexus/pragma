import { Component, Prop, Watch, h } from '@stencil/core';
import { parseFieldDefinition } from '../../utils/utils';

const defaultFieldDefinition = {
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
 * A number field component.
 */
@Component({
  tag: 'pragma-number',
  shadow: true
})
export class Number {
  /**
   * Internal Pragma field definition object.
   *
   * TODO: Field definition type.
   */
  @Prop() field: object|string|any = defaultFieldDefinition;

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
    this.parseFieldDefinition(this.field, defaultFieldDefinition);
  }

  /**
   * Parse the field attribute when it changes.
   *
   * @param {object|string} newValue
   * @param {object|string} oldValue
   */
  @Watch('fieldAttribute')
  parseFieldDefinition(newValue, oldValue) {
    let parsedField = parseFieldDefinition(newValue);

    this.field = Object.assign(oldValue, parsedField);

    console.log(oldValue, newValue, parsedField, this.field);

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
