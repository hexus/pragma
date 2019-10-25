import { Component, Prop, Watch, h } from '@stencil/core';
import { parseField } from "../../utils/utils";
import { Field } from "../../types";

const defaultField = {
  path: null,
  name: null,
  value: null,
  options: {},
  visible: true,
  disabled: false
};

@Component({
  tag: 'pragma-string',
  shadow: true
})
export class String {
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
    let parsedField = parseField(newValue);

    this.field = Object.assign(oldValue, parsedField);

    console.log('pragma-string', oldValue, newValue, parsedField, this.field);

    this.path = this.field.path;
    this.label = this.field.name;
    this.value = this.field.value;
    this.disabled = this.field.disabled;
  };

  render() {
    return <input
      type="text"
      name={this.path}
      title={this.label}
      value={this.value}
      disabled={this.disabled}
    />;
  }
}
