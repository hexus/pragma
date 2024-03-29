import { Component, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from "../../utils/utils";
import { Field, defaultField } from "../../types";

/**
 * A list component.
 *
 * TODO: Slotted list item templates and/or render props.
 */
@Component({
  tag: 'pragma-list',
  shadow: false
})
export class PragmaList {
  /**
   * Pragma field definition.
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

    this.field.children = this.field.children || [];

    // console.log('pragma-list', oldValue, newValue, this.field);

    this.path = this.field.path;
    this.label = this.field.label;
    this.disabled = this.field.disabled;
    this.showLabel = this.field.options?.showLabel;
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
   * Whether the field is disabled.
   */
  @Prop({ mutable: true, reflect: true }) disabled: boolean = false;

  /**
   * Whether to show the list's label.
   */
  @Prop({ mutable: true, reflect: true }) showLabel: boolean = false;

  /**
   * Handle the component loading.
   */
  componentWillLoad() {
    this.parseFieldDefinition(this.field, defaultField);
  }

  render() {
    return <div class="list-container">
      {this.showLabel ? <div>{this.label}</div> : null}

      {
        this.field.children.map((child) => {
          return <pragma-list-item key={child.path} field={{ ...child }}/>
        })
      }

      <button type="button" data-pragma-add={this.path}>Add</button>
    </div>;
  }
}
