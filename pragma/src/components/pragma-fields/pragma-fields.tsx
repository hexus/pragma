import { Component, Element, Listen, Prop, h } from '@stencil/core';
import { Field } from "../../types";
import { propagateEvent } from "../../utils/utils";

/**
 * Pragma fields component.
 *
 * Iteratively renders components for a set of Pragma fields.
 */
@Component({
  tag: 'pragma-fields',
  shadow: false
})
export class PragmaFields {
  /**
   * The host element.
   */
  @Element() element: HTMLElement;

  /**
   * The path to the subset of fields to render.
   */
  @Prop() path: string;

  /**
   * The set of fields to render.
   */
  @Prop() fields: Array<Field> = [];

  @Listen('input')
  onInputEvent(event: InputEvent) {
    console.log(
      'pragma-fields input event',
      event,
      event.target === this.element,
      event.target,
      event.currentTarget
    );

    if (event.currentTarget !== this.element) {
      // propagateEvent(this.element, event);
      console.log(propagateEvent);
    }
  }

  render() {
    if (!this.fields.length)
      return;

    // TODO: Functional component that renders an array of fields
    return (
      this.fields.map((child) => {
        if (!child || !child.tag || !child.visible)
          return;

        const ChildTag = child.tag;

        return <ChildTag key={child.path} field={child}/>;
      })
    );
  }
}
