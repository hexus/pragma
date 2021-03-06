import { Component, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from "../../utils/utils";
import { Field, defaultField } from "../../types";

@Component({
  tag: 'pragma-string',
  shadow: true
})
export class PragmaString {
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
  @Prop({ mutable: true, reflect: true }) value: string = '';

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
   * Parse the field attribute when it changes.
   *
   * @param {object|string} newValue
   * @param {object|string} oldValue
   */
  @Watch('field')
  parseFieldDefinition(newValue, oldValue) {
    this.field = parseAndMergeFields(this.field, oldValue, newValue);

    // console.log('pragma-string', oldValue, newValue, this.field);

    this.path = this.field.path;
    this.label = this.field.label;
    this.value = this.field.value;
    this.disabled = this.field.disabled;
  };

  /**
   * Handle the underlying input changing value.
   *
   * @param {InputEvent} event
   */
  inputChanged = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;

    this.value = target.value;
  };

  render() {
    return <input
      type="text"
      name={this.path}
      title={this.label}
      value={this.value}
      disabled={this.disabled}
      onInput={this.inputChanged}
    />;
  }
}
