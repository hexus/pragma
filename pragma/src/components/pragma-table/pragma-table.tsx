import { Component, Prop, State, Watch, h } from '@stencil/core';
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
   * Whether the field is disabled.
   */
  @Prop({ mutable: true, reflect: true }) disabled: boolean = false;

  /**
   * Whether to show labels for each row.
   *
   * Displayed in an extra column on the far left of the table.
   */
  @Prop({ mutable: true, reflect: true }) showLabel: boolean = false;

  /**
   * Table column headings.
   */
  @State() headings: Array<string> = [];

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
    this.disabled = this.field.disabled;

    const options = this.field.options;
    this.showLabel = options ? options.showLabel : false;
    this.headings = options ? options.headings : [];
  };

  render() {
    const hasHeadings = this.headings
      && Array.isArray(this.headings)
      && this.headings.length > 0;

    return <div style={{ overflow: 'auto' }}>
      <table data-name={this.path}>
        {
          hasHeadings ?
            <thead>
              {
                this.headings.map((heading) => {
                  return <th>{heading}</th>
                })
              }
            </thead>
            : null
        }
        <tbody>
          {
            this.field.children.map((row: Field) => {
              return <tr key={row.path}>
                {
                  this.showLabel ? <th>{row.label}</th> : null
                }
                {
                  row.children ? row.children.map((child) => {
                    return <td key={child.path}>
                      <pragma-fields key={child.path} path={child.path} fields={[child]}/>
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
