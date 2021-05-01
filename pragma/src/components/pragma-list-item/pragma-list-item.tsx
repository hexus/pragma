import { Component, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from "../../utils/utils";
import { Field, defaultField } from "../../types";

/**
 * A list item component.
 *
 * Wraps a single field as part of a list. Intended for use with <pragma-list>.
 *
 * Does not represent an actual field, but wraps a field for display and
 * interactivity purposes.
 */
@Component({
  tag: 'pragma-list-item',
  shadow: false
})
export class PragmaListItem {
  /**
   * Pragma field definition.
   */
  @Prop() field: Field | string | any = defaultField;

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

    console.log('pragma-list-item', oldValue, newValue, this.field);
  };

  render() {
    return <div>
      <pragma-fields path={this.field.path} fields={[{...this.field}]}/><button data-pragma-remove={this.field.path}>Remove</button>
    </div>
  }
}
