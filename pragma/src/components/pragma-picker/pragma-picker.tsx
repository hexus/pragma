import { Component, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from '../../utils/utils';
import { Field, defaultField } from "../../types";


/**
 * A number field component.
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
  @Prop({ attribute: 'src', mutable: true}) source: string = '';

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

    this.path = this.field.path;
    this.label = this.field.name;
    this.value = this.field.value;
    this.disabled = this.field.disabled;

    // TODO: Define further properties

  };

  render() {
    console.log(
      this.field,
      this.path,
      this.label,
      this.value,
      this.disabled
    );

    return <input
      type="checkbox"
      name={this.path}
      title={this.label}
      checked={this.value}
      disabled={this.disabled}
    />;
  }
}
