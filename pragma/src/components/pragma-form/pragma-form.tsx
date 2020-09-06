import { Component, Listen, Prop, State, h } from '@stencil/core';
import { Field } from "../../types";
import FormProcessor from '../../../../src/services/FormProcessor';

/**
 * Pragma form component.
 *
 * Maintains form state and provides one-way value binding to any slotted fields.
 *
 * TODO:
 *  - [ ] Maintain form state
 *  - [ ] Initial binding to any underlying <pragma-fields> elements
 *  - [ ] True one way binding to any element... right?
 *  - [ ] Generate fields from elements into the fields tree if they have name and data-pragma attributes
 *  - [ ] fetch() fields and state via fields-src and state-src or similar
 */
@Component({
  tag: 'pragma-form',
  shadow: false
})
export class PragmaForm {
  /**
   * Pragma fields to maintain.
   */
  @Prop({ mutable: true }) fields: Array<Field> = [];

  /**
   * Functions to provide to form expressions.
   */
  @Prop({ mutable: true }) functions: Array<Function> = [];

  /**
   * Default properties for different field types.
   */
  @Prop({ mutable: true }) defaults: { [key: string]: any } = {};

  /**
   * Form state data.
   */
  @Prop({ mutable: true }) state: any = {};

  /**
   * The form.
   *
   * This is where the magic happens.
   */
  @State() form = new FormProcessor;

  componentWillLoad() {
    this.sync();
  }

  componentWillUpdate() {
    this.sync();
  }

  @Listen('input')
  handleInput(event) {
    console.log(event);
  }

  /**
   * Synchronize component state with the form processor and underlying fields.
   */
  sync() {
    this.form.setDefaults(this.defaults);
    this.form.addFunctions(this.functions);
    this.form.setFields(this.fields);
    this.form.update(this.state);

    console.log('fields, state', this.fields, this.state);
    console.log('form.tree.children', this.form.tree.children);
  }

  render() {
    return <pragma-fields fields={this.form.tree.children}/>;

    // TODO: This should be all that's needed, reach into the slot to find <pragma-fields> elements
    // return <slot/>;
  }
}
