import { Component, Element, forceUpdate, Listen, Method, Prop, State, h } from '@stencil/core';
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
 *    - [ ] Find them on DOM changes with mutation observers https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
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
   * The form.
   *
   * This is where the magic happens.
   */
  @State() form: FormProcessor = new FormProcessor();

  /**
   * Field elements in the host component's light DOM that need updating every
   * time the form changes.
   */
  @State() fieldElements: Array<HTMLElement> = [];

  /**
   * The name of the Pragma form.
   */
  @Prop() name: string;

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
   * Handle input events to update form data.
   *
   * Forces an update of the form component.
   *
   * @param {InputEvent} event
   */
  @Listen('input')
  onInputEvent(event: InputEvent) {
    if (!event.target) {
      return;
    }

    let element = event.target as HTMLInputElement;

    let fieldName = element.getAttribute('path') || element.getAttribute('name');

    if (!fieldName) {
      return;
    }

    let value = element.type === 'checkbox' ? element.checked : element.value;

    // console.log('pragma-form onInputEvent', event, fieldName, element.value, value);

    this.form.setValue(this.state, fieldName, value);

    forceUpdate(this.element);
  }

  /**
   * Handle add events.
   *
   * Adds fields to the form based on data attributes of the event's target
   * element.
   *
   * @param {MouseEvent} event
   */
  @Listen('click', { capture: true })
  onClickEvent(event: MouseEvent) {
    // console.log(event);

    if (!event.target) {
      return;
    }

    let element = event.target as HTMLElement;

    if (!element.dataset) {
      return;
    }

    // console.log(element, element.dataset);

    let changes = 0;
    let data = element.dataset;

    if (data.pragmaAdd) {
      this.form.addItem(this.state, data.pragmaAdd);
      changes++;
    }

    if (data.pragmaRemove) {
      this.form.removeValue(this.state, data.pragmaRemove);
      changes++;
    }

    if (changes > 0) {
      forceUpdate(this.element);
    }
  }

  /**
   * Find field elements in the host component's light DOM that need updating
   * every time the form changes.
   *
   * @return {Array<HTMLElement>}
   */
  findFieldElements(): Array<HTMLElement> {
    return Array.from(
      this.element.querySelectorAll(
        ':scope pragma-fields, :scope input, :scope select'
      )
    );
  }

  /**
   * Get the field path of a given element.
   *
   * @param {HTMLElement} element
   * @return string
   */
  getFieldElementPath(element: HTMLElement) {
    return element.getAttribute('path') || element.getAttribute('name') || '';
  }

  getFieldElementField(element: HTMLElement): Field {
    return this.form.getField(this.getFieldElementPath(element));
  }

  /**
   * Sync a given element with the form data.
   *
   * @param {HTMLElement} element
   */
  syncElement(element: HTMLElement) {
    let field = this.getFieldElementField(element);

    if (!field) {
      console.debug('No field found for element', element);
      return;
    }

    if (element.nodeName === 'PRAGMA-FIELDS') {
      let fieldsElement = element as HTMLPragmaFieldsElement;

      if (!element.parentElement.closest('pragma-fields')) {
        fieldsElement.fields = Array.isArray(field.children) ? [...field.children] : [];
      }
    }

    if (element instanceof HTMLInputElement) {
      if (element.type === 'checkbox') {
        element.checked = !!field.value;
      } else {
        element.value = field.value;
      }
    }

    if (element instanceof HTMLSelectElement) {
      // TODO: Sync <option>s?
      element.value = field.value;
    }
  }

  /**
   * Synchronize component state with the form processor and underlying fields.
   */
  sync() {
    this.form.setDefaults(this.defaults);
    this.form.addFunctions(this.functions);
    this.form.setFields(this.fields);
    this.form.update(this.state);

    // console.log('fields, state', this.fields, this.state);
    // console.log('form.tree.children', this.form.tree.children);
    // console.log('fieldElements', this.fieldElements);

    // Find and update any field elements in the host element's light DOM
    // TODO: Find a way to not look these up every update; could end up quite redundant
    //       Perhaps there are some DOM observers that can be used to detect such changes
    this.fieldElements = this.findFieldElements();
    this.fieldElements.forEach((element: HTMLPragmaFieldsElement) => {
      this.syncElement(element);
    }, this);
  }

  componentWillRender() {
    this.sync();
  }

  @Method()
  async getForm() {
    return this.form;
  }

  render() {
    return <slot/>;
  }
}
