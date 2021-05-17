import { Component, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from '../../utils/utils';
import { Field, defaultField } from "../../types";

/**
 * A number field component.
 */
@Component({
  tag: 'pragma-number',
  shadow: false
})
export class Number {
  /**
   * Pragma field definition.
   *
   * TODO: Field definition type.
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

    // console.log('pragma-number', oldValue, newValue, this.field);

    this.path = this.field.path;
    this.label = this.field.label;
    this.min = this.field.options?.min;
    this.max = this.field.options?.max;
    this.step = this.field.options?.step;
    this.value = this.field.value;
    this.disabled = this.field.disabled;
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
   * The minimum value constraint.
   */
  @Prop({ mutable: true, reflect: true }) min: number;

  /**
   * The maximum value constraint.
   */
  @Prop({ mutable: true, reflect: true }) max: number;

  /**
   * The value step.
   */
  @Prop({ mutable: true, reflect: true }) step: number = 1;

  /**
   * The field's value.
   */
  @Prop({ mutable: true, reflect: true }) value: number = 0;

  /**
   * Whether the field is disabled.
   */
  @Prop({ mutable: true, reflect: true }) disabled: boolean = false;

  /**
   * Handle the component loading.
   */
  componentWillLoad() {
    this.parseFieldDefinition(this.field, defaultField);
  }

  /**
   * Handle input events.
   *
   * @param {InputEvent} event
   */
  onInputEvent = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;

    this.value = parseFloat(target.value);

    // console.log('pragma-number onInputEvent()', event, target, target.value);
  };

  /**
   * Render the component.
   */
  render() {
    // console.log(
    //   this.field,
    //   this.path,
    //   this.label,
    //   this.min,
    //   this.max,
    //   this.step,
    //   this.value,
    //   this.disabled
    // );

    return <input
      type="number"
      name={this.path}
      title={this.label}
      min={this.min}
      max={this.max}
      step={this.step}
      value={this.value}
      disabled={this.disabled}
      onInput={this.onInputEvent}
    />;
  }
}
