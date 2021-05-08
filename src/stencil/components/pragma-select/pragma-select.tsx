import { Component, Element, Prop, Watch, h } from '@stencil/core';
import { parseAndMergeFields } from "../../utils/utils";
import { Field, defaultField } from "../../types";
import { HTMLStencilElement } from "@stencil/core/internal";

/**
 * A select field component.
 */
@Component({
  tag: 'pragma-select',
  shadow: true
})
export class PragmaSelect {
  /**
   * The host element.
   */
  @Element() element: HTMLStencilElement;

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

    // console.log('pragma-select', oldValue, newValue, this.field);

    this.path = this.field.path;
    this.label = this.field.label;
    this.options = this.field.options.options || {};
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
   * The selectable options.
   *
   * TODO: Support objects *and* arrays.
   */
  @Prop({ mutable: true }) options: object = {};

  /**
   * The field's value.
   *
   * The value of the selected option.
   */
  @Prop({ mutable: true, reflect: true }) value;

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
   * Handle the underlying input changing value.
   *
   * @param {InputEvent} event
   */
  inputChanged = (event: InputEvent) => {
    const target = event.target as HTMLSelectElement;

    this.value = target.value;

    // TODO: Fire input/change event
    //       It seems like this isn't necessary in the current version of Stencil
    // let newEvent = new InputEvent(event.type, {
    //   bubbles: event.bubbles,
    //   cancelable: event.cancelable,
    //   inputType: event.inputType,
    //   data: event.data,
    //   detail: event.detail
    // });
    // this.element.dispatchEvent(newEvent);
  };

  render() {
    return <select
      name={this.path}
      title={this.label}
      disabled={this.disabled}
      onInput={this.inputChanged}
    >
      {
        Object.keys(this.options).map((value) => {
          let label = this.options[value];

          return <option
            value={value}
            selected={this.value === value}
          >
            {label !== null ? label : value}
          </option>;
        })
      }
    </select>
  }
}
