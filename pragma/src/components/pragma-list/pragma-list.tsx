import { Component, Prop, State, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from "../../utils/utils";
import { Field, defaultField } from "../../types";

/**
 * A list component.
 */
@Component({
  tag: 'pragma-list',
  shadow: true
})
export class PragmaList {
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
   * The field's options.
   */
  @State() options: { showLabel?: boolean } = {};

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

    this.field.children = this.field.children || [];

    console.log('pragma-list', oldValue, newValue, this.field);

    this.path = this.field.path;
    this.label = this.field.label;
    this.options = this.field.options || {};
    this.disabled = this.field.disabled;
  };

  render() {
    return <div class="list-container">
      {this.options.showLabel ? <div>{this.label}</div> : null}

      {
        this.field.children.map((child) => {
          return <pragma-list-item field={child}/>
        })
      }

      <button type="button">Add</button>
    </div>;
  }
}
