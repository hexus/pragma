import { Component, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from "../../utils/utils";
import { Field, defaultField } from "../../types";

/**
 * The Pragma table component.
 *
 * Renders and HTML table from a set of group fields which, in this case, can
 * be considered rows of a table.
 */
@Component({
  tag: 'pragma-table',
  shadow: false
})
export class PragmaTable {
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
  @Prop({ mutable: true, reflect: true }) value;

  /**
   * The field's options.
   */
  @Prop({ mutable: true }) options: object | any = {};

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

    if (!this.field.children) {
      this.field.children = [];
    }

    console.log('pragma-table', oldValue, newValue, this.field);

    this.path = this.field.path;
    this.label = this.field.label;
    this.options = this.field.options || {};
    this.value = this.field.value; // TODO: How dis property even werk
    this.disabled = this.field.disabled;
  };

  render() {
    const hasHeadings = this.options.headings && Array.isArray(this.options.headings);

    return <div style={{ overflow: 'auto' }}>
      <table data-name={this.path}>
        {
          hasHeadings ?
            <thead>
              {
                this.options.headings.map((heading) => {
                  return <th>{heading}</th>
                })
              }
            </thead>
            : null
        }
        <tbody>
          {
            this.field.children.map((row) => {
              return <tr key={row.path}>
                {
                  this.options.showLabel ? <th>{row.label}</th> : null
                }
                {
                  row.children ? row.children.map((child) => {
                    return <td>
                      <pragma-fields fields={[child]}/>
                    </td>
                  }) : null
                }
              </tr>;
            })
          }
        </tbody>
      </table>
    </div>;
  }
}
