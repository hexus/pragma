import { Component, Element, Event, EventEmitter, forceUpdate, Listen, Method, Prop, State, h } from '@stencil/core';
import { Field } from "../../types";
import { HTMLStencilElement } from '@stencil/core/internal';
import { FormProcessor } from "../../../services/FormProcessor";

/**
 * Pragma form component.
 *
 * Maintains form state and provides one-way value binding to any slotted fields.
 *
 * TODO:
 *  - [~] Maintain form state
 *  - [x] Initial binding to any underlying <pragma-fields> elements
 *  - [ ] True one way binding to any element... right?
 *    - [ ] Find new elements on DOM changes with mutation observers https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
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
  @Prop({ mutable: true }) functions: { [key: string]: Function } = {};

  /**
   * Default properties for different field types.
   */
  @Prop({ mutable: true }) defaults: { [key: string]: any } = {};

  /**
   * Form state data.
   */
  @Prop({ mutable: true }) state: any = {};

  /**
   * Event emitted when form user input changes form data.
   */
  @Event({
    eventName: 'change',
    composed: true,
    cancelable: true,
    bubbles: true
  }) changeEvent: EventEmitter;

  /**
   * Handle input events to update form data.
   *
   * Forces an update of the form component.
   *
   * @param {InputEvent|CustomEvent} event
   */
  @Listen('input')
  onInputEvent(event: InputEvent|CustomEvent) {
    if (!event.target) {
      return;
    }

    let element = event.target as HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement;

    let fieldName = event.detail?.name
      || element.getAttribute('path')
      || element.getAttribute('name');

    // Ignore the event if a field name cannot be determined
    if (!fieldName) {
      return;
    }

    // Determine the value
    let value;

    if (event instanceof CustomEvent && typeof event.detail === 'object') {
      value = event.detail.value;
    } else if (element instanceof HTMLTextAreaElement) {
      value = element.innerText;
    } else if (element instanceof HTMLInputElement && element.type === 'checkbox') {
      value = element.checked;
    } else {
      value = element.value;
    }

    // console.log('pragma-form onInputEvent()', event, fieldName, event.detail?.value, element.value, value);

    // Get the current (previous) value
    let previousValue = this.form.getValue(fieldName);

    // Set the updated value
    this.form.setValue(this.state, fieldName, value);

    // Conditional update; only if the value changed
    if (previousValue !== this.form.getValue(fieldName)) {
      forceUpdate(this.element);
      this.changeEvent.emit(this.state);
    }
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
    console.debug(event);

    if (!event.target) {
      return;
    }

    let element = event.target as HTMLElement;

    if (!element.dataset) {
      return;
    }

    console.debug(element, element.dataset);

    let changes = 0;
    let data = element.dataset;

    if (data.pragmaAdd) {
      this.form.addItem(
        this.state,
        data.pragmaAdd,
        data.pragmaKey || undefined,
        element['data-pragma-value'] || null
      );

      changes++;
    }

    if (data.pragmaRemove) {
      this.form.removeValue(this.state, data.pragmaRemove);
      changes++;
    }

    if (changes > 0) {
      forceUpdate(this.element);
      this.changeEvent.emit(this.state);
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
        ':scope pragma-fields, :scope input, :scope select, :scope textarea'
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

    let hasPragmaFieldsParent = element.parentElement.closest('pragma-fields');

    if (element.nodeName === 'PRAGMA-FIELDS') {
      let fieldsElement = element as HTMLPragmaFieldsElement;

      if (!hasPragmaFieldsParent) {
        fieldsElement.fields = Array.isArray(field.children) ? [...field.children] : [];
      }
    }

    // Elements below should be updated automatically
    // by state propagation
    if (hasPragmaFieldsParent) {
      return;
    }

    if (element instanceof HTMLInputElement) {
      if (element.type === 'checkbox') {
        element.checked = !!field.value;
      } else {
        console.debug('Setting element value from field', field.value, element, field);
        element.value = field.value;
      }
    }

    if (element instanceof HTMLSelectElement) {
      // TODO: Sync <option>s?
      element.value = field.value;
    }

    if (element instanceof HTMLTextAreaElement) {
      element.innerText = field.value;
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

    // Find and update any field elements in the host element's light DOM
    // TODO: Find a way to not look these up every update; could end up quite redundant
    //       Perhaps there are some DOM observers that can be used to detect such changes
    this.fieldElements = this.findFieldElements();
    this.fieldElements.forEach((element: HTMLPragmaFieldsElement) => {
      this.syncElement(element);
    }, this);

    // console.log('fieldElements', this.fieldElements);
  }

  async componentWillRender() {
    return new Promise((resolve) => {
      this.sync();
      resolve(true);
    });
  }

  @Method()
  async getForm() {
    return this.form;
  }

  render() {
    return <slot/>;
  }
}
