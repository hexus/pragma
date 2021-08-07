import { Component, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from '../../utils/utils';
import { Field, defaultField } from "../../types";

/**
 * Pragma group component.
 *
 * Groups fields together with an inline label.
 *
 * @slot - Group content.
 */
@Component({
  tag: 'pragma-group',
  shadow: false,
  styles: `
    .group-container {
      margin: 8px 0;
    }
  `
})
export class PragmaGroup {
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
   * Whether to hide the field's label.
   */
  @Prop({ mutable: true, reflect: true }) hideLabel: boolean = false;

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

    // console.log('pragma-group', oldValue, newValue, this.field);

    this.field.children = this.field.children || [];

    this.path = this.field.path;
    this.label = this.field.label;
    this.hideLabel = !!this.field.options.hideLabel;
  };

  render() {
    return (
      <div class="group-container">
        {
          !this.hideLabel
            ? <span>{this.label}</span>
            : null
        }
        <span>
          <pragma-fields path={this.field.path} fields={[...this.field.children]}/>
        </span>
      </div>
    );
  }
}
