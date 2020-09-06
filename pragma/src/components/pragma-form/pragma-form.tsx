import { Component, Element, Listen, Prop, State, h } from '@stencil/core';
import { Field } from "../../types";
import FormProcessor from '../../../../src/services/FormProcessor';
import { HTMLStencilElement } from '@stencil/core/internal';

/**
 * Pragma form component.
 *
 * Maintains form state and provides one-way value binding to any slotted fields.
 *
 * TODO:
 *  - [~] Maintain form state
 *  - [x] Initial binding to any underlying <pragma-fields> elements
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
   * The host element.
   */
  @Element() element: HTMLStencilElement;

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
  @State() form: FormProcessor = new FormProcessor;

  /**
   * Field elements in the host component's light DOM that need updating every
   * time the form changes.
   */
  @State() fieldElements: Array<HTMLElement> = [];

  /**
   * Find field elements in the host component's light DOM that need updating
   * every time the form changes.
   */
  findFieldElements(): Array<HTMLElement> {
    return Array.from(this.element.querySelectorAll(':scope > pragma-fields'));
  }

  componentWillRender() {
    this.sync();
  }

  @Listen('input')
  onInputEvent(event: InputEvent) {
    let element = event.target as HTMLInputElement;

    if (!event.target) {
      return;
    }

    let fieldName = element.getAttribute('path') || element.getAttribute('name');

    if (!fieldName) {
      return;
    }

    console.log('pragma-form onInputEvent', fieldName, element.value);

    this.form.setValue(this.state, fieldName, element.value);

    this.element.forceUpdate();
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
    console.log('fieldElements', this.fieldElements);

    // Find and update any field elements in the host element's light DOM
    // TODO: Find a way to not look these up every update; could end up quite redundant
    //       Perhaps there are some DOM observers that can be used to detect such changes
    this.fieldElements = this.findFieldElements();
    this.fieldElements.forEach((element: HTMLPragmaFieldsElement) => {
      return element.setFields(this.form.tree.children);
    }, this);
  }

  render() {
    return <slot/>;
  }
}
